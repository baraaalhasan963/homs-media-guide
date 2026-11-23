import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldAlert, CheckSquare, Square } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  sectionId: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, sectionId }) => {
  // LocalStorage-backed state for checklists
  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`chk_${sectionId}`);
      if (saved) {
        setCheckedState(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, [sectionId]);

  const toggleCheck = (idx: number) => {
    const next = { ...checkedState, [idx]: !checkedState[idx] };
    setCheckedState(next);
    try {
      localStorage.setItem(`chk_${sectionId}`, JSON.stringify(next));
    } catch (e) {}
  };

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  const n = lines.length;

  while (i < n) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    // Code Block ``` ... ```
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < n && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < n && lines[i].trim().startsWith('```')) {
        i++;
      }
      elements.push(
        <pre key={`code_${i}`} className="bg-[#1A2421] text-[#E6F0EC] p-4 rounded-xl font-mono text-xs md:text-sm my-4 border border-[#C59B27]/30 overflow-x-auto text-left" dir="ltr">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // Sub-heading ###
    if (line.startsWith('### ')) {
      elements.push(
        <h4 key={`h3_${i}`} className="text-base font-extrabold text-[#15413A] border-r-4 border-[#15413A] pr-3 my-4">
          {line.replace('### ', '').trim()}
        </h4>
      );
      i++;
      continue;
    }

    // Checklist items: - [ ] or - [x]
    if (line.startsWith('- [ ] ') || line.startsWith('- [x] ')) {
      const checkItems: { text: string; initial: boolean }[] = [];
      while (i < n && (lines[i].trim().startsWith('- [ ] ') || lines[i].trim().startsWith('- [x] '))) {
        const cl = lines[i].trim();
        checkItems.push({
          initial: cl.startsWith('- [x] '),
          text: cl.substring(6).trim()
        });
        i++;
      }

      elements.push(
        <div key={`chk_group_${i}`} className="bg-[#FCFAF6] border border-[#C59B27]/25 rounded-xl p-4 my-4 space-y-2">
          {checkItems.map((chk, cIdx) => {
            const isChecked = checkedState[cIdx] ?? chk.initial;
            return (
              <label
                key={cIdx}
                onClick={() => toggleCheck(cIdx)}
                className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-white/80 cursor-pointer transition-colors select-none"
              >
                <div className="mt-0.5 text-[#15413A]">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-[#15413A]" />
                  ) : (
                    <Square className="w-4 h-4 text-[#2C6E63]/60" />
                  )}
                </div>
                <span className={`text-sm font-semibold leading-relaxed ${
                  isChecked ? 'line-through text-gray-400' : 'text-[#142824]'
                }`}>
                  {chk.text}
                </span>
              </label>
            );
          })}
        </div>
      );
      continue;
    }

    // Bullet list: - ...
    if (line.startsWith('- ')) {
      const bulletItems: string[] = [];
      while (i < n && lines[i].trim().startsWith('- ') && !lines[i].trim().startsWith('- [ ] ') && !lines[i].trim().startsWith('- [x] ')) {
        bulletItems.push(lines[i].trim().substring(2).trim());
        i++;
      }
      elements.push(
        <ul key={`ul_${i}`} className="space-y-1.5 my-3 pr-2">
          {bulletItems.map((bText, bIdx) => (
            <li key={bIdx} className="text-sm font-medium text-[#1F3430] flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-2 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(bText) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list: 1. ...
    const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      const numberedItems: { num: string; text: string }[] = [];
      while (i < n) {
        const curr = lines[i].trim();
        const m = curr.match(/^(\d+)\.\s+(.*)$/);
        if (m) {
          numberedItems.push({ num: m[1], text: m[2] });
          i++;
        } else {
          break;
        }
      }
      elements.push(
        <ol key={`ol_${i}`} className="space-y-2.5 my-4">
          {numberedItems.map((item, nIdx) => (
            <li key={nIdx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#EDF4F2] border border-[#15413A]/20 text-[#15413A] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.num}
              </span>
              <div className="text-sm font-medium text-[#1F3430] leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: formatInline(item.text) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Standalone category pill: **...**
    const catMatch = line.match(/^\*\*([^\*]+)\*\*$/);
    if (catMatch) {
      elements.push(
        <div key={`cat_${i}`} className="inline-block bg-[#FDF9EE] border border-[#C59B27]/30 text-[#9F7918] text-xs font-extrabold px-3 py-1 rounded-md my-2">
          {catMatch[1]}
        </div>
      );
      i++;
      continue;
    }

    // Paragraph (may be multi-line)
    let pText = line;
    i++;
    while (i < n && lines[i].trim() && !['#', '-', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '```'].some(prefix => lines[i].trim().startsWith(prefix)) && !lines[i].trim().match(/^\*\*([^\*]+)\*\*$/)) {
      pText += ' ' + lines[i].trim();
      i++;
    }

    // Callout detection
    if (["لا يجوز", "يحظر", "تجنب", "عدم إهمال", "عدم تداول", "يُمنع منعاً باتاً"].some(w => pText.includes(w))) {
      elements.push(
        <div key={`warn_${i}`} className="flex gap-3.5 p-4 bg-[#FFF8F6] border border-[#C61E1D]/25 border-r-4 border-r-[#C61E1D] rounded-lg my-3 text-sm text-[#5A1616] leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-[#C61E1D] flex-shrink-0 mt-0.5" />
          <div dangerouslySetInnerHTML={{ __html: formatInline(pText) }} />
        </div>
      );
    } else if (["يجب أن", "متطلبات أساسية", "يلتزم المصمم", "تسري التوجيهات", "[إلزامي]"].some(w => pText.includes(w))) {
      elements.push(
        <div key={`mand_${i}`} className="flex gap-3.5 p-4 bg-[#EDF4F2] border border-[#15413A]/20 border-r-4 border-r-[#15413A] rounded-lg my-3 text-sm text-[#0D2B26] leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#15413A] flex-shrink-0 mt-0.5" />
          <div dangerouslySetInnerHTML={{ __html: formatInline(pText) }} />
        </div>
      );
    } else {
      elements.push(
        <p key={`p_${i}`} className="text-sm font-normal text-[#1F3430] leading-loose mb-3.5 text-justify" dangerouslySetInnerHTML={{ __html: formatInline(pText) }} />
      );
    }
  }

  return <div>{elements}</div>;
};

function formatInline(text: string): string {
  let res = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0D2B26]">$1</strong>');
  res = res.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
  res = res.replace(/«/g, '<span class="text-[#C59B27] font-bold">«</span>');
  res = res.replace(/»/g, '<span class="text-[#C59B27] font-bold">»</span>');
  return res;
}

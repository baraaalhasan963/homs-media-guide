import { Check, Copy, FileSpreadsheet } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

export interface OperationalTemplate {
  id: string;
  title: string;
  purpose: string;
  usageNote?: string;
  fields: { label: string; hint: string }[];
  copyText: string;
}

interface TemplateCopyCardProps {
  template: OperationalTemplate;
}

/**
 * Operational template card with structured fields preview and a one-click copy action.
 */
export const TemplateCopyCard: React.FC<TemplateCopyCardProps> = ({ template }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for non-HTTPS or restricted clipboard contexts
      const textarea = document.createElement('textarea');
      textarea.value = template.copyText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl border-2 border-[#134F47]/20 bg-gradient-to-b from-white to-[#FFF4E0]/30 space-y-3.5 shadow-xs">
      <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-[#134F47]/10">
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-black text-[#134F47] flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-[#E85B0D] flex-shrink-0" />
            <span>{template.title}</span>
          </h4>
          <p className="text-xs sm:text-sm text-[#134F47]/80 font-semibold leading-relaxed">{template.purpose}</p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex-shrink-0 ${
            copied
              ? 'bg-[#134F47] text-[#FFF4E0]'
              : 'bg-[#FFF4E0] text-[#134F47] border border-[#134F47]/20 hover:border-[#E85B0D] hover:text-[#E85B0D]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>تم نسخ النموذج</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>نسخ النموذج</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {template.fields.map((field, idx) => (
          <div key={idx} className="p-2.5 rounded-xl bg-white border border-[#134F47]/10 text-xs leading-relaxed">
            <div className="font-black text-[#134F47]">{field.label}</div>
            <div className="font-medium text-[#134F47]/75 mt-0.5">{field.hint}</div>
          </div>
        ))}
      </div>

      {template.usageNote && (
        <div className="p-2.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs font-bold text-[#134F47]/90 leading-relaxed">
          {template.usageNote}
        </div>
      )}
    </div>
  );
};

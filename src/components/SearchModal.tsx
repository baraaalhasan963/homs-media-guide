import React, { useState, useEffect, useRef } from 'react';
import { Part } from '../data/guideData';
import { Search, X, ArrowLeft, BookOpen } from 'lucide-react';

interface SearchResult {
  partNum: number;
  partTitle: string;
  secNum: string;
  secTitle: string;
  matchText: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  parts: Part[];
  onSelectResult: (partNum: number, secId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  parts,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      setResults([]);
      return;
    }

    const matches: SearchResult[] = [];

    parts.forEach((p) => {
      p.subsections.forEach((sec, sIdx) => {
        const titleMatch = sec.title.toLowerCase().includes(q);
        const bodyMatch = sec.body.toLowerCase().includes(q);

        if (titleMatch || bodyMatch) {
          // extract a snippet
          let snippet = sec.body;
          const idx = sec.body.toLowerCase().indexOf(q);
          if (idx !== -1) {
            const start = Math.max(0, idx - 40);
            const end = Math.min(sec.body.length, idx + 80);
            snippet = (start > 0 ? '...' : '') + sec.body.substring(start, end).replace(/\n/g, ' ') + (end < sec.body.length ? '...' : '');
          } else {
            snippet = sec.body.substring(0, 100).replace(/\n/g, ' ') + '...';
          }

          matches.push({
            partNum: p.num,
            partTitle: p.title,
            secNum: sec.num,
            secTitle: sec.title,
            matchText: snippet
          });
        }
      });
    });

    setResults(matches.slice(0, 25)); // limit to top 25 results
  }, [query, parts]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0D2B26]/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div 
        className="bg-white border-2 border-[#C59B27] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Row */}
        <div className="flex items-center gap-3 p-4 border-b border-[#15413A]/10 bg-[#FCFAF6]">
          <Search className="w-5 h-5 text-[#C59B27] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث في كامل الدليل (كاميرا، ميكروفون، أرشفة، ريلز، رعاية)..."
            className="flex-1 bg-transparent border-none outline-none text-sm md:text-base font-bold text-[#0D2B26] placeholder:text-gray-400 placeholder:font-normal"
          />
          <span className="text-xs font-bold text-[#9F7918] bg-[#FDF9EE] px-2 py-1 rounded border border-[#C59B27]/25">
            {results.length} نتائج
          </span>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-2">
          {query && results.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm font-semibold">
              لم يتم العثور على نتائج تطابق «{query}»
            </div>
          )}

          {!query && (
            <div className="text-center py-8 text-gray-400 text-xs font-medium">
              اكتب كلمة أو مصطلح للبحث المباشر عبر كامل الـ 11 باباً والـ 52 مبحثاً
            </div>
          )}

          {results.map((res, rIdx) => (
            <div
              key={rIdx}
              onClick={() => {
                onSelectResult(res.partNum, `sec-${res.partNum}`);
                onClose();
              }}
              className="p-3.5 rounded-xl border border-[#15413A]/8 hover:border-[#C59B27] hover:bg-[#FDF9EE]/50 cursor-pointer transition-all flex flex-col gap-1 group"
            >
              <div className="flex items-center justify-between text-xs font-extrabold text-[#9F7918]">
                <span>الباب {res.partNum}: {res.partTitle}</span>
                <span className="flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                  انتقال
                  <ArrowLeft className="w-3 h-3" />
                </span>
              </div>
              <div className="text-sm font-bold text-[#0D2B26] group-hover:text-[#15413A]">
                {res.secNum}: {res.secTitle}
              </div>
              <div className="text-xs text-[#4B635E] leading-relaxed line-clamp-2">
                {res.matchText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

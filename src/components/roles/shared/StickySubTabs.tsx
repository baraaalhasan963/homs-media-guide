import React, { useEffect, useRef } from 'react';

export interface SubTabItem {
  id: string;
  label: string;
}

interface StickySubTabsProps {
  items: SubTabItem[];
  activeId: string;
  onSelect: (id: string) => void;
  gridColsClass?: string;
}

/**
 * Floating sticky sub-tabs navigation: always single-row flexible flex with
 * natural button widths, horizontal scroll when needed, and frosted-glass blur.
 */
export const StickySubTabs: React.FC<StickySubTabsProps> = ({ items, activeId, onSelect }) => {
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeId]);

  return (
    <div className="hidden md:flex sticky top-[68px] sm:top-[74px] z-30 py-1 justify-center transition-all">
      <div className="w-fit max-w-full bg-[#134F47]/10 backdrop-blur-xl shadow-lg shadow-[#134F47]/10 border border-[#134F47]/20 ring-1 ring-white/50 p-1.5 rounded-2xl flex flex-nowrap items-center gap-1 overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const isSelected = item.id === activeId;
          return (
            <button
              key={item.id}
              ref={isSelected ? activeBtnRef : null}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`flex items-center justify-center gap-1.5 px-2 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs transition-all duration-300 ease-out active:scale-95 cursor-pointer whitespace-nowrap text-center flex-shrink-0 ${
                isSelected
                  ? 'bg-[#134F47] text-[#FFF4E0] shadow-sm font-black'
                  : 'bg-white/85 hover:bg-white text-[#134F47] border border-[#134F47]/15 font-bold'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  isSelected ? 'bg-[#E85B0D]' : 'bg-[#134F47]/35'
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

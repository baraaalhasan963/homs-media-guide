import React, { useRef, useEffect } from 'react';
import { NAVIGATION_STRUCTURE, SubTabDef } from '../data/navigationStructure';

interface TabsNavProps {
  activeMainTabId: string;
  activeSubTabId: string;
  onSelectSubTab: (subId: string, mainId: string) => void;
}

export const TabsNav: React.FC<TabsNavProps> = ({
  activeMainTabId,
  activeSubTabId,
  onSelectSubTab
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  const currentMain = NAVIGATION_STRUCTURE.find(m => m.id === activeMainTabId) || NAVIGATION_STRUCTURE[0];
  const subTabs = currentMain.subTabs;

  useEffect(() => {
    if (activeBtnRef.current && containerRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeSubTabId, activeMainTabId]);

  if (!subTabs || subTabs.length <= 1) {
    return null;
  }

  return (
    <nav id="sub-tabs-bar" className="w-full bg-[#FCFAF6] border-b border-[#15413A]/10 shadow-xs no-print">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-2 px-3 sm:px-6 py-2 overflow-x-auto no-scrollbar"
      >
        {subTabs.map((sub: SubTabDef) => {
          const isActive = sub.id === activeSubTabId;

          return (
            <button
              key={sub.id}
              ref={isActive ? activeBtnRef : null}
              onClick={() => onSelectSubTab(sub.id, currentMain.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                isActive
                  ? 'bg-[#15413A] text-white shadow-sm ring-1 ring-[#15413A]'
                  : 'bg-[#FCFAF6] text-[#2C4A43] border border-[#15413A]/10 hover:bg-[#F3F7F5] hover:text-[#0D2B26] hover:border-[#C59B27]/40'
              }`}
              title={sub.description}
            >
              <span>{sub.title}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

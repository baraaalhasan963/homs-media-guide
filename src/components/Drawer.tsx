import React, { useState } from 'react';
import { Part } from '../data/guideData';
import { NAVIGATION_STRUCTURE, MainTabDef } from '../data/navigationStructure';
import { X, ChevronLeft, BookOpen, Home } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  parts: Part[];
  onSelectSubTab: (subTabId: string, mainTabId: string, secId?: string) => void;
  onSelectHome: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  parts,
  onSelectSubTab,
  onSelectHome
}) => {
  const [openGroup, setOpenGroup] = useState<string | null>('field-ops');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden no-print">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-[#0D2B26]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Body */}
      <aside className="absolute top-0 bottom-0 right-0 w-full max-w-xs md:max-w-sm bg-white shadow-2xl flex flex-col z-10 border-l-2 border-[#C59B27] animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="bg-[#15413A] p-4 flex items-center justify-between text-white border-b-2 border-[#C59B27]">
          <div className="flex items-center gap-2 font-black text-sm">
            <BookOpen className="w-5 h-5 text-[#DFB847]" />
            <span>فهرس الركائز والأقسام</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
          {/* Quick Home Links */}
          <div 
            onClick={() => { onSelectHome(); onClose(); }}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] hover:bg-[#FDF9EE] text-[#0D2B26] hover:text-[#9F7918] border border-[#15413A]/10 cursor-pointer text-xs md:text-sm font-extrabold transition-all"
          >
            <Home className="w-4 h-4 text-[#C59B27]" />
            <span>🔝 الغلاف والفهرس العام والمقدمة</span>
          </div>

          {/* Pillars Accordion Groups */}
          {NAVIGATION_STRUCTURE.filter(m => m.id !== 'home').map((pillar: MainTabDef) => {
            const isExpanded = openGroup === pillar.id;
            const PillarIcon = pillar.icon;

            return (
              <div key={pillar.id} className="border border-[#15413A]/10 rounded-xl overflow-hidden bg-white">
                <div 
                  className="flex items-center justify-between p-3 bg-[#FCFAF6] hover:bg-[#FDF9EE] cursor-pointer transition-colors"
                  onClick={() => setOpenGroup(isExpanded ? null : pillar.id)}
                >
                  <div className="flex items-center gap-2 font-black text-xs md:text-sm text-[#0D2B26]">
                    <PillarIcon className="w-4 h-4 text-[#8C6D1F]" />
                    <span>{pillar.title}</span>
                  </div>
                  <ChevronLeft className={`w-4 h-4 text-[#8C6D1F] transition-transform duration-200 ${
                    isExpanded ? '-rotate-90' : ''
                  }`} />
                </div>

                {isExpanded && (
                  <ul className="p-2 space-y-1 bg-white border-t border-[#15413A]/8">
                    {pillar.subTabs.map((sub) => {
                      return (
                        <li key={sub.id}>
                          <button
                            onClick={() => {
                              onSelectSubTab(sub.id, pillar.id, sub.secId);
                              onClose();
                            }}
                            className="w-full text-right p-2.5 rounded-lg hover:bg-[#FDF9EE] text-xs font-bold text-[#1F3430] hover:text-[#15413A] transition-colors flex items-center justify-between group"
                          >
                            <span>{sub.title}</span>
                            <ChevronLeft className="w-3 h-3 text-[#15413A]/30 group-hover:text-[#C59B27] group-hover:-translate-x-0.5 transition-all" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

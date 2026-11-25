import React, { useState } from 'react';
import { Part } from '../data/guideData';
import { NAVIGATION_STRUCTURE, MainTabDef } from '../data/navigationStructure';
import { DIRECTOR_MODULES } from '../data/roles/directorStructure';
import { UserRole } from '../data/accessPins';
import { X, ChevronLeft, BookOpen, Home, Building2, CalendarRange, Video, Share2, ClipboardCheck, Compass } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  parts: Part[];
  onSelectSubTab: (subTabId: string, mainTabId: string, secId?: string) => void;
  onSelectHome: () => void;
  currentRole?: UserRole | null;
  activeDirectorTabId?: string;
  activeDirectorSubTabId?: string;
  onSelectDirectorTopic?: (moduleId: string, topicId?: string) => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  onSelectSubTab,
  onSelectHome,
  currentRole,
  activeDirectorTabId,
  activeDirectorSubTabId,
  onSelectDirectorTopic
}) => {
  const [openGroup, setOpenGroup] = useState<string | null>(
    currentRole === 'director' ? activeDirectorTabId || 'dir-management' : 'field-ops'
  );

  if (!isOpen) return null;

  const isDirector = currentRole === 'director';

  const getDirectorIcon = (modId: string) => {
    switch (modId) {
      case 'dir-management':
        return Building2;
      case 'dir-planning':
        return CalendarRange;
      case 'dir-production':
        return Video;
      case 'dir-publishing':
        return Share2;
      case 'dir-documentation':
        return ClipboardCheck;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden no-print">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-[#0D2B26]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Body (opens from Left matching the menu icon) */}
      <aside className="absolute top-0 bottom-0 left-0 w-full max-w-xs md:max-w-sm bg-white shadow-2xl flex flex-col z-10 border-r-2 border-[#E85B0D]/60 animate-in slide-in-from-left duration-200">
        {/* Drawer Header */}
        <div className="bg-[#134F47] p-4 flex items-center justify-between text-white border-b-2 border-[#E85B0D]/60">
          <div className="flex items-center gap-2 font-black text-sm">
            <BookOpen className="w-5 h-5 text-[#FFF4E0]" />
            <span>{isDirector ? 'أقسام دليل مدير المكتب' : 'فهرس الركائز والأقسام'}</span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
          {isDirector && onSelectDirectorTopic ? (
            DIRECTOR_MODULES.map((mod, mIdx) => {
              const isExpanded = openGroup === mod.id;
              const isCurrentMain = activeDirectorTabId === mod.id;
              const ModIcon = getDirectorIcon(mod.id);
              const subItems =
                mod.id === 'dir-management'
                  ? [{ id: 'dir-1-overview', title: 'نظرة سريعة وخارطة القيادة' }, ...mod.topics]
                  : mod.topics;
              const currentSubId =
                isCurrentMain && activeDirectorSubTabId
                  ? activeDirectorSubTabId
                  : isCurrentMain
                    ? subItems[0]?.id
                    : undefined;

              return (
                <div
                  key={mod.id}
                  className={`border rounded-xl overflow-hidden bg-white transition-all duration-200 ${
                    isCurrentMain ? 'border-[#E85B0D]/60 shadow-xs' : 'border-[#134F47]/15'
                  }`}
                >
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between p-3.5 text-right cursor-pointer transition-all duration-200 active:scale-[0.99] ${
                      isExpanded
                        ? 'bg-[#134F47] text-[#FFF4E0]'
                        : isCurrentMain
                          ? 'bg-[#FFF4E0] text-[#134F47]'
                          : 'bg-[#FFF4E0]/35 hover:bg-[#FFF4E0]/60 text-[#134F47]'
                    }`}
                    onClick={() => setOpenGroup(isExpanded ? null : mod.id)}
                  >
                    <div className="flex items-center gap-2.5 font-black text-xs sm:text-sm">
                      <ModIcon className={`w-4 h-4 flex-shrink-0 ${isExpanded || isCurrentMain ? 'text-[#E85B0D]' : 'text-[#134F47]'}`} />
                      <span>{mIdx + 1}. {mod.title}</span>
                      {isCurrentMain && (
                        <span className="w-2 h-2 rounded-full bg-[#E85B0D] flex-shrink-0" title="التاب الحالي" />
                      )}
                    </div>
                    <ChevronLeft
                      className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                        isExpanded ? '-rotate-90 text-[#FFF4E0]' : 'text-[#134F47]/60'
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <ul className="p-2 space-y-1 bg-white border-t border-[#134F47]/10 animate-tab-enter">
                      {subItems.map((sub, sIdx) => {
                        const isCurrentSub = currentSubId === sub.id;
                        return (
                          <li key={sub.id}>
                            <button
                              type="button"
                              onClick={() => {
                                onSelectDirectorTopic(mod.id, sub.id);
                                onClose();
                              }}
                              className={`w-full text-right p-2.5 rounded-lg text-xs transition-all duration-200 active:scale-[0.98] flex items-center justify-between group ${
                                isCurrentSub
                                  ? 'bg-[#E85B0D]/12 text-[#134F47] font-black border-r-4 border-[#E85B0D]'
                                  : 'hover:bg-[#FFF4E0]/50 font-bold text-[#134F47]/90 hover:text-[#134F47]'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {mod.id === 'dir-management' && sIdx === 0 ? (
                                  <>
                                    <Compass className="w-3.5 h-3.5 text-[#E85B0D] flex-shrink-0" />
                                    <span>{sub.title}</span>
                                  </>
                                ) : (
                                  <span>{`${mod.id === 'dir-management' ? sIdx : sIdx + 1}. ${sub.title}`}</span>
                                )}
                              </span>
                              <ChevronLeft
                                className={`w-3.5 h-3.5 transition-all flex-shrink-0 ${
                                  isCurrentSub
                                    ? 'text-[#E85B0D]'
                                    : 'text-[#134F47]/30 group-hover:text-[#E85B0D]'
                                }`}
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })
          ) : (
            <>
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
          </>
          )}
        </div>
      </aside>
    </div>
  );
};

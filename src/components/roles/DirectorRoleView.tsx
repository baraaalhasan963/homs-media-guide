import React from 'react';
import {
  DIRECTOR_MODULES,
  getDirectorModuleById
} from '../../data/roles/directorStructure';
import { DirectorSection1View } from './DirectorSection1View';
import { DirectorSection2View } from './DirectorSection2View';
import { DirectorSection3View } from './DirectorSection3View';
import { DirectorSection4View } from './DirectorSection4View';
import { DirectorSection5View } from './DirectorSection5View';
import { DirectorSection6View } from './DirectorSection6View';
import { DirectorPlanningSection1View } from './DirectorPlanningSection1View';
import { DirectorPlanningSection2View } from './DirectorPlanningSection2View';
import { DirectorPlanningSection3View } from './DirectorPlanningSection3View';
import { DirectorPlanningSection4View } from './DirectorPlanningSection4View';
import { DirectorProductionView } from './DirectorProductionView';

interface DirectorRoleViewProps {
  activeTabId: string;
  onSelectModule: (moduleId: string) => void;
  onSwitchRole: () => void;
}

export const DirectorRoleView: React.FC<DirectorRoleViewProps> = ({
  activeTabId
}) => {
  const activeModule = getDirectorModuleById(activeTabId) || DIRECTOR_MODULES[0];

  // Tab 3: الإنتاج والتغطية الإعلامية (Rendered as interactive Sub-Tabs)
  if (activeTabId === 'dir-production') {
    return (
      <div className="space-y-6 font-cairo select-none">
        {/* Main Tab Title */}
        <h1 className="text-xl sm:text-2xl font-black text-[#134F47] pb-3 border-b border-[#134F47]/15">
          {activeModule.title}
        </h1>

        <DirectorProductionView topics={activeModule.topics} />
      </div>
    );
  }

  return (
    <div className="space-y-6 font-cairo select-none">
      {/* Main Tab Title */}
      <h1 className="text-xl sm:text-2xl font-black text-[#134F47] pb-3 border-b border-[#134F47]/15">
        {activeModule.title}
      </h1>

      {/* Topics List */}
      <div className="space-y-5">
        {activeModule.topics.map((topic, idx) => {
          // If Section 1 (Item 1 has complete content)
          if (topic.id === 'dir-1-1') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorSection1View />
              </div>
            );
          }

          // If Section 2 (Item 2 has complete content)
          if (topic.id === 'dir-1-2') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorSection2View />
              </div>
            );
          }

          // If Section 3 (Item 3 has complete content)
          if (topic.id === 'dir-1-3') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorSection3View />
              </div>
            );
          }

          // If Section 4 (Item 4 has complete content)
          if (topic.id === 'dir-1-4') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorSection4View />
              </div>
            );
          }

          // If Section 5 (Item 5 has complete content)
          if (topic.id === 'dir-1-5') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorSection5View />
              </div>
            );
          }

          // If Section 6 (Item 6 has complete content)
          if (topic.id === 'dir-1-6') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorSection6View />
              </div>
            );
          }

          // Tab 2 - Section 1: الخطط الإعلامية
          if (topic.id === 'dir-2-1') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorPlanningSection1View />
              </div>
            );
          }

          // Tab 2 - Section 2: التخطيط الشهري وجدولة المحتوى
          if (topic.id === 'dir-2-2') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorPlanningSection2View />
              </div>
            );
          }

          // Tab 2 - Section 3: إدارة الفعاليات
          if (topic.id === 'dir-2-3') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorPlanningSection3View />
              </div>
            );
          }

          // Tab 2 - Section 4: التنسيق مع قسم الإعلام المركزي
          if (topic.id === 'dir-2-4') {
            return (
              <div
                key={topic.id}
                className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6"
              >
                <div className="pb-3 border-b border-[#134F47]/15">
                  <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                    <span>{idx + 1}. {topic.title}</span>
                  </h2>
                </div>

                <DirectorPlanningSection4View />
              </div>
            );
          }

          // Remaining items (Headings only)
          return (
            <div
              key={topic.id}
              className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs"
            >
              <h2 className="text-base sm:text-lg font-black text-[#134F47] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E85B0D] flex-shrink-0" />
                <span>{idx + 1}. {topic.title}</span>
              </h2>

              {topic.subtopics && topic.subtopics.length > 0 && (
                <ul className="space-y-2 pr-4 border-r-2 border-[#134F47]/10 mr-1">
                  {topic.subtopics.map((sub, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs sm:text-sm font-bold text-[#134F47]/85"
                    >
                      - {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

import type React from 'react';
import { useEffect, useState } from 'react';
import type { DirectorTopic } from '../../data/roles/directorStructure';
import { DirectorPlanningSection1View } from './DirectorPlanningSection1View';
import { DirectorPlanningSection2View } from './DirectorPlanningSection2View';
import { DirectorPlanningSection3View } from './DirectorPlanningSection3View';
import { DirectorPlanningSection4View } from './DirectorPlanningSection4View';
import { StickySubTabs } from './shared/StickySubTabs';

interface DirectorPlanningViewProps {
  topics: DirectorTopic[];
  externalSubTabId?: string;
}

export const DirectorPlanningView: React.FC<DirectorPlanningViewProps> = ({ topics, externalSubTabId }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0]?.id || 'dir-2-1');

  useEffect(() => {
    if (externalSubTabId && topics.some((t) => t.id === externalSubTabId)) {
      setSelectedTopicId(externalSubTabId);
    }
  }, [externalSubTabId, topics]);

  const activeIndex = topics.findIndex((t) => t.id === selectedTopicId);
  const activeTopic = topics[activeIndex] || topics[0];

  const subTabs = topics.map((t, idx) => ({
    id: t.id,
    label: `${idx + 1}. ${t.title}`,
  }));

  return (
    <div className="space-y-6">
      <StickySubTabs
        items={subTabs}
        activeId={selectedTopicId}
        onSelect={(id) => {
          setSelectedTopicId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        gridColsClass="lg:grid-cols-4"
      />

      {activeTopic && (
        <div key={activeTopic.id} className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6 animate-tab-enter">
          <div className="flex items-center justify-between pb-4 border-b border-[#134F47]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#134F47] flex items-center justify-center text-[#FFF4E0] font-black text-base shadow-sm">
                {activeIndex + 1}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#134F47]">{activeTopic.title}</h2>
                <p className="text-xs sm:text-sm text-[#134F47]/70 font-semibold mt-0.5">
                  القسم {activeIndex + 1} من {topics.length} ضمن التخطيط والتنظيم
                </p>
              </div>
            </div>
          </div>

          {selectedTopicId === 'dir-2-1' && <DirectorPlanningSection1View />}
          {selectedTopicId === 'dir-2-2' && <DirectorPlanningSection2View />}
          {selectedTopicId === 'dir-2-3' && <DirectorPlanningSection3View />}
          {selectedTopicId === 'dir-2-4' && <DirectorPlanningSection4View />}
        </div>
      )}
    </div>
  );
};

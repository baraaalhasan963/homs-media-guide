import type React from 'react';
import { useEffect, useState } from 'react';
import {
  DOCUMENTATION_SECTION_1_DATA,
  DOCUMENTATION_SECTION_2_DATA,
  DOCUMENTATION_SECTION_3_DATA,
  DOCUMENTATION_SECTION_4_DATA,
  DOCUMENTATION_SECTION_5_DATA,
  DOCUMENTATION_TAB5_INTRO,
  DOCUMENTATION_TEMPLATES,
} from '../../data/roles/directorDocumentationContent';
import { MANAGEMENT_TEMPLATES } from '../../data/roles/directorManagementTemplates';
import type { DirectorTopic } from '../../data/roles/directorStructure';
import { DirectorSubSectionRenderer } from './shared/DirectorSubSectionRenderer';
import { StickySubTabs } from './shared/StickySubTabs';
import { TemplateCopyCard } from './shared/TemplateCopyCard';

interface DirectorDocumentationViewProps {
  topics: DirectorTopic[];
  externalSubTabId?: string;
}

export const DirectorDocumentationView: React.FC<DirectorDocumentationViewProps> = ({ topics, externalSubTabId }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0]?.id || 'dir-5-1');

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
        gridColsClass="lg:grid-cols-6"
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
                  القسم {activeIndex + 1} من {topics.length} ضمن منظومة التوثيق والتقييم
                </p>
              </div>
            </div>
          </div>

          {activeTopic.id === 'dir-5-1' && (
            <DirectorSubSectionRenderer data={DOCUMENTATION_SECTION_1_DATA} intro={DOCUMENTATION_TAB5_INTRO} />
          )}
          {activeTopic.id === 'dir-5-2' && <DirectorSubSectionRenderer data={DOCUMENTATION_SECTION_2_DATA} />}
          {activeTopic.id === 'dir-5-3' && <DirectorSubSectionRenderer data={DOCUMENTATION_SECTION_3_DATA} />}
          {activeTopic.id === 'dir-5-4' && <DirectorSubSectionRenderer data={DOCUMENTATION_SECTION_4_DATA} />}
          {activeTopic.id === 'dir-5-5' && <DirectorSubSectionRenderer data={DOCUMENTATION_SECTION_5_DATA} />}
          {activeTopic.id === 'dir-5-6' && (
            <div className="space-y-8 text-right">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#134F47]/5 border-r-4 border-[#134F47] space-y-2">
                <h3 className="text-base sm:text-lg font-black text-[#134F47]">
                  بنك النماذج والسجلات الموحد للمكتب الإعلامي
                </h3>
                <p className="text-sm sm:text-base text-[#134F47]/90 font-semibold leading-relaxed">
                  يجمع هذا القسم كافة النماذج والسجلات التشغيلية الخاصة بعمل مدير المكتب (التوثيق والتقييم والإدارة)
                  بصيغة موحدة جاهزة للنسخ والاستخدام الفوري في قنوات العمل.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm sm:text-base font-black text-[#134F47] pb-2 border-b border-[#134F47]/10">
                  أولاً: نماذج الأرشفة والتقييم والقياس
                </h4>
                {DOCUMENTATION_TEMPLATES.map((tpl) => (
                  <TemplateCopyCard key={tpl.id} template={tpl} />
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-sm sm:text-base font-black text-[#134F47] pb-2 border-b border-[#134F47]/10">
                  ثانياً: النماذج الإدارية والتنسيقية المرجعية
                </h4>
                <TemplateCopyCard template={MANAGEMENT_TEMPLATES.coverageRequest} />
                <TemplateCopyCard template={MANAGEMENT_TEMPLATES.monthlyReport} />
                <TemplateCopyCard template={MANAGEMENT_TEMPLATES.delegation} />
                <TemplateCopyCard template={MANAGEMENT_TEMPLATES.handover} />
                <TemplateCopyCard template={MANAGEMENT_TEMPLATES.onboarding} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

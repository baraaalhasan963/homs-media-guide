import React, { useEffect, useState } from 'react';
import { DirectorTopic } from '../../data/roles/directorStructure';
import { ProductionSubSection } from '../../data/roles/directorProductionContentSection1';
import { PUBLISHING_TAB4_INTRO, PUBLISHING_SECTION_1_DATA } from '../../data/roles/directorPublishingContentSection1';
import { PUBLISHING_SECTION_2_DATA } from '../../data/roles/directorPublishingContentSection2';
import { PUBLISHING_SECTION_3_DATA } from '../../data/roles/directorPublishingContentSection3';
import { PUBLISHING_SECTION_4_DATA } from '../../data/roles/directorPublishingContentSection4';
import { PUBLISHING_SECTION_5_DATA } from '../../data/roles/directorPublishingContentSection5';
import { PUBLISHING_SECTION_6_DATA } from '../../data/roles/directorPublishingContentSection6';
import { PUBLISHING_SECTION_7_DATA } from '../../data/roles/directorPublishingContentSection7';
import { PUBLISHING_SECTION_8_DATA } from '../../data/roles/directorPublishingContentSection8';
import { StickySubTabs } from './shared/StickySubTabs';

interface DirectorPublishingViewProps {
  topics: DirectorTopic[];
  externalSubTabId?: string;
}

const RenderPublishingSubSectionList: React.FC<{ data: ProductionSubSection[]; intro?: string[] }> = ({ data, intro }) => (
  <div className="space-y-8">
    {/* Intro Box if present */}
    {intro && intro.length > 0 && (
      <div className="p-4 sm:p-5 rounded-2xl bg-[#134F47]/5 border-r-4 border-[#134F47] space-y-2.5">
        {intro.map((para, i) => (
          <p key={i} className="text-sm sm:text-base leading-relaxed text-[#134F47] font-bold">
            {para}
          </p>
        ))}
      </div>
    )}

    {data.map((subSec) => (
      <div key={subSec.id} className="space-y-4">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] flex items-center gap-2 pb-2 border-b border-[#134F47]/10">
          <span className="w-2 h-2 rounded-full bg-[#E85B0D] flex-shrink-0" />
          <span>{subSec.number} {subSec.title}</span>
        </h3>

        {/* Content Paragraphs */}
        <div className="space-y-3">
          {subSec.content.map((para, pIdx) => (
            <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium">
              {para}
            </p>
          ))}
        </div>

        {/* Primary Points List */}
        {subSec.points && subSec.points.length > 0 && (
          <div className="space-y-3 pt-2">
            {subSec.pointsTitle && (
              <p className="text-sm sm:text-base font-bold text-[#134F47]">
                {subSec.pointsTitle}
              </p>
            )}
            <div className="space-y-2.5 pr-2">
              {subSec.points.map((pt, ptIdx) => (
                <div key={ptIdx} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90">
                  <span className="w-6 h-6 rounded-md bg-[#134F47]/10 text-[#134F47] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    {ptIdx + 1}
                  </span>
                  <p>
                    {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                    <span className="font-medium">{pt.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SubGroups if present */}
        {subSec.subGroups && subSec.subGroups.length > 0 && (
          <div className="space-y-4 pt-2">
            {subSec.subGroups.map((grp, gIdx) => (
              <div key={gIdx} className="p-4 rounded-xl bg-[#134F47]/[0.02] border border-[#134F47]/10 space-y-3">
                <h4 className="text-sm sm:text-base font-black text-[#134F47] pb-1 border-b border-[#134F47]/10">
                  {grp.title}
                </h4>
                {grp.content && grp.content.map((cPara, cpIdx) => (
                  <p key={cpIdx} className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium">
                    {cPara}
                  </p>
                ))}
                {grp.pointsTitle && (
                  <p className="text-xs sm:text-sm font-bold text-[#134F47]">
                    {grp.pointsTitle}
                  </p>
                )}
                {grp.points && grp.points.length > 0 && (
                  <div className="space-y-2 pr-2">
                    {grp.points.map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                        <p>
                          {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                          <span className="font-medium">{pt.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {grp.note && (
                  <p className="text-xs sm:text-sm text-[#134F47]/80 font-medium italic">
                    {grp.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Table (if any, like schedule table in 3.14) */}
        {subSec.table && (
          <div className="overflow-x-auto my-4 rounded-xl border border-[#134F47]/20 shadow-xs">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-[#134F47] text-[#FFF4E0] font-black">
                <tr>
                  {subSec.table.headers.map((h, i) => (
                    <th key={i} className="py-2.5 px-3 sm:px-4 font-black">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#134F47]/10">
                {subSec.table.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#134F47]/[0.02]'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2.5 px-3 sm:px-4 font-bold text-[#134F47]/90">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Extra Note */}
        {subSec.extraNote && (
          <p className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium pt-1">
            {subSec.extraNote}
          </p>
        )}

        {/* Extra Points List */}
        {subSec.extraPoints && subSec.extraPoints.length > 0 && (
          <div className="space-y-3 pt-2">
            {subSec.extraPointsTitle && (
              <p className="text-sm sm:text-base font-bold text-[#134F47]">
                {subSec.extraPointsTitle}
              </p>
            )}
            <div className="space-y-2.5 pr-2">
              {subSec.extraPoints.map((pt, ptIdx) => (
                <div key={ptIdx} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                  <p>
                    {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                    <span className="font-medium">{pt.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Note / Concluding Box */}
        {subSec.note && (
          <div className="p-4 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-sm sm:text-base leading-relaxed text-[#134F47] font-medium">
            {subSec.note}
          </div>
        )}
      </div>
    ))}
  </div>
);

export const DirectorPublishingView: React.FC<DirectorPublishingViewProps> = ({ topics, externalSubTabId }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0]?.id || 'dir-4-1');

  useEffect(() => {
    if (externalSubTabId && topics.some((t) => t.id === externalSubTabId)) {
      setSelectedTopicId(externalSubTabId);
    }
  }, [externalSubTabId, topics]);

  const activeTopic = topics.find((t) => t.id === selectedTopicId) || topics[0];
  const activeIndex = topics.findIndex((t) => t.id === selectedTopicId);

  return (
    <div className="space-y-6">
      <StickySubTabs
        items={topics.map((topic, index) => ({
          id: topic.id,
          label: `${index + 1}. ${topic.title}`
        }))}
        activeId={selectedTopicId}
        onSelect={setSelectedTopicId}
      />

      {/* Active Sub-tab Content Card */}
      {activeTopic && (
        <div key={activeTopic.id} className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6 animate-tab-enter">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#134F47]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#134F47] flex items-center justify-center text-[#FFF4E0] font-black text-base shadow-sm">
                {activeIndex + 1}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#134F47]">
                  {activeTopic.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#134F47]/70 font-semibold mt-0.5">
                  القسم {activeIndex + 1} من {topics.length} ضمن منظومة النشر وإدارة المنصات
                </p>
              </div>
            </div>
          </div>

          {/* Content rendering based on active sub-tab */}
          {activeTopic.id === 'dir-4-1' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_1_DATA} intro={PUBLISHING_TAB4_INTRO} />
          ) : activeTopic.id === 'dir-4-2' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_2_DATA} />
          ) : activeTopic.id === 'dir-4-3' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_3_DATA} />
          ) : activeTopic.id === 'dir-4-4' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_4_DATA} />
          ) : activeTopic.id === 'dir-4-5' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_5_DATA} />
          ) : activeTopic.id === 'dir-4-6' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_6_DATA} />
          ) : activeTopic.id === 'dir-4-7' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_7_DATA} />
          ) : activeTopic.id === 'dir-4-8' ? (
            <RenderPublishingSubSectionList data={PUBLISHING_SECTION_8_DATA} />
          ) : (
            <div className="text-center py-10 text-[#134F47]/60 font-bold">
              المحتوى قيد المراجعة
            </div>
          )}
        </div>
      )}
    </div>
  );
};

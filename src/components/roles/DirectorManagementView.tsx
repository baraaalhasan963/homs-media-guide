import { ArrowLeft, Clock, Compass, Layers } from 'lucide-react';
import type React from 'react';
import { useEffect, useState } from 'react';
import { DIRECTOR_QUICK_MAP, MANAGEMENT_TEMPLATES } from '../../data/roles/directorManagementTemplates';
import type { DirectorTopic } from '../../data/roles/directorStructure';
import { DirectorSection1View } from './DirectorSection1View';
import { DirectorSection2View } from './DirectorSection2View';
import { DirectorSection3View } from './DirectorSection3View';
import { DirectorSection4View } from './DirectorSection4View';
import { DirectorSection5View } from './DirectorSection5View';
import { DirectorSection6View } from './DirectorSection6View';
import { StickySubTabs, type SubTabItem } from './shared/StickySubTabs';
import { TemplateCopyCard } from './shared/TemplateCopyCard';

interface DirectorManagementViewProps {
  topics: DirectorTopic[];
  externalSubTabId?: string;
}

export const DirectorManagementView: React.FC<DirectorManagementViewProps> = ({ topics, externalSubTabId }) => {
  const [selectedId, setSelectedId] = useState<string>('dir-1-overview');

  useEffect(() => {
    if (externalSubTabId && (externalSubTabId === 'dir-1-overview' || topics.some((t) => t.id === externalSubTabId))) {
      setSelectedId(externalSubTabId);
    }
  }, [externalSubTabId, topics]);

  const subTabs: SubTabItem[] = [
    { id: 'dir-1-overview', label: 'نظرة سريعة' },
    { id: 'dir-1-1', label: '1. التعريف بالمكتب' },
    { id: 'dir-1-2', label: '2. مهام المدير' },
    { id: 'dir-1-3', label: '3. الهيكل والمهام' },
    { id: 'dir-1-4', label: '4. إدارة الفريق' },
    { id: 'dir-1-5', label: '5. الصلاحيات والضوابط' },
    { id: 'dir-1-6', label: '6. التنسيق الإداري' },
  ];

  const handleSelectSection = (id: string) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeTopicIndex = topics.findIndex((t) => t.id === selectedId);
  const activeTopic = activeTopicIndex >= 0 ? topics[activeTopicIndex] : null;

  return (
    <div className="space-y-6">
      <StickySubTabs
        items={subTabs}
        activeId={selectedId}
        onSelect={handleSelectSection}
        gridColsClass="lg:grid-cols-7"
      />

      {selectedId === 'dir-1-overview' ? (
        <div key="dir-1-overview" className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6 text-right animate-tab-enter">
          {/* Overview Intro */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#134F47]/5 border-r-4 border-[#134F47] space-y-2">
            <h2 className="text-lg sm:text-xl font-black text-[#134F47] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#E85B0D]" />
              <span>بطاقة الانطلاق والمرجع السريع لمدير المكتب</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-semibold">
              {DIRECTOR_QUICK_MAP.intro}
            </p>
          </div>

          {/* 6 Sections Directory Cards */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-black text-[#134F47] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#E85B0D]" />
              <span>محاور التاب الأول (إدارة المكتب الإعلامي)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topics.map((topic, idx) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleSelectSection(topic.id)}
                  className="text-right p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 hover:bg-[#FFF4E0]/50 hover:border-[#E85B0D]/50 transition-all cursor-pointer flex flex-col justify-between gap-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#134F47] text-[#FFF4E0] text-xs font-black flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <ArrowLeft className="w-4 h-4 text-[#134F47]/40 group-hover:text-[#E85B0D] transition-colors" />
                  </div>
                  <div className="text-sm font-black text-[#134F47]">{topic.title}</div>
                  {topic.subtopics && (
                    <div className="text-xs font-semibold text-[#134F47]/70">{topic.subtopics.length} بنود مرجعية</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* First 7 & 30 Days Roadmap */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-black text-[#134F47] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#E85B0D]" />
              <span>خارطة أول 7 / 30 يوماً عند استلام إدارة المكتب</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DIRECTOR_QUICK_MAP.onboardingPhases.map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="p-5 rounded-2xl border-2 border-[#134F47]/15 bg-gradient-to-b from-white to-[#FFF4E0]/25 space-y-3"
                >
                  <div>
                    <div className="text-xs font-black text-[#E85B0D]">{phase.period}</div>
                    <h4 className="text-sm sm:text-base font-black text-[#134F47] mt-0.5">{phase.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {phase.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/90 font-medium leading-relaxed"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-[11px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Decision Compass */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-black text-[#134F47]">
              بوصلة القرار السريع (إذا واجهت موقفاً يومياً)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[#134F47]/20 shadow-xs">
              <table className="w-full text-right text-xs sm:text-sm">
                <thead className="bg-[#134F47] text-[#FFF4E0]">
                  <tr>
                    <th className="py-3 px-4 font-black border-l border-white/10">الموقف أو التحدي</th>
                    <th className="py-3 px-4 font-black border-l border-white/10">الإجراء الفوري</th>
                    <th className="py-3 px-4 font-black">المرجع المباشر</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#134F47]/10">
                  {DIRECTOR_QUICK_MAP.decisionCompass.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FFF4E0]/20'}>
                      <td className="py-2.5 px-4 font-bold text-[#134F47] border-l border-[#134F47]/10">
                        {row.situation}
                      </td>
                      <td className="py-2.5 px-4 font-medium text-[#134F47]/90 border-l border-[#134F47]/10">
                        {row.immediateAction}
                      </td>
                      <td className="py-2.5 px-4">
                        <button
                          type="button"
                          onClick={() => handleSelectSection(row.targetSectionId)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFF4E0] hover:bg-[#E85B0D] text-[#134F47] hover:text-white border border-[#134F47]/15 text-xs font-black transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>{row.targetLabel}</span>
                          <ArrowLeft className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* All 5 Operational Templates Quick Access */}
          <div className="space-y-4 pt-2 border-t border-[#134F47]/15">
            <h3 className="text-base sm:text-lg font-black text-[#134F47]">
              النماذج التشغيلية المعتمدة للتاب الأول (جاهزة للنسخ)
            </h3>
            <div className="space-y-4">
              <TemplateCopyCard template={MANAGEMENT_TEMPLATES.coverageRequest} />
              <TemplateCopyCard template={MANAGEMENT_TEMPLATES.delegation} />
              <TemplateCopyCard template={MANAGEMENT_TEMPLATES.handover} />
              <TemplateCopyCard template={MANAGEMENT_TEMPLATES.onboarding} />
              <TemplateCopyCard template={MANAGEMENT_TEMPLATES.monthlyReport} />
            </div>
          </div>
        </div>
      ) : activeTopic ? (
        <div key={activeTopic.id} className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6 animate-tab-enter">
          <div className="flex items-center justify-between pb-4 border-b border-[#134F47]/15">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#134F47] flex items-center justify-center text-[#FFF4E0] font-black text-base shadow-sm">
                {activeTopicIndex + 1}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#134F47]">{activeTopic.title}</h2>
                <p className="text-xs sm:text-sm text-[#134F47]/70 font-semibold mt-0.5">
                  القسم {activeTopicIndex + 1} من {topics.length} ضمن إدارة المكتب الإعلامي
                </p>
              </div>
            </div>
          </div>

          {selectedId === 'dir-1-1' && <DirectorSection1View />}
          {selectedId === 'dir-1-2' && <DirectorSection2View />}
          {selectedId === 'dir-1-3' && <DirectorSection3View />}
          {selectedId === 'dir-1-4' && <DirectorSection4View />}
          {selectedId === 'dir-1-5' && <DirectorSection5View />}
          {selectedId === 'dir-1-6' && <DirectorSection6View />}
        </div>
      ) : null}
    </div>
  );
};

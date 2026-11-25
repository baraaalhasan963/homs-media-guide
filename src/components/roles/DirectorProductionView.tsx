import type React from 'react';
import { useEffect, useState } from 'react';
import {
  PRODUCTION_SECTION_1_DATA,
  type ProductionSubSection,
} from '../../data/roles/directorProductionContentSection1';
import { PRODUCTION_SECTION_2_DATA } from '../../data/roles/directorProductionContentSection2';
import { PRODUCTION_SECTION_3_DATA } from '../../data/roles/directorProductionContentSection3';
import {
  PRODUCTION_SECTION_4_DATA,
  PRODUCTION_SECTION_4_INTRO,
} from '../../data/roles/directorProductionContentSection4';
import {
  PRODUCTION_SECTION_5_DATA,
  PRODUCTION_SECTION_5_INTRO,
} from '../../data/roles/directorProductionContentSection5';
import {
  PRODUCTION_SECTION_6_DATA,
  PRODUCTION_SECTION_6_INTRO,
} from '../../data/roles/directorProductionContentSection6';
import type { DirectorTopic } from '../../data/roles/directorStructure';
import { type OperationalTemplate, TemplateCopyCard } from './shared/TemplateCopyCard';
import { StickySubTabs } from './shared/StickySubTabs';

const PRODUCTION_CHECKLISTS: Record<'qualityGate' | 'preCoverage' | 'archiveHandover', OperationalTemplate> = {
  qualityGate: {
    id: 'tpl-prod-quality-gate',
    title: 'قائمة فحص الجودة قبل الإرسال للاعتماد المركزي',
    purpose: 'قائمة تحقق سريعة يراجعها المدير أو مسؤول الاختصاص قبل رفع أي تصميم أو فيديو أو خبر للاعتماد.',
    fields: [
      {
        label: '1. المعلومات واللغة',
        hint: 'الأسماء والألقاب والتواريخ + خلو النص من الأخطاء الإملائية',
      },
      {
        label: '2. الهوية البصرية',
        hint: 'الألوان، الخطوط، الشعارات، وهوامش الأمان الصحيحة',
      },
      {
        label: '3. الجودة التقنية',
        hint: 'وضوح الصوت، ثبات الكادر، ودقة التصدير للمنصة المستهدفة',
      },
      {
        label: '4. الخصوصية والملفات',
        hint: 'موافقة المصوَّرين + جاهزية النص المرافق (الكابشن)',
      },
    ],
    copyText: `✅ قائمة فحص الجودة قبل الاعتماد المركزي
[ ] صحة الأسماء والصفات والتواريخ والأرقام.
[ ] تدقيق اللغة والإملاء وتوافق العنوان مع الكابشن.
[ ] الالتزام التام بالهوية البصرية والشعارات والألوان المعتمدة.
[ ] مطابقة المقاسات والجودة التقنية (صوت واضح + صورة حادة).
[ ] مراعاة الخصوصية وأذونات المقابلات.
• جاهز للإرسال إلى مجموعة الاعتماد المركزي.`,
  },
  preCoverage: {
    id: 'tpl-prod-pre-coverage',
    title: 'قائمة جاهزية الميدان والتصوير قبل الفعالية',
    purpose: 'فحص سريع للعتاد والمعلومات اللوجستية قبل تحرك فريق التغطية إلى موقع الحدث.',
    fields: [
      {
        label: '1. المعدات والطاقة',
        hint: 'شحن البطاريات، ذاكرة فارغة، مايكروفون، وحامل/مثبت',
      },
      {
        label: '2. التنسيق الميداني',
        hint: 'اسم منسق الفعالية ورقمه + مكان الفعالية وبرنامجها الزمني',
      },
      {
        label: '3. قائمة اللقطات (Shot List)',
        hint: 'اللقطات الافتتاحية، الحضور، المنصة، التكريم، والمقابلات',
      },
      {
        label: '4. خطة التسليم المباشر',
        hint: 'من سيرسل لقطات الستوري الفوري ومتى تُفرز بقية المواد',
      },
    ],
    copyText: `🎒 قائمة جاهزية الميدان قبل الفعالية
[ ] البطاريات مشحونة بالكامل (+ بطارية احتياطية).
[ ] بطاقات الذاكرة مهيأة وبمساحة كافية.
[ ] اختبار الصوت والمايكروفون قبل الانطلاق.
[ ] تأكيد موقع الفعالية وبرنامجها الزمني ورقم المنسق الميداني.
[ ] اعتماد قائمة اللقطات الأساسية والضيوف المقرر مقابلتهم.`,
  },
  archiveHandover: {
    id: 'tpl-prod-archive-handover',
    title: 'قائمة تحقق تسليم المواد والأرشفة بعد الإنتاج',
    purpose: 'ضمان انتقال المواد الخام والمصدرية والنهائية إلى الأرشيف المشترك فور انتهاء الإنتاج.',
    fields: [
      {
        label: '1. فرز المواد الخام',
        hint: 'حذف اللقطات التالفة والمكررة وتصنيف الباقي بمجلد 01_خام',
      },
      {
        label: '2. حفظ الملف النهائي والمصدري',
        hint: 'نسخة جاهزة للنشر + ملف المشروع القابل للتعديل',
      },
      {
        label: '3. التسمية القياسية',
        hint: 'YYYY-MM-DD_اسم-الفعالية بدون أسماء عشوائية',
      },
      {
        label: '4. إخطار المدير والمنصات',
        hint: 'مشاركة رابط المجلد في قناة العمل الرسمية',
      },
    ],
    copyText: `📦 قائمة تسليم وأرشفة مواد الفعالية
• الفعالية: [الاسم] | التاريخ: [YYYY-MM-DD]
[ ] رفع الصور/الفيديوهات الخام المفرزة في مجلد 01_خام.
[ ] حفظ المخرجات النهائية في مجلد 03_نهائي_للنشر.
[ ] حفظ الملفات المصدرية (PSD/PRPROJ) في مجلد 04_مصدري.
[ ] التحقق من تسمية المجلدات وفق الصيغة القياسية.
• رابط المجلد الجاهز: [أدخل الرابط]`,
  },
};

interface DirectorProductionViewProps {
  topics: DirectorTopic[];
}

const RenderSubSectionList: React.FC<{
  data: ProductionSubSection[];
  intro?: string[];
}> = ({ data, intro }) => (
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
          <span>
            {subSec.number} {subSec.title}
          </span>
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
              <p className="text-sm sm:text-base font-bold text-[#134F47]">{subSec.pointsTitle}</p>
            )}
            <div className="space-y-2.5 pr-2">
              {subSec.points.map((pt, ptIdx) => (
                <div
                  key={ptIdx}
                  className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90"
                >
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

        {/* SubGroups if present (e.g. in 5.2, 5.5, 5.9, 5.10, 5.14, 5.15, 5.16, 5.21) */}
        {subSec.subGroups && subSec.subGroups.length > 0 && (
          <div className="space-y-4 pt-2">
            {subSec.subGroups.map((grp, gIdx) => (
              <div key={gIdx} className="p-4 rounded-xl bg-[#134F47]/[0.02] border border-[#134F47]/10 space-y-3">
                <h4 className="text-sm sm:text-base font-black text-[#134F47] pb-1 border-b border-[#134F47]/10">
                  {grp.title}
                </h4>
                {grp.content &&
                  grp.content.map((cPara, cpIdx) => (
                    <p key={cpIdx} className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium">
                      {cPara}
                    </p>
                  ))}
                {grp.pointsTitle && <p className="text-xs sm:text-sm font-bold text-[#134F47]">{grp.pointsTitle}</p>}
                {grp.points && grp.points.length > 0 && (
                  <div className="space-y-2 pr-2">
                    {grp.points.map((pt, ptIdx) => (
                      <div
                        key={ptIdx}
                        className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                        <p>
                          {pt.title && <strong className="text-[#134F47] font-bold">{pt.title}: </strong>}
                          <span className="font-medium">{pt.desc}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {grp.note && <p className="text-xs sm:text-sm text-[#134F47]/80 font-medium italic">{grp.note}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Extra Note (if any, like roles note in 2.4) */}
        {subSec.extraNote && (
          <p className="text-sm sm:text-base leading-relaxed text-[#134F47]/90 font-medium pt-1">{subSec.extraNote}</p>
        )}

        {/* Table (if any, like scenario table in 4.9) */}
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

        {/* Extra Points List (if any, like guidelines in 2.4 or 2.6) */}
        {subSec.extraPoints && subSec.extraPoints.length > 0 && (
          <div className="space-y-3 pt-2">
            {subSec.extraPointsTitle && (
              <p className="text-sm sm:text-base font-bold text-[#134F47]">{subSec.extraPointsTitle}</p>
            )}
            <div className="space-y-2.5 pr-2">
              {subSec.extraPoints.map((pt, ptIdx) => (
                <div
                  key={ptIdx}
                  className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-[#134F47]/90"
                >
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

export const DirectorProductionView: React.FC<{
  topics: DirectorTopic[];
  externalSubTabId?: string;
}> = ({ topics, externalSubTabId }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0]?.id || 'dir-3-1');

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
          label: `${index + 1}. ${topic.title}`,
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
                <h2 className="text-lg sm:text-xl font-black text-[#134F47]">{activeTopic.title}</h2>
                <p className="text-xs sm:text-sm font-medium text-[#134F47]/70 mt-0.5">المحاور والأقسام الفرعية</p>
              </div>
            </div>
          </div>

          {/* Content rendering based on active sub-tab */}
          {activeTopic.id === 'dir-3-1' ? (
            <div className="space-y-8">
              <RenderSubSectionList data={PRODUCTION_SECTION_1_DATA} />
              <TemplateCopyCard template={PRODUCTION_CHECKLISTS.qualityGate} />
            </div>
          ) : activeTopic.id === 'dir-3-2' ? (
            <div className="space-y-8">
              <RenderSubSectionList data={PRODUCTION_SECTION_2_DATA} />
              <TemplateCopyCard template={PRODUCTION_CHECKLISTS.preCoverage} />
            </div>
          ) : activeTopic.id === 'dir-3-3' ? (
            <div className="space-y-8">
              <RenderSubSectionList data={PRODUCTION_SECTION_3_DATA} />
              <TemplateCopyCard template={PRODUCTION_CHECKLISTS.preCoverage} />
            </div>
          ) : activeTopic.id === 'dir-3-4' ? (
            <RenderSubSectionList data={PRODUCTION_SECTION_4_DATA} intro={PRODUCTION_SECTION_4_INTRO} />
          ) : activeTopic.id === 'dir-3-5' ? (
            <div className="space-y-8">
              <RenderSubSectionList data={PRODUCTION_SECTION_5_DATA} intro={PRODUCTION_SECTION_5_INTRO} />
              <TemplateCopyCard template={PRODUCTION_CHECKLISTS.qualityGate} />
            </div>
          ) : activeTopic.id === 'dir-3-6' ? (
            <div className="space-y-8">
              <RenderSubSectionList data={PRODUCTION_SECTION_6_DATA} intro={PRODUCTION_SECTION_6_INTRO} />
              <TemplateCopyCard template={PRODUCTION_CHECKLISTS.archiveHandover} />
            </div>
          ) : (
            /* Subtopics List for other sections awaiting full text */
            activeTopic.subtopics &&
            activeTopic.subtopics.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {activeTopic.subtopics.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#134F47]/[0.03] border border-[#134F47]/15 hover:border-[#134F47]/30 hover:bg-[#134F47]/[0.06] transition-all duration-200"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#E85B0D]/15 text-[#E85B0D] flex items-center justify-center text-xs font-black flex-shrink-0">
                      {sIdx + 1}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#134F47]">{sub.replace(/\.$/, '')}</span>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

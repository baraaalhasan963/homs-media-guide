import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileVideo,
  LayoutGrid,
  ListOrdered,
  Repeat,
  Sparkles,
  Table,
  Target,
  Users2,
} from 'lucide-react';
import type React from 'react';
import { PLANNING_SECTION_2_CONTENT } from '../../data/roles/directorPlanningContentSection2';
import { PLANNING_TEMPLATES } from '../../data/roles/directorPlanningTemplates';
import { TemplateCopyCard } from './shared/TemplateCopyCard';

export const DirectorPlanningSection2View: React.FC = () => {
  const data = PLANNING_SECTION_2_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      {/* 2.1 مفهوم التخطيط الشهري للمحتوى */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-[#E85B0D]" />
            <span>2.1 {data.concept.title}</span>
          </h3>
          <div className="space-y-2.5 text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.concept.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 2.2 أهداف التخطيط الشهري للمحتوى */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#E85B0D]" />
            <span>2.2 {data.goals.title}</span>
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">{data.goals.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.goals.items.map((goal, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{goal}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.3 إعداد الخطة الشهرية للمحتوى */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-[#E85B0D]" />
            <span>2.3 {data.monthlyPlanPreparation.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.monthlyPlanPreparation.intro}</p>
        </div>

        {/* Basis items */}
        <div className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 space-y-2.5">
          <p className="text-xs sm:text-sm font-bold text-[#134F47]">{data.monthlyPlanPreparation.basisIntro}</p>
          <div className="space-y-1.5 pr-2">
            {data.monthlyPlanPreparation.basisItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">{data.monthlyPlanPreparation.stepsIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {data.monthlyPlanPreparation.steps.map((st, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{st}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 تصنيف المحتوى الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-[#E85B0D]" />
            <span>2.4 {data.contentClassification.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.contentClassification.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.contentClassification.categories.map((cat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 font-black text-xs sm:text-sm text-[#134F47]">
                <span className="w-2 h-2 rounded-full bg-[#E85B0D]" />
                <span>{cat.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#134F47]/80 leading-relaxed font-medium pr-3.5">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.contentClassification.closingNote}
        </div>
      </section>

      {/* 2.5 تحديد الصيغ الإعلامية والمنصات المناسبة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <FileVideo className="w-5 h-5 text-[#E85B0D]" />
            <span>2.5 {data.formatsAndPlatforms.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.formatsAndPlatforms.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">{data.formatsAndPlatforms.formatsIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {data.formatsAndPlatforms.formats.map((fmt, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{fmt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">{data.formatsAndPlatforms.criteriaIntro}</p>
          <div className="space-y-2 pr-2">
            {data.formatsAndPlatforms.criteria.map((crit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{crit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 تقويم المحتوى وجدول النشر */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Table className="w-5 h-5 text-[#E85B0D]" />
            <span>2.6 {data.editorialCalendar.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.editorialCalendar.intro}</p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/15">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#134F47] text-white">
                <th className="p-3 font-black border-l border-white/20 w-1/3">البيان</th>
                <th className="p-3 font-black w-2/3">التوضيح</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.editorialCalendar.fields.map((f, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFF4E0]/15' : 'bg-white'}>
                  <td className="p-3 font-bold text-[#134F47] border-l border-[#134F47]/10 leading-relaxed">
                    {f.field}
                  </td>
                  <td className="p-3 font-medium text-[#134F47]/90 leading-relaxed">{f.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.editorialCalendar.updatingNote}
        </p>
      </section>

      {/* 2.7 تنظيم وتوزيع المحتوى على مدار الشهر */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#E85B0D]" />
            <span>2.7 {data.contentDistribution.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.contentDistribution.intro}</p>
        </div>

        <div className="space-y-2 pr-2">
          {data.contentDistribution.guidelines.map((g, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{g}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.contentDistribution.closingNote}
        </div>
      </section>

      {/* 2.8 توزيع المهام المرتبطة بالمحتوى */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users2 className="w-5 h-5 text-[#E85B0D]" />
            <span>2.8 {data.taskAssignment.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.taskAssignment.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">{data.taskAssignment.rolesIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.taskAssignment.roles.map((role, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm font-medium text-[#134F47]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.taskAssignment.clearResponsibilityNote}
          </div>
          <div className="p-3 rounded-xl bg-[#134F47]/5 border border-[#134F47]/15 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.taskAssignment.deadlinesNote}
          </div>
        </div>
      </section>

      {/* 2.9 التعامل مع المحتوى الطارئ والمستجدات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#E85B0D]" />
            <span>2.9 {data.emergencyContent.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.emergencyContent.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">{data.emergencyContent.guidelinesIntro}</p>
          <div className="space-y-2 pr-2">
            {data.emergencyContent.guidelines.map((g, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{g}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.emergencyContent.postponedNote}
        </div>
      </section>

      {/* 2.10 إعادة توظيف المحتوى */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Repeat className="w-5 h-5 text-[#E85B0D]" />
            <span>2.10 {data.contentRepurposing.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.contentRepurposing.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">{data.contentRepurposing.examplesIntro}</p>
          <div className="space-y-2 pr-2">
            {data.contentRepurposing.examples.map((ex, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{ex}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 font-bold leading-relaxed">
          {data.contentRepurposing.conditionsNote}
        </div>
      </section>

      {/* 2.11 مراجعة الخطة الشهرية وتطويرها */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#E85B0D]" />
            <span>2.11 {data.planReviewAndDevelopment.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.planReviewAndDevelopment.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.planReviewAndDevelopment.reviewAspectsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.planReviewAndDevelopment.reviewAspects.map((asp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{asp}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.planReviewAndDevelopment.benefitNote}
        </div>
      </section>

      {/* 2.12 مخرجات التخطيط الشهري */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#E85B0D]" />
            <span>2.12 {data.outputs.title}</span>
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">{data.outputs.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {data.outputs.items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/30 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]"
            >
              <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <span>{it}</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <TemplateCopyCard template={PLANNING_TEMPLATES.monthlyCalendar} />
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { PLANNING_SECTION_3_CONTENT } from '../../data/roles/directorPlanningContentSection3';
import {
  Sparkles,
  Inbox,
  Layers,
  FileSpreadsheet,
  CheckSquare,
  Users,
  Camera,
  Film,
  Send,
  AlertTriangle,
  Flag,
  BarChart,
  Archive,
  CheckCircle2
} from 'lucide-react';

export const DirectorPlanningSection3View: React.FC = () => {
  const data = PLANNING_SECTION_3_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 3.1 مفهوم إدارة الفعاليات إعلامياً */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#E85B0D]" />
            <span>3.1 {data.concept.title}</span>
          </h3>
          <div className="space-y-2.5 text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.concept.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3.2 استقبال طلبات التغطية ودراستها (4 أجزاء متكاملة) */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Inbox className="w-5 h-5 text-[#E85B0D]" />
            <span>3.2 {data.requestReception.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.requestReception.intro}
          </p>
        </div>

        {/* أولاً: المعلومات المطلوبة في طلب التغطية */}
        <div className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 space-y-3">
          <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
            {data.requestReception.part1.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium">
            {data.requestReception.part1.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.requestReception.part1.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-lg bg-white/70 border border-[#134F47]/10 text-xs text-[#134F47]/85 font-bold leading-relaxed">
            {data.requestReception.part1.note}
          </div>
        </div>

        {/* ثانياً: دراسة الطلب وتحديد إمكانية التنفيذ */}
        <div className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 space-y-3">
          <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
            {data.requestReception.part2.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium">
            {data.requestReception.part2.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.requestReception.part2.points.map((pt, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed pt-1">
            {data.requestReception.part2.closing}
          </p>
        </div>

        {/* ثالثاً ورابعاً: ترتيب الأولويات وتأكيد التغطية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/25 space-y-2">
            <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
              {data.requestReception.part3.title}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              {data.requestReception.part3.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/25 space-y-2">
            <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
              {data.requestReception.part4.title}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              {data.requestReception.part4.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.3 تصنيف الفعاليات وتحديد مستوى التغطية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E85B0D]" />
            <span>3.3 {data.eventClassification.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.eventClassification.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {data.eventClassification.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-black text-xs sm:text-sm text-[#134F47]">
                <span className="w-2 h-2 rounded-full bg-[#E85B0D]" />
                <span>{cat.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#134F47]/85 leading-relaxed font-medium">
                {cat.desc}
              </p>
              <p className="text-xs text-[#E85B0D] font-bold mt-auto pt-1">
                {cat.details}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.eventClassification.closingNote}
        </p>
      </section>

      {/* 3.4 إعداد خطة التغطية الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-[#E85B0D]" />
            <span>3.4 {data.coveragePlanPrep.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.coveragePlanPrep.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.coveragePlanPrep.elements.map((el, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{el}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.coveragePlanPrep.closingNote}
        </div>
      </section>

      {/* 3.5 التحضير الإعلامي قبل الفعالية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[#E85B0D]" />
            <span>3.5 {data.preEventPrep.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.preEventPrep.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.preEventPrep.tasks.map((task, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{task}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.6 تنظيم فريق التغطية وتوزيع المسؤوليات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#E85B0D]" />
            <span>3.6 {data.teamOrganization.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.teamOrganization.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {data.teamOrganization.roles.map((r, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0" />
              <span>{r}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.teamOrganization.mergingNote}
          </div>
          <div className="p-3 rounded-xl bg-[#134F47]/5 border border-[#134F47]/15 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.teamOrganization.supervisionNote}
          </div>
        </div>
      </section>

      {/* 3.7 تنفيذ التغطية أثناء الفعالية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#E85B0D]" />
            <span>3.7 {data.executionDuringEvent.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.executionDuringEvent.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.executionDuringEvent.guidelines.map((g, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <span className="mt-0.5">{g}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.8 إدارة المواد الإعلامية وإنتاج المخرجات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Film className="w-5 h-5 text-[#E85B0D]" />
            <span>3.8 {data.materialsManagement.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.materialsManagement.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.materialsManagement.tasks.map((task, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{task}</span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.materialsManagement.diversityNote}
        </div>
      </section>

      {/* 3.9 النشر والتغطية الإعلامية المباشرة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Send className="w-5 h-5 text-[#E85B0D]" />
            <span>3.9 {data.publishingAndLiveCoverage.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.publishingAndLiveCoverage.intro}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.publishingAndLiveCoverage.approvalNote}
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.publishingAndLiveCoverage.guidelinesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.publishingAndLiveCoverage.guidelines.map((g, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.publishingAndLiveCoverage.responsibilityNote}
        </p>
      </section>

      {/* 3.10 التعامل مع المستجدات والحالات الطارئة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E85B0D]" />
            <span>3.10 {data.emergencyHandling.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.emergencyHandling.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.emergencyHandling.dutiesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.emergencyHandling.duties.map((duty, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{duty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.11 التغطية الختامية وما بعد الفعالية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Flag className="w-5 h-5 text-[#E85B0D]" />
            <span>3.11 {data.postEventCoverage.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.postEventCoverage.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.postEventCoverage.tasks.map((task, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{task}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.12 تقييم التغطية الإعلامية للفعاليات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-[#E85B0D]" />
            <span>3.12 {data.coverageEvaluation.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.coverageEvaluation.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.coverageEvaluation.aspectsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.coverageEvaluation.aspects.map((asp, idx) => (
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
          {data.coverageEvaluation.benefitNote}
        </div>
      </section>

      {/* 3.13 توثيق الفعاليات وأرشفة مخرجاتها */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Archive className="w-5 h-5 text-[#E85B0D]" />
            <span>3.13 {data.documentationAndArchiving.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.documentationAndArchiving.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.documentationAndArchiving.archiveItemsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.documentationAndArchiving.archiveItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.documentationAndArchiving.namingNote}
          </div>
          <div className="p-3 rounded-xl bg-[#134F47]/5 border border-[#134F47]/15 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.documentationAndArchiving.originalFilesNote}
          </div>
        </div>
      </section>

      {/* 3.14 مخرجات إدارة الفعاليات إعلامياً */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#E85B0D]" />
            <span>3.14 {data.outputs.title}</span>
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.outputs.intro}
          </p>
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

        <div className="p-4 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/15 text-xs sm:text-sm text-[#134F47]/95 font-bold leading-relaxed">
          {data.outputs.successMeasure}
        </div>
      </section>

    </div>
  );
};

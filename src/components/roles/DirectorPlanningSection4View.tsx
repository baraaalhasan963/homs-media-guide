import React from 'react';
import { PLANNING_SECTION_4_CONTENT } from '../../data/roles/directorPlanningContentSection4';
import {
  Radio,
  MessageSquare,
  Compass,
  Users2,
  CheckCircle2,
  CalendarDays,
  HelpCircle,
  ShieldCheck,
  FileText,
  GraduationCap,
  Sliders,
  AlertTriangle,
  Archive
} from 'lucide-react';

export const DirectorPlanningSection4View: React.FC = () => {
  const data = PLANNING_SECTION_4_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 4.1 الإطار العام للتنسيق */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Radio className="w-5 h-5 text-[#E85B0D]" />
            <span>4.1 {data.framework.title}</span>
          </h3>
          <div className="space-y-2.5 text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.framework.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2 قنوات التواصل وآلياته */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#E85B0D]" />
            <span>4.2 {data.communicationChannels.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.communicationChannels.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.communicationChannels.guidelines.map((g, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{g}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.communicationChannels.closingNote}
        </div>
      </section>

      {/* 4.3 التنسيق في الخطط والتوجهات الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#E85B0D]" />
            <span>4.3 {data.plansAndDirections.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.plansAndDirections.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.plansAndDirections.areasIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.plansAndDirections.areas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.plansAndDirections.independenceNote}
        </div>
      </section>

      {/* 4.4 التنسيق بشأن الحملات والمبادرات المشتركة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users2 className="w-5 h-5 text-[#E85B0D]" />
            <span>4.4 {data.jointCampaigns.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.jointCampaigns.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.jointCampaigns.dutiesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.jointCampaigns.duties.map((duty, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{duty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.jointCampaigns.proposalNote}
        </div>
      </section>

      {/* 4.5 اعتماد المواد الإعلامية قبل النشر (6 خطوات) */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#E85B0D]" />
            <span>4.5 {data.contentApproval.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.contentApproval.intro}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {data.contentApproval.steps.map((st) => (
            <div
              key={st.num}
              className="p-3 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 flex items-start gap-2.5"
            >
              <span className="w-6 h-6 rounded-lg bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {st.num}
              </span>
              <p className="text-xs sm:text-sm text-[#134F47]/90 font-medium leading-relaxed">
                {st.title}
              </p>
            </div>
          ))}
        </div>

        <div className="p-2.5 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold">
          {data.contentApproval.scopeNote}
        </div>

        {/* Submission guidelines */}
        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.contentApproval.submissionGuidelinesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.contentApproval.submissionGuidelines.map((g, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 font-bold leading-relaxed">
          {data.contentApproval.responsibilityNote}
        </div>
      </section>

      {/* 4.6 التنسيق في الفعاليات والتغطيات الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-[#E85B0D]" />
            <span>4.6 {data.eventsCoordination.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.eventsCoordination.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.eventsCoordination.areas.map((area, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{area}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.eventsCoordination.jointCoverageNote}
        </div>
      </section>

      {/* 4.7 طلب الدعم والاستشارات والتوجيه */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#E85B0D]" />
            <span>4.7 {data.supportAndConsulting.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.supportAndConsulting.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.supportAndConsulting.fields.map((f, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{f}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.supportAndConsulting.requestConditionNote}
          </div>
          <div className="p-3 rounded-xl bg-[#134F47]/5 border border-[#134F47]/15 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
            {data.supportAndConsulting.availabilityNote}
          </div>
        </div>
      </section>

      {/* 4.8 التنسيق بشأن إدارة الحسابات والأمن الرقمي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E85B0D]" />
            <span>4.8 {data.accountsAndSecurity.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.accountsAndSecurity.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.accountsAndSecurity.centralProceduresIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.accountsAndSecurity.centralProcedures.map((proc, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{proc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.accountsAndSecurity.commitmentNote}
        </div>

        <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-xs sm:text-sm text-red-900 font-bold leading-relaxed">
          {data.accountsAndSecurity.confidentialityNote}
        </div>
      </section>

      {/* 4.9 التقارير والمتابعة الدورية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E85B0D]" />
            <span>4.9 {data.reportsAndFollowUp.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.reportsAndFollowUp.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.reportsAndFollowUp.reportContentsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.reportsAndFollowUp.reportContents.map((content, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.reportsAndFollowUp.notesCommitmentNote}
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.reportsAndFollowUp.directContactNote}
        </p>
      </section>

      {/* 4.10 التنسيق في التدريب والتطوير وبناء القدرات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#E85B0D]" />
            <span>4.10 {data.trainingAndCapacity.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.trainingAndCapacity.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.trainingAndCapacity.areas.map((area, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{area}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.trainingAndCapacity.specialGuidanceNote}
        </div>
      </section>

      {/* 4.11 معالجة الملاحظات والتوجيهات وتداخل الأولويات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#E85B0D]" />
            <span>4.11 {data.feedbackHandling.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.feedbackHandling.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.feedbackHandling.guidelinesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.feedbackHandling.guidelines.map((g, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{g}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.feedbackHandling.priorityConflictNote}
        </div>
      </section>

      {/* 4.12 التنسيق في الحالات الطارئة والموضوعات الحساسة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E85B0D]" />
            <span>4.12 {data.emergencyCoordination.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.emergencyCoordination.intro}
          </p>
        </div>

        <div className="space-y-2 pr-2">
          {data.emergencyCoordination.rules.map((rule, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{rule}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.emergencyCoordination.closingNote}
        </div>
      </section>

      {/* 4.13 توثيق التنسيق وحفظ المراسلات والمواد */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Archive className="w-5 h-5 text-[#E85B0D]" />
            <span>4.13 {data.documentationAndArchiving.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.documentationAndArchiving.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.documentationAndArchiving.itemsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.documentationAndArchiving.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.documentationAndArchiving.closingNote}
        </div>
      </section>

      {/* 4.14 مخرجات التنسيق مع قسم الإعلام المركزي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#E85B0D]" />
            <span>4.14 {data.outputs.title}</span>
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.outputs.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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

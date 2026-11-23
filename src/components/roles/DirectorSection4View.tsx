import React from 'react';
import { SECTION_4_CONTENT } from '../../data/roles/directorContentSection4';
import {
  Users,
  ClipboardList,
  Activity,
  MessageSquare,
  GraduationCap,
  Sparkles,
  BarChart3,
  AlertTriangle,
  Scale,
  UserPlus,
  RefreshCw
} from 'lucide-react';

export const DirectorSection4View: React.FC = () => {
  const data = SECTION_4_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 4.1 مبادئ إدارة الفريق */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#E85B0D]" />
            <span>4.1 {data.principles.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.principles.intro}
          </p>
        </div>

        <div className="pt-2">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.principles.listIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.principles.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 flex flex-col gap-1"
              >
                <div className="flex items-center gap-2 font-black text-sm text-[#134F47]">
                  <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#134F47]/80 leading-relaxed pr-7 font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2 توزيع المهام ومتابعة الأعضاء */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-[#E85B0D]" />
            <span>4.2 {data.taskDistribution.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.taskDistribution.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.taskDistribution.proceduresIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.taskDistribution.procedures.map((proc, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{proc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.taskDistribution.closingNote}
        </div>
      </section>

      {/* 4.3 المتابعة التشغيلية اليومية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#E85B0D]" />
            <span>4.3 {data.dailyOperations.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.dailyOperations.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.dailyOperations.tasksIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.dailyOperations.tasks.map((task, idx) => (
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
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.dailyOperations.roleBoundaryNote}
        </div>
      </section>

      {/* 4.4 التواصل الداخلي والاجتماعات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#E85B0D]" />
            <span>4.4 {data.communicationAndMeetings.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.communicationAndMeetings.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.communicationAndMeetings.orgIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.communicationAndMeetings.orgItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.communicationAndMeetings.meetingsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.communicationAndMeetings.meetingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFF4E0]/30 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pt-1">
          {data.communicationAndMeetings.closingNote}
        </p>
      </section>

      {/* 4.5 تطوير مهارات أعضاء الفريق */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#E85B0D]" />
            <span>4.5 {data.skillDevelopment.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.skillDevelopment.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.skillDevelopment.methodsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.skillDevelopment.methods.map((method, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{method}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pt-1">
          {data.skillDevelopment.closingNote}
        </p>
      </section>

      {/* 4.6 التحفيز والتقدير */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#E85B0D]" />
            <span>4.6 {data.motivationAndAppreciation.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.motivationAndAppreciation.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.motivationAndAppreciation.methodsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.motivationAndAppreciation.methods.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#E85B0D] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.motivationAndAppreciation.closingNote}
        </div>
      </section>

      {/* 4.7 تقييم أداء أعضاء الفريق */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#E85B0D]" />
            <span>4.7 {data.performanceEvaluation.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.performanceEvaluation.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.performanceEvaluation.indicatorsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.performanceEvaluation.indicators.map((ind, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm font-medium text-[#134F47]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.performanceEvaluation.considerationsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.performanceEvaluation.considerations.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pt-1">
          {data.performanceEvaluation.closingNote}
        </p>
      </section>

      {/* 4.8 معالجة التقصير وضعف الالتزام (3 مراحل) */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E85B0D]" />
            <span>4.8 {data.handlingNegligence.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.handlingNegligence.intro}
          </p>
        </div>

        {/* 3 Stages Cards */}
        <div className="space-y-3.5">
          {data.handlingNegligence.stages.map((stg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/15 space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#134F47] text-white text-xs font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <h4 className="text-sm sm:text-base font-black text-[#134F47]">
                  {stg.title}
                </h4>
              </div>

              <div className="space-y-1.5 pr-8">
                {stg.items.map((it, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.handlingNegligence.closingNote}
        </div>
      </section>

      {/* 4.9 التعامل مع الخلافات داخل الفريق */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#E85B0D]" />
            <span>4.9 {data.conflictResolution.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.conflictResolution.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.conflictResolution.stepsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.conflictResolution.steps.map((st, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{st}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-xs sm:text-sm text-red-900 font-bold leading-relaxed">
          {data.conflictResolution.prohibitionNote}
        </div>
      </section>

      {/* 4.10 استقطاب أعضاء ومتطوعين جدد */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#E85B0D]" />
            <span>4.10 {data.recruitment.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.recruitment.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.recruitment.dutiesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.recruitment.duties.map((duty, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{duty}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pt-1">
          {data.recruitment.closingNote}
        </p>
      </section>

      {/* 4.11 الحفاظ على استمرارية الفريق وانتقال الخبرات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[#E85B0D]" />
            <span>4.11 {data.continuityAndHandover.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.continuityAndHandover.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.continuityAndHandover.mechanismsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.continuityAndHandover.mechanisms.map((mech, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{mech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.continuityAndHandover.absenceProcedure}
        </div>
      </section>

    </div>
  );
};

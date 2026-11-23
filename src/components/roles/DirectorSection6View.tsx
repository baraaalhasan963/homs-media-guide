import React from 'react';
import { SECTION_6_CONTENT } from '../../data/roles/directorContentSection6';
import {
  GitFork,
  Building,
  Radio,
  Share2,
  Users,
  CalendarCheck,
  MessageSquare,
  AlertOctagon,
  Network,
  Wrench,
  FileText
} from 'lucide-react';

export const DirectorSection6View: React.FC = () => {
  const data = SECTION_6_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 6.1 الإطار العام للعلاقات التنظيمية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <GitFork className="w-5 h-5 text-[#E85B0D]" />
            <span>6.1 {data.framework.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.framework.intro}
          </p>
        </div>

        <div className="pt-2">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.framework.tracksIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.framework.tracks.map((tr, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2 font-black text-sm text-[#134F47]">
                  <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{tr.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#134F47]/80 leading-relaxed font-medium">
                  {tr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.framework.closingNote}
        </div>
      </section>

      {/* 6.2 العلاقة مع رئيس الهيئة الطلابية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#E85B0D]" />
            <span>6.2 {data.relationWithUnionHead.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.relationWithUnionHead.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.relationWithUnionHead.mechanismsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.relationWithUnionHead.mechanisms.map((mech, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{mech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.relationWithUnionHead.considerationsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.relationWithUnionHead.considerations.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/90 font-medium leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.3 العلاقة مع قسم الإعلام المركزي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Radio className="w-5 h-5 text-[#E85B0D]" />
            <span>6.3 {data.relationWithCentralMedia.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.relationWithCentralMedia.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.relationWithCentralMedia.areas.map((area, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{area}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.relationWithCentralMedia.closingNote}
        </div>
      </section>

      {/* 6.4 العلاقة مع بقية المكاتب الإعلامية في الهيئات الطلابية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#E85B0D]" />
            <span>6.4 {data.relationWithOtherOffices.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.relationWithOtherOffices.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.relationWithOtherOffices.aspectsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.relationWithOtherOffices.aspects.map((asp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 flex flex-col gap-1"
              >
                <div className="flex items-center gap-2 font-black text-xs sm:text-sm text-[#134F47]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D]" />
                  <span>{asp.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#134F47]/80 leading-relaxed font-medium pr-3.5">
                  {asp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.relationWithOtherOffices.coordinationNote}
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.relationWithOtherOffices.noSubordinationNote}
        </p>
      </section>

      {/* 6.5 التنسيق مع الجهات والأقسام داخل الهيئة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#E85B0D]" />
            <span>6.5 {data.internalCoordination.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.internalCoordination.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.internalCoordination.tasksIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.internalCoordination.tasks.map((task, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-[#FFF4E0]/30 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium leading-relaxed">
            {data.internalCoordination.timingNote}
          </div>
          <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-xs sm:text-sm text-red-900 font-bold leading-relaxed">
            {data.internalCoordination.verificationNote}
          </div>
        </div>
      </section>

      {/* 6.6 آلية استقبال طلبات التغطية الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-[#E85B0D]" />
            <span>6.6 {data.coverageRequestsMechanism.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.coverageRequestsMechanism.intro}
          </p>
        </div>

        {/* 6 Steps */}
        <div className="space-y-3">
          {data.coverageRequestsMechanism.steps.map((st) => (
            <div
              key={st.num}
              className="p-3.5 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 flex items-start gap-3"
            >
              <span className="w-7 h-7 rounded-lg bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {st.num}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-black text-[#134F47]">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Considerations */}
        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.coverageRequestsMechanism.considerationsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.coverageRequestsMechanism.considerations.map((c, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.7 قنوات التواصل والتنسيق الرسمية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#E85B0D]" />
            <span>6.7 {data.officialChannels.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.officialChannels.intro}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/15">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#134F47] text-white">
                <th className="p-3 font-black border-l border-white/20 w-1/3">الجهة</th>
                <th className="p-3 font-black w-2/3">قناة أو وسيلة التنسيق</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.officialChannels.rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFF4E0]/15' : 'bg-white'}>
                  <td className="p-3 font-bold text-[#134F47] border-l border-[#134F47]/10 leading-relaxed">
                    {row.entity}
                  </td>
                  <td className="p-3 font-medium text-[#134F47]/90 leading-relaxed">
                    {row.channel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.officialChannels.determinationNote}
        </p>

        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 font-bold leading-relaxed">
          {data.officialChannels.noOralOnlyNote}
        </div>
      </section>

      {/* 6.8 التعامل مع التداخلات والتعارض في التوجيهات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-[#E85B0D]" />
            <span>6.8 {data.conflictsHandling.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.conflictsHandling.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.conflictsHandling.rulesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.conflictsHandling.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/90 font-medium leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-xs sm:text-sm text-red-900 font-bold leading-relaxed">
          {data.conflictsHandling.prohibitionNote}
        </div>
      </section>

      {/* 6.9 التنسيق في الأنشطة والمشاريع المشتركة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Network className="w-5 h-5 text-[#E85B0D]" />
            <span>6.9 {data.jointProjects.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.jointProjects.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.jointProjects.scopeIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.jointProjects.scopeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.jointProjects.closingWarning}
        </div>
      </section>

      {/* 6.10 التنسيق بشأن الاحتياجات والدعم */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-[#E85B0D]" />
            <span>6.10 {data.needsAndSupport.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.needsAndSupport.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.needsAndSupport.needsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.needsAndSupport.needs.map((need, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{need}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.needsAndSupport.justificationNote}
        </div>
      </section>

      {/* 6.11 التقارير والتواصل الدوري */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E85B0D]" />
            <span>6.11 {data.periodicReporting.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.periodicReporting.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.periodicReporting.reportContentsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.periodicReporting.reportContents.map((content, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed mt-0.5">{content}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.periodicReporting.unionHeadReportingNote}
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.periodicReporting.internalSummariesNote}
        </p>
      </section>

    </div>
  );
};

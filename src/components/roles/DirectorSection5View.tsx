import {
  AlertTriangle,
  Briefcase,
  Building,
  CheckCircle2,
  Lock,
  Megaphone,
  Radio,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Table,
  UserCheck,
  UserCog,
  Users,
} from 'lucide-react';
import type React from 'react';
import { SECTION_5_CONTENT } from '../../data/roles/directorContentSection5';

export const DirectorSection5View: React.FC = () => {
  const data = SECTION_5_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      {/* 5.1 الإطار العام للصلاحيات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#E85B0D]" />
            <span>5.1 {data.generalFramework.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.generalFramework.intro}</p>
        </div>

        <div className="pt-2">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">{data.generalFramework.principlesIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.generalFramework.principles.map((p, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 flex flex-col gap-1"
              >
                <div className="flex items-center gap-2 font-black text-sm text-[#134F47]">
                  <span className="w-5 h-5 rounded-full bg-[#134F47] text-white text-xs flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{p.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#134F47]/80 leading-relaxed pr-7 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.2 صلاحيات مدير المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#E85B0D]" />
            <span>5.2 {data.directorAuthorities.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.directorAuthorities.intro}</p>
        </div>

        <div className="space-y-2 pr-2">
          {data.directorAuthorities.authorities.map((auth, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{auth}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.directorAuthorities.responsibilityNote}
        </div>
      </section>

      {/* 5.3 صلاحيات نائب مدير المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <UserCog className="w-5 h-5 text-[#E85B0D]" />
            <span>5.3 {data.deputyAuthorities.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.deputyAuthorities.intro}</p>
        </div>

        <div className="space-y-2 pr-2">
          {data.deputyAuthorities.authorities.map((auth, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{auth}</span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.deputyAuthorities.scopeNote}
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.deputyAuthorities.boundaryNote}
        </p>
      </section>

      {/* 5.4 صلاحيات أعضاء المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#E85B0D]" />
            <span>5.4 {data.membersAuthorities.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.membersAuthorities.intro}</p>
        </div>

        <div className="space-y-2 pr-2">
          {data.membersAuthorities.rights.map((right, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{right}</span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-xs sm:text-sm text-red-900 font-bold leading-relaxed">
          {data.membersAuthorities.limitationsNote}
        </div>
      </section>

      {/* 5.5 صلاحيات مسؤول إدارة المنصات الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#E85B0D]" />
            <span>5.5 {data.platformsManagerAuthorities.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.platformsManagerAuthorities.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.platformsManagerAuthorities.responsibilities.map((resp, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{resp}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.platformsManagerAuthorities.managementTeamNote}
        </div>
      </section>

      {/* 5.6 صلاحيات رئيس الهيئة الطلابية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#E85B0D]" />
            <span>5.6 {data.unionHeadAuthorities.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.unionHeadAuthorities.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">{data.unionHeadAuthorities.casesIntro}</p>
          <div className="space-y-2 pr-2">
            {data.unionHeadAuthorities.cases.map((c, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-bold leading-relaxed">
          {data.unionHeadAuthorities.routineExemptionNote}
        </div>
      </section>

      {/* 5.7 صلاحيات قسم الإعلام المركزي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Radio className="w-5 h-5 text-[#E85B0D]" />
            <span>5.7 {data.centralMediaAuthorities.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.centralMediaAuthorities.intro}</p>
        </div>

        <div className="space-y-2 pr-2">
          {data.centralMediaAuthorities.authorities.map((auth, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
              <span>{auth}</span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.centralMediaAuthorities.operationalBoundaryNote}
        </div>
      </section>

      {/* 5.8 مصفوفة الصلاحيات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Table className="w-5 h-5 text-[#E85B0D]" />
            <span>5.8 {data.authorityMatrix.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.authorityMatrix.intro}</p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/15">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#134F47] text-white">
                <th className="p-3 font-black border-l border-white/20">المجال</th>
                <th className="p-3 font-black border-l border-white/20">المنفذ (R)</th>
                <th className="p-3 font-black border-l border-white/20">صاحب الاعتماد (A)</th>
                <th className="p-3 font-black">يُحاط علماً (I)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.authorityMatrix.rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFF4E0]/15' : 'bg-white'}>
                  <td className="p-3 font-bold text-[#134F47] border-l border-[#134F47]/10 leading-relaxed">
                    {row.domain}
                  </td>
                  <td className="p-3 font-medium text-[#134F47]/90 border-l border-[#134F47]/10 leading-relaxed">
                    {row.executor}
                  </td>
                  <td className="p-3 font-bold text-[#71122B] border-l border-[#134F47]/10 leading-relaxed">
                    {row.approver}
                  </td>
                  <td className="p-3 font-medium text-[#134F47]/80 leading-relaxed">{row.informed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/75 font-medium leading-relaxed pr-1">
          {data.authorityMatrix.closingNote}
        </p>
      </section>

      {/* 5.9 ضوابط إعداد المحتوى واعتماده ونشره */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#E85B0D]" />
            <span>5.9 {data.contentWorkflowAndControls.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.contentWorkflowAndControls.intro}
          </p>
        </div>

        {/* 6 Steps */}
        <div className="space-y-3">
          {data.contentWorkflowAndControls.steps.map((st) => (
            <div
              key={st.num}
              className="p-3.5 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 flex items-start gap-3"
            >
              <span className="w-7 h-7 rounded-lg bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {st.num}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-black text-[#134F47]">{st.title}</h4>
                <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="pt-2 border-t border-[#134F47]/10">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.contentWorkflowAndControls.controlsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.contentWorkflowAndControls.controls.map((ctrl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{ctrl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.10 ضوابط إدارة الحسابات والأمن الرقمي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#E85B0D]" />
            <span>5.10 {data.digitalSecurityControls.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.digitalSecurityControls.intro}</p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.digitalSecurityControls.controlsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.digitalSecurityControls.controls.map((ctrl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{ctrl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.11 ضوابط التصريحات والمواقف الرسمية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-[#E85B0D]" />
            <span>5.11 {data.officialStatementsControls.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.officialStatementsControls.intro}
          </p>
        </div>

        <div className="space-y-2.5 pr-2">
          {data.officialStatementsControls.controls.map((ctrl, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/90 font-medium leading-relaxed"
            >
              <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <span className="mt-0.5">{ctrl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5.12 ضوابط السلوك المهني والتمثيل الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#E85B0D]" />
            <span>5.12 {data.professionalConductControls.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.professionalConductControls.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.professionalConductControls.controls.map((ctrl, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] flex-shrink-0 mt-2" />
              <span className="leading-relaxed">{ctrl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5.13 التعامل مع الحالات الاستثنائية والطارئة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E85B0D]" />
            <span>5.13 {data.emergencyAndExceptionalHandling.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.emergencyAndExceptionalHandling.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.emergencyAndExceptionalHandling.guidelinesIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.emergencyAndExceptionalHandling.guidelines.map((g, idx) => (
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
          {data.emergencyAndExceptionalHandling.absenceProcedure}
        </div>
      </section>

      {/* 5.14 ضوابط الخصوصية وأذونات التصوير والذكاء الاصطناعي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E85B0D]" />
            <span>5.14 {data.privacyAndAiControls.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">{data.privacyAndAiControls.intro}</p>
        </div>

        <div className="space-y-3">
          {data.privacyAndAiControls.pillars.map((pillar, pIdx) => (
            <div key={pIdx} className="p-4 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-black text-[#134F47]">{pillar.title}</h4>
              <div className="space-y-2 pr-2">
                {pillar.points.map((pt, ptIdx) => (
                  <div
                    key={ptIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF8F6] border border-[#C51A1B]/25 border-r-4 border-r-[#C51A1B] text-xs sm:text-sm font-bold text-[#71122B] leading-relaxed">
          {data.privacyAndAiControls.closingWarning}
        </div>
      </section>
    </div>
  );
};

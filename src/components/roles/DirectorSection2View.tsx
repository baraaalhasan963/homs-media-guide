import React from 'react';
import { SECTION_2_CONTENT } from '../../data/roles/directorContentSection2';
import {
  UserCheck,
  ClipboardList,
  Calendar,
  Layers,
  Users,
  Network,
  Share2,
  CheckCircle,
  Shield,
  FileBarChart,
  AlertTriangle,
  GitBranch,
  Award,
  AlertCircle
} from 'lucide-react';

export const DirectorSection2View: React.FC = () => {
  const data = SECTION_2_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 2.1 الدور الوظيفي لمدير المكتب */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-3 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.jobRole.title}</span>
        </h3>
        <div className="space-y-3 text-sm text-[#134F47]/90 leading-relaxed font-medium">
          {data.jobRole.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 2.2 المسؤوليات الإدارية والتنظيمية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.adminResponsibilities.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.adminResponsibilities.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.adminResponsibilities.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border-r-4 border-r-[#134F47] text-xs sm:text-sm font-black text-[#134F47]">
          {data.adminResponsibilities.output}
        </div>
      </section>

      {/* 2.3 المسؤوليات التخطيطية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.planningResponsibilities.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.planningResponsibilities.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.planningResponsibilities.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border-r-4 border-r-[#E85B0D] text-xs sm:text-sm font-black text-[#134F47]">
          {data.planningResponsibilities.output}
        </div>
      </section>

      {/* 2.4 المسؤوليات الإشرافية والفنية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.supervisoryResponsibilities.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.supervisoryResponsibilities.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.supervisoryResponsibilities.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.supervisoryResponsibilities.note}
        </div>
      </section>

      {/* 2.5 مسؤوليات إدارة الفريق وتطويره */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.teamManagement.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold mb-4">
          {data.teamManagement.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.teamManagement.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm font-medium text-[#134F47]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] mt-2 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.6 مسؤوليات التنسيق والتمثيل الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Network className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.coordinationRepresentation.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.coordinationRepresentation.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.coordinationRepresentation.entities.map((ent, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border-2 border-[#134F47]/15 bg-gradient-to-b from-white to-[#FFF4E0]/25 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-black text-[#134F47] pb-2 mb-3 border-b border-[#134F47]/10">
                  {ent.name}
                </h4>
                <ul className="space-y-1.5 pr-2 border-r-2 border-[#134F47]/15 mb-3">
                  {ent.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm font-medium text-[#134F47]/90 leading-relaxed">
                      • {pt}
                    </li>
                  ))}
                </ul>
              </div>
              {ent.note && (
                <div className="p-2.5 rounded-xl bg-[#FFF4E0]/60 border border-[#134F47]/10 text-xs font-bold text-[#71122B] leading-relaxed mt-2">
                  {ent.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 2.7 مسؤوليات إدارة المنصات الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.platformsManagement.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.platformsManagement.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.platformsManagement.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border border-[#134F47]/15 text-xs sm:text-sm font-bold text-[#134F47] leading-relaxed">
          {data.platformsManagement.note}
        </div>
      </section>

      {/* 2.8 مسؤوليات اعتماد المحتوى والنشر */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.approvalAndPublishing.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.approvalAndPublishing.intro}
          </p>
        </div>

        {/* 3 Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.approvalAndPublishing.stages.map((stg, sIdx) => (
            <div
              key={sIdx}
              className="p-5 rounded-2xl border-2 border-[#134F47]/20 bg-gradient-to-b from-white to-[#FFF4E0]/30 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-black text-[#134F47] pb-2 mb-3 border-b-2 border-[#E85B0D]/30">
                  {stg.name}
                </h4>
                <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/15">
                  {stg.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                      • {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Approval Rules */}
        <div className="bg-[#FFF4E0]/30 rounded-2xl p-4 sm:p-5 border border-[#134F47]/15 space-y-3">
          <h4 className="text-sm font-black text-[#71122B]">
            {data.approvalAndPublishing.rulesTitle}
          </h4>
          <ul className="space-y-1.5 pr-3 border-r-2 border-[#71122B]/30">
            {data.approvalAndPublishing.rules.map((rule, rIdx) => (
              <li key={rIdx} className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                • {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2.9 استقلالية المكتب الإعلامي وحدود التدخل الإداري */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.independence.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
            {data.independence.intro}
          </p>
        </div>

        <div className="space-y-2 pr-3 border-r-2 border-[#71122B]/30">
          {data.independence.interventionCases.map((c, cIdx) => (
            <div key={cIdx} className="text-xs sm:text-sm font-bold text-[#134F47]">
              {cIdx + 1}. {c}
            </div>
          ))}
        </div>

        <p className="text-xs font-semibold text-[#134F47]/80">
          {data.independence.casesConclusion}
        </p>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0] border-r-4 border-r-[#71122B] text-xs sm:text-sm font-black text-[#71122B]">
          {data.independence.principle}
        </div>
      </section>

      {/* 2.10 مسؤوليات التوثيق والتقييم والتقارير */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <FileBarChart className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.documentationAndReporting.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.documentationAndReporting.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.documentationAndReporting.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm font-medium text-[#134F47]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#134F47] mt-2 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Monthly Report Box */}
        <div className="p-5 rounded-2xl border-2 border-[#134F47]/20 bg-gradient-to-b from-white to-[#FFF4E0]/40 space-y-3">
          <h4 className="text-sm sm:text-base font-black text-[#134F47]">
            {data.documentationAndReporting.monthlyReport.title}
          </h4>
          <p className="text-xs text-[#134F47]/80 font-semibold">
            {data.documentationAndReporting.monthlyReport.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.documentationAndReporting.monthlyReport.items.map((mItem, mIdx) => (
              <div key={mIdx} className="text-xs sm:text-sm font-medium text-[#134F47] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-[11px] font-black flex items-center justify-center flex-shrink-0">
                  {mIdx + 1}
                </span>
                <span>{mItem}</span>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-[#FFF4E0] border border-[#134F47]/10 text-xs font-bold text-[#71122B] leading-relaxed mt-2">
            {data.documentationAndReporting.monthlyReport.note}
          </div>
        </div>
      </section>

      {/* 2.11 المهام الاستثنائية وإدارة الحالات الطارئة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.contingencies.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.contingencies.intro}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/20 shadow-xs">
          <table className="w-full text-right text-xs sm:text-sm">
            <thead className="bg-[#134F47] text-white">
              <tr>
                <th className="py-3 px-4 font-black w-1/3 border-l border-white/10">الحالة</th>
                <th className="py-3 px-4 font-black w-2/3">الإجراء المتوقع</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.contingencies.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FFF4E0]/30 transition-colors">
                  <td className="py-2.5 px-4 font-black text-[#134F47] bg-[#FFF4E0]/20 border-l border-[#134F47]/10">
                    {row.condition}
                  </td>
                  <td className="py-2.5 px-4 text-[#134F47]/90 font-medium">
                    {row.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF8F6] border border-[#C51A1B]/30 border-r-4 border-r-[#C51A1B] text-xs sm:text-sm font-black text-[#71122B]">
          {data.contingencies.restriction}
        </div>
      </section>

      {/* 2.12 تفويض المهام ومتابعة تنفيذها */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.delegation.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.delegation.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.delegation.conditions.map((cond, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {cond}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-[#134F47]/85 font-semibold">
          {data.delegation.deputyNote}
        </p>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0] border-r-4 border-r-[#E85B0D] text-xs sm:text-sm font-black text-[#134F47]">
          {data.delegation.principle}
        </div>
      </section>

      {/* 2.13 معايير نجاح مدير المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.successCriteria.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.successCriteria.intro}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/20 shadow-xs">
          <table className="w-full text-right text-xs sm:text-sm">
            <thead className="bg-[#134F47] text-white">
              <tr>
                <th className="py-3 px-4 font-black w-1/3 border-l border-white/10">مجال التقييم</th>
                <th className="py-3 px-4 font-black w-2/3">مؤشرات الأداء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.successCriteria.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FFF4E0]/30 transition-colors">
                  <td className="py-2.5 px-4 font-black text-[#134F47] bg-[#FFF4E0]/20 border-l border-[#134F47]/10">
                    {row.area}
                  </td>
                  <td className="py-2.5 px-4 text-[#134F47]/90 font-medium">
                    {row.metric}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.successCriteria.conclusion}
        </div>
      </section>

    </div>
  );
};

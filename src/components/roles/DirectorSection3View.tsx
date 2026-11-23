import React from 'react';
import { SECTION_3_CONTENT } from '../../data/roles/directorContentSection3';
import {
  Users,
  Network,
  UserCheck,
  UserPlus,
  PenTool,
  Camera,
  Film,
  Share2,
  FolderArchive,
  Layers,
  SlidersHorizontal,
  CheckSquare,
  MessageSquare,
  Repeat
} from 'lucide-react';

export const DirectorSection3View: React.FC = () => {
  const data = SECTION_3_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 3.1 التشكيل التنظيمي للمكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.orgStructure.title}</span>
          </h3>
          <div className="space-y-2 text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.orgStructure.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.orgStructure.levelsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.orgStructure.levels.map((lvl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
              >
                <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                  {lvl}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.2 الهيكل الوظيفي المقترح (مخطط هرمي بصري) */}
      <section className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Network className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.jobChart.title}</span>
          </h3>
        </div>

        {/* Visual Org Tree */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">
          
          {/* Level 1: Director */}
          <div className="w-full max-w-xs p-4 rounded-2xl bg-[#134F47] text-white shadow-md border-2 border-[#134F47]">
            <h4 className="text-sm sm:text-base font-black text-white">
              {data.jobChart.director.title}
            </h4>
            <p className="text-xs text-[#FFF4E0]/85 font-medium mt-0.5">
              {data.jobChart.director.subtitle}
            </p>
          </div>

          <div className="w-0.5 h-6 bg-[#134F47]/30" />

          {/* Level 2: Deputy */}
          <div className="w-full max-w-xs p-3.5 rounded-2xl bg-[#FFF4E0] border-2 border-[#134F47]/30 shadow-xs">
            <h4 className="text-sm font-black text-[#134F47]">
              {data.jobChart.deputy.title}
            </h4>
            <p className="text-xs text-[#134F47]/80 font-medium mt-0.5">
              {data.jobChart.deputy.subtitle}
            </p>
          </div>

          <div className="w-0.5 h-6 bg-[#134F47]/30" />

          {/* Level 3: 4 Specializations */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.jobChart.roles.map((r, rIdx) => (
              <div
                key={rIdx}
                className="p-3.5 rounded-xl bg-white border-2 border-[#134F47]/15 shadow-xs flex flex-col justify-between"
              >
                <h5 className="text-xs sm:text-sm font-black text-[#134F47]">
                  {r.title}
                </h5>
                <p className="text-[11px] text-[#134F47]/70 font-semibold mt-1">
                  {r.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="w-0.5 h-6 bg-[#134F47]/30" />

          {/* Level 4: Members & Volunteers */}
          <div className="w-full max-w-md p-3.5 rounded-2xl bg-[#FFF4E0]/50 border border-dashed border-[#134F47]/30">
            <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
              {data.jobChart.members.title}
            </h4>
            <p className="text-xs text-[#134F47]/75 font-medium mt-0.5">
              {data.jobChart.members.subtitle}
            </p>
          </div>

        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.jobChart.note}
        </div>
      </section>

      {/* 3.3 مدير المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.directorRole.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
          {data.directorRole.intro}
        </p>
        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20 pt-1">
          {data.directorRole.items.map((it, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {it}
            </li>
          ))}
        </ul>
      </section>

      {/* 3.4 نائب مدير المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.deputyRole.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.deputyRole.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.deputyRole.items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {it}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#FFF4E0]/50 border-r-4 border-r-[#134F47] space-y-2">
          <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
            {data.deputyRole.authorityTitle}
          </h4>
          <ul className="space-y-1.5 pr-2">
            {data.deputyRole.authorityPoints.map((pt, pIdx) => (
              <li key={pIdx} className="text-xs sm:text-sm font-medium text-[#134F47]">
                • {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3.5 مسؤول اختصاص التحرير وصناعة المحتوى */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <PenTool className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.editorialRole.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.editorialRole.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.editorialRole.items.map((it, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {it}
            </li>
          ))}
        </ul>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border border-[#134F47]/15 text-xs sm:text-sm font-black text-[#134F47]">
          {data.editorialRole.expectedOutputs}
        </div>
      </section>

      {/* 3.6 مسؤول اختصاص التصوير والتغطية الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.photographyRole.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.photographyRole.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.photographyRole.items.map((it, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {it}
            </li>
          ))}
        </ul>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border border-[#134F47]/15 text-xs sm:text-sm font-black text-[#134F47]">
          {data.photographyRole.expectedOutputs}
        </div>
      </section>

      {/* 3.7 مسؤول اختصاص التصميم والمونتاج */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Film className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.designMontageRole.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.designMontageRole.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.designMontageRole.items.map((it, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {it}
            </li>
          ))}
        </ul>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border border-[#134F47]/15 text-xs sm:text-sm font-black text-[#134F47]">
          {data.designMontageRole.expectedOutputs}
        </div>
      </section>

      {/* 3.8 مسؤول اختصاص إدارة المنصات والنشر */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.platformsRole.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.platformsRole.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.platformsRole.items.map((it, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {it}
            </li>
          ))}
        </ul>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/60 border border-[#134F47]/15 text-xs sm:text-sm font-black text-[#134F47]">
          {data.platformsRole.expectedOutputs}
        </div>
      </section>

      {/* 3.9 مهام الأرشفة والتوثيق الداخلي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <FolderArchive className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.archivingRole.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.archivingRole.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.archivingRole.items.map((it, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {it}
            </li>
          ))}
        </ul>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.archivingRole.note}
        </div>
      </section>

      {/* 3.10 آلية تشكيل المكتب وتوزيع الاختصاصات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.formationModels.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.formationModels.intro}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FFF4E0]/30 border border-[#134F47]/10 space-y-2">
          <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
            {data.formationModels.considerationsTitle}
          </h4>
          <ul className="space-y-1.5 pr-3 border-r-2 border-[#134F47]/20">
            {data.formationModels.considerations.map((c, cIdx) => (
              <li key={cIdx} className="text-xs sm:text-sm font-medium text-[#134F47]">
                • {c}
              </li>
            ))}
          </ul>
        </div>

        {/* 3 Models Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.formationModels.models.map((mod, mIdx) => (
            <div
              key={mIdx}
              className="p-5 rounded-2xl border-2 border-[#134F47]/20 bg-gradient-to-b from-white to-[#FFF4E0]/25 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-black text-[#134F47] mb-0.5">
                  {mod.name}
                </h4>
                <p className="text-xs font-bold text-[#E85B0D] pb-2 mb-3 border-b border-[#134F47]/10">
                  {mod.desc}
                </p>
                <ul className="space-y-1.5 pr-2 border-r-2 border-[#134F47]/15">
                  {mod.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm font-medium text-[#134F47]/90 leading-relaxed">
                      • {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.formationModels.conclusion}
        </div>
      </section>

      {/* 3.11 ضوابط توزيع المهام والاختصاصات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.distributionRules.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.distributionRules.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.distributionRules.items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {it}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3.12 آلية التكليف ومتابعة المهام */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.taskWorkflow.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.taskWorkflow.intro}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/20 shadow-xs">
          <table className="w-full text-right text-xs sm:text-sm">
            <thead className="bg-[#134F47] text-white">
              <tr>
                <th className="py-3 px-4 font-black w-1/3 border-l border-white/10">المرحلة</th>
                <th className="py-3 px-4 font-black w-2/3">الإجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.taskWorkflow.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FFF4E0]/30 transition-colors">
                  <td className="py-2.5 px-4 font-black text-[#134F47] bg-[#FFF4E0]/20 border-l border-[#134F47]/10">
                    {row.stage}
                  </td>
                  <td className="py-2.5 px-4 text-[#134F47]/90 font-medium">
                    {row.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.taskWorkflow.conclusion}
        </div>
      </section>

      {/* 3.13 آلية التواصل الداخلي بين أعضاء المكتب */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.internalCommunication.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.internalCommunication.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.internalCommunication.channels.map((ch, idx) => (
            <li key={idx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {ch}
            </li>
          ))}
        </ul>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs sm:text-sm font-bold text-[#134F47]/80 leading-relaxed">
          {data.internalCommunication.conclusion}
        </div>
      </section>

      {/* 3.14 تسليم واستلام المسؤوليات */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <Repeat className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.handover.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.handover.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.handover.items.map((it, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {it}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0] border-r-4 border-r-[#134F47] text-xs sm:text-sm font-black text-[#134F47]">
          {data.handover.conclusion}
        </div>
      </section>

    </div>
  );
};

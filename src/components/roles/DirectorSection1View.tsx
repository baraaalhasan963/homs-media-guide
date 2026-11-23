import React from 'react';
import { SECTION_1_CONTENT } from '../../data/roles/directorContent';
import {
  Building2,
  Eye,
  Send,
  Target,
  Scale,
  GitFork,
  Share2,
  CheckCircle2,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export const DirectorSection1View: React.FC = () => {
  const data = SECTION_1_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 1.1 ماهية المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-3 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.whatIs.title}</span>
        </h3>
        <div className="space-y-3 text-sm text-[#134F47]/90 leading-relaxed font-medium">
          {data.whatIs.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 1.2 & 1.3 الرؤية والرسالة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1.2 الرؤية */}
        <section className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 shadow-xs flex flex-col justify-between border-t-4 border-t-[#134F47]">
          <div>
            <h3 className="text-base font-black text-[#134F47] mb-2 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#134F47]" />
              <span>{data.vision.title}</span>
            </h3>
            <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
              {data.vision.text}
            </p>
          </div>
        </section>

        {/* 1.3 الرسالة */}
        <section className="bg-white border-2 border-[#E85B0D]/20 rounded-2xl p-5 shadow-xs flex flex-col justify-between border-t-4 border-t-[#E85B0D]">
          <div>
            <h3 className="text-base font-black text-[#134F47] mb-2 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#E85B0D]" />
              <span>{data.mission.title}</span>
            </h3>
            <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
              {data.mission.text}
            </p>
          </div>
        </section>
      </div>

      {/* 1.4 الأهداف */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.goals.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold mb-4">
          {data.goals.intro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.goals.items.map((goal, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF4E0]/30 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#134F47] text-[#FFF4E0] text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#134F47] leading-relaxed">
                {goal}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 1.5 المبادئ الناظمة للعمل الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.principles.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold mb-4">
          {data.principles.intro}
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#134F47]/20 shadow-xs">
          <table className="w-full text-right text-xs sm:text-sm">
            <thead className="bg-[#134F47] text-white">
              <tr>
                <th className="py-3 px-4 font-black w-1/3 border-l border-white/10">المبدأ</th>
                <th className="py-3 px-4 font-black w-2/3">المقصود به</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#134F47]/10">
              {data.principles.table.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FFF4E0]/30 transition-colors">
                  <td className="py-2.5 px-4 font-black text-[#134F47] bg-[#FFF4E0]/20 border-l border-[#134F47]/10">
                    {row.principle}
                  </td>
                  <td className="py-2.5 px-4 text-[#134F47]/90 font-medium">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 1.6 الموقع التنظيمي والارتباط الإداري والتنفيذي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
            <GitFork className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.orgPosition.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold">
            {data.orgPosition.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.orgPosition.tracks.map((track, tIdx) => (
            <div
              key={tIdx}
              className={`p-5 rounded-2xl border-2 ${
                tIdx === 0
                  ? 'border-[#71122B]/20 bg-gradient-to-b from-[#FFFDF9] to-[#FFF4E0]/30'
                  : 'border-[#134F47]/20 bg-gradient-to-b from-[#FFFDF9] to-[#FFF4E0]/30'
              }`}
            >
              <h4 className={`text-sm font-black mb-1 ${
                tIdx === 0 ? 'text-[#71122B]' : 'text-[#134F47]'
              }`}>
                {track.title}
              </h4>
              <p className="text-xs font-bold text-[#134F47]/80 mb-3">
                {track.subtitle}
              </p>
              <ul className="space-y-1.5 pr-3 border-r-2 border-[#134F47]/20">
                {track.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs sm:text-sm font-medium text-[#134F47]/90">
                    • {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#FFF4E0]/50 border border-[#134F47]/15 text-xs font-bold text-[#134F47] leading-relaxed">
          {data.orgPosition.conclusion}
        </div>
      </section>

      {/* 1.7 إدارة الحسابات والمنصات الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#E85B0D]" />
            <span>{data.accountsManagement.title}</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed whitespace-pre-line mb-3">
            {data.accountsManagement.intro}
          </p>
        </div>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20">
          {data.accountsManagement.rules.map((rule, rIdx) => (
            <li key={rIdx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {rule}
            </li>
          ))}
        </ul>

        {/* Callout Alert Note */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#FFF4E0] border border-[#E85B0D]/40 border-r-4 border-r-[#E85B0D]">
          <AlertCircle className="w-5 h-5 text-[#E85B0D] flex-shrink-0 mt-0.5" />
          <span className="text-xs sm:text-sm font-black text-[#71122B] leading-relaxed">
            {data.accountsManagement.note}
          </span>
        </div>
      </section>

      {/* 1.8 نطاق مسؤوليات المكتب الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.responsibilities.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#134F47]/75 font-semibold mb-4">
          {data.responsibilities.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {data.responsibilities.items.map((resp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/25 border border-[#134F47]/10"
            >
              <span className="w-6 h-6 rounded-md bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#134F47]">
                {resp}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 1.9 المهام المساندة والتنسيقية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
        <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-1 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#E85B0D]" />
          <span>{data.supportTasks.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
          {data.supportTasks.intro}
        </p>

        <ul className="space-y-2 pr-3 border-r-2 border-[#134F47]/20 my-3">
          {data.supportTasks.items.map((task, tIdx) => (
            <li key={tIdx} className="text-xs sm:text-sm font-medium text-[#134F47]">
              • {task}
            </li>
          ))}
        </ul>

        <div className="p-3 rounded-xl bg-[#FFF4E0]/40 border border-[#134F47]/10 text-xs font-bold text-[#134F47]/80 leading-relaxed">
          {data.supportTasks.conclusion}
        </div>
      </section>

    </div>
  );
};

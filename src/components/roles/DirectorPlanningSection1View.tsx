import React from 'react';
import { PLANNING_SECTION_1_CONTENT } from '../../data/roles/directorPlanningContentSection1';
import {
  Compass,
  Target,
  Layers,
  Archive,
  ListOrdered,
  Link,
  RefreshCw,
  FolderCheck,
  CheckCircle2
} from 'lucide-react';

export const DirectorPlanningSection1View: React.FC = () => {
  const data = PLANNING_SECTION_1_CONTENT;

  return (
    <div className="space-y-6 text-right font-cairo">
      
      {/* 1.1 مفهوم التخطيط الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#E85B0D]" />
            <span>1.1 {data.concept.title}</span>
          </h3>
          <div className="space-y-2.5 text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.concept.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 1.2 أهداف التخطيط الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#E85B0D]" />
            <span>1.2 {data.goals.title}</span>
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.goals.intro}
          </p>
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

      {/* 1.3 أنماط الخطط الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E85B0D]" />
            <span>1.3 {data.patterns.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.patterns.intro}
          </p>
        </div>

        {/* أولاً: الخطط بعيدة المدى */}
        <div className="p-4 sm:p-5 rounded-2xl border border-[#134F47]/15 bg-[#FFF4E0]/20 space-y-4">
          <div>
            <h4 className="text-sm sm:text-base font-black text-[#134F47] mb-1">
              {data.patterns.longTerm.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              {data.patterns.longTerm.concept}
            </p>
            <p className="text-xs sm:text-sm text-[#E85B0D] font-bold mt-1">
              {data.patterns.longTerm.purpose}
            </p>
          </div>

          <div>
            <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2">
              {data.patterns.longTerm.areasIntro}
            </p>
            <div className="space-y-1.5 pr-2">
              {data.patterns.longTerm.areas.map((a, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#134F47]/10">
            <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2">
              {data.patterns.longTerm.rulesIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.patterns.longTerm.rules.map((r, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ثانياً: الخطط قريبة المدى */}
        <div className="p-4 sm:p-5 rounded-2xl border border-[#134F47]/15 bg-[#FFF4E0]/20 space-y-4">
          <div>
            <h4 className="text-sm sm:text-base font-black text-[#134F47] mb-1">
              {data.patterns.shortTerm.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              {data.patterns.shortTerm.concept}
            </p>
            <p className="text-xs sm:text-sm text-[#E85B0D] font-bold mt-1">
              {data.patterns.shortTerm.purpose}
            </p>
          </div>

          <div>
            <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2">
              {data.patterns.shortTerm.areasIntro}
            </p>
            <div className="space-y-1.5 pr-2">
              {data.patterns.shortTerm.areas.map((a, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#134F47]/10">
            <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2">
              {data.patterns.shortTerm.rulesIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.patterns.shortTerm.rules.map((r, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1.4 الاستدامة والتراكم المؤسسي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Archive className="w-5 h-5 text-[#E85B0D]" />
            <span>1.4 {data.sustainability.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-bold mb-2">
            {data.sustainability.intro}
          </p>
          {data.sustainability.paragraphs.map((p, idx) => (
            <p key={idx} className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {data.sustainability.pillars.map((pil, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/25 space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#134F47] text-white text-xs font-black flex items-center justify-center">
                  {pil.letter}
                </span>
                <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
                  {pil.title}
                </h4>
              </div>
              <div className="space-y-1.5 pr-2">
                {pil.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.sustainability.closingNote}
        </div>
      </section>

      {/* 1.5 إعداد الخطة الإعلامية */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-[#E85B0D]" />
            <span>1.5 {data.planPreparation.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.planPreparation.intro}
          </p>
        </div>

        <div className="pt-1">
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-3">
            {data.planPreparation.phasesIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.planPreparation.phases.map((ph) => (
              <div
                key={ph.num}
                className="p-3.5 rounded-xl border border-[#134F47]/15 bg-[#FFF4E0]/20 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-lg bg-[#134F47] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  {ph.num}
                </span>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-black text-[#134F47]">
                    {ph.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                    {ph.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.6 تكامل الخطط الإعلامية مع خطة الهيئة */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <Link className="w-5 h-5 text-[#E85B0D]" />
            <span>1.6 {data.unionIntegration.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.unionIntegration.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.unionIntegration.pointsIntro}
          </p>
          <div className="space-y-2 pr-2">
            {data.unionIntegration.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#134F47]/85 font-medium leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E85B0D] flex-shrink-0 mt-2" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.unionIntegration.independenceNote}
        </div>
      </section>

      {/* 1.7 متابعة الخطط وتحديثها */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[#E85B0D]" />
            <span>1.7 {data.monitoringAndUpdating.title}</span>
          </h3>
          <p className="text-sm text-[#134F47]/90 leading-relaxed font-medium">
            {data.monitoringAndUpdating.intro}
          </p>
        </div>

        <div>
          <p className="text-xs sm:text-sm font-bold text-[#134F47] mb-2.5">
            {data.monitoringAndUpdating.mechanismsIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {data.monitoringAndUpdating.mechanisms.map((mech, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF4E0]/20 border border-[#134F47]/10 text-xs sm:text-sm text-[#134F47]/90 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#134F47]/10 text-[#134F47] text-xs font-black flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{mech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#134F47]/5 border-r-4 border-[#134F47] text-xs sm:text-sm text-[#134F47]/95 font-medium leading-relaxed">
          {data.monitoringAndUpdating.closingRule}
        </div>
      </section>

      {/* 1.8 مخرجات التخطيط الإعلامي */}
      <section className="bg-white border border-[#134F47]/15 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-[#134F47] mb-2 flex items-center gap-2">
            <FolderCheck className="w-5 h-5 text-[#E85B0D]" />
            <span>1.8 {data.outputs.title}</span>
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
              <CheckCircle2 className="w-4 h-4 text-[#E85B0D] flex-shrink-0" />
              <span>{it}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { JOURNEYS_DATA, JourneyDef, JourneyStep } from '../data/journeysData';
import {
  Compass,
  GraduationCap,
  Video,
  Building2,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface JourneysSectionProps {
  onStartStep: (step: JourneyStep, journey: JourneyDef, stepIndex: number) => void;
  activeJourneyId?: string | null;
}

export const JourneysSection: React.FC<JourneysSectionProps> = ({
  onStartStep,
  activeJourneyId
}) => {
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>(activeJourneyId || 'volunteers');

  const selectedJourney = JOURNEYS_DATA.find(j => j.id === selectedJourneyId) || JOURNEYS_DATA[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#15413A]/5 via-[#FDF9EE]/60 to-[#15413A]/5 border-2 border-[#C59B27]/40 rounded-3xl p-5 md:p-8 mb-10 shadow-sm relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#DFB847] via-[#C59B27] to-[#15413A]" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#15413A] text-[#DFB847] text-xs font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              ميزة جديدة: المسارات الموجهة
            </span>
            <span className="text-xs font-bold text-[#8C6D1F]">رحلتك المخصصة في الدليل</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-[#0D2B26]">
            اختر صفتك وابدأ رحلتك التشغيلية
          </h2>
          <p className="text-xs md:text-sm text-[#4B635E] font-medium mt-1">
            مسارات مهنية مخصصة تأخذك للفقرات والنماذج التي تحتاجها حصراً وفق دورك بالاتحاد
          </p>
        </div>
      </div>

      {/* 3 Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
        {JOURNEYS_DATA.map((journey) => {
          const isSelected = journey.id === selectedJourney.id;

          return (
            <div
              key={journey.id}
              onClick={() => setSelectedJourneyId(journey.id)}
              className={`relative rounded-2xl p-5 cursor-pointer transition-all duration-200 border text-right flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#15413A] text-white border-[#C59B27] shadow-md ring-2 ring-[#C59B27]/40 scale-[1.02]'
                  : 'bg-white text-[#0D2B26] border-[#15413A]/15 hover:border-[#C59B27] hover:bg-[#FCFAF6] hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-white/15 text-[#DFB847]' : 'bg-[#15413A]/8 text-[#15413A]'
                  }`}>
                    {getIcon(journey.iconName)}
                  </div>
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#DFB847] text-[#0D2B26]'
                      : 'bg-[#FCFAF6] text-[#8C6D1F] border border-[#C59B27]/30'
                  }`}>
                    {journey.badge}
                  </span>
                </div>

                <h3 className={`text-sm md:text-base font-black mb-1 ${
                  isSelected ? 'text-white' : 'text-[#0D2B26]'
                }`}>
                  {journey.title}
                </h3>
                <p className={`text-xs font-semibold mb-2 ${
                  isSelected ? 'text-[#DFB847]' : 'text-[#8C6D1F]'
                }`}>
                  {journey.subtitle}
                </p>
                <p className={`text-xs leading-relaxed ${
                  isSelected ? 'text-white/80' : 'text-[#4B635E]'
                }`}>
                  {journey.summary}
                </p>
              </div>

              <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                isSelected ? 'border-white/15 text-[#DFB847]' : 'border-[#15413A]/10 text-[#15413A]'
              }`}>
                <span>{journey.steps.length} محطات تشغيلية</span>
                <span className="flex items-center gap-1 font-black">
                  {isSelected ? 'المسار المعروض حالياً' : 'عرض المحطات'}
                  <ArrowLeft className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Journey Timeline Roadmap */}
      <div className="bg-white border border-[#15413A]/15 rounded-2xl p-5 md:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#15413A]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#15413A] text-[#DFB847] flex items-center justify-center">
              {getIcon(selectedJourney.iconName)}
            </div>
            <div>
              <div className="text-xs font-bold text-[#8C6D1F]">خارطة الطريق المعتمدة</div>
              <h3 className="text-base md:text-lg font-black text-[#0D2B26]">
                {selectedJourney.title}: محطات الدليل المقترحة
              </h3>
            </div>
          </div>
          <button
            onClick={() => onStartStep(selectedJourney.steps[0], selectedJourney, 0)}
            className="px-4 py-2 bg-gradient-to-r from-[#DFB847] via-[#C59B27] to-[#9F7918] hover:brightness-105 text-[#0D2B26] font-black text-xs md:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <span>بدء الرحلة من المحطة الأولى</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Steps Stack */}
        <div className="space-y-3.5">
          {selectedJourney.steps.map((step, idx) => {
            return (
              <div
                key={step.stepNum}
                className="group bg-[#FCFAF6] hover:bg-[#FDF9EE] border border-[#15413A]/10 hover:border-[#C59B27] rounded-xl p-4 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3.5 flex-1">
                  <div className="w-7 h-7 rounded-full bg-[#15413A] text-[#DFB847] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    {step.stepNum}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-xs md:text-sm font-black text-[#0D2B26] group-hover:text-[#15413A]">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-[#EDF4F2] text-[#15413A] border border-[#15413A]/10">
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#4B635E] leading-relaxed">
                      {step.brief}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-[#15413A]/5">
                  <button
                    onClick={() => onStartStep(step, selectedJourney, idx)}
                    className="px-3.5 py-1.5 bg-white group-hover:bg-[#15413A] text-[#15413A] group-hover:text-white border border-[#15413A]/15 group-hover:border-[#15413A] rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
                  >
                    <span>{step.actionText}</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#C59B27] group-hover:text-[#DFB847] transition-transform group-hover:-translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

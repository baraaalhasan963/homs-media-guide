import React from 'react';
import { JOURNEYS_DATA, JourneyDef } from '../data/journeysData';
import { Compass, ArrowLeft, ArrowRight, X, CheckCircle } from 'lucide-react';

interface JourneyFloatingBarProps {
  journeyId: string;
  stepIndex: number;
  onNavigateStep: (stepIndex: number) => void;
  onExitJourney: () => void;
}

export const JourneyFloatingBar: React.FC<JourneyFloatingBarProps> = ({
  journeyId,
  stepIndex,
  onNavigateStep,
  onExitJourney
}) => {
  const journey = JOURNEYS_DATA.find(j => j.id === journeyId);
  if (!journey) return null;

  const currentStep = journey.steps[stepIndex] || journey.steps[0];
  const totalSteps = journey.steps.length;
  const hasPrev = stepIndex > 0;
  const hasNext = stepIndex < totalSteps - 1;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-2xl bg-[#0D2B26]/95 backdrop-blur-md text-white border-2 border-[#C59B27] rounded-2xl shadow-2xl p-3 md:p-4 transition-all duration-300 animate-in slide-in-from-bottom-6 no-print">
      <div className="flex items-center justify-between gap-3">
        {/* Journey Identity & Step Info */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0D2B26] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
            {stepIndex + 1}/{totalSteps}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs font-bold text-[#DFB847] truncate">
                {journey.title}
              </span>
              <span className="text-[10px] bg-white/10 text-white/90 px-1.5 py-0.2 rounded font-semibold hidden sm:inline">
                المحطة {stepIndex + 1}
              </span>
            </div>
            <div className="text-xs md:text-sm font-extrabold text-white truncate">
              {currentStep.title}
            </div>
          </div>
        </div>

        {/* Step Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {hasPrev && (
            <button
              onClick={() => onNavigateStep(stepIndex - 1)}
              className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
              title="المحطة السابقة"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">السابقة</span>
            </button>
          )}

          {hasNext ? (
            <button
              onClick={() => onNavigateStep(stepIndex + 1)}
              className="px-3 py-1.5 bg-[#C59B27] hover:bg-[#DFB847] text-[#0D2B26] text-xs font-black rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              title="المحطة التالية"
            >
              <span>التالية</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onExitJourney}
              className="px-3 py-1.5 bg-gradient-to-r from-[#DFB847] to-[#C59B27] text-[#0D2B26] text-xs font-black rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              title="أتممت الرحلة"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>إنهاء المسار</span>
            </button>
          )}

          {/* Close Journey Button */}
          <button
            onClick={onExitJourney}
            className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors mr-1"
            title="إغلاق وضع الرحلة"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

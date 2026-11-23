import React from 'react';
import { Part } from '../data/guideData';
import { NAVIGATION_STRUCTURE, MainTabDef } from '../data/navigationStructure';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface TOCProps {
  parts: Part[];
  onSelectSubTab: (subTabId: string, mainTabId: string, secId?: string) => void;
}

export const TableOfContents: React.FC<TOCProps> = ({ parts, onSelectSubTab }) => {
  // Only display the 4 operational pillars (skip 'home')
  const pillars = NAVIGATION_STRUCTURE.filter(m => m.id !== 'home');

  return (
    <section className="bg-[#EDF4F2]/60 border border-[#15413A]/15 rounded-2xl p-5 md:p-8 mb-8">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-black text-[#0D2B26] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#C59B27]" />
            فهرس الركائز التخصصية للدليل
          </h2>
          <p className="text-xs text-[#4B635E] font-medium mt-1">
            منظومة متكاملة موزعة على 4 قطاعات رئيسية بدون ترقيم تقليدي
          </p>
        </div>
        <span className="text-xs font-bold bg-[#15413A] text-[#DFB847] px-3.5 py-1.5 rounded-full border border-[#C59B27]/30 shadow-sm">
          تصفح مباشر عبر الركائز
        </span>
      </div>

      <div className="space-y-6">
        {pillars.map((pillar: MainTabDef) => {
          const PillarIcon = pillar.icon;

          return (
            <div key={pillar.id} className="bg-white border border-[#15413A]/10 rounded-2xl p-5 shadow-sm">
              {/* Pillar Header */}
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#15413A]/8">
                <div className="w-8 h-8 rounded-lg bg-[#15413A] text-[#DFB847] flex items-center justify-center">
                  <PillarIcon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-black text-[#0D2B26]">
                  {pillar.title}
                </h3>
                <span className="text-[11px] font-bold text-[#8C6D1F] bg-[#FDF9EE] border border-[#C59B27]/30 px-2 py-0.5 rounded-full mr-auto">
                  {pillar.subTabs.length} أقسام تخصصية
                </span>
              </div>

              {/* Sub-tabs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {pillar.subTabs.map((sub) => {
                  const SubIcon = sub.icon;
                  const targetPart = sub.partNum ? parts.find(p => p.num === sub.partNum) : null;
                  const countLabel = targetPart ? `${targetPart.subsections.length} مباحث` : 'محتوى معتمد';

                  return (
                    <div
                      key={sub.id}
                      onClick={() => onSelectSubTab(sub.id, pillar.id, sub.secId)}
                      className="bg-[#FCFAF6] border border-[#15413A]/10 hover:border-[#C59B27] rounded-xl p-3.5 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-white group"
                    >
                      <div>
                        <div className="flex items-center justify-end mb-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-[#EDF4F2] text-[#15413A] rounded-full">
                            {countLabel}
                          </span>
                        </div>

                        <div className="text-xs md:text-sm font-extrabold text-[#0D2B26] group-hover:text-[#15413A] leading-snug mb-1">
                          {sub.title}
                        </div>

                        {sub.description && (
                          <p className="text-[11px] text-[#4B635E] font-normal line-clamp-2 leading-relaxed">
                            {sub.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-bold text-[#8C6D1F] pt-2.5 mt-2 border-t border-[#15413A]/5">
                        <span>انتقال للمحتوى</span>
                        <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 text-[#C59B27]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

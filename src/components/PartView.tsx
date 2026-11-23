import React from 'react';
import { Part } from '../data/guideData';
import { PartIcon } from './Icons';
import { MarkdownRenderer } from './MarkdownRenderer';
import { ArrowLeft, ArrowRight, Home, CheckCircle2, BookmarkCheck } from 'lucide-react';

interface PartViewProps {
  part: Part;
  categoryTitle?: string;
  subTabTitle?: string;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  onGoHome?: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

export const PartView: React.FC<PartViewProps> = ({
  part,
  categoryTitle,
  subTabTitle,
  onNavigatePrev,
  onNavigateNext,
  onGoHome
}) => {
  const cleanTitle = part.raw_title.includes(':')
    ? part.raw_title.split(':')[1].trim()
    : part.title;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#15413A] to-[#0D2B26] text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-md border-r-6 border-r-[#C59B27]">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            {categoryTitle && (
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#DFB847] to-[#C59B27] text-[#0D2B26] text-xs font-black px-3 py-1 rounded-md">
                <BookmarkCheck className="w-3.5 h-3.5" />
                {categoryTitle}
              </span>
            )}
            <span className="text-[11px] font-bold bg-white/10 text-white/90 border border-white/15 px-2.5 py-0.5 rounded">
              {part.subsections.length} مباحث تنظيمية
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
            {subTabTitle || cleanTitle}
          </h2>
        </div>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-10 text-white pointer-events-none scale-150">
          <PartIcon num={part.num} className="w-28 h-28" />
        </div>
      </div>

      {/* Subsections Cards */}
      <div className="space-y-5">
        {part.subsections.map((sec, sIdx) => {
          const isOperationalForm = part.num === 11 && (sec.title.includes('طلب تغطية') || sec.title.includes('تقييم التغطية'));

          return (
            <div
              key={sIdx}
              id={`sec-${part.num}-${sIdx + 1}`}
              className={`bg-white border rounded-xl p-5 md:p-7 shadow-sm transition-all hover:border-[#C59B27]/40 ${
                isOperationalForm ? 'border-2 border-[#15413A]' : 'border-[#15413A]/10'
              }`}
            >
              {/* Subsection Header */}
              <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#15413A]/8">
                <span className="bg-[#EDF4F2] text-[#15413A] text-xs font-extrabold px-2.5 py-1 rounded border border-[#15413A]/15">
                  {sec.num}
                </span>
                <h3 className="text-base md:text-lg font-extrabold text-[#0D2B26]">
                  {sec.title}
                </h3>
                {isOperationalForm && (
                  <span className="mr-auto text-[11px] font-bold text-[#9F7918] bg-[#FDF9EE] border border-[#C59B27]/30 px-2 py-0.5 rounded">
                    نموذج تشغيلي معتمد
                  </span>
                )}
              </div>

              {/* Subsection Content */}
              <MarkdownRenderer content={sec.body} sectionId={`p${part.num}_s${sIdx}`} />
            </div>
          );
        })}
      </div>

      {/* Part 11 Official Decree & Signatures */}
      {part.num === 11 && (
        <div className="bg-gradient-to-br from-[#FCFAF6] to-white border-2 border-[#C59B27] rounded-2xl p-6 md:p-8 relative shadow-md overflow-hidden my-8">
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-dashed border-[#C59B27]/40">
            <span className="bg-gradient-to-r from-[#DFB847] to-[#C59B27] text-[#0D2B26] text-xs md:text-sm font-black px-4 py-1.5 rounded-md flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              الخلاصة التنظيمية والاعتماد الرسمي
            </span>
            <span className="text-xs font-bold text-[#4B635E]">فرع جامعة حمص – القسم الإعلامي المركزي</span>
          </div>

          <p className="text-sm font-normal text-[#1F3430] leading-loose mb-3 text-justify">
            تقوم التغطية الإعلامية المتكاملة على سلسلة مترابطة من العمليات: التخطيط، والتجهيز، والتنفيذ الميداني، والإنتاج، والمراجعة، والاعتماد، والنشر، والأرشفة، والتقييم.
          </p>
          <p className="text-sm font-normal text-[#1F3430] leading-loose mb-6 text-justify">
            ولا يتحقق نجاح هذه السلسلة بجودة التصوير وحدها، بل بوضوح المسؤوليات، وصحة المعلومات، وكفاءة التنسيق، والالتزام بالمواعيد، والمحافظة على المواد الأصلية، والقدرة على تحويل التغطية إلى محتوى مهني يخدم أهداف اتحاد الطلبة ويعكس نشاطه بصورة دقيقة ومتسقة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-[#FCFAF6] border border-[#15413A]/15 rounded-xl p-4 text-center flex flex-col justify-between min-h-[140px]">
              <div>
                <div className="text-xs font-extrabold text-[#0D2B26] mb-0.5">رئيس القسم الإعلامي المركزي</div>
                <div className="text-[11px] font-semibold text-[#9F7918]">فرع جامعة حمص</div>
              </div>
              <div className="h-10 border-b border-dashed border-[#15413A]/20 my-2"></div>
              <div className="text-[11px] font-bold text-gray-500">تم التدقيق والمطابقة الفنية</div>
            </div>

            <div className="bg-[#FCFAF6] border border-[#15413A]/15 rounded-xl p-4 text-center flex flex-col justify-between min-h-[140px]">
              <div>
                <div className="text-xs font-extrabold text-[#0D2B26] mb-0.5">مسؤول المتابعة والتنسيق الميداني</div>
                <div className="text-[11px] font-semibold text-[#9F7918]">المكاتب الإعلامية بالهيئات</div>
              </div>
              <div className="h-10 border-b border-dashed border-[#15413A]/20 my-2"></div>
              <div className="text-[11px] font-bold text-gray-500">تم الاعتماد التشغيلي</div>
            </div>

            <div className="bg-[#FCFAF6] border border-[#15413A]/15 rounded-xl p-4 text-center flex flex-col justify-between min-h-[140px]">
              <div>
                <div className="text-xs font-extrabold text-[#0D2B26] mb-0.5">رئيس فرع اتحاد الطلبة</div>
                <div className="text-[11px] font-semibold text-[#9F7918]">جامعة حمص</div>
              </div>
              <div className="h-10 border-b border-dashed border-[#15413A]/20 my-2"></div>
              <div className="text-[11px] font-bold text-[#15413A]">موافق ومعتمد للعمل بموجبه</div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation (Prev / Next) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t-2 border-dashed border-[#15413A]/10 no-print">
        {onNavigatePrev ? (
          <button
            onClick={onNavigatePrev}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FCFAF6] hover:bg-[#FDF9EE] text-[#15413A] hover:text-[#9F7918] border border-[#15413A]/15 hover:border-[#C59B27] rounded-lg text-xs md:text-sm font-bold transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            <span>القسم السابق</span>
          </button>
        ) : (
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FCFAF6] hover:bg-[#FDF9EE] text-[#15413A] hover:text-[#9F7918] border border-[#15413A]/15 hover:border-[#C59B27] rounded-lg text-xs md:text-sm font-bold transition-all"
          >
            <Home className="w-4 h-4 text-[#C59B27]" />
            <span>الرئيسية والدليل</span>
          </button>
        )}

        {onNavigateNext ? (
          <button
            onClick={onNavigateNext}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#15413A] hover:bg-[#0D2B26] text-white border border-[#15413A] rounded-lg text-xs md:text-sm font-extrabold transition-all shadow-sm"
          >
            <span>القسم التالي</span>
            <ArrowLeft className="w-4 h-4 text-[#DFB847]" />
          </button>
        ) : (
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#15413A] hover:bg-[#0D2B26] text-white border border-[#15413A] rounded-lg text-xs md:text-sm font-extrabold transition-all shadow-sm"
          >
            <span>العودة للرئيسية</span>
            <Home className="w-4 h-4 text-[#DFB847]" />
          </button>
        )}
      </div>
    </div>
  );
};

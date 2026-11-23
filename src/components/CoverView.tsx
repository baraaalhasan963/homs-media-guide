import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';

interface CoverViewProps {
  onStartGuide: () => void;
}

export const CoverView: React.FC<CoverViewProps> = ({ onStartGuide }) => {
  return (
    <section className="border-b border-[#15413A]/15 pb-8 mb-8">
      {/* Top Header Hierarchy */}
      <div className="flex justify-between items-center pb-5 border-b border-[#15413A]/10 mb-6">
        <div className="text-xs md:text-sm font-bold text-[#15413A] leading-relaxed">
          الجمهورية العربية السورية<br />
          الاتحاد الوطني لطلبة سورية<br />
          فرع جامعة حمص<br />
          <span className="text-[#9F7918] font-extrabold text-sm md:text-base">القسم الإعلامي المركزي</span>
        </div>
        <img 
          src="assets/images/union-logo.svg" 
          alt="شعار الاتحاد" 
          className="h-16 md:h-20 w-auto object-contain"
          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
        />
      </div>

      {/* Badges Row */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="bg-[#15413A] text-[#DFB847] px-3 py-1 rounded text-xs font-extrabold border border-[#C59B27]/40">
          مسودة تنظيمية معتمدة
        </span>
        <span className="bg-[#FDF9EE] text-[#9F7918] border border-[#C59B27]/30 px-3 py-1 rounded text-xs font-bold">
          وثيقة رقم: UMS-MED-2026-02
        </span>
        <span className="bg-[#F0F4F8] text-[#2D4A60] border border-[#2D4A60]/20 px-3 py-1 rounded text-xs font-bold">
          الإصدار 2.0 (منصة تفاعلية 2026)
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl md:text-3xl font-black text-[#0D2B26] leading-tight mb-3">
        الدليل الإعلامي الموحّد لتغطية الفعاليات والأنشطة الطلابية
      </h1>
      <p className="text-sm md:text-base text-[#4B635E] font-medium leading-relaxed mb-6">
        الوثيقة المرجعية الشاملة لإجراءات التخطيط، والإنتاج، والتصميم، والنشر، والأرشفة، والحوكمة، وضبط جودة العمل الإعلامي الطلابي.
      </p>

      {/* Accent Line */}
      <div className="h-1 w-32 bg-gradient-to-r from-[#DFB847] via-[#C59B27] to-[#9F7918] rounded-full mb-6"></div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#FCFAF6] border border-[#C59B27]/25 rounded-xl p-5 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 w-1 bg-[#C59B27]"></div>
        <div>
          <div className="text-[11px] font-extrabold text-[#9F7918] uppercase mb-1">الجهة المسؤولة</div>
          <div className="text-xs md:text-sm font-bold text-[#15413A]">القسم الإعلامي في اتحاد الطلبة بجامعة حمص</div>
        </div>
        <div>
          <div className="text-[11px] font-extrabold text-[#9F7918] uppercase mb-1">نطاق التطبيق</div>
          <div className="text-xs md:text-sm font-bold text-[#15413A]">الفريق المركزي، المكاتب بالهيئات، والمتطوعون</div>
        </div>
        <div>
          <div className="text-[11px] font-extrabold text-[#9F7918] uppercase mb-1">طبيعة الوثيقة</div>
          <div className="text-xs md:text-sm font-bold text-[#15413A]">دليل سياسات ومعايير ونماذج تشغيلية (11 باباً)</div>
        </div>
        <div>
          <div className="text-[11px] font-extrabold text-[#9F7918] uppercase mb-1">حالة الوثيقة</div>
          <div className="text-xs md:text-sm font-bold text-[#15413A]">مسودة تنظيمية معتمدة قابلة للتحديث الدوري</div>
        </div>
      </div>

      {/* Metrics Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <div className="bg-[#15413A]/5 border border-[#15413A]/10 rounded-xl p-3.5 text-center hover:bg-[#FDF9EE] hover:border-[#C59B27] transition-all">
          <div className="text-2xl font-black text-[#15413A] mb-0.5">11</div>
          <div className="text-xs font-bold text-[#4B635E]">باباً تنظيمياً متكاملاً</div>
        </div>
        <div className="bg-[#15413A]/5 border border-[#15413A]/10 rounded-xl p-3.5 text-center hover:bg-[#FDF9EE] hover:border-[#C59B27] transition-all">
          <div className="text-2xl font-black text-[#15413A] mb-0.5">52</div>
          <div className="text-xs font-bold text-[#4B635E]">مبحثاً وفصلاً تخصصياً</div>
        </div>
        <div className="bg-[#15413A]/5 border border-[#15413A]/10 rounded-xl p-3.5 text-center hover:bg-[#FDF9EE] hover:border-[#C59B27] transition-all">
          <div className="text-2xl font-black text-[#15413A] mb-0.5">07</div>
          <div className="text-xs font-bold text-[#4B635E]">نماذج وقوائم تحقق</div>
        </div>
        <div className="bg-[#15413A]/5 border border-[#15413A]/10 rounded-xl p-3.5 text-center hover:bg-[#FDF9EE] hover:border-[#C59B27] transition-all">
          <div className="text-2xl font-black text-[#15413A] mb-0.5">100%</div>
          <div className="text-xs font-bold text-[#4B635E]">مطابقة للهوية المؤسسية</div>
        </div>
      </div>
    </section>
  );
};

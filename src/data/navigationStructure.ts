import {
  Compass,
  Video,
  Palette,
  ShieldCheck,
  Briefcase,
  LucideIcon,
  Camera,
  AlertTriangle,
  FileCheck2,
  Share2,
  FolderArchive,
  Building2,
  CheckCircle,
  Lock,
  GraduationCap,
  Sparkles,
  FileSpreadsheet,
  ListTodo,
  HelpCircle
} from 'lucide-react';

export interface SubTabDef {
  id: string;
  title: string;
  shortTitle: string;
  partNum?: number;
  secId?: string;
  icon: LucideIcon;
  description?: string;
}

export interface MainTabDef {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  subTabs: SubTabDef[];
}

export const NAVIGATION_STRUCTURE: MainTabDef[] = [
  {
    id: 'home',
    title: 'الرئيسية والدليل',
    shortTitle: 'الرئيسية',
    icon: Compass,
    subTabs: [
      {
        id: 'cover',
        title: 'الغلاف ونظرة عامة',
        shortTitle: 'الغلاف',
        icon: Sparkles,
        description: 'الوثيقة المرجعية الشاملة والهوية التنظيمية'
      },
      {
        id: 'foundation-intro',
        title: 'المدخل التأسيسي والرؤية',
        shortTitle: 'المدخل التأسيسي',
        icon: Building2,
        description: 'المنطلقات والرؤية المؤسسية للعمل الإعلامي'
      }
    ]
  },
  {
    id: 'field-ops',
    title: 'الميدان والإنتاج',
    shortTitle: 'الميدان والإنتاج',
    icon: Video,
    subTabs: [
      {
        id: 'field-prep',
        title: 'التحضير والتجهيز الميداني',
        shortTitle: 'التحضير والتجهيز',
        partNum: 2,
        icon: Camera,
        description: 'استلام الطلب، الشوت ليست، فحص المعدات وقواعد الحركة'
      },
      {
        id: 'av-production',
        title: 'التصوير والإنتاج الفني',
        shortTitle: 'التصوير والإنتاج',
        partNum: 3,
        icon: Video,
        description: 'الفوتوغراف، الفيديو، الصوت، المقابلات، البث المباشر والريلز'
      },
      {
        id: 'field-emergency',
        title: 'طوارئ الميدان والأزمات',
        shortTitle: 'طوارئ الميدان والأزمات',
        partNum: 9,
        icon: AlertTriangle,
        description: 'الأعطال المفاجئة، تلف الملفات، وإدارة الأزمات والشائعات'
      }
    ]
  },
  {
    id: 'content-brand',
    title: 'المحتوى والهوية',
    shortTitle: 'المحتوى والهوية',
    icon: Palette,
    subTabs: [
      {
        id: 'brand-design',
        title: 'الهوية البصرية والتصميم',
        shortTitle: 'الهوية والتصميم',
        partNum: 4,
        icon: Palette,
        description: 'معايير الهوية الرسمية، قوالب البوسترات، ومقاسات المنصات'
      },
      {
        id: 'content-publishing',
        title: 'صناعة المحتوى والنشر',
        shortTitle: 'صناعة المحتوى والنشر',
        partNum: 5,
        icon: Share2,
        description: 'صوت الاتحاد، الصياغة الخبرية، تقويم النشر وإدارة التفاعل'
      },
      {
        id: 'digital-archive',
        title: 'الأرشفة والتوثيق الرقمي',
        shortTitle: 'الأرشفة والملفات',
        partNum: 6,
        icon: FolderArchive,
        description: 'تسمية الملفات، المجلدات السحابية، والنسخ الاحتياطي الثلاثي'
      }
    ]
  },
  {
    id: 'governance',
    title: 'الحوكمة والسياسات',
    shortTitle: 'الحوكمة والسياسات',
    icon: ShieldCheck,
    subTabs: [
      {
        id: 'org-structure',
        title: 'المنظومة والهيكل التنظيمي',
        shortTitle: 'الهيكل التنظيمي',
        partNum: 1,
        icon: Building2,
        description: 'الأدوار، المسؤوليات، وبروتوكول العلاقة مع اللجان والجامعة'
      },
      {
        id: 'quality-conduct',
        title: 'ميثاق السلوك وضبط الجودة',
        shortTitle: 'السلوك والجودة',
        partNum: 7,
        icon: CheckCircle,
        description: 'سلوك الفريق الميداني، سلاسل الاعتماد، ومصفوفة الأخطاء'
      },
      {
        id: 'rights-privacy',
        title: 'الحقوق والخصوصية والذكاء الاصطناعي',
        shortTitle: 'الحقوق والخصوصية',
        partNum: 8,
        icon: Lock,
        description: 'أذونات التصوير، الملكية الفكرية، وسياسة استخدام AI'
      },
      {
        id: 'training-kpi',
        title: 'التطوير وبناء القدرات',
        shortTitle: 'التدريب والتطوير',
        partNum: 10,
        icon: GraduationCap,
        description: 'تأهيل المتطوعين، تسليم المهام، ومؤشرات الأداء KPIs'
      }
    ]
  },
  {
    id: 'toolkit',
    title: 'حقيبة الأدوات',
    shortTitle: 'حقيبة الأدوات',
    icon: Briefcase,
    subTabs: [
      {
        id: 'cheat-sheet',
        title: 'بطاقة المصور السريعة',
        shortTitle: 'بطاقة المصور',
        partNum: 11,
        secId: 'sec-11-1',
        icon: Camera,
        description: 'دليل الجيب السريع للإعدادات والزوايا الميدانية'
      },
      {
        id: 'operational-forms',
        title: 'النماذج التشغيلية المعتمدة',
        shortTitle: 'النماذج الرسمية',
        partNum: 11,
        secId: 'sec-11-2',
        icon: FileSpreadsheet,
        description: 'استمارات طلب التغطية، تقارير الفعاليات، وأذونات التصوير'
      },
      {
        id: 'checklists',
        title: 'قوائم التحقق الميدانية',
        shortTitle: 'قوائم التحقق',
        partNum: 11,
        secId: 'sec-11-3',
        icon: ListTodo,
        description: 'قوائم جاهزية شنطة المعدات ومراجعة المواد قبل النشر'
      },
      {
        id: 'contacts-faq',
        title: 'شجرة التواصل والأسئلة الشائعة',
        shortTitle: 'التواصل والـ FAQ',
        partNum: 11,
        secId: 'sec-11-4',
        icon: HelpCircle,
        description: 'أرقام الاتصال الرسمية، بنك الاستفسارات وسجل الاعتماد'
      }
    ]
  }
];

// Quick helper to resolve which main tab and sub tab correspond to a given partNum or secId
export function findNavigationByTarget(targetId: string): { mainTabId: string; subTabId: string } | null {
  // If target is direct tab id
  for (const main of NAVIGATION_STRUCTURE) {
    if (main.id === targetId) {
      return { mainTabId: main.id, subTabId: main.subTabs[0]?.id || '' };
    }
    for (const sub of main.subTabs) {
      if (sub.id === targetId) {
        return { mainTabId: main.id, subTabId: sub.id };
      }
    }
  }

  // If target is legacy 'part-X'
  if (targetId.startsWith('part-')) {
    const pNum = parseInt(targetId.replace('part-', ''), 10);
    for (const main of NAVIGATION_STRUCTURE) {
      const match = main.subTabs.find(s => s.partNum === pNum);
      if (match) {
        return { mainTabId: main.id, subTabId: match.id };
      }
    }
  }

  // If target is legacy 'intro'
  if (targetId === 'intro') {
    return { mainTabId: 'home', subTabId: 'cover' };
  }

  return null;
}

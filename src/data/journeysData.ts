export interface JourneyStep {
  stepNum: number;
  title: string;
  brief: string;
  targetMainTab: string;
  targetSubTab: string;
  targetSecId?: string;
  partNum: number;
  tag: string;
  actionText: string;
}

export interface JourneyDef {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  audience: string;
  summary: string;
  iconName: string;
  steps: JourneyStep[];
}

export const JOURNEYS_DATA: JourneyDef[] = [
  {
    id: 'volunteers',
    title: 'مسار المتطوعين الجدد',
    subtitle: 'دليل التأهيل السريع والانضباط الميداني',
    badge: 'تأهيل وانطلاق',
    audience: 'المتطوعون الجدد وفرق التغطية المبتدئة',
    summary: 'يركز على فهم رسالة الاتحاد، مظهر وسلوك المصور، تجنب الأخطاء الشائعة، وامتلاك بطاقة الشيت شيت الميدانية.',
    iconName: 'GraduationCap',
    steps: [
      {
        stepNum: 1,
        title: 'رؤية ورسالة القسم الإعلامي',
        brief: 'المنطلقات المؤسسية وأهداف العمل الإعلامي الطلابي بجامعة حمص.',
        targetMainTab: 'governance',
        targetSubTab: 'org-structure',
        targetSecId: 'sec-1-1',
        partNum: 1,
        tag: 'تأسيس',
        actionText: 'قراءة الرؤية والرسالة'
      },
      {
        stepNum: 2,
        title: 'السلوك والمظهر والانضباط الميداني',
        brief: 'الزي المعتمد، آداب الحركة داخل القاعات، وبروتوكول التعامل مع الطلاب والضيوف.',
        targetMainTab: 'governance',
        targetSubTab: 'quality-conduct',
        targetSecId: 'sec-7-1',
        partNum: 7,
        tag: 'إلزامي',
        actionText: 'قواعد السلوك والمظهر'
      },
      {
        stepNum: 3,
        title: 'مصفوفة الأخطاء الشائعة (Dos & Don\'ts)',
        brief: 'مقارنة عملية بين التصرفات الخاطئة والممارسات الاحترافية المقبولة في الميدان.',
        targetMainTab: 'governance',
        targetSubTab: 'quality-conduct',
        targetSecId: 'sec-7-6',
        partNum: 7,
        tag: 'توجيه عملي',
        actionText: 'استعراض مصفوفة الأخطاء'
      },
      {
        stepNum: 4,
        title: 'بطاقة المصور السريعة في الجيب (Cheat Sheet)',
        brief: 'الإعدادات الفنية السريعة للكاميرا، مثلّث التعريض، والزوايا الأساسية لتفادي اللقطات التالفة.',
        targetMainTab: 'toolkit',
        targetSubTab: 'cheat-sheet',
        targetSecId: 'sec-11-1',
        partNum: 11,
        tag: 'حقيبة الأدوات',
        actionText: 'فتح بطاقة المصور'
      },
      {
        stepNum: 5,
        title: 'بنك الأسئلة الشائعة وتفادي الإحراج (FAQ)',
        brief: 'إجابات جاهزة لأبرز المواقف والمفارقات التي تواجه المتطوعين أثناء التغطيات.',
        targetMainTab: 'toolkit',
        targetSubTab: 'contacts-faq',
        targetSecId: 'sec-11-5',
        partNum: 11,
        tag: 'دعم ميداني',
        actionText: 'تصفح الأسئلة الشائعة'
      }
    ]
  },
  {
    id: 'specialists',
    title: 'مسار العاملين بالقسم المركزي',
    subtitle: 'الإنتاج الفني المتقدم ومسار الجودة',
    badge: 'احتراف وتخصص',
    audience: 'المصورون المحترفون، المونتيرون، المصممون ومحررو المحتوى',
    summary: 'يركز على التجهيز الدقيق للمعدات، معايير الإنتاج المرئي والمسموع، تصدير المنصات، وبروتوكول الحفظ والأرشفة.',
    iconName: 'Video',
    steps: [
      {
        stepNum: 1,
        title: 'إعداد خطة اللقطات وفحص جاهزية المعدات',
        brief: 'بناء الـ Shot List حسب الفعالية، فحص البطاريات، الكروت، وقوائم التحقق الميدانية.',
        targetMainTab: 'field-ops',
        targetSubTab: 'field-prep',
        targetSecId: 'sec-2-2',
        partNum: 2,
        tag: 'تحضير',
        actionText: 'فحص المعدات واللقطات'
      },
      {
        stepNum: 2,
        title: 'المعايير الفنية للتصوير وهندسة الصوت',
        brief: 'قواعد التأطير، تصوير الفيديو الحركي، وضبط مستويات الصوت والميكروفونات.',
        targetMainTab: 'field-ops',
        targetSubTab: 'av-production',
        targetSecId: 'sec-3-1',
        partNum: 3,
        tag: 'إنتاج فني',
        actionText: 'معايير التصوير والصوت'
      },
      {
        stepNum: 3,
        title: 'الهوية البصرية ومقاسات النشر للمنصات',
        brief: 'استخدام الخطوط المعتمدة، باليت الألوان الرسمية، ومقاسات البوسترات والريلز والستوري.',
        targetMainTab: 'content-brand',
        targetSubTab: 'brand-design',
        targetSecId: 'sec-4-1',
        partNum: 4,
        tag: 'تصميم وهوية',
        actionText: 'مراجعة الهوية ومقاسات المنصات'
      },
      {
        stepNum: 4,
        title: 'بروتوكول تسمية الملفات والنسخ الاحتياطي (3-2-1)',
        brief: 'الترميز القياسي للمواد الخام، هيكل المجلدات السحابية، وخطة حماية البيانات من التلف.',
        targetMainTab: 'content-brand',
        targetSubTab: 'digital-archive',
        targetSecId: 'sec-6-1',
        partNum: 6,
        tag: 'أرشفة',
        actionText: 'قواعد تسمية الملفات والباك آب'
      },
      {
        stepNum: 5,
        title: 'قائمة التحقق الإلزامية قبل النشر (Checklist)',
        brief: 'التدقيق الشامل للصورة، الصوت، الألوان، الكابشن، والموافقات قبل ضغط زر النشر.',
        targetMainTab: 'toolkit',
        targetSubTab: 'checklists',
        targetSecId: 'sec-11-3',
        partNum: 11,
        tag: 'جودة واعتماد',
        actionText: 'فتح تشيك ليست النشر'
      }
    ]
  },
  {
    id: 'directors',
    title: 'مسار مدراء المكاتب بالهيئات الطلابية',
    subtitle: 'التنسيق النقابي، الحوكمة وإدارة التغطيات',
    badge: 'إدارة وحوكمة',
    audience: 'مدراء المكاتب الإعلامية بالهيئات والمعاهد ومعاونوهم',
    summary: 'يركز على بروتوكول العلاقة مع رئيس الهيئة والعمادات، استقبال طلبات التغطية، سلاسل المراجعة، وإدارة الطوارئ.',
    iconName: 'Building2',
    steps: [
      {
        stepNum: 1,
        title: 'بروتوكول العلاقة مع رئيس الهيئة ولجان الاتحاد',
        brief: 'الصلاحيات النقابية، الاستقلالية الفنية، وفض الخلافات بمرجعية القسم المركزي.',
        targetMainTab: 'governance',
        targetSubTab: 'org-structure',
        targetSecId: 'sec-1-3',
        partNum: 1,
        tag: 'بروتوكول نقابي',
        actionText: 'قواعد العلاقة والصلاحيات'
      },
      {
        stepNum: 2,
        title: 'استلام طلب التغطية وتصنيف الفعاليات',
        brief: 'آلية استلام استمارة MED-REQ-01 وتحديد فئة التغطية (أ، ب، ج) وتوزيع الفرق.',
        targetMainTab: 'field-ops',
        targetSubTab: 'field-prep',
        targetSecId: 'sec-2-1',
        partNum: 2,
        tag: 'إجراءات تشغيلية',
        actionText: 'آلية استلام وتصنيف الطلب'
      },
      {
        stepNum: 3,
        title: 'سلسلة المراجعة وصلاحيات الاعتماد والنشر',
        brief: 'تسلسل الموافقات على المنشورات الاعتيادية والبيانات الحساسة وضمان عدم نشر فردي.',
        targetMainTab: 'governance',
        targetSubTab: 'quality-conduct',
        targetSecId: 'sec-7-4',
        partNum: 7,
        tag: 'اعتماد رسمي',
        actionText: 'سلاسل المراجعة والنشر'
      },
      {
        stepNum: 4,
        title: 'أذونات التصوير والخصوصية وسياسة الـ AI',
        brief: 'الضوابط القانونية لتصوير الحرم الجامعي، أذونات المشاركين، وسياسة الذكاء الاصطناعي.',
        targetMainTab: 'governance',
        targetSubTab: 'rights-privacy',
        targetSecId: 'sec-8-1',
        partNum: 8,
        tag: 'قانون وخصوصية',
        actionText: 'أذونات التصوير والخصوصية'
      },
      {
        stepNum: 5,
        title: 'إدارة الطوارئ وشجرة التصعيد السريع',
        brief: 'التعامل مع التغير المفاجئ في برنامج الفعالية، الأزمات الإعلامية، وسلسلة الاتصال.',
        targetMainTab: 'field-ops',
        targetSubTab: 'field-emergency',
        targetSecId: 'sec-9-4',
        partNum: 9,
        tag: 'إدارة أزمات',
        actionText: 'خطة الطوارئ وشجرة الاتصال'
      },
      {
        stepNum: 6,
        title: 'التقرير الختامي ونماذج التقييم (Post-Mortem)',
        brief: 'توثيق مخرجات الفعالية، حصر مؤشرات الوصول والتفاعل، واستخلاص الدروس المستفادة.',
        targetMainTab: 'toolkit',
        targetSubTab: 'operational-forms',
        targetSecId: 'sec-11-2',
        partNum: 11,
        tag: 'تقييم وأداء',
        actionText: 'النماذج واستمارة التقييم'
      }
    ]
  }
];

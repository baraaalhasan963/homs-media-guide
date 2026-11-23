export type UserRole = 'volunteer' | 'specialist' | 'director' | 'admin';

export interface AccessPin {
  code: string;
  role: UserRole;
  label: string;
  active: boolean;
}

export interface RoleConfig {
  id: UserRole;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  iconName: string;
  defaultTabs: RoleTabItem[];
}

export interface RoleTabItem {
  id: string;
  title: string;
  partNum: number;
  secId?: string;
  targetMainTab: string;
  targetSubTab: string;
}

// Default system PINs
export const DEFAULT_PINS: AccessPin[] = [
  { code: '1111', role: 'volunteer', label: 'كود المتطوعين المعتمد', active: true },
  { code: '2222', role: 'specialist', label: 'كود الكادر الفني والإنتاج', active: true },
  { code: '3333', role: 'director', label: 'كود مدراء المكاتب والمعاونين', active: true },
  { code: '9999', role: 'admin', label: 'الكود الإداري العام (المرجع الشامل)', active: true }
];

// LocalStorage key for user session & custom generated PINs
export const STORAGE_KEY_AUTH = 'homs_su_media_auth_session';
export const STORAGE_KEY_CUSTOM_PINS = 'homs_su_media_custom_pins';

export function getAllPins(): AccessPin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_PINS);
    if (raw) {
      const custom: AccessPin[] = JSON.parse(raw);
      // Combine with defaults (custom overrides matching code)
      const merged = [...DEFAULT_PINS];
      custom.forEach(cP => {
        const idx = merged.findIndex(m => m.code === cP.code);
        if (idx >= 0) {
          merged[idx] = cP;
        } else {
          merged.push(cP);
        }
      });
      return merged;
    }
  } catch (e) {
    console.warn('Failed to parse custom PINs from localStorage', e);
  }
  return DEFAULT_PINS;
}

export function savePin(newPin: AccessPin) {
  try {
    const current = getAllPins();
    const idx = current.findIndex(p => p.code === newPin.code);
    if (idx >= 0) {
      current[idx] = newPin;
    } else {
      current.push(newPin);
    }
    localStorage.setItem(STORAGE_KEY_CUSTOM_PINS, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save PIN', e);
  }
}

export function deletePin(code: string) {
  try {
    const current = getAllPins().filter(p => p.code !== code);
    localStorage.setItem(STORAGE_KEY_CUSTOM_PINS, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to delete PIN', e);
  }
}

export function togglePin(code: string) {
  try {
    const current = getAllPins().map(p => {
      if (p.code === code) return { ...p, active: !p.active };
      return p;
    });
    localStorage.setItem(STORAGE_KEY_CUSTOM_PINS, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to toggle PIN', e);
  }
}

export function verifyPinCode(code: string, expectedRole?: UserRole): { valid: boolean; role?: UserRole; message: string } {
  const all = getAllPins();
  const found = all.find(p => p.code === code);

  if (!found) {
    return { valid: false, message: 'رمز الـ PIN غير صحيح، يرجى التأكد من الرمز والمحاولة مجدداً.' };
  }

  if (!found.active) {
    return { valid: false, message: 'هذا الرمز تم إيقافه حالياً من قبل إدارة القسم الإعلامي.' };
  }

  // Master Admin (code 9999) can unlock any role or admin
  if (found.role === 'admin') {
    return { valid: true, role: expectedRole || 'admin', message: 'تم التحقق بنجاح بصلاحية الإدارة.' };
  }

  // If specific role requested, verify it matches
  if (expectedRole && found.role !== expectedRole) {
    return {
      valid: false,
      message: `هذا الرمز مخصص لفئة أخرى وليس لفئة (${ROLE_CONFIGS[expectedRole].title}).`
    };
  }

  return { valid: true, role: found.role, message: 'تم التحقق بنجاح.' };
}

// Tailored Navigation Tabs for Each Role
export const ROLE_CONFIGS: Record<UserRole, RoleConfig> = {
  volunteer: {
    id: 'volunteer',
    title: 'متطوع في قسم الإعلام',
    shortTitle: 'متطوع',
    badge: 'تأهيل ميداني',
    description: 'دليل المتطوعين: مظهر وسلوك المصور، مصفوفة الممنوعات، وبطاقة المصور السريعة.',
    iconName: 'GraduationCap',
    defaultTabs: [
      {
        id: 'vol-vision',
        title: 'الرؤية والرسالة',
        partNum: 1,
        secId: 'sec-1-1',
        targetMainTab: 'governance',
        targetSubTab: 'org-structure'
      },
      {
        id: 'vol-conduct',
        title: 'السلوك والمظهر الميداني',
        partNum: 7,
        secId: 'sec-7-1',
        targetMainTab: 'governance',
        targetSubTab: 'quality-conduct'
      },
      {
        id: 'vol-donts',
        title: 'مصفوفة الأخطاء والممنوعات',
        partNum: 7,
        secId: 'sec-7-6',
        targetMainTab: 'governance',
        targetSubTab: 'quality-conduct'
      },
      {
        id: 'vol-cheat',
        title: 'بطاقة المصور السريعة (Cheat Sheet)',
        partNum: 11,
        secId: 'sec-11-1',
        targetMainTab: 'toolkit',
        targetSubTab: 'cheat-sheet'
      },
      {
        id: 'vol-faq',
        title: 'الأسئلة الشائعة وتفادي الإحراج',
        partNum: 11,
        secId: 'sec-11-5',
        targetMainTab: 'toolkit',
        targetSubTab: 'contacts-faq'
      }
    ]
  },
  specialist: {
    id: 'specialist',
    title: 'عضو في الفريق المركزي',
    shortTitle: 'الفريق المركزي',
    badge: 'إنتاج فني',
    description: 'دليل الكادر المركزي: التجهيز الميداني، قواعد التصوير والصوت، الهوية البصرية، والأرشفة.',
    iconName: 'Video',
    defaultTabs: [
      {
        id: 'spec-prep',
        title: 'التحضير وفحص المعدات',
        partNum: 2,
        secId: 'sec-2-2',
        targetMainTab: 'field-ops',
        targetSubTab: 'field-prep'
      },
      {
        id: 'spec-av',
        title: 'التصوير وهندسة الصوت',
        partNum: 3,
        secId: 'sec-3-1',
        targetMainTab: 'field-ops',
        targetSubTab: 'av-production'
      },
      {
        id: 'spec-brand',
        title: 'الهوية البصرية والتصميم',
        partNum: 4,
        secId: 'sec-4-1',
        targetMainTab: 'content-brand',
        targetSubTab: 'brand-design'
      },
      {
        id: 'spec-archive',
        title: 'الأرشفة والباك آب (3-2-1)',
        partNum: 6,
        secId: 'sec-6-1',
        targetMainTab: 'content-brand',
        targetSubTab: 'digital-archive'
      },
      {
        id: 'spec-checklist',
        title: 'تشيك ليست ما قبل النشر',
        partNum: 11,
        secId: 'sec-11-3',
        targetMainTab: 'toolkit',
        targetSubTab: 'checklists'
      }
    ]
  },
  director: {
    id: 'director',
    title: 'مدير مكتب إعلام في الهيئة الطلابية',
    shortTitle: 'مدير مكتب الهيئة',
    badge: 'إدارة وحوكمة',
    description: 'دليل مسؤولي المكاتب بالهيئات والمعاهد: البروتوكول النقابي، استلام الطلبات، سلاسل النشر، وإدارة الطوارئ.',
    iconName: 'Building2',
    defaultTabs: [
      {
        id: 'dir-management',
        title: 'إدارة المكتب الإعلامي',
        partNum: 0,
        targetMainTab: 'dir-management',
        targetSubTab: 'dir-management'
      },
      {
        id: 'dir-planning',
        title: 'التخطيط والتنظيم',
        partNum: 0,
        targetMainTab: 'dir-planning',
        targetSubTab: 'dir-planning'
      },
      {
        id: 'dir-production',
        title: 'الإنتاج والتغطية الإعلامية',
        partNum: 0,
        targetMainTab: 'dir-production',
        targetSubTab: 'dir-production'
      },
      {
        id: 'dir-publishing',
        title: 'النشر وإدارة المنصات',
        partNum: 0,
        targetMainTab: 'dir-publishing',
        targetSubTab: 'dir-publishing'
      },
      {
        id: 'dir-documentation',
        title: 'التوثيق والتقييم',
        partNum: 0,
        targetMainTab: 'dir-documentation',
        targetSubTab: 'dir-documentation'
      }
    ]
  },
  admin: {
    id: 'admin',
    title: 'المرجع المؤسسي الشامل (الإدارة)',
    shortTitle: 'المرجع الشامل',
    badge: 'صلاحية كاملة',
    description: 'الوصول المفتوح إلى كافة الأبواب التنظيمية الـ 11 والنماذج واللوائح بدون أي فلترة.',
    iconName: 'ShieldCheck',
    defaultTabs: []
  }
};

# Active Context

## Current Status
- Role-Separated Architecture Implemented:
  - Each role has its own completely independent views, structure, and navigation tabs.
- Faculty Media Office Director (`director` - مدير مكتب إعلام في الهيئة الطلابية):
  - Stripped all numbering from tabs.
  - Tab 1 (`إدارة المكتب الإعلامي`):
    - Item 1 (`1. التعريف بالمكتب الإعلامي`) fully populated with official approved content:
      - 1.1 ماهية المكتب الإعلامي
      - 1.2 الرؤية
      - 1.3 الرسالة
      - 1.4 الأهداف (10 أهداف)
      - 1.5 المبادئ الناظمة للعمل الإعلامي (جدول المبادئ والمعاني)
      - 1.6 الموقع التنظيمي والارتباط الإداري والتنفيذي (مسار رئيس الهيئة ومسار قسم الإعلام المركزي)
      - 1.7 إدارة الحسابات والمنصات الإعلامية (ضوابط + ملاحظة تنظيمية تحذيرية)
      - 1.8 نطاق مسؤوليات المكتب الإعلامي (10 مسؤوليات)
      - 1.9 المهام المساندة والتنسيقية (6 مهام)
    - Item 2 (`2. مهام مدير المكتب الإعلامي`) fully populated with official approved content:
      - 2.1 الدور الوظيفي لمدير المكتب
      - 2.2 المسؤوليات الإدارية والتنظيمية (11 نقطة + المخرج المطلوب)
      - 2.3 المسؤوليات التخطيطية (10 نقاط + المخرج المطلوب)
      - 2.4 المسؤوليات الإشرافية والفنية (12 نقطة + توضيح الإشراف الفني)
      - 2.5 مسؤوليات إدارة الفريق وتطويره (12 نقطة)
      - 2.6 مسؤوليات التنسيق والتمثيل الإعلامي (3 جهات: رئيس الهيئة، القسم المركزي، المكاتب الأخرى)
      - 2.7 مسؤوليات إدارة المنصات الإعلامية (11 نقطة + توضيح الملكية المؤسسية)
      - 2.8 مسؤوليات اعتماد المحتوى والنشر (المراحل الثلاث + 5 ضوابط اعتماد)
      - 2.9 استقلالية المكتب الإعلامي وحدود التدخل الإداري (5 حالات تدخل + مبدأ أساسي)
      - 2.10 مسؤوليات التوثيق والتقييم والتقارير (نقاط المتابعة + التقرير الشهري بنقاطه الـ 8 وملاحظة الرفع)
      - 2.11 المهام الاستثنائية وإدارة الحالات الطارئة (جدول الحالات الـ 9 والإجراء المتوقع + حظر المواقف الفردية)
      - 2.12 تفويض المهام ومتابعة تنفيذها (6 شروط للتفويض + مبدأ أساسي)
      - 2.13 معايير نجاح مدير المكتب الإعلامي (جدول مؤشرات الأداء الـ 10 + خاتمة التقييم)
    - Item 3 (`3. الهيكل التنظيمي وتوزيع المهام`) fully populated with official approved content (3.1 to 3.14, org tree, 3 formation models, 8-stage task table, handover checklist).
    - Item 4 (`4. إدارة الفريق والمتطوعين`) fully populated with official approved content (4.1 to 4.11, 6 principles, procedures, daily operations, meetings, skills dev, motivation, performance evaluation, 3-stage negligence escalation, conflict resolution, recruitment, continuity).
    - Item 5 (`5. الصلاحيات وضوابط العمل`) fully populated with official approved content (5.1 to 5.13, 6 framework principles, director & deputy authorities, member rights, platform manager, union head scope, central media role, matrix table, 6-step content workflow & controls, digital security, official statements, professional conduct, emergency guidelines).
    - Item 6 (`6. التنسيق والارتباط الإداري`) fully populated with official approved content (6.1 to 6.11, 3 basic tracks, union head relations, central media coordination, office-to-office cooperation, internal departments coordination, 6-step coverage request workflow, official channels table, conflicting instructions rules, joint projects guidelines, resources & support needs, monthly reporting).
  - All 6 sections of Tab 1 (`إدارة المكتب الإعلامي`) are now 100% complete and fully populated with official content.
  - Tab 2 (`التخطيط والتنظيم`): 100% Complete
    - Section 1 (`1. الخطط الإعلامية`) fully populated with official approved content (1.1 to 1.8).
    - Section 2 (`2. التخطيط الشهري وجدولة المحتوى`) fully populated with official approved content (2.1 to 2.12).
    - Section 3 (`3. إدارة الفعاليات`) updated with revised comprehensive text merging coverage requests (3.1 to 3.14).
    - Section 4 (`4. التنسيق مع قسم الإعلام المركزي`) fully populated with official approved content (4.1 to 4.14).
  - Tab 3 (`الإنتاج والتغطية الإعلامية`):
    - Sub-tabs optimized, shortened to single-row layout, made floating sticky (`sticky top-[68px] sm:top-[74px] z-30`) with backdrop blur (`backdrop-blur-md bg-white/85`), staying pinned smoothly during scroll.
    - 6 sub-tabs:
      1. منظومة الإنتاج (Section 1.1 populated)
      2. التغطيات (Section 2 populated 100% with subsections 2.1 to 2.10)
      3. التصوير (Section 3 populated 100% with subsections 3.1 to 3.12)
      4. صناعة المحتوى (Section 4 populated 100% with subsections 4.1 to 4.19 + intro & scenario table)
      5. التصميم والمونتاج (Section 5 populated 100% with subsections 5.1 to 5.23 + intro & subgroups)
      6. إدارة المواد (Section 6 populated 100% with subsections 6.1 to 6.23 + intro, metadata management, archive architecture, and handover checklists)
  - Tab 4 (`النشر وإدارة المنصات`): 100% Complete & Live
    - Interactive floating sticky sub-tabs (`sticky top-[68px] sm:top-[74px] z-30`) with `backdrop-blur-md bg-white/85` and responsive single-row layout (`lg:grid-cols-8`).
    - 8 sub-tabs:
      1. منظومة النشر (Section 1: 1.1 to 1.7 + Tab 4 Intro)
      2. إدارة الحسابات (Section 2: 2.1 to 2.11)
      3. الجدولة والنشر (Section 3: 3.1 to 3.16 + Operational Schedule Table)
      4. تكييف المحتوى (Section 4: 4.1 to 4.15)
      5. إدارة التفاعل (Section 5: 5.1 to 5.15)
      6. السمعة المؤسسية (Section 6: 6.1 to 6.12)
      7. حالات الطوارئ (Section 7: 7.1 to 7.16)
      8. الضوابط الختامية (Section 8: 12 mandatory concluding controls)
  - Tab 5 (`التوثيق والتقييم`) is now 100% Complete:
    - Upgraded with floating sticky sub-tabs across all 6 sections (`الأرشفة`, `التقارير الدورية`, `الإحصائيات`, `مؤشرات الأداء`, `تقييم الفريق`, `النماذج والسجلات`).
    - Includes unified operational template bank (`DOCUMENTATION_TEMPLATES` + `MANAGEMENT_TEMPLATES`) with one-click copy.
  - Phased Reference Upgrade (Phases 1, 2, 3 completed; Phase 4 intentionally deferred per user instruction):
    - Tab 1 (`إدارة المكتب الإعلامي`): Upgraded to floating sticky sub-tabs (`نظرة سريعة` + sections 1–6), added 7/30-day onboarding roadmap & Quick Decision Compass (`directorManagementTemplates.ts`), 3-tier crisis escalation matrix, delegation boundaries, equipment custody charter (`3.15`), RACI matrix (`5.8`), privacy/consent/AI controls (`5.14`), guiding SLAs & conflict scenarios (`6.6`, `6.8`), and 5 copyable templates; synced `directorStructure.ts` subtopics.
    - Tab 2 (`التخطيط والتنظيم`): Upgraded to floating sticky sub-tabs (`DirectorPlanningView.tsx`), added Event Tier Classification Matrix and copyable Monthly Calendar & Event Coverage Plan templates (`directorPlanningTemplates.ts`).
    - Tab 3 (`الإنتاج والتغطية الإعلامية`): Completed missing subsections `1.2`, `1.3`, `1.4` in `directorProductionContentSection1.ts` and added 3 operational checklists (`Pre-coverage`, `Quality Gate`, `Archive Handover`) in `DirectorProductionView.tsx`.
    - Other roles (`volunteer`, `specialist`, `admin`) intentionally left untouched / under development.
    - Mobile Drawer Navigation (`Drawer.tsx`, `Header.tsx`, `StickySubTabs.tsx`, `App.tsx`, `DirectorRoleView.tsx`): opens from left (`left-0`) matching the menu button, includes per-module icons, hides `StickySubTabs` on `< md` (`hidden md:flex`), and replaces the text role pill in `Header.tsx` with the Director icon + confirmation modal before switching roles.
- GitHub Repository & Live Deployment:
  - Repository: `https://github.com/baraaalhasan963/homs-media-guide`
  - GitHub Pages Live Site: `https://baraaalhasan963.github.io/homs-media-guide/`
  - Workflow: Source on `main`, production build automatically deployed to `gh-pages` branch via `npm run deploy`.
    - All badges (including "محتوى معتمد" and pill tags) completely removed per user instruction.
- Clean TypeScript verification (`npx tsc --noEmit` exited 0) and production build (`npm run build` exited 0).
- Live verified via Chrome DevTools (`http://localhost:5173`) with 0 console errors.

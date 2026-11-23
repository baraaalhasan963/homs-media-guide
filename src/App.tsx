import React, { useState, useEffect } from 'react';
import { guideData, Part } from './data/guideData';
import { Header } from './components/Header';
import { TabsNav } from './components/TabsNav';
import { CoverView } from './components/CoverView';
import { TableOfContents } from './components/TableOfContents';
import { MarkdownRenderer } from './components/MarkdownRenderer';
import { PartView } from './components/PartView';
import { SearchModal } from './components/SearchModal';
import { Drawer } from './components/Drawer';
import { JourneysSection } from './components/JourneysSection';
import { JourneyFloatingBar } from './components/JourneyFloatingBar';
import { RoleGateModal } from './components/RoleGateModal';
import { AdminPinModal } from './components/AdminPinModal';
import { DirectorRoleView } from './components/roles/DirectorRoleView';
import {
  UserRole,
  ROLE_CONFIGS,
  RoleTabItem,
  STORAGE_KEY_AUTH
} from './data/accessPins';
import {
  NAVIGATION_STRUCTURE,
  MainTabDef,
  SubTabDef,
  findNavigationByTarget
} from './data/navigationStructure';
import { ArrowUp, BookmarkCheck } from 'lucide-react';

export const App: React.FC = () => {
  // Authentication & Role State
  const [currentRole, setCurrentRole] = useState<UserRole | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_AUTH);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.role && ROLE_CONFIGS[parsed.role as UserRole]) {
          return parsed.role as UserRole;
        }
      }
    } catch (e) {
      console.warn('Failed reading auth session', e);
    }
    return null;
  });

  const [isGateOpen, setIsGateOpen] = useState<boolean>(() => {
    return !localStorage.getItem(STORAGE_KEY_AUTH);
  });

  const [isAdminPinOpen, setIsAdminPinOpen] = useState<boolean>(false);

  // Navigation State
  const [activeMainTab, setActiveMainTab] = useState<string>('home');
  const [activeSubTab, setActiveSubTab] = useState<string>('cover');
  const [activeRoleTabId, setActiveRoleTabId] = useState<string>('');

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeJourneyId, setActiveJourneyId] = useState<string | null>(null);
  const [activeJourneyStepIndex, setActiveJourneyStepIndex] = useState<number>(0);

  // Initialize role tab on mount or role change
  useEffect(() => {
    if (currentRole && currentRole !== 'admin') {
      const defaultTabs = ROLE_CONFIGS[currentRole].defaultTabs;
      if (defaultTabs.length > 0) {
        if (!activeRoleTabId || !defaultTabs.some(t => t.id === activeRoleTabId)) {
          setActiveRoleTabId(defaultTabs[0].id);
        }
      }
    }
  }, [currentRole, activeRoleTabId]);

  // Keyboard shortcut Ctrl+F / Cmd+F for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'f' || e.key === 'F')) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hash deep-linking
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const nav = findNavigationByTarget(hash);
    if (nav) {
      setActiveMainTab(nav.mainTabId);
      setActiveSubTab(nav.subTabId);
      return;
    }

    if (hash.startsWith('sec-')) {
      const parts = hash.split('-');
      const pNum = parseInt(parts[1], 10);
      const matchedNav = findNavigationByTarget(`part-${pNum}`);
      if (matchedNav) {
        setActiveMainTab(matchedNav.mainTabId);
        setActiveSubTab(matchedNav.subTabId);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, []);

  const handleAuthSuccess = (role: UserRole, pin: string) => {
    setCurrentRole(role);
    setIsGateOpen(false);
    localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify({ role, pin }));

    if (role !== 'admin') {
      const defaultTabs = ROLE_CONFIGS[role].defaultTabs;
      if (defaultTabs.length > 0) {
        const firstTab = defaultTabs[0];
        setActiveRoleTabId(firstTab.id);
        if (firstTab.secId) {
          setTimeout(() => {
            const el = document.getElementById(firstTab.secId!);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    } else {
      setActiveMainTab('home');
      setActiveSubTab('cover');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchRole = () => {
    setIsGateOpen(true);
  };

  const handleSelectMainTab = (mainId: string) => {
    const mainDef = NAVIGATION_STRUCTURE.find(m => m.id === mainId) || NAVIGATION_STRUCTURE[0];
    const defaultSub = mainDef.subTabs[0]?.id || '';
    setActiveMainTab(mainId);
    setActiveSubTab(defaultSub);
    window.location.hash = defaultSub;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubTab = (subId: string, mainId?: string, targetSecId?: string) => {
    let resolvedMainId = mainId;
    if (!resolvedMainId) {
      for (const m of NAVIGATION_STRUCTURE) {
        if (m.subTabs.some(s => s.id === subId)) {
          resolvedMainId = m.id;
          break;
        }
      }
    }

    if (resolvedMainId) {
      setActiveMainTab(resolvedMainId);
    }
    setActiveSubTab(subId);
    window.location.hash = targetSecId || subId;

    if (targetSecId) {
      setTimeout(() => {
        const el = document.getElementById(targetSecId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectRoleTab = (tabId: string) => {
    if (!currentRole || currentRole === 'admin') {
      handleSelectMainTab(tabId);
      return;
    }

    const tabs = ROLE_CONFIGS[currentRole].defaultTabs;
    const target = tabs.find(t => t.id === tabId);
    if (target) {
      setActiveRoleTabId(tabId);
      window.location.hash = target.secId || target.id;
      if (target.secId) {
        setTimeout(() => {
          const el = document.getElementById(target.secId!);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectFromResult = (partNum: number, secId?: string) => {
    const nav = findNavigationByTarget(`part-${partNum}`);
    if (nav) {
      handleSelectSubTab(nav.subTabId, nav.mainTabId, secId);
    }
  };

  // Resolve active content
  const isFullAdmin = currentRole === 'admin' || !currentRole;
  const currentMainDef = NAVIGATION_STRUCTURE.find(m => m.id === activeMainTab) || NAVIGATION_STRUCTURE[0];
  const currentSubDef = currentMainDef.subTabs.find(s => s.id === activeSubTab) || currentMainDef.subTabs[0];

  // If in tailored role mode, resolve the active Part for that role tab
  const activeRoleItem = currentRole && currentRole !== 'admin'
    ? (ROLE_CONFIGS[currentRole].defaultTabs.find(t => t.id === activeRoleTabId) || ROLE_CONFIGS[currentRole].defaultTabs[0])
    : null;

  const currentRolePart = activeRoleItem
    ? guideData.parts.find(p => p.num === activeRoleItem.partNum)
    : null;

  const currentAdminPart = currentSubDef?.partNum
    ? guideData.parts.find(p => p.num === currentSubDef.partNum)
    : null;

  // Standalone Clean Welcome / Login Screen (Zero Headers, Zero Tabs, Zero Clutter)
  if (isGateOpen || !currentRole) {
    return (
      <RoleGateModal
        isOpen={true}
        onSuccess={handleAuthSuccess}
        initialRole={currentRole}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF4E0]/20 flex flex-col font-cairo">
      
      {/* Admin PIN Management Modal */}
      <AdminPinModal
        isOpen={isAdminPinOpen}
        onClose={() => setIsAdminPinOpen(false)}
      />

      {/* Sticky Top Header with Integrated Role-based Tabs */}
      <div className="sticky top-0 left-0 right-0 z-50 shadow-md">
        <Header
          currentRole={currentRole}
          activeTabId={isFullAdmin ? activeMainTab : activeRoleTabId}
          onSelectTab={isFullAdmin ? handleSelectMainTab : handleSelectRoleTab}
          onOpenSearch={() => setIsSearchOpen(true)}
          onToggleDrawer={() => setIsDrawerOpen(true)}
          onGoHome={() => isFullAdmin ? handleSelectMainTab('home') : handleSelectRoleTab(ROLE_CONFIGS[currentRole!].defaultTabs[0].id)}
          onSwitchRole={handleSwitchRole}
          onOpenAdminPins={() => setIsAdminPinOpen(true)}
        />

        {/* Sub-tabs Ribbon (Only displayed for Full Admin Reference Mode) */}
        {isFullAdmin && (
          <TabsNav
            activeMainTabId={activeMainTab}
            activeSubTabId={activeSubTab}
            onSelectSubTab={(sId, mId) => handleSelectSubTab(sId, mId)}
          />
        )}
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl w-full mx-auto px-4 md:px-6 py-6 flex-1">
        <article className="bg-white border border-[#134F47]/15 rounded-3xl shadow-xl p-6 md:p-12 relative overflow-hidden">
          {/* Subtle Watermark Emblem */}
          <img 
            src="assets/images/union-emblem.svg" 
            alt="" 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.025] pointer-events-none"
            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
          />

          <div className="relative z-10">
            {/* Screen View: Active Tab Content */}
            <div className="no-print">
              
              {/* Role Mode: Curated view for the specific persona */}
              {!isFullAdmin && currentRole === 'director' ? (
                <DirectorRoleView
                  activeTabId={activeRoleTabId}
                  onSelectModule={handleSelectRoleTab}
                  onSwitchRole={handleSwitchRole}
                />
              ) : !isFullAdmin && activeRoleItem && currentRolePart ? (
                <div>
                  {/* Persona Context Pill */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#134F47]/10">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#134F47] text-[#FFF4E0] text-xs font-black px-3 py-1 rounded-full">
                        {ROLE_CONFIGS[currentRole!].title}
                      </span>
                      <span className="text-xs font-bold text-[#E85B0D]">
                        محتوى مخصص ومفلتر حسب دورك
                      </span>
                    </div>

                    <button
                      onClick={handleSwitchRole}
                      className="text-xs font-bold text-[#134F47]/80 hover:text-[#E85B0D] transition-colors"
                    >
                      تغيير الدور ⟳
                    </button>
                  </div>

                  <PartView
                    part={currentRolePart}
                    categoryTitle={ROLE_CONFIGS[currentRole!].title}
                    subTabTitle={activeRoleItem.title}
                    onGoHome={() => handleSelectRoleTab(ROLE_CONFIGS[currentRole!].defaultTabs[0].id)}
                  />
                </div>
              ) : isFullAdmin && activeMainTab === 'home' ? (
                /* Admin / Master Reference: Home Overview */
                <div>
                  <CoverView onStartGuide={() => handleSelectMainTab('field-ops')} />

                  <TableOfContents
                    parts={guideData.parts}
                    onSelectSubTab={(sId, mId, sSecId) => handleSelectSubTab(sId, mId, sSecId)}
                  />

                  {/* Intro Section */}
                  <section 
                    id="foundation-intro" 
                    className="bg-white border border-[#134F47]/15 rounded-2xl p-6 md:p-8 shadow-xs mt-6"
                  >
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#134F47]/10">
                      <span className="bg-[#134F47] text-[#FFF4E0] text-xs font-black px-3 py-1 rounded-md">
                        المدخل التأسيسي
                      </span>
                      <h3 className="text-lg font-black text-[#134F47]">
                        {guideData.intro.title}: المنطلقات والرؤية المؤسسية
                      </h3>
                    </div>
                    <MarkdownRenderer content={guideData.intro.body} sectionId="intro" />
                  </section>
                </div>
              ) : currentAdminPart ? (
                /* Admin / Master Reference: Standard Part View */
                <PartView
                  part={currentAdminPart}
                  categoryTitle={currentMainDef.title}
                  subTabTitle={currentSubDef?.title}
                  onGoHome={() => handleSelectMainTab('home')}
                />
              ) : (
                <div className="text-center py-12 text-[#134F47]/60">
                  <p>القسم المطلوب قيد التحديث أو غير متوفر حالياً.</p>
                </div>
              )}
            </div>

            {/* Print View: Full Guide Document */}
            <div className="hidden print-block space-y-12">
              <CoverView onStartGuide={() => {}} />
              <TableOfContents
                parts={guideData.parts}
                onSelectSubTab={() => {}}
              />
              <section className="p-4 mb-8">
                <h3 className="text-xl font-bold mb-4">{guideData.intro.title}</h3>
                <MarkdownRenderer content={guideData.intro.body} sectionId="print_intro" />
              </section>
              {guideData.parts.map((p: Part) => (
                <div key={p.num} className="page-break-after">
                  <PartView
                    part={p}
                    categoryTitle="وثيقة رسمية معتمدة"
                  />
                </div>
              ))}
            </div>

          </div>
        </article>
      </main>

      {/* Floating Action Button: Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-full bg-[#134F47] text-white border-2 border-[#E85B0D] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all no-print"
        title="إلى الأعلى"
      >
        <ArrowUp className="w-5 h-5 text-[#FFF4E0]" />
      </button>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        parts={guideData.parts}
        onSelectResult={(pNum, sId) => handleSelectFromResult(pNum, sId)}
      />

      {/* Accordion Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        parts={guideData.parts}
        onSelectSubTab={(sId, mId, sSecId) => handleSelectSubTab(sId, mId, sSecId)}
        onSelectHome={() => handleSelectMainTab('home')}
      />
    </div>
  );
};

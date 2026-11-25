import React, { useRef, useEffect, useState } from 'react';
import { Search, Menu, KeyRound, ChevronDown, UserRound, ShieldCheck, LogOut } from 'lucide-react';
import { UserRole, ROLE_CONFIGS, RoleTabItem } from '../data/accessPins';
import { NAVIGATION_STRUCTURE, MainTabDef } from '../data/navigationStructure';

interface HeaderProps {
  currentRole: UserRole | null;
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  onOpenSearch: () => void;
  onToggleDrawer: () => void;
  onGoHome: () => void;
  onSwitchRole: () => void;
  onOpenAdminPins?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  activeTabId,
  onSelectTab,
  onOpenSearch,
  onToggleDrawer,
  onGoHome,
  onSwitchRole,
  onOpenAdminPins
}) => {
  const activeBtnRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showSwitchConfirm, setShowSwitchConfirm] = useState(false);

  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTabId]);

  // Determine which tabs to show based on role
  const isFullReference = currentRole === 'admin' || !currentRole;
  const roleConfig = currentRole ? ROLE_CONFIGS[currentRole] : null;

  return (
    <header className="bg-[#134F47] border-b border-[#E85B0D]/30 px-3 sm:px-6 py-2.5 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Right: Only the Logo (Cream Tone #FFF4E0) */}
        <div 
          onClick={onGoHome}
          className="flex items-center cursor-pointer select-none hover:opacity-90 transition-opacity flex-shrink-0"
          title="الرئيسية"
        >
          <img 
            src="assets/images/union-logo.svg" 
            alt="اتحاد الطلبة" 
            className="h-9 sm:h-10 w-auto brightness-0 invert sepia saturate-[250%] hue-rotate-[10deg] opacity-95 drop-shadow-sm"
            onError={(e) => { 
              const el = e.target as HTMLElement;
              el.style.display = 'none';
            }}
          />
        </div>

        {/* Center: Dynamic Navigation Tabs Tailored by Role */}
        <div 
          ref={scrollContainerRef}
          className={`${currentRole === 'director' ? 'hidden md:flex' : 'flex'} flex-1 items-center justify-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar px-2`}
        >
          {isFullReference ? (
            // Admin / Full Reference: Master Pillar Tabs
            NAVIGATION_STRUCTURE.map((main: MainTabDef) => {
              const isActive = main.id === activeTabId;
              return (
                <button
                  key={main.id}
                  ref={isActive ? activeBtnRef : null}
                  onClick={() => onSelectTab(main.id)}
                  className={`relative px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-[#E85B0D] text-white font-black shadow-xs'
                      : 'text-[#FFF4E0]/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{main.title}</span>
                </button>
              );
            })
          ) : (
            // Role-Specific Custom Tabs
            roleConfig?.defaultTabs.map((tab: RoleTabItem) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  ref={isActive ? activeBtnRef : null}
                  onClick={() => onSelectTab(tab.id)}
                  className={`relative px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-[#E85B0D] text-white font-black shadow-xs'
                      : 'text-[#FFF4E0]/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{tab.title}</span>
                </button>
              );
            })
          )}
        </div>

        {/* Left: Role Switcher, Admin PINs button, and Search */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          
          {/* Active Role Icon / Switcher */}
          {roleConfig && (
            currentRole === 'director' ? (
              <button
                type="button"
                onClick={() => setShowSwitchConfirm(true)}
                className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-[#FFF4E0] hover:bg-white text-[#71122B] transition-all shadow-xs border border-[#FFF4E0]"
                title="مدير مكتب الهيئة — تسجيل الخروج وتبديل الدور"
                aria-label="حساب مدير مكتب الهيئة وتبديل الدور"
              >
                <UserRound className="w-4 h-4 stroke-[2.3]" />
                <span className="absolute -bottom-1 -left-1 bg-[#71122B] text-white p-0.5 rounded-full ring-1 ring-white flex items-center justify-center">
                  <ShieldCheck className="w-2.5 h-2.5" />
                </span>
              </button>
            ) : (
              <button
                onClick={() => setShowSwitchConfirm(true)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FFF4E0] text-[#134F47] hover:bg-white text-xs font-black transition-all shadow-xs border border-[#FFF4E0]"
                title="تبديل الدور أو تسجيل الخروج"
              >
                <span>{roleConfig.shortTitle}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#E85B0D]" />
              </button>
            )
          )}

          {/* Admin PIN Manager Button (for Admin only) */}
          {currentRole === 'admin' && onOpenAdminPins && (
            <button
              onClick={onOpenAdminPins}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#E85B0D] hover:bg-[#E85B0D]/80 text-white transition-all shadow-xs"
              title="إدارة وتوليد رموز PIN"
              aria-label="إدارة رموز PIN"
            >
              <KeyRound className="w-4 h-4" />
            </button>
          )}

          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#E85B0D]/30 text-[#FFF4E0] border border-white/15 transition-all shadow-xs"
            title="بحث فوري (Ctrl + F)"
            aria-label="بحث فوري"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile Drawer (Full Reference or Director) */}
          {(isFullReference || currentRole === 'director') && (
            <button
              onClick={onToggleDrawer}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all md:hidden"
              title="القائمة الجانبية"
              aria-label="القائمة الجانبية"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Role Switch Confirmation Modal */}
      {showSwitchConfirm && (
        <div
          className="fixed inset-0 z-[60] bg-[#0D2B26]/65 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowSwitchConfirm(false)}
        >
          <div
            className="bg-white border-2 border-[#134F47]/20 rounded-2xl p-5 sm:p-6 w-full max-w-sm shadow-2xl text-right space-y-4 text-[#134F47]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFF4E0] text-[#71122B] flex items-center justify-center flex-shrink-0">
                <LogOut className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-[#134F47]">تأكيد تبديل الدور</h3>
                <p className="text-xs text-[#134F47]/75 font-semibold">
                  هل تريد تسجيل الخروج من دور مدير مكتب الهيئة وتبديل الدور؟
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowSwitchConfirm(false)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#134F47]/5 hover:bg-[#134F47]/10 text-[#134F47] transition-colors cursor-pointer"
              >
                إلغاء
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSwitchConfirm(false);
                  onSwitchRole();
                }}
                className="px-4 py-2 rounded-xl text-xs font-black bg-[#71122B] hover:bg-[#71122B]/90 text-white transition-colors cursor-pointer"
              >
                نعم، تبديل الدور
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

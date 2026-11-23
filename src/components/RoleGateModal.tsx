import React, { useState, useRef, useEffect } from 'react';
import { UserRole, ROLE_CONFIGS, verifyPinCode } from '../data/accessPins';
import {
  UserRound,
  Check,
  Star,
  ShieldCheck,
  Lock,
  ArrowLeft,
  AlertCircle,
  KeyRound,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface RoleGateModalProps {
  isOpen: boolean;
  onSuccess: (role: UserRole, pin: string) => void;
  initialRole?: UserRole | null;
}

export const RoleGateModal: React.FC<RoleGateModalProps> = ({
  isOpen,
  onSuccess,
  initialRole
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(initialRole || null);
  const [pinDigits, setPinDigits] = useState<string[]>(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  useEffect(() => {
    if (selectedRole) {
      setPinDigits(['', '', '', '']);
      setErrorMessage('');
      setTimeout(() => inputRefs[0].current?.focus(), 150);
    }
  }, [selectedRole]);

  if (!isOpen) return null;

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setErrorMessage('');
  };

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...pinDigits];
    // Take the last character typed
    newDigits[index] = value ? value.slice(-1) : '';
    setPinDigits(newDigits);
    setErrorMessage('');

    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // When all 4 digits are entered, verify immediately
    const fullPin = newDigits.join('');
    if (fullPin.length === 4 && selectedRole) {
      validatePin(fullPin, selectedRole);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pinDigits[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
    if (e.key === 'Enter') {
      const fullPin = pinDigits.join('');
      if (fullPin.length === 4 && selectedRole) {
        validatePin(fullPin, selectedRole);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (pasted.length === 4 && selectedRole) {
      const digits = pasted.split('');
      setPinDigits(digits);
      validatePin(pasted, selectedRole);
    }
  };

  const validatePin = (code: string, role: UserRole) => {
    const res = verifyPinCode(code, role);
    if (res.valid && res.role) {
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess(res.role!, code);
      }, 400);
    } else {
      setErrorMessage(res.message);
      // Clear inputs for re-entry
      setPinDigits(['', '', '', '']);
      setTimeout(() => inputRefs[0].current?.focus(), 100);
    }
  };

  const getRoleIcon = (roleId: UserRole) => {
    switch (roleId) {
      case 'volunteer':
        return (
          <div className="relative flex items-center justify-center">
            <UserRound className="w-10 h-10 text-[#134F47] stroke-[2.2] group-hover:scale-105 transition-transform" />
            <div className="absolute -bottom-1 -left-1 bg-[#E85B0D] text-white p-1 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>
        );
      case 'specialist':
        return (
          <div className="relative flex items-center justify-center">
            <UserRound className="w-10 h-10 text-[#134F47] stroke-[2.2] group-hover:scale-105 transition-transform" />
            <div className="absolute -bottom-1 -left-1 bg-[#E85B0D] text-white p-1 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
              <Star className="w-3.5 h-3.5 fill-white stroke-none" />
            </div>
          </div>
        );
      case 'director':
        return (
          <div className="relative flex items-center justify-center">
            <UserRound className="w-10 h-10 text-[#71122B] stroke-[2.2] group-hover:scale-105 transition-transform" />
            <div className="absolute -bottom-1 -left-1 bg-[#71122B] text-white p-1 rounded-full shadow-md ring-2 ring-white flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 fill-white stroke-[#71122B]" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const primaryRoles: UserRole[] = ['volunteer', 'specialist', 'director'];

  return (
    <div className="min-h-screen w-full bg-[#134F47] flex items-center justify-center p-4 sm:p-6 font-cairo text-right select-none">
      {/* Centered Brand Card (Refined Golden-Ratio Proportions) */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#FFF4E0]/20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Banner: Solid Clean Brand Green */}
        <div className="bg-[#134F47] px-6 pt-9 pb-8 text-white text-center border-b-2 border-[#E85B0D]/40">
          <img 
            src="assets/images/union-logo-cream.svg" 
            alt="اتحاد الطلبة" 
            className="h-16 sm:h-20 w-auto mx-auto mb-3.5 drop-shadow-md"
            onError={(e) => {
              // Fallback to union-logo.svg with cream styling if cream file not loaded
              const el = e.target as HTMLImageElement;
              el.src = 'assets/images/union-logo.svg';
              el.className = 'h-16 sm:h-20 w-auto mx-auto mb-3.5 brightness-0 invert sepia saturate-[250%] hue-rotate-[10deg] opacity-95 drop-shadow-md';
            }}
          />
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            الدليل الإعلامي الموحّد
          </h1>
        </div>

        {/* Card Body (30% Warm Cream Base) */}
        <div className="p-6 sm:p-8 bg-[#FFF4E0]/40">
          {!selectedRole ? (
            /* Step 1: Select Role (3 Perfectly Proportionate Cards) */
            <div>
              <div className="text-center mb-6">
                <h2 className="text-sm sm:text-base font-extrabold text-[#134F47] tracking-wide">
                  حدد دورك للمتابعة
                </h2>
              </div>

              {/* 3 Roles Side by Side (From Right to Left in RTL) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {primaryRoles.map((rKey) => {
                  const r = ROLE_CONFIGS[rKey];
                  const isDirector = rKey === 'director';

                  return (
                    <button
                      key={r.id}
                      onClick={() => handleRoleSelect(r.id)}
                      className={`group py-7 px-4 rounded-2xl text-center border-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer bg-white min-h-[190px] relative overflow-hidden ${
                        isDirector
                          ? 'border-[#71122B]/20 hover:border-[#71122B]'
                          : 'border-[#134F47]/15 hover:border-[#E85B0D]'
                      }`}
                    >
                      {/* Top Accent Ribbon on Hover */}
                      <div className={`absolute top-0 inset-x-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        isDirector ? 'bg-[#71122B]' : 'bg-[#E85B0D]'
                      }`} />

                      {/* Luxury Embossed Medallion Container */}
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                        isDirector
                          ? 'bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EC] to-[#FEEDD0] border-2 border-[#71122B]/25 group-hover:border-[#71122B] group-hover:ring-4 group-hover:ring-[#71122B]/15 group-hover:shadow-md'
                          : 'bg-gradient-to-b from-[#FFFDF9] via-[#FFF8EC] to-[#FEEDD0] border-2 border-[#134F47]/20 group-hover:border-[#E85B0D] group-hover:ring-4 group-hover:ring-[#E85B0D]/15 group-hover:shadow-md'
                      }`}>
                        {getRoleIcon(r.id)}
                      </div>

                      <h3 className={`text-xs sm:text-sm font-black transition-colors leading-relaxed px-1 ${
                        isDirector
                          ? 'text-[#134F47] group-hover:text-[#71122B]'
                          : 'text-[#134F47] group-hover:text-[#E85B0D]'
                      }`}>
                        {r.title}
                      </h3>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Step 2: 4-digit PIN Entry */
            <div className="max-w-md mx-auto text-center">
              <button
                onClick={() => { setSelectedRole(null); setErrorMessage(''); }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#134F47]/75 hover:text-[#134F47] mb-4 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
                <span>تغيير الدور المختار</span>
              </button>

              <div className="w-12 h-12 rounded-2xl bg-[#FFF4E0] border border-[#134F47]/20 flex items-center justify-center mx-auto mb-3 shadow-xs">
                <KeyRound className="w-6 h-6 text-[#E85B0D]" />
              </div>

              <span className="inline-block bg-[#134F47] text-[#FFF4E0] text-xs font-black px-3 py-1 rounded-full mb-2">
                {ROLE_CONFIGS[selectedRole].title}
              </span>

              <h2 className="text-lg sm:text-xl font-black text-[#134F47] mb-1">
                أدخل رمز الدخول (PIN)
              </h2>
              <p className="text-xs text-[#134F47]/75 font-medium mb-6">
                أدخل الرمز المكون من 4 خانات المخصص لفئتك للوصول لمحتواك
              </p>

              {/* 4-digit PIN Boxes */}
              <div 
                className="flex items-center justify-center gap-3 sm:gap-4 mb-4 dir-ltr" 
                onPaste={handlePaste}
              >
                {[0, 1, 2, 3].map((idx) => (
                  <input
                    key={idx}
                    ref={inputRefs[idx]}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={pinDigits[idx]}
                    onChange={(e) => handleDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className={`w-13 h-14 sm:w-14 sm:h-16 text-center text-2xl font-black rounded-xl border-2 transition-all outline-hidden ${
                      isSuccess
                        ? 'border-[#134F47] bg-[#FFF4E0] text-[#134F47]'
                        : errorMessage
                        ? 'border-[#C51A1B] bg-white text-[#C51A1B] animate-shake'
                        : pinDigits[idx]
                        ? 'border-[#E85B0D] bg-white text-[#134F47] shadow-sm'
                        : 'border-[#134F47]/20 bg-white text-[#134F47] focus:border-[#E85B0D] focus:ring-2 focus:ring-[#E85B0D]/20'
                    }`}
                  />
                ))}
              </div>

              {/* Error Message with Brand Red */}
              {errorMessage && (
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#C51A1B] bg-[#C51A1B]/10 p-2.5 rounded-xl mb-4 border border-[#C51A1B]/20">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Success Feedback */}
              {isSuccess && (
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#134F47] bg-[#FFF4E0] p-2.5 rounded-xl mb-4 border border-[#134F47]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#134F47]" />
                  <span>تم التحقق بنجاح! جاري تخصيص الدليل...</span>
                </div>
              )}

              <p className="text-[11px] text-[#134F47]/60 font-semibold mt-4">
                في حال عدم امتلاكك لرمز الـ PIN، يرجى مراجعة إدارة القسم الإعلامي لتزويدك بالرمز المعتمد.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

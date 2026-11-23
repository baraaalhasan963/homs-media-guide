import React, { useState } from 'react';
import {
  AccessPin,
  UserRole,
  ROLE_CONFIGS,
  getAllPins,
  savePin,
  deletePin,
  togglePin
} from '../data/accessPins';
import {
  KeyRound,
  Plus,
  Trash2,
  Power,
  X,
  Copy,
  Check,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface AdminPinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPinModal: React.FC<AdminPinModalProps> = ({ isOpen, onClose }) => {
  const [pins, setPins] = useState<AccessPin[]>(getAllPins());
  const [newCode, setNewCode] = useState<string>('');
  const [newRole, setNewRole] = useState<UserRole>('volunteer');
  const [newLabel, setNewLabel] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setPins(getAllPins());
  };

  const handleAddPin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = newCode.trim();
    if (!/^\d{4}$/.test(cleanCode)) {
      alert('يجب أن يتكون رمز الـ PIN من 4 أرقام حصراً.');
      return;
    }

    const pinObj: AccessPin = {
      code: cleanCode,
      role: newRole,
      label: newLabel.trim() || `كود ${ROLE_CONFIGS[newRole].shortTitle} جديد`,
      active: true
    };

    savePin(pinObj);
    setNewCode('');
    setNewLabel('');
    handleRefresh();
  };

  const handleGenerateRandom = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setNewCode(randomCode);
  };

  const handleToggle = (code: string) => {
    togglePin(code);
    handleRefresh();
  };

  const handleDelete = (code: string) => {
    if (confirm(`هل أنت متأكد من حذف الرمز (${code})؟`)) {
      deletePin(code);
      handleRefresh();
    }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#134F47]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-[#134F47]/20 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#134F47] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E85B0D] flex items-center justify-center text-white">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black">إدارة وتوليد رموز الدخول (PINs)</h3>
              <p className="text-[11px] text-[#FFF4E0]/80">التحكم في الأكواد المصرح لها بفتح كل دور</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#FFF4E0]/20 space-y-6">
          
          {/* Add / Generate New PIN Box */}
          <form onSubmit={handleAddPin} className="bg-white border border-[#134F47]/15 rounded-2xl p-4 shadow-xs">
            <div className="text-xs font-black text-[#134F47] mb-3 flex items-center gap-2">
              <Plus className="w-4 h-4 text-[#E85B0D]" />
              <span>توليد أو إضافة كود PIN جديد</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <div>
                <label className="block text-[11px] font-bold text-[#134F47]/80 mb-1">رمز الـ PIN (4 أرقام)</label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    maxLength={4}
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="مثال: 4582"
                    className="w-full px-3 py-1.5 border border-[#134F47]/20 rounded-lg text-sm font-black text-[#134F47] text-center"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleGenerateRandom}
                    className="px-2 py-1.5 bg-[#FFF4E0] text-[#E85B0D] border border-[#E85B0D]/30 rounded-lg text-xs font-bold hover:bg-[#E85B0D] hover:text-white transition-colors"
                    title="توليد رقم عشوائي"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#134F47]/80 mb-1">الفئة المصرح لها</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as UserRole)}
                  className="w-full px-2.5 py-1.5 border border-[#134F47]/20 rounded-lg text-xs font-bold text-[#134F47] bg-white"
                >
                  <option value="volunteer">المتطوعون الجدد</option>
                  <option value="specialist">الكادر الفني والإنتاج</option>
                  <option value="director">مدراء المكاتب والمعاونون</option>
                  <option value="admin">الإدارة (المرجع الشامل)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#134F47]/80 mb-1">ملاحظة أو تسمية (اختياري)</label>
                <input
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="مثال: دورة 2026 هندسة"
                  className="w-full px-3 py-1.5 border border-[#134F47]/20 rounded-lg text-xs font-medium text-[#134F47]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#E85B0D] hover:bg-[#E85B0D]/90 text-white font-black text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة وتفعيل هذا الرمز فوراً</span>
            </button>
          </form>

          {/* Current PINs List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-black text-[#134F47]">
                الرموز المعتمدة حالياً في النظام ({pins.length})
              </h4>
              <span className="text-[11px] text-[#134F47]/70 font-semibold">
                يمكن إيقاف أي رمز أو حذفه بأي وقت
              </span>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto p-1">
              {pins.map((pin) => {
                const roleConfig = ROLE_CONFIGS[pin.role];

                return (
                  <div
                    key={pin.code}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      pin.active
                        ? 'bg-white border-[#134F47]/15'
                        : 'bg-gray-100/80 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-9 rounded-lg bg-[#FFF4E0] border border-[#134F47]/10 flex items-center justify-center font-black text-sm text-[#134F47] tracking-widest dir-ltr">
                        {pin.code}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#134F47]">
                            {pin.label}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded-md bg-[#134F47]/10 text-[#134F47]">
                            {roleConfig.shortTitle}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold ${
                          pin.active ? 'text-[#134F47]' : 'text-[#C51A1B]'
                        }`}>
                          {pin.active ? '● شغال وفعّال' : '○ موقوف مؤقتاً'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(pin.code)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg text-[#134F47]/70 hover:text-[#134F47]"
                        title="نسخ الرمز"
                      >
                        {copiedCode === pin.code ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => handleToggle(pin.code)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          pin.active
                            ? 'text-green-700 hover:bg-green-50'
                            : 'text-gray-400 hover:bg-gray-200'
                        }`}
                        title={pin.active ? 'تعطيل الرمز' : 'تفعيل الرمز'}
                      >
                        <Power className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(pin.code)}
                        className="p-1.5 text-[#C51A1B]/70 hover:text-[#C51A1B] hover:bg-red-50 rounded-lg transition-colors"
                        title="حذف الرمز"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

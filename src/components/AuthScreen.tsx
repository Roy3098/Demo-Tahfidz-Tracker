import React, { useState } from 'react';
import { useTahfidz } from '../context/TahfidzContext';
import { BookOpen, AlertCircle, HeartHandshake, Sparkles, GraduationCap } from 'lucide-react';

export const AuthScreen: React.FC = () => {
  const { loginUserAccount } = useTahfidz();

  const [loginError, setLoginError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoGuruLogin = async () => {
    setIsSubmitting(true);
    setLoginError('');
    const res = await loginUserAccount('guru', 'guru123', 'guru');
    setIsSubmitting(false);
    if (!res.success) {
      setLoginError(res.message);
    }
  };

  const handleDemoParentLogin = async () => {
    setIsSubmitting(true);
    setLoginError('');
    const res = await loginUserAccount('orangtua', 'ortu123', 'parent');
    setIsSubmitting(false);
    if (!res.success) {
      setLoginError(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Islamic geometric ambient patterns */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Tahfidz Tracker
          </h1>
          <p className="text-emerald-100/90 text-sm mt-1">
            Sistem Pencatatan Hafalan Al-Qur'an Terpadu
          </p>
        </div>

        <div className="space-y-4">
          {loginError && (
            <div className="p-3 bg-rose-500/25 border border-rose-400/40 rounded-xl text-xs text-rose-100 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-300 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <div className="text-center pb-0.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Pilih Akun Demo untuk Masuk Langsung
            </span>
          </div>

          {/* Demo Guru Card */}
          <button
            type="button"
            onClick={handleDemoGuruLogin}
            disabled={isSubmitting}
            className="w-full p-4 bg-white/15 hover:bg-white/25 border border-emerald-400/40 rounded-2xl transition-all duration-200 text-left group cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center text-emerald-200 shadow-sm shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">Masuk Sebagai Guru</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                      Demo
                    </span>
                  </div>
                  <div className="text-xs text-emerald-100/90 font-medium mt-0.5">
                    Ustadz Ahmad Fauzan, S.Pd.I
                  </div>
                  <div className="text-[11px] text-emerald-200/70 font-mono mt-0.5">
                    Username: guru · Sandi: guru123
                  </div>
                </div>
              </div>
              <span className="text-emerald-300 group-hover:translate-x-1 transition-transform font-bold text-lg">
                →
              </span>
            </div>
          </button>

          {/* Demo Orang Tua Card */}
          <button
            type="button"
            onClick={handleDemoParentLogin}
            disabled={isSubmitting}
            className="w-full p-4 bg-white/15 hover:bg-white/25 border border-teal-400/40 rounded-2xl transition-all duration-200 text-left group cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/30 border border-teal-400/40 flex items-center justify-center text-teal-200 shadow-sm shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">Masuk Sebagai Wali Santri</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-400/20 text-teal-300 border border-teal-400/30">
                      Demo
                    </span>
                  </div>
                  <div className="text-xs text-teal-100/90 font-medium mt-0.5">
                    Bapak Ahmad (Wali Ahmad Fauzi)
                  </div>
                  <div className="text-[11px] text-teal-200/70 font-mono mt-0.5">
                    Username: orangtua · Sandi: ortu123
                  </div>
                </div>
              </div>
              <span className="text-teal-300 group-hover:translate-x-1 transition-transform font-bold text-lg">
                →
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

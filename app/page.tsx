"use client";
import Link from 'next/link';
import { Bot, Store, Truck, ShoppingCart, Activity, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. NAVBAR */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200">
            <Activity size={24} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">MedFlow</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/savatcha" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 font-medium">
            <ShoppingCart size={20} /> Savatcha
          </Link>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Kirish
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-blue-600 bg-blue-50 rounded-full">
          ✨ Kelajak tibbiyoti — Sun'iy Intellekt bilan
        </div>
        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Tibbiy yordam endi <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            yanada yaqinroq
          </span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          AI orqali simptomlarni aniqlang, dorilarni savatchaga qo'shing va professional yetkazib berish xizmatidan foydalaning.
        </p>

        {/* 3. CARDS (ASOSIY BO'LIMLAR) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MIJOZ -> CHAT */}
          <Link href="/chat" className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 relative overflow-hidden text-left">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Bot size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Tashxis</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              O'zingizni qanday his qilayotganingizni yozing va AI'dan dori tavsiyalarini oling.
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              Chatni boshlash <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* DORIXONA */}
          <Link href="/dorixona" className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-green-500 hover:shadow-2xl hover:shadow-green-100 transition-all duration-300 relative overflow-hidden text-left">
            <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <Store size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Dorixona</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Mijozlardan kelgan buyurtmalarni boshqarish va tayyorlash markazi.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold">
              Panelga kirish <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
\          Admin:Behruzbek {/* KURYER */}
          <Link href="/kuryer" className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-300 relative overflow-hidden text-left">
            <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
              <Truck size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Kuryer</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Buyurtmalarni manzillarga tez va xavfsiz yetkazib berish bo'limi.
            </p>
            <div className="flex items-center gap-2 text-orange-600 font-bold">
              Yo'nalishni ko'rish <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

        </div>
      </div>

      {/* FOOTER STATS */}
      <div className="border-t border-slate-100 py-12 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="text-center">
            <div className="text-2xl font-bold italic">99% Aniq Tashxis</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold italic">24/7 Xizmat</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold italic">Tezkor Yetkazish</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold italic">Xavfsiz To'lov</div>
          </div>
        </div>
      </div>
    </div>
  );
}
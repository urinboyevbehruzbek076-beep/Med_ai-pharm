 "use client";
import { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import { ShoppingCart, Trash2, CreditCard, Plus, Minus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SavatchaSahifasi() {
  const [items, setItems] = useState<any[]>([]);
  const [yuklanmoqda, setYuklanmoqda] = useState(true);

  // 1. Sahifa yuklanganda localStorage'dan ma'lumot olish
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saqlanganSavatcha = JSON.parse(localStorage.getItem("cart") || "[]");
      setItems(saqlanganSavatcha);
      setYuklanmoqda(false);
    }
  }, []);

  // 2. Miqdorni o'zgartirish va xotirani yangilash
  const yangilash = (yangiRoyxat: any[]) => {
    setItems(yangiRoyxat);
    localStorage.setItem("cart", JSON.stringify(yangiRoyxat));
  };

  const ozgartirish = (id: number, miqdor: number) => {
    const yangi = items.map((item: any) => {
      if (item.id === id) {
        const yangiSoni = item.soni + miqdor;
        return { ...item, soni: yangiSoni > 0 ? yangiSoni : 1 };
      }
      return item;
    });
    yangilash(yangi);
  };

  const ochirish = (id: number) => {
    const yangi = items.filter((i: any) => i.id !== id);
    yangilash(yangi);
  };

  const jamiSumma = items.reduce((sum: number, item: any) => sum + (item.narxi * item.soni), 0);

  if (yuklanmoqda) return <div className="p-10 text-center">Yuklanmoqda...</div>;

  return (
    <div className="flex bg-slate-50 min-h-screen text-slate-900">
      <Sidebar />
      <div className="ml-64 p-8 flex-1">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShoppingCart className="text-blue-600" /> Savatchangiz
          </h1>
          <Link href="/" className="text-blue-600 flex items-center gap-1 hover:underline">
            <ArrowLeft size={18} /> AI Chatga qaytish
          </Link>
        </div>

         (
          <div className="bg-white p-20 rounded-3xl text-center border-2 border-dashed border-slate-200">
            <div className="text-6xl mb-4 text-slate-300">🛒</div>
            <h2 className="text-2xl font-bold text-slate-400">Savatchangiz hozircha bo'sh</h2>
            <p className="text-slate-500 mt-2 mb-6">AI Chatga o'tib dori tanlang</p>
            <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">
              Dori qidirish
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ro'yxat */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item: any) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border flex items-center justify-between transition-all hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl bg-blue-50 p-3 rounded-xl">💊</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{item.nomi}</h3>
                      <p className="text-blue-600 font-bold">{item.narxi} so'm</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-slate-100 p-2 rounded-lg">
                      <button onClick={() => ozgartirish(item.id, -1)} className="p-1 hover:bg-white rounded-md"><Minus size={18}/></button>
                      <span className="font-bold w-6 text-center">{item.soni}</span>
                      <button onClick={() => ozgartirish(item.id, 1)} className="p-1 hover:bg-white rounded-md"><Plus size={18}/></button>
                        </div>
                    <button onClick={() => ochirish(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Hisob va To'lov */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border h-fit sticky top-8">
              <h2 className="text-xl font-bold mb-6 border-b pb-4">Hisob-kitob</h2>
              <div className="space-y-4 mb-8 text-slate-600">
                <div className="flex justify-between">
                  <span>Dorilar soni:</span>
                  <span className="font-bold text-slate-800">{items.length} ta</span>
                </div>
                <div className="flex justify-between">
                  <span>Jami dori summasi:</span>
                  <span className="font-bold text-slate-800">{jamiSumma} so'm</span>
                </div>
                <div className="flex justify-between">
                  <span>Yetkazib berish:</span>
                  <span className="font-bold text-green-600">10 000 so'm</span>
                </div>
                <div className="flex justify-between text-xl font-black text-slate-800 pt-4 border-t-2 border-slate-100">
                  <span>Jami:</span>
                  <span className="text-blue-600">{jamiSumma + 10000} so'm</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  alert("To'lov muvaffaqiyatli! Buyurtma Dorixonachiga yuborildi.");
                  localStorage.removeItem("cart"); // Savatchani tozalash
                  window.location.href = "/dorixona"; // Dorixonachi paneliga o'tish
                }}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg active:scale-95"
              >
                <CreditCard size={20} /> Buyurtma berish
              </button>
            </div>
          </div>
        )
      </div>
    </div>
  );
}

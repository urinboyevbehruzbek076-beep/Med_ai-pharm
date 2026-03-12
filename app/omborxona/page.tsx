 "use client";
import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { Plus, Trash2, Edit, Search, Package } from 'lucide-react';

export default function Omborxona() {
  // Boshlang'ich dorilar (o'zingiz xohlagancha qo'shishingiz mumkin)
  const [dorilar, setDorilar] = useState([
    { id: 1, nomi: "Paratsetamol", narxi: 5000, miqdori: 100, tur: "Tabletka" },
    { id: 2, nomi: "Trimol", narxi: 12000, miqdori: 50, tur: "Tabletka" },
    { id: 3, nomi: "Ambrosol", narxi: 18000, miqdori: 25, tur: "Sirop" }
  ]);

  const [yangiDori, setYangiDori] = useState({ nomi: "", narxi: "", miqdori: "", tur: "Tabletka" });

  // Yangi dori qo'shish funksiyasi
  const qoshish = () => {
    if (yangiDori.nomi === "" || yangiDori.narxi === "") {
      alert("Iltimos, ma'lumotlarni to'liq kiriting!");
      return;
    }
    const dori = {
      id: Date.now(),
      nomi: yangiDori.nomi,
      narxi: Number(yangiDori.narxi),
      miqdori: Number(yangiDori.miqdori),
      tur: yangiDori.tur
    };
    setDorilar([...dorilar, dori]);
    setYangiDori({ nomi: "", narxi: "", miqdori: "", tur: "Tabletka" }); // Inputni tozalash
  };

  // Dorini o'chirish
  const ochirish = (id: any) => {
    setDorilar(dorilar.filter((d) => d.id !== id));
  };

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="ml-64 p-8 flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <Package className="text-blue-600" /> Omborxona nazorati
          </h1>
          <div className="text-slate-500 font-medium">Jami tur: {dorilar.length} ta</div>
        </div>

        {/* YANGI DORI QO'SHISH PANELI */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border mb-8">
          <h2 className="text-lg font-bold mb-4 text-slate-700">Yangi dori qo'shish</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Dori nomi" 
              className="p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              value={yangiDori.nomi}
              onChange={(e) => setYangiDori({...yangiDori, nomi: e.target.value})}
            />
            <input 
              type="number" 
              placeholder="Narxi (so'm)" 
              className="p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              value={yangiDori.narxi}
              onChange={(e) => setYangiDori({...yangiDori, narxi: e.target.value})}
            />
            <input 
              type="number" 
              placeholder="Soni (ombor)" 
              className="p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
              value={yangiDori.miqdori}
              onChange={(e) => setYangiDori({...yangiDori, miqdori: e.target.value})}
            />
            <button 
              onClick={qoshish}
              className="bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 flex items-center justify-center gap-2 transition-all"
            >
              <Plus size={20} /> Qo'shish
            </button>
          </div>
        </div>

        {/* DORILAR JADVALI */}
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden text-slate-900">
          <table className="w-full text-left">
            <thead className="bg-slate-100 border-b">
              <tr>
                <th className="p-4 font-bold">Dori nomi</th>
                <th className="p-4 font-bold">Turi</th>
                <th className="p-4 font-bold">Narxi</th>
                <th className="p-4 font-bold">Ombordagi soni</th>
[12/03/2026 11:28 PM] Behruzbek: <th className="p-4 font-bold text-center">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {dorilar.map((dori) => (
                <tr key={dori.id} className="border-b hover:bg-slate-50 transition-all">
                  <td className="p-4 font-medium">{dori.nomi}</td>
                  <td className="p-4 text-slate-500">{dori.tur}</td>
                  <td className="p-4 font-bold text-blue-600">{dori.narxi} so'm</td>
                  <td className="p-4">
                    <span className={"px-3 py-1 rounded-full text-xs font-bold " + (dori.miqdori < 30 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600")}>
                      {dori.miqdori} ta
                    </span>
                  </td>
                  <td className="p-4 flex justify-center gap-3">
                    <button className="text-slate-400 hover:text-blue-600 transition-all"><Edit size={18} /></button>
                    <button onClick={() => ochirish(dori.id)} className="text-slate-400 hover:text-red-500 transition-all"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
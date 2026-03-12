/*"use client";
import Sidebar from '@/components/sidebar';
import { MapPin, Phone, Navigation } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// TypeScript xatolarini chetlab o'tish uchun komponentlarni 'any' sifatida yuklaymiz
const MapContainer: any = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer: any = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Marker: any = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
const Popup: any = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });

const dorixonalar = [
  { id: 1, nomi: "Arzon Dorixona", tel: "+998 71 200 01 02", moljal: "Chilonzor 9", koordinata: [41.2827, 69.2135] },
  { id: 2, nomi: "Dori-Darmon #5", tel: "+998 71 300 05 05", moljal: "Oybek metrosi", koordinata: [41.2995, 69.2667] },
  { id: 3, nomi: "Grand Pharm", tel: "+998 90 123 45 67", moljal: "Amir Temur xiyoboni", koordinata: [41.3111, 69.2797] },
];

export default function MijozXaritasi() {
  return (
    <div className="flex bg-slate-50 min-h-screen text-slate-900">
      <Sidebar />
      <div className="ml-64 p-8 flex-1 flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">Dorixonalar xaritasi</h1>
          <p className="text-slate-500 font-medium text-lg">O'zingizga eng yaqin dorixonani toping</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
          {/* Ro'yxat *//*}/*
          <div className="space-y-4 overflow-y-auto max-h-[75vh] pr-2 custom-scrollbar">
            {dorixonalar.map((d) => (
              <div key={d.id} className="bg-white p-5 rounded-[24px] border border-slate-100 hover:border-blue-500 transition-all shadow-sm group">
                <h3 className="font-bold text-xl mb-2 text-slate-800">{d.nomi}</h3>
                <p className="text-slate-500 flex items-center gap-2 text-sm mb-1"><MapPin size={16} className="text-blue-500" /> {d.moljal}</p>
                <p className="text-slate-700 flex items-center gap-2 text-sm mb-4 font-semibold"><Phone size={16} className="text-green-500" /> {d.tel}</p>
                <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Navigation size={18} /> Yo'nalishni ko'rish
                </button>
              </div>
            ))}
          </div>

          {/* Xarita qismi - Endi xato bermaydi *//*}/*
          <div className="lg:col-span-2 bg-white rounded-[40px] overflow-hidden border-8 border-white shadow-2xl min-h-[550px] relative z-0">
            <MapContainer center={[41.3111, 69.2797]} zoom={12} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {dorixonalar.map((d: any) => (
                <Marker key={d.id} position={d.koordinata}>
                  <Popup>
                    <div className="p-1">
                      <strong className="text-blue-600 text-base">{d.nomi}</strong> <br />
                      <span className="text-slate-600">{d.moljal}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}*/
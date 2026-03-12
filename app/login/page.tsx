"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Store, Truck, ArrowRight, Activity, ChevronDown } from 'lucide-react';

export default function LoginSahifasi() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState(""); // Shifokor uchun mutaxassislik
  const router = useRouter();

  const handleRegister = (e: any) => {
    e.preventDefault();
    
    // Ma'lumotlarni saqlash
    const userData = { 
      name, 
      phone, 
      role, 
      specialty: role === "shifokor" ? specialty : null,
      loggedIn: true 
    };
    
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Yo'naltirish
    if (role === "shifokor") router.push("/shifokor-panel");
    else if (role === "mijoz") router.push("/chat");
    else if (role === "dorixona") router.push("/dorixona");
    else if (role === "kuryer") router.push("/kuryer");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-900">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-10 border border-slate-100">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg">
            <Activity size={32} />
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-black text-slate-800">Xush kelibsiz!</h1>
              <p className="text-slate-500 mt-2">O'z rolingizni tanlang</p>
            </div>

            <div className="space-y-3">
              {[
                { id: "mijoz", label: "Bemor (Mijoz)", icon: <User />, color: "blue" },
                { id: "shifokor", label: "Shifokor", icon: <Activity />, color: "red" },
                { id: "dorixona", label: "Dorixona", icon: <Store />, color: "green" },
                { id: "kuryer", label: "Kuryer", icon: <Truck />, color: "orange" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { setRole(item.id); setStep(2); }}
                  className="w-full flex items-center justify-between p-5 rounded-3xl border-2 border-slate-50 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm text-blue-600">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700">{item.label}</span>
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-600" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="text-center">
              <button type="button" onClick={() => setStep(1)} className="text-sm text-blue-600 font-bold mb-4">← Orqaga</button>
              <h1 className="text-2xl font-black text-slate-800">Ma'lumotlar</h1>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                required
                placeholder="To'liq ismingiz"
                className="w-full bg-slate-100 border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e: any) => setName(e.target.value)}
              />
                     <input
                type="tel"
                required
                placeholder="Telefon raqamingiz"
                className="w-full bg-slate-100 border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e: any) => setPhone(e.target.value)}
              />

              {/* Shifokor uchun qo'shimcha tanlov */}
              {role === "shifokor" && (
                <div className="relative">
                  <select
                    required
                    className="w-full bg-slate-100 border-none rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500 appearance-none font-bold text-slate-700"
                    onChange={(e: any) => setSpecialty(e.target.value)}
                  >
                    <option value="">Mutaxassisligingizni tanlang</option>
                    <option value="Kardiolog">Kardiolog</option>
                    <option value="Nevropatolog">Nevropatolog</option>
                    <option value="Terapevt">Terapevt</option>
                    <option value="Stomatolog">Stomatolog</option>
                    <option value="Pediatr">Pediatr</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-4 text-slate-400" />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-bold text-lg hover:bg-blue-600 transition-all shadow-xl"
            >
              Ro'yxatdan o'tish
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
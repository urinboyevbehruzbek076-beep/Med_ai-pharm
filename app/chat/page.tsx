 "use client";
import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { Send, Bot, User, AlertCircle, ShoppingCart } from 'lucide-react';

const doriBazasi: any = {
  "bosh og'rig'i": { dori: "Paratsetamol", narxi: 5000, tavsiya: "Tinch joyda dam oling." },
  "isitma": { dori: "Taylol-hot", narxi: 15000, tavsiya: "Ko'p suyuqlik iching." },
  "yo'tal": { dori: "Ambrosol", narxi: 18000, tavsiya: "Iliq sut iching." },
  "oshqozon og'rig'i": { dori: "Mezim", narxi: 22000, tavsiya: "Achchiq ovqat yemang." }
};

export default function Home() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<any[]>([
    { role: "ai", text: "Assalomu alaykum! Men Med AI. Simptomlaringizni ayting.", dori: null }
  ]);

  const savatchagaQoshish = (nomi: string, narxi: number) => {
    if (typeof window !== "undefined") {
      const eski: any = JSON.parse(localStorage.getItem("cart") || "[]");
      const yangi = { id: Date.now(), nomi, narxi, soni: 1, rasm: "💊" };
      localStorage.setItem("cart", JSON.stringify([...eski, yangi]));
      alert(nomi + " savatchaga qo'shildi!");
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input, dori: null };
    const newChat = [...chat, userMsg];
    setChat(newChat);

    const text = input.toLowerCase();
    let aiMsg = "Kechirasiz, dori topolmadim.";
    let doriObj = null;

    for (let key in doriBazasi) {
      if (text.includes(key)) {
        doriObj = doriBazasi[key];
        aiMsg = "Sizda " + key + " borga o'xshaydi.\n\n💊 Dori: " + doriObj.dori + "\n💰 Narxi: " + doriObj.narxi + " so'm";
        break;
      }
    }

    setTimeout(() => {
      setChat([...newChat, { role: "ai", text: aiMsg, dori: doriObj }]);
    }, 500);
    setInput("");
  };

  return (
    <main className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <div className="ml-64 flex-1 flex flex-col h-screen">
        
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
          <h2 className="text-xl font-bold text-blue-700">Med AI Chat</h2>
        </header>

        {/* Chat maydoni */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chat.map((msg: any, idx: number) => (
            <div key={idx} className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div className={"flex gap-3 max-w-[85%] " + (msg.role === 'user' ? "flex-row-reverse" : "")}>
                <div className={"p-2 rounded-full h-fit " + (msg.role === 'ai' ? "bg-blue-600 text-white" : "bg-slate-300")}>
                  {msg.role === 'ai' ? <Bot size={20} /> : <User size={20} />}
                </div>
                <div>
                  <div className={"p-3 rounded-2xl shadow-sm whitespace-pre-line " + (msg.role === 'ai' ? "bg-white border" : "bg-blue-600 text-white")}>
                    {msg.text}
                  </div>
                  {msg.role === 'ai' && msg.dori && (
                    <button 
                      onClick={() => savatchagaQoshish(msg.dori.dori, msg.dori.narxi)}
                      className="mt-2 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700"
                    >
                      <ShoppingCart size={14} /> Savatchaga qo'shish
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input qismi - XATOLAR TO'G'IRLANGAN JOYI */}
        <div className="p-4 bg-white border-t">
          <div className="max-w-4xl mx-auto flex gap-2">
            <input 
              type="text" 
              value={input}
               onChange={(e: any) => setInput(e.target.value)}
              onKeyDown={(e: any) => { if(e.key === 'Enter') handleSend(); }}
              placeholder="Shu yerga yozing..." 
              className="flex-1 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-slate-900"
            />
            <button 
              onClick={() => handleSend()} 
              className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
            >
              <Send size={24} />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Bot, Store, Truck, Map, User, LogOut, 
  LayoutDashboard, ShoppingCart, Activity 
} from 'lucide-react';

export default function Sidebar() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return null;

  const menuItems: any[] = [
    { name: "Asosiy", href: "/", icon: <LayoutDashboard size={20} />, roles: ["mijoz", "dorixona", "kuryer"] },
    { name: "AI Tashxis", href: "/chat", icon: <Bot size={20} />, roles: ["mijoz"] },
    { name: "Dorixonalar", href: "/xarita", icon: <Map size={20} />, roles: ["mijoz"] },
    { name: "Shifokorlar", href: "/shifokorlar", icon: <User size={20} />, roles: ["mijoz"] },
    { name: "Savatcha", href: "/savatcha", icon: <ShoppingCart size={20} />, roles: ["mijoz"] },
    { name: "Omborxona", href: "/dorixona", icon: <Store size={20} />, roles: ["dorixona"] },
    { name: "Buyurtmalar", href: "/kuryer", icon: <Truck size={20} />, roles: ["kuryer"] },
    { name: "Admin", href: "/admin", icon: <Activity size={20} />, roles: ["admin"] },
    { name: "Qabul ro'yxati", href: "/shifokor-panel", icon: <User size={20} />, roles: ["shifokor"] },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-100 p-6 flex flex-col z-50">
      <div className="flex items-center gap-3 mb-10 px-2 text-slate-800">
        <div className="bg-blue-600 p-2 rounded-xl text-white">
          <Activity size={24} />
        </div>
        <span className="text-xl font-black tracking-tight">MedFlow</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item: any) => {
          // Rolni tekshirish
          if (!item.roles.includes(user.role)) return null;

          // Aktiv sahifani aniqlash (belgisiz oddiy tekshiruv)
          let cssKlass = "flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ";
          
          if (pathname === item.href) {
            cssKlass = cssKlass + "bg-blue-600 text-white shadow-lg shadow-blue-200";
          } else {
            cssKlass = cssKlass + "text-slate-500 hover:bg-slate-50 hover:text-blue-600";
          }

          return (
            <Link key={item.href} href={item.href} className={cssKlass}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold uppercase text-sm">
            {user.name ? user.name.charAt(0) : "U"}
          </div>
          <div className="overflow-hidden text-sm">
            <p className="font-bold text-slate-800 truncate">{user.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user.role}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all text-sm"
        >
          <LogOut size={20} />
          Chiqish
        </button>
      </div>
    </div>
  );
}
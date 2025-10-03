"use client"; 

import { usePathname, useRouter } from "next/navigation";
import { Home, Users, Phone, ListChecks, BarChart3 } from "lucide-react"; // icons

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Contacts", path: "/contacts", icon: <Users size={20} /> },
    { name: "Leads", path: "/leads", icon: <Phone size={20} /> },
    { name: "Tasks", path: "/tasks", icon: <ListChecks size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart3 size={20} /> },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-600 to-indigo-700 w-64 min-h-screen p-6 shadow-2xl flex flex-col">
      {/* Sidebar Header */}
      <h1 className="text-white text-2xl font-bold mb-8 tracking-wide">
        CRM Panel
      </h1>

      {/* Menu Items */}
      <ul className="space-y-3 flex-1">
        {menuItems.map((item) => (
          <li
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl transition-all duration-300 ${
              pathname === item.path
                ? "bg-white text-blue-600 font-semibold shadow-md"
                : "text-white hover:bg-blue-500 hover:pl-5"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-8 text-sm text-blue-100 border-t border-blue-400 pt-4">
        © {new Date().getFullYear()} CRM App
      </div>
    </div>
  );
}

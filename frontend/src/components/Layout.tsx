import React from 'react';
import { LayoutDashboard, BedDouble, Users, CalendarDays, Hotel, Bell, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BedDouble, label: 'Pokoje', active: false },
    { icon: Users, label: 'Goście', active: false },
    { icon: CalendarDays, label: 'Rezerwacje', active: false },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-900">
      <aside className="w-72 bg-slate-950 text-slate-100 flex flex-col justify-between border-r border-slate-800 shadow-lg shadow-slate-950/10">
        <div>
          <div className="px-6 py-7 flex items-center gap-3 border-b border-slate-800">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-lg shadow-slate-950/15">
              <Hotel className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Hotel Manager</p>
              <p className="text-xs text-slate-400">Panel zarządzania</p>
            </div>
          </div>

          <nav className="px-4 py-5 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`w-full flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    item.active
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-6 py-6 border-t border-slate-800">
          <div className="rounded-3xl bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-slate-200">
              <div>
                <p className="text-sm font-semibold">Witaj, manager</p>
                <p className="text-xs text-slate-400">Zarządzaj hotelem efektywnie</p>
              </div>
              <div className="space-x-2 text-slate-400">
                <Bell className="inline-block h-4 w-4" />
                <Settings className="inline-block h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}

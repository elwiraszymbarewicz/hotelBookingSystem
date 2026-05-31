import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  DoorOpen,
  Users,
  Calendar,
  Menu,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    label: 'Pokoje',
    href: '/rooms',
    icon: <DoorOpen className="w-5 h-5" />,
  },
  {
    label: 'Goście',
    href: '/guests',
    icon: <Users className="w-5 h-5" />,
  },
  {
    label: 'Rezerwacje',
    href: '/bookings',
    icon: <Calendar className="w-5 h-5" />,
  },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const isActive = (href: string): boolean => {
    return location.pathname === href;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-slate-900 text-white transition-all duration-300 ease-in-out overflow-hidden flex flex-col shadow-lg`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-slate-700 flex items-center justify-between">
          <h1 className="text-xl font-bold truncate">Hotel Manager</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive(item.href)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700">
          <Button
            variant="outline"
            className="w-full text-slate-900 border-slate-300 hover:bg-slate-100"
            onClick={() => {
              localStorage.removeItem('authToken');
              window.location.href = '/login';
            }}
          >
            Wyloguj się
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-700 hover:bg-gray-100"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">
                  Manager Hotelu
                </p>
                <p className="text-xs text-slate-500">
                  {new Date().toLocaleDateString('pl-PL')}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

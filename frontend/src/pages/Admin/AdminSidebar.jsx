import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  Users,
  CalendarDays,
  Scissors,
  BadgePercent,
  Star,
  CreditCard,
  BarChart3,
  Bell,
  Headphones,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Salons / Partners",
      path: "/admin/salons",
      icon: Store,
    },
    {
      name: "Customers",
      path: "/admin/customers",
      icon: Users,
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: CalendarDays,
    },
    {
      name: "Services",
      path: "/admin/services",
      icon: Scissors,
    },
    {
      name: "Offers & Coupons",
      path: "/admin/offers",
      icon: BadgePercent,
    },
    {
      name: "Reviews",
      path: "/admin/reviews",
      icon: Star,
    },
    {
      name: "Payments",
      path: "/admin/payments",
      icon: CreditCard,
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: BarChart3,
    },
    {
      name: "Notifications",
      path: "/admin/notifications",
      icon: Bell,
    },
    {
      name: "Support",
      path: "/admin/support",
      icon: Headphones,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-[76px] items-center border-b border-gray-100 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e11d48] text-white shadow-sm">
            <Scissors size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              SalonWala
            </h1>

            <p className="text-xs font-medium text-gray-500">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Admin Badge */}
      <div className="px-4 pt-5">
        <div className="flex items-center gap-3 rounded-xl bg-rose-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e11d48] text-sm font-bold text-white">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              Administrator
            </p>

            <div className="mt-0.5 flex items-center gap-1 text-xs text-rose-600">
              <ShieldCheck size={13} />
              Super Admin
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-4 flex-1 overflow-y-auto px-3 pb-4">
        <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#e11d48] text-white shadow-sm"
                      : "text-gray-600 hover:bg-rose-50 hover:text-[#e11d48]"
                  }`
                }
              >
                <Icon size={19} />

                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t border-gray-100 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={19} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
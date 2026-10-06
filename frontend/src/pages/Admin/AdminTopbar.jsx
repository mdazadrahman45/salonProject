import React, { useState } from "react";
import { Bell, ChevronDown, Search, Menu } from "lucide-react";

const AdminTopbar = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const adminUser = JSON.parse(localStorage.getItem("adminUser")) || {
    name: "Administrator",
    email: "admin@salonwala.com",
  };

  const firstLetter = adminUser?.name
    ? adminUser.name.charAt(0).toUpperCase()
    : "A";

  return (
    <header className="fixed left-[260px] right-0 top-0 z-40 h-[76px] border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">
        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Admin Dashboard
          </h2>

          <p className="text-sm text-gray-500">
            Manage SalonWala platform
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 lg:flex">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-[220px] bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Notification */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50">
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"></span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setOpenProfile(!openProfile)}
              className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2 transition hover:bg-gray-50"
            >
              {/* Avatar Initial */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e11d48] font-bold text-white">
                {firstLetter}
              </div>

              <div className="hidden text-left md:block">
                <p className="max-w-[140px] truncate text-sm font-semibold text-gray-900">
                  {adminUser?.name || "Administrator"}
                </p>

                <p className="max-w-[140px] truncate text-xs text-gray-500">
                  {adminUser?.email || "admin@salonwala.com"}
                </p>
              </div>

              <ChevronDown size={17} className="text-gray-500" />
            </button>

            {/* Dropdown */}
            {openProfile && (
              <div className="absolute right-0 top-[58px] w-[220px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                <div className="border-b border-gray-100 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {adminUser?.name || "Administrator"}
                  </p>

                  <p className="mt-1 truncate text-xs text-gray-500">
                    {adminUser?.email || "admin@salonwala.com"}
                  </p>
                </div>

                <div className="p-2">
                  <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                    My Profile
                  </button>

                  <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                    Account Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;
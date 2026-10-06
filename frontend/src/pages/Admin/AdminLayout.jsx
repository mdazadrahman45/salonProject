import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Right Side */}
      <div className="ml-[260px] min-h-screen">
        {/* Fixed Topbar */}
        <AdminTopbar />

        {/* Page Content */}
        <main className="pt-[76px] min-h-screen">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
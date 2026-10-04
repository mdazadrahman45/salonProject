import React from "react";
import { Outlet } from "react-router-dom";
import CustomerSidebar from "./CustomerSidebar";
import CustomerTopbar from "./CustomerTopbar";

const CustomerLayout = () => {
  return (
    <div className="min-h-screen bg-[#fff9fa]">
      {/* LEFT SIDEBAR */}
      <CustomerSidebar />

      {/* RIGHT SIDE */}
      <div className="ml-[250px] min-h-screen">
        {/* TOP NAVBAR */}
        <CustomerTopbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen pt-[78px]">
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CustomerLayout;
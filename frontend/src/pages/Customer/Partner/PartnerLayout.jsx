import React from "react";
import { Outlet } from "react-router-dom";

import PartnerSidebar from "./PartnerSidebar";
import PartnerTopbar from "./PartnerTopbar";

const PartnerLayout = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <PartnerSidebar />

      <div className="ml-[250px] min-h-screen">
        <PartnerTopbar />

        <main className="pt-[76px]">
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PartnerLayout;
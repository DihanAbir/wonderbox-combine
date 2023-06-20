import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardDrawer from "../components/drawers/DashboardDrawer";
import DashboardNavber from "../components/Shared/DashboardNavber";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="flex justify-between items-start min-h-screen h-full">
        <DashboardDrawer open={open} />
        <div className="flex-grow">
          <DashboardNavber open={open} setOpen={setOpen} />
          <div className="px-4 py-4 h-full w-full overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

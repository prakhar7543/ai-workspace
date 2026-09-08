import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

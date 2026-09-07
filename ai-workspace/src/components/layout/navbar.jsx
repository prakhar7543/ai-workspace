import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="h-16 border-b">
        <div className="flex h-full items-center justify-between px-6">
        <h2 className="text-xl font-semibold">AI Workspace</h2>
        <span>User</span>

        </div>
      </div>
    </nav>
  );
}

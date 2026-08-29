import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";

export default function Sidebar() {
  return (
    <>
      <aside>
        <h2>Sidebar</h2>
      </aside>

      <nav>
        <Link to={PATHS.dashboard}>Dashboard</Link>
        <Link to={PATHS.chat}>Chat</Link>
      </nav>
    </>
  );
}

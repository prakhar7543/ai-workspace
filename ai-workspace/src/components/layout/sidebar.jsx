import { NavLink } from "react-router-dom";
import { PATHS } from "../../router/paths";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r p-4">
      <h2 className="mb-4 font-semibold">Sidebar</h2>

      <nav className="space-y-2">
        <NavLink className= {({isActive}) => isActive ? "block rounded px-2 py-3 font-semibold" : "block rounded px-2 py-3"}  to={PATHS.dashboard}>
          Dashboard
        </NavLink>

        <NavLink className={({isActive}) => isActive ? "block rounded px-2 py-3 font-semibold" : "block rounded px-2 py-3"} to={PATHS.chat}>
          Chat
        </NavLink>
      </nav>
    </aside>
  );
}
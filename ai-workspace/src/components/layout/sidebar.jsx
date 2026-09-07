import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";

export default function Sidebar() {
  return (
    <aside className="w-64">
      <h2>Sidebar</h2>

      <nav>
        <Link className="block" to={PATHS.dashboard}>
          Dashboard
        </Link>

        <Link className="block" to={PATHS.chat}>
          Chat
        </Link>
      </nav>
    </aside>
  );
}
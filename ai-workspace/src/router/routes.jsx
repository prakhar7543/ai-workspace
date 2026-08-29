import { Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/appLayout";
import DashboardPage from "../features/dashboard/dashboardPage";
import ChatPage from "../features/chat/chatPage";
import { PATHS } from "./paths";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path={PATHS.dashboard}
          element={<DashboardPage />}
        />

        <Route
          path={PATHS.chat}
          element={<ChatPage />}
        />
      </Route>
    </Routes>
  );
}
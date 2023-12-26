import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="h-screen touch-pan-x touch-pan-y">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

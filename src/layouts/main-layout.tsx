import { Outlet } from "react-router-dom";
import BottomNav from "../bottom-nav";

function MainLayout() {
  return (
    <main className="mx-auto flex h-[100dvh] max-w-2xl flex-col pt-5">
      <section className="flex-grow overflow-y-auto">
        <Outlet />
      </section>
      <BottomNav />
    </main>
  );
}

export default MainLayout;

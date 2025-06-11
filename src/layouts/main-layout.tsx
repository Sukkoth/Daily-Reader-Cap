import { Outlet } from "react-router-dom";
import BottomNav from "../bottom-nav";

function MainLayout() {
  return (
    <main className="mx-auto flex h-[100dvh] max-w-2xl flex-col">
      <section className="flex-grow">
        <Outlet />
      </section>
      <BottomNav />
    </main>
  );
}

export default MainLayout;

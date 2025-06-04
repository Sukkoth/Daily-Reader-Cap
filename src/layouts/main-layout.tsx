import { Outlet } from "react-router-dom";
import BottomNav from "../bottom-nav";

function MainLayout() {
  return (
    <main className="bg-gradient-to-b max-w-2xl mx-auto dark:from-gray-900/80 dark:to-gray-950/65 from-gray-50 to-gray-50 text-black dark:text-white flex flex-col min-h-[100dvh]">
      <section className="flex-grow">
        <Outlet />
      </section>
      <BottomNav />
    </main>
  );
}

export default MainLayout;

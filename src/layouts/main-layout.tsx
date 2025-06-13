import { Outlet } from "react-router-dom";
import BottomNav from "../bottom-nav";
import { Capacitor } from "@capacitor/core";
import { cn } from "../utils/cn";

function MainLayout() {
  return (
    <main
      className={cn("mx-auto flex h-[100dvh] max-w-2xl flex-col", {
        "pt-5": Capacitor.isNativePlatform(),
      })}
    >
      <section className="flex-grow overflow-y-auto">
        <Outlet />
      </section>
      <BottomNav />
    </main>
  );
}

export default MainLayout;

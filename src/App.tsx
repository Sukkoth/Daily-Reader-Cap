import { Route, Routes } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";
import Home from "./pages/home";
import MainLayout from "./layouts/main-layout";
import { useEffect } from "react";
import Calendar from "./pages/calendar";
import Favorites from "./pages/favorites";
import Settings from "./pages/settings";
import { useStatusBarColor } from "./hooks/useStatusBarColor";
import ReadingDetail from "./pages/reading-detail";

function App() {
  useStatusBarColor();

  useEffect(() => {
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route>
        <Route path="/readings/:date" element={<ReadingDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

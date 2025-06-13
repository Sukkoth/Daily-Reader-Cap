import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { useTheme } from "../providers/theme-provider";

export function useStatusBarColor() {
  const { theme } = useTheme();

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const setTransparentStatusBar = async () => {
      try {
        await StatusBar.setStyle({
          style: theme === "dark" ? Style.Dark : Style.Light,
        });
      } catch (err) {
        console.warn("Failed to set status bar:", err);
      }
    };

    setTransparentStatusBar();
  }, [theme]);
}

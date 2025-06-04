// useStatusBarColor.ts
import { useEffect } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";

function rgbToHex(rgb: string): string {
  const result = rgb.match(/\d+/g);
  if (!result) return "#ffffff";
  return (
    "#" +
    result
      .slice(0, 3)
      .map((x) => ("0" + parseInt(x).toString(16)).slice(-2))
      .join("")
  );
}

export function useStatusBarColor() {
  useEffect(() => {
    const color = getComputedStyle(document.body).backgroundColor;
    console.log({ color });
    const hex = rgbToHex("#101828");

    StatusBar.setOverlaysWebView({ overlay: false }); // iOS specific
    StatusBar.setBackgroundColor({ color: hex });

    // Optional: adjust for light/dark background
    // const style =
    //   window.matchMedia("(prefers-color-scheme: dark)").matches ||
    //   parseInt(hex.replace("#", ""), 16) < 0x888888
    //     ? Style.Light
    //     : Style.Dark;

    StatusBar.setStyle({ style: Style.Dark });
  }, []);
}

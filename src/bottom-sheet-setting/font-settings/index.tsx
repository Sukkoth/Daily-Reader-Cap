import { useEffect, useState } from "react";
import useAppSettings from "../../app-state/hooks/useAppSettings";
import { FONT_SIZES } from "../../constants";
import { cn } from "../../utils/cn";

type Props = {
  mode: "simple" | "longer";
};
export default function FontSettings({ mode }: Props) {
  const settingItemKey =
    mode === "simple" ? "quoteFontSize" : "articleFontSize";

  const maxFontSize =
    mode === "simple" ? FONT_SIZES.quoteMode.max : FONT_SIZES.articleMode.max;
  const minFontSize =
    mode === "simple" ? FONT_SIZES.quoteMode.min : FONT_SIZES.articleMode.min;

  const [settings, setSettings] = useAppSettings();
  const [showFontSize, setShowFontSize] = useState(false);

  function handleFontSizeChange(change: 1 | -1) {
    setSettings(() => {
      const currentSize =
        settings[settingItemKey] ?? (mode === "simple" ? 30 : 18);

      let updatedSize = currentSize + change * FONT_SIZES.step;
      updatedSize = Math.max(minFontSize, Math.min(updatedSize, maxFontSize));

      return {
        ...settings,
        [settingItemKey]: updatedSize,
      };
    });
  }

  const fontSize = settings[settingItemKey];

  useEffect(() => {
    setShowFontSize(true);
    const timer = setTimeout(() => {
      setShowFontSize(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [fontSize]);

  const disabledDecrement = settings[settingItemKey] === minFontSize;

  const disabledIncrement = settings[settingItemKey] === maxFontSize;

  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      <button
        disabled={disabledDecrement}
        onClick={() => handleFontSizeChange(-1)}
        className={cn(
          "relative cursor-pointer text-2xl font-medium after:absolute after:-top-2 after:size-2 after:text-xl after:content-['-'] active:text-gray-400",
          disabledDecrement && "cursor-not-allowed opacity-50",
        )}
      >
        A
      </button>
      {
        <p className="mx-5 w-2 self-center text-sm">
          {showFontSize ? fontSize : " "}
        </p>
      }
      <button
        disabled={disabledIncrement}
        onClick={() => handleFontSizeChange(1)}
        className={cn(
          "relative cursor-pointer text-3xl font-medium after:absolute after:-top-2 after:size-2 after:text-xl after:content-['+'] active:text-gray-400",
          disabledIncrement && "cursor-not-allowed opacity-50",
        )}
      >
        A
      </button>
    </div>
  );
}

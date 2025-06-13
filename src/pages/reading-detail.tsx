import { addDays, format, isValid } from "date-fns";
import { useSwipeable } from "react-swipeable";
import { Capacitor } from "@capacitor/core";
import { Settings, X } from "lucide-react";
import { getReadingData, getTopSubTitle } from "../utils/parse-reading-data";
import SimpleView from "../components/reading-detail/simple-view";
import NoReading from "../components/reading-detail/no-reading";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LongerView from "../components/reading-detail/longer-view";
import { cn } from "../utils/cn";
import BottomSheetItem from "../bottom-sheet-setting";
import IconButton from "../components/icon-button";

function ReadingDetail() {
  const navigate = useNavigate();
  const { date } = useParams();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [readingDate, setReadingDate] = useState<Date>(
    date ? new Date(date) : new Date(),
  );

  const headerDate = format(
    isValid(readingDate) ? readingDate : new Date(),
    "eeee, MMMM do",
  );

  const readingData = getReadingData(format(readingDate, "yyyy-MM-dd"));

  const topSubTitle = getTopSubTitle(readingData);

  const handler = useSwipeable({
    onSwipedLeft: () => setReadingDate((prev) => addDays(prev, 1)),
    onSwipedRight: () => setReadingDate((prev) => addDays(prev, -1)),
  });

  const goBack = () => {
    navigate(-1);
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setReadingDate((prev) =>
          addDays(prev, event.key === "ArrowLeft" ? -1 : 1),
        );
      }
    },
    [setReadingDate],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={cn("relative flex h-[100dvh] flex-col overflow-hidden", {
        "pt-6": Capacitor.isNativePlatform(),
      })}
    >
      <div className="dark:border-b-border-shade bg-light-1 border-b-border-light sticky top-0 z-10 flex items-center justify-between border-b p-4 py-2 dark:bg-transparent">
        <div className="space-y-2">
          <h1 className="text-xl font-medium">{headerDate}</h1>
          <p className="text-gray-400">{topSubTitle}</p>
        </div>
        <div className="text-md flex gap-2 text-gray-400">
          <IconButton
            icon={<Settings className="size-6" />}
            onClick={() => {
              setSettingsOpen((prev) => !prev);
            }}
          />
          <IconButton icon={<X className="size-6" />} onClick={goBack} />
        </div>
      </div>
      <div
        {...handler}
        className={cn(
          "scrollbar-hidden mx-auto flex max-w-2xl flex-grow flex-col overflow-auto px-5",
          readingData?.readings.length === 1 && "items-center justify-center",
        )}
      >
        {!readingData && <NoReading />}
        {readingData?.readings.length === 1 && (
          <SimpleView reading={readingData} />
        )}
        {readingData?.readings.length === 3 && (
          <LongerView reading={readingData} />
        )}
      </div>
      {settingsOpen && (
        <BottomSheetItem
          onClose={() => setSettingsOpen(false)}
          readingType={readingData?.readings.length === 1 ? "simple" : "longer"}
        />
      )}
    </div>
  );
}

export default ReadingDetail;

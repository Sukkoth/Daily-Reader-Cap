import { addDays, format, isValid } from "date-fns";
import { useSwipeable } from "react-swipeable";
import { Settings, X } from "lucide-react";
import { getReadingData, getTopSubTitle } from "../utils/parse-reading-data";
import SimpleView from "../components/reading-detail/simple-view";
import NoReading from "../components/reading-detail/no-reading";
import { useState } from "react";
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

  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <div className="dark:border-b-border-shade bg-light-1 dark:bg-shade-1 border-b-border-light sticky top-0 z-10 flex items-center justify-between border-b p-4 py-2">
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
          <button
            className="flex size-8 items-center justify-center"
            onClick={goBack}
          >
            <X className="size-6" />
          </button>
        </div>
      </div>
      <div
        {...handler}
        className={cn(
          "flex flex-grow flex-col px-5",
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
        <BottomSheetItem onClose={() => setSettingsOpen(false)} />
      )}
    </div>
  );
}

export default ReadingDetail;

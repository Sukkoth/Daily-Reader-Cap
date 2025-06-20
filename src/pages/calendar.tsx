import { addMonths, format, startOfMonth } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import CalendarNumbers from "../components/calendar-numbers";
import CalendarHeader from "../components/calendar-header";
import CalendarHolidays from "../components/calendar-holidays";
import {
  getHolidaysForEachDay,
  getHolidaysInMonth,
} from "../utils/parse-reading-data";

function Calendar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedDate = startOfMonth(
    new Date(searchParams.get("date") || new Date()),
  );

  function handleMonthChange(change: 1 | -1) {
    setSearchParams({
      date: format(addMonths(selectedDate, change), "yyyy-MM-dd"),
    });
  }

  const handler = useSwipeable({
    onSwipedLeft: () => handleMonthChange(1),
    onSwipedRight: () => handleMonthChange(-1),
  });

  const holidays = getHolidaysInMonth(selectedDate);

  const eachDayHolidays = getHolidaysForEachDay(holidays);

  return (
    <div
      className="flex h-[90.5dvh] flex-col overflow-hidden p-4 pt-5"
      {...handler}
    >
      <div>
        <CalendarHeader
          selectedDate={selectedDate}
          handleMonthChange={handleMonthChange}
        />
        <div className="mt-8">
          <CalendarNumbers
            selectedDate={selectedDate}
            holidays={eachDayHolidays}
          />
        </div>
      </div>
      <CalendarHolidays monthlyHolidays={eachDayHolidays} />
    </div>
  );
}

export default Calendar;

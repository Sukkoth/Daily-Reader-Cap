import { useNavigate } from "react-router-dom";
import { format, isSameMonth } from "date-fns";

import { getFormattedIndexDaysInMonth } from "../utils/date";
import type { HolidaysForEachDay, HolidayType } from "../types";
import { cn } from "../utils/cn";

type Props = {
  selectedDate: Date;
  holidays: HolidaysForEachDay[];
};

export default function CalendarNumbers({ selectedDate, holidays }: Props) {
  const navigate = useNavigate();

  const formattedDaysInMonth = getFormattedIndexDaysInMonth(selectedDate);
  const today = new Date();
  const todaysDate = today.getDate();

  return (
    <div className="mt-5 grid grid-cols-7 justify-evenly gap-3 text-center select-none">
      <h1 className="font-medium text-gray-400">S</h1>
      <h1 className="font-medium text-gray-400">M</h1>
      <h1 className="font-medium text-gray-400">T</h1>
      <h1 className="font-medium text-gray-400">W</h1>
      <h1 className="font-medium text-gray-400">T</h1>
      <h1 className="font-medium text-gray-400">F</h1>
      <h1 className="font-medium text-gray-400">S</h1>
      {formattedDaysInMonth.map((day, index) => {
        const todaysHolidays = holidays.find(
          (holiday) => holiday.date.getDate() === day,
        );

        return (
          <div
            onClick={() => {
              if (day) {
                const directTo = selectedDate;
                console.log(directTo.setDate(day));
                navigate(`/readings/${format(directTo, "yyyy-MM-dd")}`);
              }
            }}
            key={index}
            className={cn(
              "cursor-pointer p-3 text-lg transition-transform duration-200 hover:scale-110",
              {
                "rounded-xl bg-orange-400/40":
                  isSameMonth(today, selectedDate) && day === todaysDate,
              },
            )}
          >
            {day}{" "}
            {todaysHolidays && todaysHolidays.holidays.length > 0 && (
              <HolidaysMarkerContainer holidays={todaysHolidays} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function HolidaysMarkerContainer({
  holidays,
}: {
  holidays: HolidaysForEachDay;
}) {
  return (
    <div className="flex items-center justify-center gap-1">
      {holidays.holidays.map((holiday) => (
        <HolidayMarker key={holiday.name} type={holiday.type} />
      ))}
    </div>
  );
}

function HolidayMarker({ type }: { type: HolidayType }) {
  const colorsMatch = {
    christian: "bg-green-500",
    mekaneYesus: "bg-blue-500",
    others: "bg-purple-500",
  };

  return <div className={cn("size-1 rounded-full", colorsMatch[type])}></div>;
}

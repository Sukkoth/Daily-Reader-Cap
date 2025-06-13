import { format } from "date-fns";
import type { HolidaysForEachDay } from "../types";
import { camelToNormal } from "../utils/camel-to-normal";

type Props = {
  monthlyHolidays: HolidaysForEachDay[];
};
export default function CalendarHolidays({ monthlyHolidays }: Props) {
  return (
    <div className="scrollbar-hidden mt-8 overflow-auto">
      {monthlyHolidays.map((month, index) => (
        <div key={index}>
          <ul>
            {month.holidays.map((hol, index) => (
              <div
                key={index}
                className="my-4 flex items-center gap-5 divide-x divide-orange-400 rounded-xl bg-gray-100 p-3 px-5 dark:divide-orange-200 dark:bg-gray-900"
              >
                <div className="pe-5 text-center">
                  <h3 className="text-sm text-orange-400 dark:text-orange-300">
                    {format(month.date, "EEE")}
                  </h3>
                  <p className="text-2xl font-medium text-orange-400">
                    {format(month.date, "d")}
                  </p>
                </div>
                <div>
                  <h4>{hol.name}</h4>
                  <p className="text-sm text-gray-400">
                    {camelToNormal(hol.type)}
                  </p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

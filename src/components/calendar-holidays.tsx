import { format } from "date-fns";
import type { FormattedHolidays } from "../types";
import { camelToNormal } from "../utils/camel-to-normal";

type Props = {
  holidays: FormattedHolidays;
};
export default function CalendarHolidays({ holidays }: Props) {
  return (
    <div className="mt-8 overflow-auto">
      {Object.entries(holidays).map(([holidayType, holidays], index) => (
        <div key={index}>
          <ul>
            {holidays.map((holiday, index) => (
              <div
                key={index}
                className="my-4 flex items-center gap-5 divide-x divide-orange-400 rounded-xl bg-gray-100 p-3 px-5 dark:divide-orange-200 dark:bg-gray-900"
              >
                <div className="pe-5 text-center">
                  <h3 className="text-sm text-orange-400 dark:text-orange-300">
                    {format(holiday.date, "EEE")}
                  </h3>
                  <p className="text-2xl font-medium text-orange-400">
                    {format(holiday.date, "d")}
                  </p>
                </div>
                <div>
                  <h4>{holiday.name}</h4>
                  <p className="text-sm text-gray-400">
                    {camelToNormal(holidayType)}
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

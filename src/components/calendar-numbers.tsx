import { useNavigate } from "react-router-dom";
import { format, isSameMonth } from "date-fns";

import { getFormattedIndexDaysInMonth } from "../utils/date";
import { cn } from "../utils/cn";

type Props = {
  selectedDate: Date;
};

export default function CalendarNumbers({ selectedDate }: Props) {
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
      {formattedDaysInMonth.map((day, index) => (
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
              "rounded-xl bg-orange-400":
                isSameMonth(today, selectedDate) && day === todaysDate,
            },
          )}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

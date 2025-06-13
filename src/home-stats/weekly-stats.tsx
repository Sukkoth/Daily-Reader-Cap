import { cn } from "../utils/cn";

function WeeklyStats() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const activeDays = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-end justify-between gap-4">
      {days.map((day, index) => (
        <div className="flex flex-col items-center gap-1" key={index}>
          <div
            className={cn(
              "h-[6px] w-7 rounded-xl",
              activeDays.includes(index)
                ? "bg-gradient-to-r from-orange-400 to-orange-500"
                : "bg-gray-300 dark:bg-gray-500",
            )}
          ></div>
          <p className="text-xs">{day}</p>
        </div>
      ))}
      <p className="text-xs text-gray-400">This week</p>
    </div>
  );
}

export default WeeklyStats;

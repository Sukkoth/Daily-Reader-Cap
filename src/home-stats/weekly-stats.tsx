import { cn } from "../utils/cn";

function WeeklyStats() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const activeDays = [0, 1, 2, 3, 4];
  return (
    <div className="flex gap-4 justify-between items-end">
      {days.map((day, index) => (
        <div className="flex flex-col items-center gap-1" key={index}>
          <div
            className={cn(
              "w-7  h-[6px] rounded-xl",
              activeDays.includes(index)
                ? "bg-gradient-to-r from-orange-400 to-orange-500"
                : "bg-gray-500"
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

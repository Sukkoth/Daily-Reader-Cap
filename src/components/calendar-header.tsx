import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  selectedDate: Date;
  handleMonthChange: (value: 1 | -1) => void;
};
export default function CalendarHeader({
  selectedDate,
  handleMonthChange,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <div
        onClick={() => handleMonthChange(-1)}
        className="border-border-shade hover:bg-border-light dark:hover:bg-border-shade cursor-pointer rounded-lg border p-1"
      >
        <ChevronLeft />
      </div>
      <h1 className="text-2xl font-medium">
        {format(selectedDate, "MMMM yyyy")}
      </h1>
      <div
        onClick={() => handleMonthChange(1)}
        className="border-border-shade hover:bg-border-light dark:hover:bg-border-shade cursor-pointer rounded-lg border p-1"
      >
        <ChevronRight />
      </div>
    </div>
  );
}

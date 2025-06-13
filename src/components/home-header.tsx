import { CalendarDaysIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-provider";
import IconButton from "./icon-button";
import { format } from "date-fns";

function HomeHeader() {
  const { theme, setTheme } = useTheme();
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] font-medium">Daily Readings</h1>
        <IconButton
          icon={
            theme === "light" ? (
              <Sun className="size-5 text-orange-400" />
            ) : (
              <Moon className="size-5 text-orange-400" />
            )
          }
          onClick={changeTheme}
        />
      </div>
      <div className="bg-light-2 dark:bg-shade-2 my-5 flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-4 dark:border-gray-700">
        <CalendarDaysIcon className="size-5 text-gray-400" />
        <p>{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
      </div>
    </>
  );
}

export default HomeHeader;

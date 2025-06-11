import { Calendar, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-provider";

function HomeHeader() {
  const { theme, setTheme } = useTheme();
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] font-medium">Daily Readings</h1>
        <div className="cursor-pointer p-1" onClick={changeTheme}>
          <Sun className="size-5 text-gray-400" />
        </div>
      </div>
      <div className="bg-light-2 dark:bg-shade-2 my-5 flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-4 dark:border-gray-700">
        <Calendar className="size-4 text-gray-400" />
        <p>Monday, March 3, 2025</p>
      </div>
    </>
  );
}

export default HomeHeader;

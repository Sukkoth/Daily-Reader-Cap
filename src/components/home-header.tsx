import { Calendar, Sun } from "lucide-react";
import { useTheme } from "../providers/theme-provider";

function HomeHeader() {
  const { theme, setTheme } = useTheme();
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[26px] font-medium">Daily Readings {theme}</h1>
        <div className="p-1 cursor-pointer" onClick={changeTheme}>
          <Sun className="size-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-2 my-5 py-4 px-3 bg-light-2 dark:bg-shade-2 rounded-xl border border-gray-200 dark:border-gray-700">
        <Calendar className="size-4 text-gray-400" />
        <p>Monday, March 3, 2025</p>
      </div>
    </>
  );
}

export default HomeHeader;

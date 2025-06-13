import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";

type Props = {
  icon: React.ReactElement;
  label: string;
  to: string;
};
function BottomNavItem({ icon, label, to }: Props) {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const isActive = pathname === to;

  return (
    <button
      id="bt"
      className={cn(
        "active:bg-light-2 flex flex-1 cursor-pointer flex-col items-center p-1 py-3 text-xs text-gray-400 duration-300 hover:text-orange-500 dark:text-gray-500 hover:dark:text-orange-400 dark:active:bg-gray-900", // added scale effect
        {
          "text-orange-500 dark:text-orange-400": isActive,
        },
      )}
      onClick={() =>
        navigate(to, {
          replace: true,
        })
      }
    >
      {icon}
      <p className="pt-1">{label}</p>
    </button>
  );
}

export default BottomNavItem;

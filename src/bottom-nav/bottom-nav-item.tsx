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
        "flex flex-col flex-1 items-center p-1 py-3 text-xs dark:text-gray-500 text-gray-400", // added scale effect
        {
          "dark:text-white text-black": isActive,
        },
        "ripple-bg-red-500"
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

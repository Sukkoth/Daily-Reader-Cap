import type React from "react";
import { cn } from "../../utils/cn";

type Props = {
  active?: boolean;
  icon: React.ReactElement;
  onClick?: (e: React.MouseEvent) => void | VoidFunction;
};
function AlignmentSettingItem({ icon, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-lg p-3 transition-all duration-150 hover:bg-gray-300",
        {
          "bg-gray-300 dark:bg-gray-500": active,
        },
      )}
    >
      {icon}
    </button>
  );
}

export default AlignmentSettingItem;

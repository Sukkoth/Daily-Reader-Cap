import { type ReactElement, type SVGProps, cloneElement } from "react";
import { cn } from "../utils/cn";

type Props = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent) => void | VoidFunction;
  disabled?: boolean;
};

export default function IconButton({
  icon,
  size = "md",
  onClick,
  disabled,
}: Props) {
  const sizeClasses = {
    sm: "size-7",
    md: "size-8",
    lg: "size-9",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        disabled ? "cursor-not-allowed opacity-50" : "",
        "flex cursor-pointer items-center justify-center transition-all duration-150 hover:scale-105",
        sizeClasses[size],
      )}
    >
      {cloneElement(icon, {
        className: cn(
          icon.props.className,
          "transition-colors duration-150 active:brightness-75",
        ),
      })}
    </button>
  );
}

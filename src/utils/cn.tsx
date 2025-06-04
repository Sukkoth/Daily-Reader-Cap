// utils/cn.ts
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges tailwind classes and resolves conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

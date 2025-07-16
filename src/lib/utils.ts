import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Use this when you have only Tailwind classes (default)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Use this when you have custom classes that might conflict with Tailwind's merge logic
export function cnRaw(...inputs: ClassValue[]) {
  return clsx(inputs);
}

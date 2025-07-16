import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple Tailwind CSS class names, resolving conflicts according to Tailwind's rules.
 *
 * Accepts any number of class name values, conditionally combines them, and merges them using Tailwind's conflict resolution logic.
 *
 * @param inputs - Class names or values to combine and merge
 * @returns A single string of merged Tailwind CSS class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Combines multiple class name values into a single string without applying Tailwind CSS merge logic.
 *
 * Use this function when custom class names may conflict with Tailwind's class merging behavior.
 *
 * @param inputs - Class name values to combine
 * @returns The combined class name string
 */
export function cnRaw(...inputs: ClassValue[]) {
  return clsx(inputs);
}

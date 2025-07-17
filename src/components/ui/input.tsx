import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a customizable input element with predefined styling and support for all standard input props.
 *
 * Combines built-in CSS classes for consistent appearance, accessibility, and state handling with any additional classes provided via the `className` prop.
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-md border-2 bg-base-100 px-3 py-1 text-base-content shadow- transition-[color,box-shadow] outline-none md:text-sm",
        "placeholder:text-base-content/50",
        "selection:bg-accent/50 selection:text-accent-content",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };

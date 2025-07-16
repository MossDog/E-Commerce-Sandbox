import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a styled textarea element with customizable props and merged class names.
 *
 * Applies consistent layout, sizing, and state-based styles, while allowing additional customization through props and className.
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md bg-base-100 px-3 py-2 text-base shadow-xs outline-none md:text-sm",
        "placeholder:text-base-content/50 border-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

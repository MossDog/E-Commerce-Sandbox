"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

/**
 * Renders a styled progress bar with an animated indicator reflecting the given value.
 *
 * @param value - The current progress value, typically between 0 and 100. If undefined, the indicator is fully hidden.
 * @param className - Optional additional CSS classes for the progress bar container.
 * @returns A React element displaying the progress bar and indicator.
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-base-100 relative h-3 w-full overflow-hidden rounded-full border-2",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };

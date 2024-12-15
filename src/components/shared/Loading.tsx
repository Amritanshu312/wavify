import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "secondary";
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    return (
      <div className="grid place-content-center w-full h-screen bg-background z-50 fixed top-0 left-0">
        <div
          ref={ref}
          className={cn("flex items-center justify-center", className)}
          {...props}
        >
          <Loader2
            className={cn(
              "animate-spin",
              {
                "h-4 w-4": size === "sm",
                "h-6 w-6": size === "md",
                "h-8 w-8": size === "lg",
              },
              variant === "default" ? "text-primary" : "text-secondary"
            )}
          />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };

import { cn } from "../../lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className || "")} // Fallback to empty string if className is undefined
      {...props}
    />
  );
}

export { Skeleton };

import { cn } from "../../utils/utils";

interface JenisBadgeProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  showPulse?: boolean;
}

export function Badge({
  children,
  text = "",
  className,
  showPulse,
}: JenisBadgeProps) {

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium border",
        className
      )}
    >
      {showPulse && (
        <span
          className="h-2 w-2 rounded-full animate-pulse-glow"
        />
      )}
      {text || children}
    </div>
  );
}

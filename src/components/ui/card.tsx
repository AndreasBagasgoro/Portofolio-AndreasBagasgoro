import * as React from "react";
import { cn } from "../../utils/utils";

    export const Card = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-border bg-primary text-foreground shadow-sm",
          className
        )}
        {...props}
      />
    ));
    Card.displayName = "Card";

    export const CardHeader = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-col space-y-2 p-4 sm:p-5 md:p-6",
          className
        )}
        {...props}
      />
    ));
    CardHeader.displayName = "CardHeader";

    export const CardTitle = React.forwardRef<
      HTMLParagraphElement,
      React.HTMLAttributes<HTMLHeadingElement>
    >(({ className, ...props }, ref) => (
      <h3
        ref={ref}
        className={cn(
          // responsive typography
          "text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-tight",
          className
        )}
        {...props}
      />
    ));
    CardTitle.displayName = "CardTitle";

    export const CardDescription = React.forwardRef<
      HTMLParagraphElement,
      React.HTMLAttributes<HTMLParagraphElement>
    >(({ className, ...props }, ref) => (
      <p
        ref={ref}
        className={cn(
          "text-sm sm:text-base text-muted-foreground",
          className
        )}
        {...props}
      />
    ));
    CardDescription.displayName = "CardDescription";

    export const CardContent = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "p-4 sm:p-5 md:p-6 pt-0",
          className
        )}
        {...props}
      />
    ));
    CardContent.displayName = "CardContent";

    export const CardFooter = React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement>
    >(({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 md:p-6 pt-0 gap-2",
          className
        )}
        {...props}
      />
    ));
    CardFooter.displayName = "CardFooter";

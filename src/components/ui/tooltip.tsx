'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/utils';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  delay?: number;
}

export const Tooltip = ({
  content,
  children,
  position = 'top',
  className,
  delay = 300,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8;
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'left':
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case 'right':
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + 8;
          break;
      }

      // Adjust if tooltip goes outside viewport
      if (left < 0) left = 8;
      if (left + tooltipRect.width > viewportWidth)
        left = viewportWidth - tooltipRect.width - 8;
      if (top < 0) top = 8;
      if (top + tooltipRect.height > viewportHeight)
        top = viewportHeight - tooltipRect.height - 8;

      setTooltipPosition({ top, left });
    }
  }, [isVisible, position]);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="cursor-pointer"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            'fixed z-50 px-3 py-2 text-sm font-medium text-primary bg-background rounded-lg shadow-lg pointer-events-none transition-opacity duration-200',
            'before:content-[""] before:absolute before:w-2 before:h-2 before:bg-background before:rotate-45',
            position === 'top' &&
              'before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:top-auto',
            position === 'bottom' &&
              'before:-top-1 before:left-1/2 before:-translate-x-1/2 before:bottom-auto',
            position === 'left' &&
              'before:-right-1 before:top-1/2 before:-translate-y-1/2 before:left-auto',
            position === 'right' &&
              'before:-left-1 before:top-1/2 before:-translate-y-1/2 before:right-auto',
            className
          )}
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

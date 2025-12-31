"use client";

import React from 'react';
import { useSprings, animated } from '@react-spring/web';

interface ToggleOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

interface ToggleGroupProps {
    options: ToggleOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ 
    options, 
    value, 
    onChange,
    className = ''
}) => {
    const springs = useSprings(
        options.length,
        options.map((option) => ({
            scale: value === option.value ? 1.05 : 1,
            opacity: value === option.value ? 1 : 0.7,
            config: { tension: 300, friction: 20 },
        }))
    );

    return (
        <div className={`inline-flex rounded-3xl bg-background border border-border p-1 ${className}`}>
            {options.map((option, index) => {
                const isActive = value === option.value;

                return (
                    <animated.button
                        key={option.value}
                        onClick={() => onChange(option.value)}
                        style={springs[index]}
                        className={`
                            px-4 py-1.5 rounded-2xl text-base font-normal transition-all duration-200 flex items-center gap-2
                            ${isActive 
                                ? 'bg-primary text-white shadow-sm' 
                                : 'text-foreground hover:text-primary hover:bg-primary/10'
                            }
                        `}
                    >
                        {option.icon && <span className="text-base">{option.icon}</span>}
                        {option.label}
                    </animated.button>
                );
            })}
        </div>
    );
};

import React from 'react';
import { cn } from '../../lib/utils';

function Badge({ className, variant = 'default', ...props }) {
    const variants = {
        default: 'border-transparent bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5',
        destructive: 'border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20 border border-destructive/20',
        outline: 'text-foreground border border-border bg-transparent',
    };

    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };

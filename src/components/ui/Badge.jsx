import React from 'react';
import { cn } from '../../lib/utils';

/** Low-contrast capsules that categorise without competing with headlines. */
function Badge({ className, variant = 'default', ...props }) {
    const variants = {
        default: 'bg-elev-2 border-border text-secondary',
        primary: 'bg-primary/12 border-primary/35 text-primary',
        outline: 'bg-transparent border-white/20 text-foreground',
        solid: 'bg-primary border-primary text-on-primary',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1',
                'font-sans text-[11px] font-medium uppercase tracking-[0.14em] transition-colors',
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };

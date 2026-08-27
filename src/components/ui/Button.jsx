import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Soft-Industrial buttons: 0.25rem radius, condensed uppercase label.
 * `asChild` renders the single child element with the button classes merged in,
 * so <Link> and <a> keep their own semantics.
 */
const Button = React.forwardRef(
    ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
        const variants = {
            primary:
                'bg-primary text-on-primary hover:bg-primary-bright hover:shadow-[0_0_24px_rgba(25,206,103,0.35)]',
            ghost:
                'bg-transparent border border-white/25 text-bright hover:bg-bright hover:text-background hover:border-bright',
            subtle:
                'bg-elev-2 border border-border text-foreground hover:border-primary/50 hover:text-bright',
            bare: 'bg-transparent text-muted hover:text-primary',
        };

        const sizes = {
            sm: 'px-4 py-2 text-[12px] tracking-[0.16em]',
            md: 'px-7 py-3.5 text-[14px] tracking-[0.14em]',
            lg: 'px-10 py-5 text-[16px] tracking-[0.12em]',
        };

        const classes = cn(
            'inline-flex items-center justify-center gap-2 rounded-[0.25rem] font-display font-semibold uppercase',
            'transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            'disabled:opacity-50 disabled:pointer-events-none',
            variants[variant],
            sizes[size],
            className
        );

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children, {
                ref,
                className: cn(classes, children.props.className),
                ...props,
            });
        }

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };

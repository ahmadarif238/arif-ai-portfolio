import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const variants = {
        default: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 border border-white/10 backdrop-blur-sm",
        outline: "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 hover:text-white backdrop-blur-sm",
        ghost: "bg-transparent text-gray-300 hover:bg-white/5 hover:text-white",
        secondary: "bg-[#1F2937] text-white border border-white/10 hover:bg-[#374151] hover:border-gray-500",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/20",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-bold",
        icon: "p-3",
    };

    return (
        <motion.button
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = "Button";

export { Button };

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 30 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 30 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
        rotateX.set(yPct * -10); // Tilt Effect
        rotateY.set(xPct * 10);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`perspective-1000 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default TiltCard;

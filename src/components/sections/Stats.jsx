import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Bot, Layers, Zap, Database } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const stats = [
    { label: 'AI Agent Systems', value: 8, suffix: '+', icon: Bot, color: 'text-indigo-400', border: 'group-hover:border-indigo-500/50' },
    { label: 'Deployed Apps', value: 5, suffix: '+', icon: Layers, color: 'text-purple-400', border: 'group-hover:border-purple-500/50' },
    { label: 'Active Workflows', value: 12, suffix: '', icon: Zap, color: 'text-yellow-400', border: 'group-hover:border-yellow-500/50' },
    { label: 'FastAPI Microservices', value: 15, suffix: '+', icon: Database, color: 'text-cyan-400', border: 'group-hover:border-cyan-500/50' },
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

const Stats = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className={`h-full border-white/5 bg-white/5 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 group ${stat.border}`}>
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className={`p-4 rounded-2xl bg-white/5 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${stat.color} shadow-lg shadow-black/20`}>
                                        <stat.icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-4xl font-bold text-white mb-2 font-display tracking-tight">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm text-gray-400 font-medium font-sans uppercase tracking-wider">{stat.label}</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
    { value: '10+', label: 'Systems Delivered' },
    { value: '10+', label: 'Hours Saved Weekly' },
    { value: '24/7', label: 'Automation Uptime' },
];

const Hero = () => {
    return (
        <section className="relative flex min-h-[88vh] items-center overflow-hidden pb-24 pt-28 lg:pt-36">
            {/* Ambient tonal wash, not a gradient soup */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-elev-2/40" />
            <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

            <div className="shell relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                {/* Copy */}
                <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-7">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="eyebrow"
                    >
                        Software Engineer, AI and Automation
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="display max-w-4xl text-[48px] sm:text-[64px] lg:text-[84px]"
                    >
                        Building{' '}
                        <span className="font-light italic text-primary">Intelligent</span>{' '}
                        Software <br className="hidden lg:block" /> That Works For You
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="max-w-2xl text-[18px] leading-[1.65] text-muted lg:text-[20px]"
                    >
                        I&apos;m a Software Engineer building websites, apps, and AI systems that
                        take the repetitive work off your team. Chatbots, calling agents, and
                        automations that run quietly in the background while you focus on growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="flex flex-col gap-4 pt-2 sm:flex-row sm:gap-6"
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex items-center justify-center gap-3 bg-primary px-9 py-5 font-display text-[17px] font-bold uppercase tracking-[0.08em] text-on-primary transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_30px_rgba(25,206,103,0.35)]"
                        >
                            Explore Work
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center border border-white/25 px-9 py-5 font-display text-[17px] font-bold uppercase tracking-[0.08em] text-bright transition-all duration-300 hover:border-bright hover:bg-bright hover:text-background"
                        >
                            About Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-4 flex flex-wrap gap-10 border-t border-border pt-8 lg:mt-10"
                    >
                        {stats.map((s, i) => (
                            <div key={s.label} className="flex flex-col">
                                <span
                                    className={`font-display text-[40px] font-bold leading-none lg:text-[52px] ${i === 0 ? 'text-primary' : 'text-bright'
                                        }`}
                                >
                                    {s.value}
                                </span>
                                <span className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 flex justify-center lg:order-2 lg:col-span-4 lg:col-start-9 lg:justify-end"
                >
                    <div className="group relative aspect-[0.86] w-full max-w-[360px] lg:max-w-full">
                        <div className="absolute inset-0 scale-90 rounded-full bg-primary/25 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                        <div className="relative z-10 h-full w-full border border-border bg-elev-1 p-2 transition-transform duration-500 group-hover:-translate-y-2">
                            <img
                                src="/profile.jpg"
                                alt="Arif Ahmad Khan"
                                className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
                            />

                            <div className="absolute -left-6 bottom-6 hidden border border-border bg-elev-2 px-6 py-4 md:block">
                                <span className="mb-1 block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                                    Status
                                </span>
                                <span className="text-[15px] text-bright">Available for Work</span>
                            </div>
                        </div>

                        {/* Rotating spark mark */}
                        <svg
                            viewBox="0 0 100 100"
                            className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 animate-slow-spin text-outline-variant/50"
                        >
                            <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="currentColor" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

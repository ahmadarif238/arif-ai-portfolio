import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, Code2, Puzzle, Server, Terminal } from 'lucide-react';
import { skills as skillCategories } from '../data/skills';
import Capabilities from '../components/sections/Capabilities';
import Workflow from '../components/sections/Workflow';

const iconMap = {
    'AI & Intelligent Systems': Brain,
    'Web & App Development': Code2,
    'Integration & Automation': Puzzle,
    'Backend, Cloud & Data': Server,
};

const levelWidth = {
    Expert: 'w-full',
    Advanced: 'w-4/5',
    Proficient: 'w-3/5',
};

const Skills = () => {
    return (
        <div className="min-h-screen">
            {/* Head */}
            <section className="shell pb-8 pt-24 lg:pt-32">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 lg:col-span-8"
                    >
                        <span className="eyebrow block">Capabilities</span>
                        <h1 className="display text-[48px] leading-none lg:text-[84px]">
                            Services &amp; <span className="text-primary">Expertise</span>
                        </h1>
                        <p className="max-w-2xl text-[18px] leading-[1.7] text-muted">
From websites and apps to AI agents and automations — the full range of
                            what I can build for your business, and the tools I use to do it.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="hidden lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end"
                    >
                        <div className="flex h-32 w-32 rotate-45 items-center justify-center border border-primary/40">
                            <ArrowUpRight className="h-8 w-8 -rotate-45 text-primary" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Capabilities withHeading={false} />

            {/* Detailed stack */}
            <section className="shell section-y border-t border-border">
                <div className="mb-14 max-w-2xl space-y-5">
                    <span className="eyebrow block">The Stack</span>
                    <h2 className="headline text-[38px] leading-none lg:text-[56px]">
                        Tools &amp; Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {skillCategories.map((category, index) => {
                        const Icon = iconMap[category.category] || Terminal;

                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                                className="border border-border bg-elev-1 p-8 transition-colors duration-300 hover:border-primary/40 lg:p-10"
                            >
                                <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
                                    <span className="flex h-11 w-11 items-center justify-center border border-border bg-background text-primary">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="headline text-[22px] lg:text-[26px]">
                                        {category.category}
                                    </h3>
                                </div>

                                <ul className="space-y-5">
                                    {category.items.map((skill) => (
                                        <li key={skill.name}>
                                            <div className="mb-2 flex items-baseline justify-between gap-4">
                                                <span className="font-sans text-[15px] text-bright">
                                                    {skill.name}
                                                </span>
                                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                                                    {skill.level}
                                                </span>
                                            </div>
                                            <div className="h-[3px] w-full bg-elev-3">
                                                <div
                                                    className={`h-full bg-primary ${levelWidth[skill.level] || 'w-1/2'}`}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <Workflow />
        </div>
    );
};

export default Skills;

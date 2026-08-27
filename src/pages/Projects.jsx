import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { cn } from '../lib/utils';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filters = useMemo(
        () => ['All', ...Array.from(new Set(projects.map((p) => p.type)))],
        []
    );

    const visible = filter === 'All' ? projects : projects.filter((p) => p.type === filter);

    return (
        <div className="min-h-screen">
            {/* Page head — asymmetric split */}
            <section className="shell pb-16 pt-24 lg:pb-24 lg:pt-32">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5 lg:col-span-7"
                    >
                        <span className="eyebrow block">Selected Works</span>
                        <h1 className="display text-[48px] leading-none lg:text-[84px]">
                            Selected <br /> Work
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9 lg:pt-4"
                    >
                        <p className="text-[17px] leading-[1.7] text-muted">
A selection of systems built for real businesses, covering document intelligence,
                            sales and support automation, inventory management, and voice assistants.
                            Each one replaced hours of manual work.
                        </p>
                        <ArrowDown className="h-8 w-8 text-primary" />
                    </motion.div>
                </div>
            </section>

            {/* Filters */}
            <section className="shell">
                <div className="flex flex-wrap gap-3 border-b border-border pb-6">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                'rounded-full border px-5 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300',
                                filter === f
                                    ? 'border-primary bg-primary text-on-primary'
                                    : 'border-border bg-elev-1 text-muted hover:border-white/25 hover:text-bright'
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="shell py-12 lg:py-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                    {visible.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            height="h-[440px] lg:h-[520px]"
                        />
                    ))}
                </div>

                {visible.length === 0 && (
                    <p className="py-20 text-center text-muted">No projects in this category yet.</p>
                )}
            </section>
        </div>
    );
};

export default Projects;

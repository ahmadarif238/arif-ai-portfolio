import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Check } from 'lucide-react';
import { projects } from '../data/projects';
import ArchitectureDiagram from '../components/ui/ArchitectureDiagram';
import ProjectIcon from '../components/ui/ProjectIcons';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="headline mb-6 text-[28px]">Project not found</h2>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-display text-[14px] font-bold uppercase tracking-[0.12em] text-on-primary"
                    >
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="shell pb-16 pt-24 lg:pt-32">
                <Link
                    to="/projects"
                    className="mb-12 inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-primary"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-7 lg:col-span-7"
                    >
                        <span className="eyebrow block">{project.type}</span>

                        <h1 className="display text-[42px] leading-none lg:text-[72px]">
                            {project.title}
                        </h1>

                        <p className="max-w-2xl text-[18px] leading-[1.7] text-secondary lg:text-[21px]">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-[15px] font-bold uppercase tracking-[0.1em] text-on-primary transition-all hover:bg-primary-bright"
                                >
                                    Live Demo
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 font-display text-[15px] font-bold uppercase tracking-[0.1em] text-bright transition-all hover:border-bright hover:bg-bright hover:text-background"
                                >
                                    Source
                                    <Github className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative lg:col-span-4 lg:col-start-9"
                    >
                        <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-elev-1">
                            <div className="grid-lines absolute inset-0 opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                            <ProjectIcon
                                projectId={project.id}
                                className="relative h-28 w-28 text-primary lg:h-32 lg:w-32"
                            />
                        </div>
                        <div className="absolute -bottom-5 -right-5 -z-10 h-24 w-24 border border-primary/40" />
                    </motion.div>
                </div>
            </section>

            {/* Metrics band */}
            {project.metrics?.length > 0 && (
                <section className="border-y border-border bg-surface">
                    <div className="shell grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
                        {project.metrics.map((metric) => (
                            <div key={metric.label} className="bg-surface px-6 py-10 text-center">
                                <div className="font-display text-[40px] font-bold leading-none text-primary lg:text-[52px]">
                                    {metric.value}
                                </div>
                                <div className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Challenge & Solution */}
            <section className="shell section-y">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5 }}
                        className="space-y-5 border-t-2 border-white/20 pt-8"
                    >
                        <span className="eyebrow-muted block">The Challenge</span>
                        <h3 className="headline text-[26px] lg:text-[32px]">What was broken</h3>
                        <p className="text-[17px] leading-[1.75] text-secondary">{project.problem}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-5 border-t-2 border-primary pt-8"
                    >
                        <span className="eyebrow block">The Solution</span>
                        <h3 className="headline text-[26px] lg:text-[32px]">What I built</h3>
                        <p className="text-[17px] leading-[1.75] text-secondary">{project.solution}</p>
                    </motion.div>
                </div>
            </section>

            {/* Architecture */}
            {project.architecture?.length > 0 && (
                <section className="border-y border-border bg-surface">
                    <div className="shell section-y">
                        <div className="mb-14 max-w-2xl space-y-5">
                            <span className="eyebrow block">System Design</span>
                            <h2 className="headline text-[34px] leading-none lg:text-[48px]">
                                Architecture
                            </h2>
                            <p className="text-[16px] leading-relaxed text-muted">
                                The agent graph and data flow powering this system.
                            </p>
                        </div>
                        <div className="border border-border bg-background p-6 lg:p-12">
                            <ArchitectureDiagram nodes={project.architecture} />
                        </div>
                    </div>
                </section>
            )}

            {/* Workflow steps */}
            {project.workflow?.length > 0 && (
                <section className="shell section-y">
                    <div className="mb-14 max-w-2xl space-y-5">
                        <span className="eyebrow block">Execution</span>
                        <h2 className="headline text-[34px] leading-none lg:text-[48px]">
                            How it runs
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
                        {project.workflow.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: i * 0.07 }}
                                className="bg-elev-1 p-8 transition-colors duration-300 hover:bg-elev-2"
                            >
                                <span className="mb-5 block font-display text-[32px] font-bold leading-none text-primary/40">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-[15px] leading-relaxed text-secondary">{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Features + stack */}
            <section className="border-t border-border bg-surface">
                <div className="shell section-y grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-7">
                        <span className="eyebrow mb-6 block">Key Features</span>
                        <ul className="space-y-px border border-border bg-border">
                            {project.features?.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-4 bg-elev-1 p-5 transition-colors duration-300 hover:bg-elev-2"
                                >
                                    <Check className="h-4 w-4 shrink-0 text-primary" />
                                    <span className="font-sans text-[16px] text-bright">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-9">
                        <span className="eyebrow mb-6 block">Tech Stack</span>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="chip">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 border-t border-border pt-8">
                            <p className="mb-6 text-[15px] leading-relaxed text-muted">
                                Want a system like this for your own operation?
                            </p>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-[14px] font-bold uppercase tracking-[0.12em] text-on-primary transition-all hover:bg-primary-bright"
                            >
                                Start a Project
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;

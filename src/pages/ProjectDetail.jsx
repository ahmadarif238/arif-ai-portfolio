import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Layers, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import ArchitectureDiagram from '../components/ui/ArchitectureDiagram';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                    <Button asChild>
                        <Link to="/projects">Back to Projects</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#0B0F19]">
                <div className="container mx-auto px-6 relative z-10">
                    <Button variant="ghost" asChild className="mb-8 hover:bg-white/10 text-gray-300">
                        <Link to="/projects"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects</Link>
                    </Button>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Badge variant="secondary" className="mb-6 bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 px-3 py-1 font-bold">
                                {project.type || "AI Engineering"}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl font-medium">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {project.liveUrl && (
                                    <Button size="lg" className="rounded-full px-8 shadow-lg shadow-indigo-600/20 bg-white text-black hover:bg-gray-200 font-bold" asChild>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            Visit Live Site <ExternalLink className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-600 text-white hover:bg-white/10 font-bold" asChild>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            View Source <Github className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Metrics Banner */}
            {project.metrics && project.metrics.length > 0 && (
                <section className="py-8 border-t border-gray-800 bg-[#111827]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                            {project.metrics.map((metric, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-1">{metric.value}</div>
                                    <div className="text-sm text-gray-400 font-medium">{metric.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Problem & Solution */}
            <section className="py-20 border-t border-gray-800 bg-[#111827]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-12 h-12 rounded-lg bg-red-900/20 flex items-center justify-center mb-4 border border-red-900/30">
                                <Zap className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                {project.problem}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-12 h-12 rounded-lg bg-green-900/20 flex items-center justify-center mb-4 border border-green-900/30">
                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">The Solution</h3>
                            <p className="text-lg text-gray-300 leading-relaxed font-medium">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Architecture Diagram */}
            {project.architecture && project.architecture.length > 0 && (
                <section className="py-24 bg-[#0B0F19]">
                    <div className="container mx-auto px-6">
                        <div className="bg-[#1F2937] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                            <div className="max-w-3xl mx-auto text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 text-white">System Architecture</h2>
                                <p className="text-gray-300 font-medium">The multi-agent architecture and data flow powering this system.</p>
                            </div>
                            <ArchitectureDiagram nodes={project.architecture} />
                        </div>
                    </div>
                </section>
            )}

            {/* Workflow Steps (fallback if no architecture) */}
            {(!project.architecture || project.architecture.length === 0) && project.workflow && (
                <section className="py-24 bg-[#0B0F19]">
                    <div className="container mx-auto px-6">
                        <div className="bg-[#1F2937] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                            <div className="max-w-3xl mx-auto text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
                                <p className="text-gray-300 font-medium">A breakdown of the system architecture and data flow.</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 relative items-center">
                                {project.workflow.slice(0, 3).map((step, i) => (
                                    <div key={i} className="bg-[#111827] border border-gray-700 p-6 rounded-2xl relative h-full flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transition-transform">
                                        <div className="w-10 h-10 rounded-full bg-indigo-600 border border-indigo-400 flex items-center justify-center absolute -top-5 left-1/2 -translate-x-1/2 text-sm font-bold text-white z-10 shadow-lg">
                                            {i + 1}
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-gray-200 font-medium leading-relaxed">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Features Grid */}
            <section className="py-20 bg-[#0B0F19] border-y border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.features && project.features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-xl bg-[#111827] border border-gray-700 hover:border-indigo-600 transition-colors shadow-md">
                                <div className="w-8 h-8 rounded bg-indigo-900/30 flex items-center justify-center mb-4 text-indigo-400 border border-indigo-700">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold mb-2 text-white">{feature}</h4>
                                <p className="text-sm text-gray-400">
                                    Optimized for performance and scalability.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-[#111827] border-t border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
                        <p className="text-gray-400">Built with modern, production-grade technologies.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-base px-4 py-2 bg-[#1F2937] border border-gray-700 text-white shadow-sm">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 border-t border-gray-800 text-center bg-[#0B0F19]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-white">Ready to build something similar?</h2>
                    <Button size="lg" className="px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-600/30" asChild>
                        <Link to="/contact">Hire Me for Your Project</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;

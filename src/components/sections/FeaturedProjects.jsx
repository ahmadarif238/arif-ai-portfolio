import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectIcon from '../ui/ProjectIcons';
import TiltCard from '../ui/TiltCard';

const FeaturedProjects = () => {
    const featured = projects.slice(0, 3);

    return (
        <section className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">

                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Featured Work</h2>
                        <p className="text-lg text-slate-400">
                            Selected projects demonstrating autonomous agents, RAG architectures, and product-grade engineering.
                        </p>
                    </div>
                    <Button variant="ghost" asChild className="hidden md:flex group hover:bg-white/5 hover:text-white transition-all">
                        <Link to="/projects">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TiltCard>
                                <Card className="h-full flex flex-col group relative overflow-hidden border-white/5 bg-[#1c1038]/40 hover:border-purple-500/30 transition-all duration-500 rounded-2xl backdrop-blur-sm">
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <CardContent className="p-0 flex flex-col h-full z-10">
                                        {/* Visual Placeholder */}
                                        <div className="h-48 bg-gradient-to-br from-[#0f0728] to-[#1c1038] border-b border-white/5 relative group-overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                                <ProjectIcon projectId={project.id} className="w-28 h-28 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
                                            </div>
                                            {/* Overlay Badge */}
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-purple-500/20 transition-colors">
                                                    {project.techStack[0]}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-1">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                            <p className="text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {project.metrics && project.metrics.length > 0 && (
                                                <div className="flex flex-wrap gap-3 mb-4 text-xs">
                                                    {project.metrics.slice(0, 3).map((m, i) => (
                                                        <span key={i} className="text-slate-400">
                                                            <span className="font-bold text-purple-400">{m.value}</span> {m.label}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex gap-2">
                                                    {project.techStack.slice(1, 3).map(tech => (
                                                        <span key={tech} className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded">{tech}</span>
                                                    ))}
                                                </div>
                                                <Button variant="link" size="sm" asChild className="p-0 text-purple-400 hover:text-purple-300">
                                                    <Link to={`/projects/${project.id}`}>Case Study <ArrowRight className="ml-1 w-3 h-3" /></Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" size="lg" asChild className="w-full border-white/10">
                        <Link to="/projects">View All Projects</Link>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;

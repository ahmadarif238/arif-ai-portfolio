import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight, Eye, GitFork } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectIcon from '../components/ui/ProjectIcons';
import TiltCard from '../components/ui/TiltCard';

const Projects = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-16"
                >
                    <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400">Portfolio</Badge>
                    <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
                        Case <span className="text-gradient-primary">Studies</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed font-sans font-light">
                        A collection of AI agents and automation systems built to solve complex real-world problems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <TiltCard key={project.id} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="h-full flex flex-col group relative overflow-hidden bg-white/5 border-white/10 hover:border-indigo-500/30 text-left">
                                    {/* Visual Feature */}
                                    <div className="h-60 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border-b border-white/5 relative overflow-hidden group-hover:from-indigo-900/20 group-hover:to-purple-900/20 transition-colors duration-500">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                                                <ProjectIcon projectId={project.id} className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                                            </div>
                                        </div>

                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-black/50 backdrop-blur-md border-white/10 text-white shadow-lg">
                                                {project.techStack[0]}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1 relative bg-gradient-to-b from-white/5 to-transparent">
                                        <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-indigo-400 transition-colors text-white">{project.title}</h3>
                                        <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed font-sans font-light">
                                            {project.description}
                                        </p>

                                        {project.metrics && project.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-3 mb-6">
                                                {project.metrics.slice(0, 3).map((m, i) => (
                                                    <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs flex items-center gap-2 text-gray-300">
                                                        <span className="font-bold text-indigo-400">{m.value}</span>
                                                        <span className="opacity-70">{m.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex gap-4 text-sm font-medium">
                                                {project.liveUrl ? (
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                                                        <Eye className="w-4 h-4" /> Demo
                                                    </a>
                                                ) : (
                                                    <span className="flex items-center gap-1 text-gray-600 cursor-not-allowed"><Eye className="w-4 h-4" /> Demo</span>
                                                )}
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                                                    <GitFork className="w-4 h-4" /> Code
                                                </a>
                                            </div>
                                            <Button size="sm" asChild className="bg-white/10 hover:bg-white/20 text-white border-none">
                                                <Link to={`/projects/${project.id}`}>
                                                    Details <ArrowRight className="ml-2 w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

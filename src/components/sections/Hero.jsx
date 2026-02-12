import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Network } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../ui/ParticlesBackground';

const Hero = () => {
    const typingText = "Autonomous Agent Systems";

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Cyan/Purple Floating Blobs */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-float opacity-40 -z-10" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow opacity-40 -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Badge variant="secondary" className="px-4 py-1.5 text-sm mb-4 border-purple-500/30 bg-purple-500/10 text-purple-300 backdrop-blur-md">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                                AI Engineer | Agentic AI | GenAI Specialist
                            </Badge>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-1.1 text-white font-display">
                            Building <br />
                            <span className="text-gradient">
                                {typingText.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.1, delay: 0.5 + index * 0.05 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-sans">
                            I design and deploy production-grade Agentic AI workflows, scalable RAG systems, and intelligent automation for forward-thinking enterprises.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="text-lg h-14 px-8 rounded-full shadow-purple-500/25 shadow-xl bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300" asChild>
                                <Link to="/projects">
                                    View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-full border-white/10 hover:bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300" asChild>
                                <Link to="/contact">
                                    Start a Conversation
                                </Link>
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-6 text-sm text-gray-400 font-medium font-mono">
                            <div className="flex items-center gap-2"><Cpu className="w-4 h-4 text-purple-400" /> Agentic AI</div>
                            <div className="flex items-center gap-2"><Network className="w-4 h-4 text-cyan-400" /> RAG Systems</div>
                            <div className="flex items-center gap-2"><Terminal className="w-4 h-4 text-pink-400" /> Automation</div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        <div className="relative w-full max-w-md mx-auto aspect-square preserve-3d hover:rotate-y-12 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
                            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0f0728]/50 backdrop-blur-sm">
                                <img
                                    src="/profile.png"
                                    alt="Arif Ahmad Khan"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-[#1c1038] text-gray-500 p-12 text-center">Add profile.png to public folder</div>';
                                    }}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 bg-[#1c1038]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold font-display text-lg">Agentic AI</div>
                                    <div className="text-xs text-purple-300 font-mono">System Architect</div>
                                </div>
                            </motion.div>

                            {/* Second Floating Badge */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-10 -right-8 bg-[#1c1038]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Network className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-white font-bold font-display text-lg">RAG</div>
                                    <div className="text-xs text-cyan-300 font-mono">Expert</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, GitBranch, Database, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const Workflow = () => {
    return (
        <section className="py-24 overflow-hidden relative">
            <div className="absolute inset-0 bg-transparent -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            From Chaos to <span className="text-gradient-primary">Autonomous Order</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            I believe the future of software belongs to systems that can reason, plan, and execute. My approach combines deterministic logic with probabilistic AI to create reliable agents.
                        </p>

                        <div className="space-y-4">
                            {[
                                { title: "Strategic Planning", desc: "Decomposing complex goals into actionable steps." },
                                { title: "Tool Execution", desc: "Empowering LLMs with APIs, databases, and browsers." },
                                { title: "Self-Correction", desc: "Implementing loops to validate and fix outputs." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-200">{step.title}</h3>
                                        <p className="text-sm text-slate-400 mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="default" size="lg" className="mt-4" asChild>
                            <Link to="/about">More About My Process <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>

                    {/* Visual Representation */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full" />
                        <div className="border border-white/10 rounded-2xl bg-slate-950/50 backdrop-blur-xl p-8 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 px-4 py-1 rounded-full text-xs font-medium text-slate-400">
                                Typical Agent Workflow
                            </div>

                            {/* Node Animation Diagram */}
                            <div className="flex flex-col items-center gap-8 py-8">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-slate-800 p-4 rounded-xl border border-indigo-500/30 shadow-lg shadow-indigo-500/10 flex items-center gap-3 w-48 justify-center"
                                >
                                    <Globe className="w-5 h-5 text-indigo-400" />
                                    <span className="font-medium text-slate-200">User Request</span>
                                </motion.div>

                                <div className="h-8 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />

                                <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-slate-900 p-4 rounded-xl border border-white/10 flex flex-col items-center text-center gap-2"
                                    >
                                        <GitBranch className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm font-medium text-slate-300">Planner Agent</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="bg-slate-900 p-4 rounded-xl border border-white/10 flex flex-col items-center text-center gap-2"
                                    >
                                        <Database className="w-5 h-5 text-cyan-400" />
                                        <span className="text-sm font-medium text-slate-300">RAG Memory</span>
                                    </motion.div>
                                </div>

                                <div className="h-8 w-px bg-gradient-to-b from-transparent to-green-500/50" />

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-slate-800 p-4 rounded-xl border border-green-500/30 shadow-lg shadow-green-500/10 flex items-center gap-3 w-48 justify-center"
                                >
                                    <Box className="w-5 h-5 text-green-400" />
                                    <span className="font-medium text-slate-200">Executed Action</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Workflow;

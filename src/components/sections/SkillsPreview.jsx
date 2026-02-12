import React from 'react';

import { skills } from '../../data/skills';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';
import { Brain, Cloud, Database, Terminal, Cpu, Server, Globe, Zap } from 'lucide-react';

const iconMap = {
    'Agentic AI & LLM Systems': Brain,
    'Backend & Cloud': Cloud,
    'Databases': Database,
    'Automation & ML': Zap,
    'Development': Terminal
};

const SkillsPreview = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Technical Arsenal</h2>
                    <p className="text-gray-400 text-lg">
                        A robust stack optimized for building scalable AI systems and autonomous workflows.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((category, index) => {
                        const Icon = iconMap[category.category] || Terminal;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/5 hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
                                    <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <CardTitle className="text-base font-bold text-white leading-tight">
                                            {category.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {category.items.map(skill => (
                                                <Badge key={skill.name} variant="secondary" className="bg-white/5 text-gray-300 border-white/10 hover:text-white hover:bg-white/10 transition-colors">
                                                    {skill.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsPreview;

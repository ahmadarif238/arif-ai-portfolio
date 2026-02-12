import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Brain, Cloud, Database, Terminal, Zap, Server } from 'lucide-react';
import { skills as skillCategories } from '../data/skills';

const iconMap = {
    'Agentic AI & LLM Systems': <Brain className="w-6 h-6 text-indigo-400" />,
    'Backend & Cloud': <Server className="w-6 h-6 text-blue-400" />,
    'Databases': <Database className="w-6 h-6 text-purple-400" />,
    'Automation & ML': <Zap className="w-6 h-6 text-yellow-400" />,
    'Development': <Terminal className="w-6 h-6 text-green-400" />
};

const levelColors = {
    Expert: 'bg-indigo-500',
    Advanced: 'bg-purple-500',
    Proficient: 'bg-cyan-500'
};

const Skills = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0B0F19]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Technical Expertise</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        A deep dive into the technologies I use to build scalable, intelligent systems.
                    </p>
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-6 mb-12"
                >
                    {Object.entries(levelColors).map(([level, color]) => (
                        <div key={level} className="flex items-center gap-2 text-sm text-gray-400">
                            <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                            {level}
                        </div>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => {
                        const icon = iconMap[category.category] || <Terminal className="w-6 h-6 text-gray-400" />;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-[#1F2937] border border-gray-800 hover:border-indigo-600 transition-colors shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 rounded-lg bg-[#111827] border border-gray-700 shadow-sm">
                                                {icon}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {category.items.map(skill => (
                                                <Badge
                                                    key={skill.name}
                                                    variant="secondary"
                                                    className="px-3 py-1.5 text-sm bg-[#111827] border border-gray-700 text-gray-200 hover:text-white hover:border-gray-500 transition-colors flex items-center gap-2"
                                                >
                                                    <span className={`w-2 h-2 rounded-full ${levelColors[skill.level] || 'bg-gray-500'}`} />
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
        </div>
    );
};

export default Skills;

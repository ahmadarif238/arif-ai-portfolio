import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Calendar, Briefcase, GraduationCap, Award, FileDown } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0B0F19]">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="max-w-4xl mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white"
                    >
                        About Me
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                    >
                        <p className="text-xl leading-relaxed">
                            I am <span className="text-indigo-400 font-semibold">Arif Ahmad Khan</span>, an AI Engineer with strong expertise in Agentic AI, Retrieval Augmented Generation (RAG) systems, and large language model-based backend applications.
                        </p>
                        <p className="text-xl leading-relaxed mt-6">
                            I specialize in building multi-agent workflows using LangGraph and LangChain, scalable APIs with FastAPI, and enterprise-level AI assistants grounded in vector databases. My mission is to design production-ready AI agents to solve real-world operational problems.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8"
                    >
                        <Button size="lg" className="rounded-full px-8 shadow-lg shadow-indigo-600/20" asChild>
                            <a href="/resume.pdf" download>
                                <FileDown className="mr-2 w-5 h-5" /> Download Resume
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Experience Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
                        <Briefcase className="w-8 h-8 text-indigo-400" /> Professional Experience
                    </h2>

                    <div className="space-y-12 border-l-2 border-gray-800 ml-3 pl-8 md:pl-12 relative">
                        {/* Experience Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-[#0B0F19]" />
                            <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">AI Engineer & Agentic AI Specialist</h3>
                                            <p className="text-indigo-400 font-semibold text-lg">Freelance / Projects</p>
                                        </div>
                                        <Badge variant="secondary" className="w-fit bg-[#111827] border border-white/10 text-gray-300 px-4 py-1">
                                            <Calendar className="w-3 h-3 mr-2" /> Present
                                        </Badge>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                                        <li>Engineered autonomous multi-agent systems using LangGraph and LangChain.</li>
                                        <li>Built voice-enabled AI agents and RAG architectures using Groq models.</li>
                                        <li>Developed auto-negotiating supply chain agents and internal ops copilots.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Experience Item 2 - Internship */}
                        <div className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-purple-600 border-4 border-[#0B0F19]" />
                            <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Computer Vision Intern</h3>
                                            <p className="text-purple-400 font-semibold text-lg">ITSOLERA Pvt. Ltd</p>
                                        </div>
                                        <Badge variant="secondary" className="w-fit bg-[#111827] border border-white/10 text-gray-300 px-4 py-1">
                                            <Calendar className="w-3 h-3 mr-2" /> Jul 2024 – Oct 2024
                                        </Badge>
                                    </div>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                                        <li>Developed real-time pedestrian detection systems using Python and OpenCV.</li>
                                        <li>Built object detection pipelines robust to low-light, rain, and fog conditions.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
                        <GraduationCap className="w-8 h-8 text-indigo-400" /> Education
                    </h2>
                    <div className="grid md:grid-cols-1 gap-8">
                        <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Bachelor of Science in Software Engineering</h3>
                                        <p className="text-gray-400">University of Malakand</p>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant="outline" className="border-gray-600 text-gray-300 mb-2">2021 - 2025</Badge>
                                        <p className="text-indigo-400 font-bold">CGPA: 3.65 / 4.0</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Certifications Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
                        <Award className="w-8 h-8 text-indigo-400" /> Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-white">Machine Learning Specialization</h3>
                                <p className="text-gray-400 text-sm">Andrew Ng (Coursera)</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-white">Deep Learning Specialization</h3>
                                <p className="text-gray-400 text-sm">Andrew Ng (Coursera)</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-white">Understanding Agentic AI</h3>
                                <p className="text-gray-400 text-sm">AgentAcademy</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-[#1F2937] border border-gray-800 shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-white">Fundamentals of Agents</h3>
                                <p className="text-gray-400 text-sm">Hugging Face (2025)</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;

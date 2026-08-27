import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowUpRight } from 'lucide-react';

const experience = [
    {
        role: 'AI Automation Engineer & Cloud Assistant',
        company: 'Int. Dublin Tax Company Ltd.',
        period: 'Present',
        points: [
            'Design and implement AI-driven automation and cloud solutions across Microsoft Azure, Power Platform, and Power Automate.',
            'Build and manage workflow automations in n8n, adding AI capabilities to create agent-based systems.',
            'Develop and deploy API-based automation services that connect cloud platforms, business tools, and AI models.',
            'Support cloud operations and AI-powered process automation in a fully remote international environment.',
            'Collaborate on automation projects and contribute to scalable, production-ready cloud and AI infrastructure.',
        ],
    },
    {
        role: 'Software Engineer & AI Developer',
        company: 'Freelance / Independent Projects',
        period: '2024 — Present',
        points: [
            'Built websites, web applications, and AI assistants for clients across several industries.',
            'Developed chatbots and voice-based calling agents, integrated directly into client websites and CRMs.',
            'Delivered automation systems that replaced manual inventory, sales, and support workflows.',
        ],
    },
    {
        role: 'Computer Vision Intern',
        company: 'ITSOLERA Pvt. Ltd',
        period: 'Jul 2024 — Oct 2024',
        points: [
            'Developed real-time pedestrian detection systems using Python and OpenCV.',
            'Built object detection pipelines robust to low-light, rain, and fog conditions.',
        ],
    },
];

const certifications = [
    { name: 'Machine Learning Specialization', issuer: 'Andrew Ng — Coursera' },
    { name: 'Deep Learning Specialization', issuer: 'Andrew Ng — Coursera' },
    { name: 'Understanding Agentic AI', issuer: 'AgentAcademy' },
    { name: 'Fundamentals of Agents', issuer: 'Hugging Face (2025)' },
];

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Intro */}
            <section className="shell pb-16 pt-24 lg:pb-24 lg:pt-32">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="order-2 space-y-8 lg:order-1 lg:col-span-7"
                    >
                        <span className="eyebrow block">Profile</span>
                        <h1 className="display text-[48px] leading-none lg:text-[80px]">
                            Arif Ahmad <br />
                            <span className="text-primary">Khan</span>
                        </h1>
                        <div className="max-w-2xl space-y-6 text-[17px] leading-[1.75] text-secondary lg:text-[19px]">
                            <p>
                                I&apos;m a Software Engineer who builds websites, applications, and
                                AI systems for businesses. That covers everything from a site that
                                brings in customers, to an app your team works in daily, to chatbots
                                and calling agents that handle enquiries around the clock.
                            </p>
                            <p>
                                I work across the whole build — interface, backend, and the
                                automation that ties it together — so you get one person accountable
                                for the result rather than a handoff between three.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="/resume.pdf"
                                download
                                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-[15px] font-bold uppercase tracking-[0.1em] text-on-primary transition-all hover:bg-primary-bright"
                            >
                                <FileDown className="h-4 w-4" />
                                Download Resume
                            </a>
                            <a
                                href="https://github.com/ahmadarif238"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 border border-white/25 px-8 py-4 font-display text-[15px] font-bold uppercase tracking-[0.1em] text-bright transition-all hover:border-bright hover:bg-bright hover:text-background"
                            >
                                GitHub
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative order-1 lg:order-2 lg:col-span-4 lg:col-start-9"
                    >
                        <div className="relative z-10 aspect-[0.85] w-full max-w-[380px] border border-border bg-elev-1 p-2 lg:max-w-full">
                            <img
                                src="/profile.jpg"
                                alt="Arif Ahmad Khan"
                                className="h-full w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 -z-0 h-32 w-32 border border-primary/40" />
                    </motion.div>
                </div>
            </section>

            {/* Experience */}
            <section className="border-y border-border bg-surface">
                <div className="shell section-y">
                    <div className="mb-14 max-w-2xl space-y-5">
                        <span className="eyebrow block">Trajectory</span>
                        <h2 className="headline text-[38px] leading-none lg:text-[56px]">
                            Professional Experience
                        </h2>
                    </div>

                    <div className="space-y-px border border-border bg-border">
                        {experience.map((job, i) => (
                            <motion.div
                                key={job.role}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="grid grid-cols-1 gap-6 bg-elev-1 p-8 transition-colors duration-300 hover:bg-elev-2 lg:grid-cols-12 lg:gap-8 lg:p-10"
                            >
                                <div className="lg:col-span-4">
                                    <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                                        {job.period}
                                    </span>
                                    <h3 className="headline text-[21px] leading-snug lg:text-[24px]">
                                        {job.role}
                                    </h3>
                                    <p className="mt-2 text-[15px] text-muted">{job.company}</p>
                                </div>

                                <ul className="space-y-3 lg:col-span-7 lg:col-start-6">
                                    {job.points.map((point) => (
                                        <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-secondary">
                                            <span className="mt-[9px] h-1 w-1 shrink-0 bg-primary" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education + certifications */}
            <section className="shell section-y">
                <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <span className="eyebrow mb-5 block">Education</span>
                        <div className="border border-border bg-elev-1 p-8">
                            <h3 className="headline mb-3 text-[20px] leading-snug lg:text-[23px]">
                                BSc Software Engineering
                            </h3>
                            <p className="text-[15px] text-muted">University of Malakand</p>
                            <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                                    2021 — 2025
                                </span>
                                <span className="font-display text-[22px] font-semibold text-primary">
                                    3.65 / 4.0
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <span className="eyebrow mb-5 block">Certifications</span>
                        <div className="space-y-px border border-border bg-border">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="flex items-center justify-between gap-6 bg-elev-1 p-6 transition-colors duration-300 hover:bg-elev-2"
                                >
                                    <div>
                                        <h4 className="font-sans text-[15px] font-medium text-bright">
                                            {cert.name}
                                        </h4>
                                        <p className="mt-1 text-[13px] text-muted">{cert.issuer}</p>
                                    </div>
                                    <span className="h-2 w-2 shrink-0 bg-primary" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

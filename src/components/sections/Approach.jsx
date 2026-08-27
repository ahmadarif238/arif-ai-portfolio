import React from 'react';
import { motion } from 'framer-motion';

const coreStack = ['LangGraph / LangChain', 'FastAPI / Python', 'Pinecone / pgvector', 'Groq / Cerebras'];
const focusAreas = ['Multi-Agent Orchestration', 'Retrieval Grounding', 'Workflow Automation', 'Latency Engineering'];

const Approach = () => {
    return (
        <section id="approach" className="relative w-full overflow-hidden border-y border-border bg-surface">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />

            <div className="shell section-y relative z-10">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
                    {/* Portrait plate */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        className="relative lg:col-span-5"
                    >
                        <div className="relative z-10 aspect-square overflow-hidden border border-border bg-elev-2 p-2">
                            <img
                                src="/profile.jpg"
                                alt="Arif Ahmad Khan"
                                className="h-full w-full object-cover object-top opacity-85 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                            />
                        </div>

                        {/* Structural accents */}
                        <div className="absolute -bottom-8 -left-8 z-0 h-48 w-48 rounded-full bg-primary/20 blur-[55px]" />
                        <div className="absolute -right-4 -top-4 z-20 h-24 w-24 border border-primary/40" />
                        <div className="absolute -right-8 -top-8 z-0 h-24 w-24 border border-white/10" />
                    </motion.div>

                    {/* Manifesto */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-8 lg:col-span-6 lg:col-start-7"
                    >
                        <span className="eyebrow block">The Approach</span>

                        <h2 className="headline text-[36px] leading-[1.1] lg:text-[54px]">
                            An agent is only useful <br className="hidden lg:block" /> when it can be trusted.
                        </h2>

                        <div className="space-y-6 text-[17px] leading-[1.7] text-secondary lg:text-[19px]">
                            <p>
                                I&apos;m an AI Engineer working at the intersection of applied LLM research and
                                hard backend engineering. I build multi-agent systems on LangGraph, ground them
                                in vector retrieval, and wrap them in FastAPI services that hold up under real
                                operational load.
                            </p>
                            <p>
                                My philosophy is grounding over cleverness: strip the system to the agents that
                                genuinely earn their place, then make every claim traceable to a source. A model
                                that guesses confidently is a liability — one that cites its evidence is a
                                product.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2">
                            <div>
                                <h4 className="mb-4 font-display text-[20px] font-semibold uppercase text-bright">
                                    Core Stack
                                </h4>
                                <ul className="space-y-2 font-mono text-[13px] text-muted">
                                    {coreStack.map((item) => (
                                        <li key={item}>
                                            <span className="mr-2 text-primary">&gt;</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 font-display text-[20px] font-semibold uppercase text-bright">
                                    Focus Areas
                                </h4>
                                <ul className="space-y-2 font-mono text-[13px] text-muted">
                                    {focusAreas.map((item) => (
                                        <li key={item}>
                                            <span className="mr-2 text-primary">&gt;</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Approach;

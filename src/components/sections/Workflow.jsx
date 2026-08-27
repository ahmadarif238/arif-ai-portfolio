import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { process } from '../../data/services';

/**
 * Zig-zag process timeline: a centre spine on desktop with numbered nodes,
 * cards alternating left and right. Collapses to a single stack on mobile.
 */
const Workflow = () => {
    return (
        <section className="relative w-full overflow-hidden border-y border-border bg-surface">
            <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/[0.07] blur-[110px]" />

            <div className="shell section-y relative z-10">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
                    {/* Sticky intro */}
                    <div className="space-y-7 lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                        <span className="eyebrow block">Methodology</span>
                        <h2 className="headline text-[40px] leading-none lg:text-[56px]">
                            How I <br /> Build
                        </h2>
                        <p className="text-[17px] leading-relaxed text-muted">
                            A systematic path from operational problem to deployed agent. Rigorous
                            planning up front is what keeps agentic systems from becoming
                            unmaintainable demos.
                        </p>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 border border-white/25 px-7 py-4 font-display text-[14px] font-semibold uppercase tracking-[0.14em] text-bright transition-all hover:border-bright hover:bg-bright hover:text-background"
                        >
                            Start a Project
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Timeline */}
                    <div className="relative lg:col-span-7 lg:col-start-6">
                        <div className="absolute bottom-0 left-[19px] top-0 w-px bg-border md:left-[23px]" />

                        <div className="space-y-10">
                            {process.map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, x: 24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="relative flex gap-6 md:gap-8"
                                >
                                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background font-display text-[15px] font-semibold text-primary md:h-12 md:w-12 md:text-[17px]">
                                        {item.step}
                                    </span>

                                    <div className="flex-1 border border-border bg-elev-1 p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-elev-2 lg:p-8">
                                        <h3 className="headline mb-3 text-[20px] lg:text-[24px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[15px] leading-relaxed text-muted">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;

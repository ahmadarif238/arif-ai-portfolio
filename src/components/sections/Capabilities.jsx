import React from 'react';
import { motion } from 'framer-motion';
import { Check, Bot, Globe, Smartphone, MessageSquare, PhoneCall, Puzzle } from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
    agents: Bot,
    web: Globe,
    app: Smartphone,
    chat: MessageSquare,
    call: PhoneCall,
    integration: Puzzle,
};

const Capabilities = ({ withHeading = true }) => {
    return (
        <section className="shell section-y">
            {withHeading && (
                <div className="mb-16 max-w-3xl space-y-6">
                    <span className="eyebrow block">What I Do</span>
                    <h2 className="headline text-[44px] leading-none lg:text-[68px]">
                        What I <span className="text-primary">Build</span>
                    </h2>
                    <p className="text-[18px] leading-relaxed text-muted">
                        From websites and apps to the AI that runs inside them, everything I build
                        aims at the same thing. Fewer manual hours, faster answers, and better
                        outcomes for the people using it.
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
                {services.map((service, i) => {
                    const Icon = iconMap[service.icon];
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col bg-elev-1 p-8 transition-colors duration-300 hover:bg-elev-2 lg:p-10"
                        >
                            <div className="mb-8 flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary">
                                <Icon className="h-5 w-5" />
                            </div>

                            <h3 className="headline mb-4 text-[24px] lg:text-[28px]">{service.title}</h3>

                            <p className="mb-8 flex-1 text-[15px] leading-relaxed text-muted">
                                {service.description}
                            </p>

                            <ul className="space-y-3 border-t border-border pt-6">
                                {service.deliverables.map((d) => (
                                    <li key={d} className="flex items-center gap-3 text-[14px] text-secondary">
                                        <Check className="h-4 w-4 shrink-0 text-primary" />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Capabilities;

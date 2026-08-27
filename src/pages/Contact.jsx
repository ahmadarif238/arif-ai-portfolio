import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
    Mail,
    Github,
    Linkedin,
    MessageCircle,
    ArrowRight,
    CheckCircle,
    AlertCircle,
} from 'lucide-react';

const channels = [
    {
        label: 'Email',
        value: 'ahmadarif238@gmail.com',
        href: 'mailto:ahmadarif238@gmail.com',
        icon: Mail,
    },
    {
        label: 'WhatsApp',
        value: '+92 343 8992587',
        href: 'https://wa.me/923438992587',
        icon: MessageCircle,
    },
    {
        label: 'GitHub',
        value: 'github.com/ahmadarif238',
        href: 'https://github.com/ahmadarif238',
        icon: Github,
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/arif-a-0b853580',
        href: 'https://www.linkedin.com/in/arif-a-0b853580',
        icon: Linkedin,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    title: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <div className="min-h-screen">
            <section className="shell pb-16 pt-24 lg:pb-24 lg:pt-32">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
                    {/* Left: pitch + channels */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10 lg:col-span-5"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-12 bg-primary" />
                                <span className="eyebrow">Inquiries</span>
                            </div>

                            <h1 className="display text-[46px] leading-none lg:text-[76px]">
                                Let&apos;s work <br />
                                <span className="text-outline">together.</span>
                            </h1>

                            <p className="max-w-md text-[17px] leading-[1.75] text-muted lg:text-[19px]">
Need a website, an app, or AI that takes work off your team? Tell me what
                                you&apos;re trying to solve and I&apos;ll come back with a clear plan and
                                an honest timeline.
                            </p>
                        </div>

                        <div className="space-y-px border border-border bg-border">
                            {channels.map(({ label, value, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-5 bg-elev-1 p-5 transition-colors duration-300 hover:bg-elev-2"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary">
                                        <Icon className="h-[18px] w-[18px]" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                                            {label}
                                        </span>
                                        <span className="block truncate font-sans text-[16px] text-bright transition-colors group-hover:text-primary">
                                            {value}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: form panel with bracket accents */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative lg:col-span-6 lg:col-start-7"
                    >
                        <span className="absolute -right-3 -top-3 hidden h-16 w-16 border-r border-t border-primary/50 lg:block" />
                        <span className="absolute -bottom-3 -left-3 hidden h-16 w-16 border-b border-l border-primary/50 lg:block" />

                        <form
                            onSubmit={handleSubmit}
                            className="relative space-y-9 border border-border bg-elev-1 p-8 lg:p-12"
                        >
                            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                                <div>
                                    <label className="field-label" htmlFor="name">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="field"
                                    />
                                </div>
                                <div>
                                    <label className="field-label" htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@company.com"
                                        className="field"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="field-label" htmlFor="subject">What you need</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Website, app, chatbot, automation..."
                                    className="field"
                                />
                            </div>

                            <div>
                                <label className="field-label" htmlFor="message">Project details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me what you're building and what's currently blocking it."
                                    className="field min-h-[140px] resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="group inline-flex items-center gap-3 bg-primary px-9 py-4 font-display text-[15px] font-bold uppercase tracking-[0.12em] text-on-primary transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_26px_rgba(25,206,103,0.32)] disabled:pointer-events-none disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>

                            {status === 'success' && (
                                <p className="flex items-center gap-2 text-[14px] text-primary">
                                    <CheckCircle className="h-4 w-4" />
                                    Message sent. I&apos;ll get back to you shortly.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="flex items-center gap-2 text-[14px] text-[#FFB4AB]">
                                    <AlertCircle className="h-4 w-4" />
                                    Couldn&apos;t send. Please email me directly at ahmadarif238@gmail.com.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

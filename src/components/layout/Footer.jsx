import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const socials = [
    { name: 'GitHub', href: 'https://github.com/ahmadarif238', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arif-a-0b853580', icon: Linkedin },
    { name: 'Email', href: 'mailto:ahmadarif238@gmail.com', icon: Mail },
    { name: 'WhatsApp', href: 'https://wa.me/923438992587', icon: MessageCircle },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-lowest">
            {/* Closing CTA */}
            <div className="shell py-16 lg:py-[120px]">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="headline text-[40px] lg:text-[60px]">
                            Have a project in mind?
                        </h2>
                        <p className="max-w-xl text-[17px] leading-relaxed text-muted">
Tell me what you&apos;re trying to build or automate, and I&apos;ll show you the
                            fastest sensible way to get there.
                        </p>
                    </div>
                    <div className="flex lg:justify-end">
                        <Link
                            to="/contact"
                            className="inline-block bg-primary px-12 py-6 font-display text-[24px] font-bold uppercase tracking-[0.06em] text-on-primary transition-transform duration-300 hover:scale-105"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>

                {/* Sitemap + legal */}
                <div className="mt-20 grid grid-cols-2 gap-10 border-t border-border pt-12 md:grid-cols-4">
                    <div>
                        <h4 className="eyebrow-muted mb-5">Explore</h4>
                        <ul className="space-y-3 text-[15px] text-secondary">
                            <li><Link to="/projects" className="transition-colors hover:text-primary">Case Studies</Link></li>
                            <li><Link to="/skills" className="transition-colors hover:text-primary">Capabilities</Link></li>
                            <li><Link to="/blog" className="transition-colors hover:text-primary">Journal</Link></li>
                            <li><Link to="/about" className="transition-colors hover:text-primary">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="eyebrow-muted mb-5">Direct</h4>
                        <ul className="space-y-3 text-[15px] text-secondary">
                            <li>
                                <a href="mailto:ahmadarif238@gmail.com" className="transition-colors hover:text-primary">
                                    ahmadarif238@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/923438992587" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                                    +92 343 8992587
                                </a>
                            </li>
                            <li>
                                <a href="/resume.pdf" download className="transition-colors hover:text-primary">
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-2 md:justify-self-end md:text-right">
                        <h4 className="eyebrow-muted mb-5">Status</h4>
                        <div className="flex items-center gap-3 md:justify-end">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            <span className="font-sans text-[15px] text-foreground">
                                Available for new work
                            </span>
                        </div>
                        <div className="mt-6 flex gap-4 md:justify-end">
                            {socials.map(({ name, href, icon: Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    title={name}
                                    className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-all hover:border-primary hover:text-primary"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
                    <span className="font-display text-[18px] font-bold uppercase tracking-[0.1em] text-primary">
                        Arif <span className="text-bright">Ahmad Khan</span>
                    </span>
                    <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-muted">
                        &copy; {currentYear} Arif Ahmad Khan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

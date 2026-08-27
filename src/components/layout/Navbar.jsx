import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, FileDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/skills' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Journal', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
                <div className="shell flex h-20 items-center justify-between">
                    <Link
                        to="/"
                        className="font-display text-[20px] font-bold uppercase tracking-[0.1em] text-primary transition-opacity hover:opacity-75 lg:text-[22px]"
                    >
                        Arif <span className="text-bright">Ahmad Khan</span>
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-7 xl:flex">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={cn(
                                        'font-sans text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors',
                                        isActive ? 'text-primary' : 'text-muted hover:text-bright'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/ahmadarif238"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden text-muted transition-colors hover:text-primary sm:block"
                            title="GitHub"
                        >
                            <Github className="h-[18px] w-[18px]" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="hidden text-muted transition-colors hover:text-primary sm:block"
                            title="Download Resume"
                        >
                            <FileDown className="h-[18px] w-[18px]" />
                        </a>
                        <Link
                            to="/contact"
                            className="hidden border border-white/25 px-6 py-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-bright transition-all hover:border-bright hover:bg-bright hover:text-background xl:block"
                        >
                            Let&apos;s Talk
                        </Link>
                        <img
                            src="/profile.jpg"
                            alt="Arif Ahmad Khan"
                            className="hidden h-9 w-9 rounded-full border border-border object-cover object-top sm:block"
                        />

                        <button
                            className="p-1 text-bright xl:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Scroll progress */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-primary"
                    style={{ scaleX }}
                />
            </header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 pt-20 xl:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            'font-display text-[40px] font-bold uppercase leading-none transition-colors',
                                            location.pathname === link.path
                                                ? 'text-primary'
                                                : 'text-bright hover:text-primary'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-14 flex items-center gap-7 border-t border-border pt-8">
                            <a
                                href="https://github.com/ahmadarif238"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-primary"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/arif-a-0b853580"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-primary"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="/resume.pdf" download className="text-muted hover:text-primary">
                                <FileDown className="h-6 w-6" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

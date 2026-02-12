import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Scroll Progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "glass h-16" : "h-20 bg-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold backdrop-blur-md">AK</div>
                        Arif Ahmad Khan
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-white/10 rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            );
                        })}
                        <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-white/10">
                            <a href="https://github.com/ahmadarif238" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" title="GitHub">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="/resume.pdf" download className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full" title="Download Resume">
                                <FileDown className="w-5 h-5" />
                            </a>
                            <Button size="sm" className="rounded-full px-6 bg-white text-black hover:bg-gray-200 font-bold ml-2" asChild>
                                <Link to="/contact">Hire Me</Link>
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Scroll Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-purple-500 origin-left"
                    style={{ scaleX }}
                />
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col items-center justify-center text-center"
                    >
                        {/* Close button handled by Navbar container */}

                        <div className="flex flex-col space-y-8 w-full max-w-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={cn(
                                        "text-4xl font-bold font-display tracking-tight transition-colors hover:scale-105 transform duration-200",
                                        location.pathname === link.path ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400" : "text-white hover:text-purple-300"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-center space-x-8 pt-12 border-t border-white/10 w-full">
                                <a href="https://github.com/ahmadarif238" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                                    <Github className="w-8 h-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/arif-a-0b853580" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                                    <Linkedin className="w-8 h-8" />
                                </a>
                                <a href="/resume.pdf" download className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                                    <FileDown className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

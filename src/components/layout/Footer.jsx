import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#05080F] pt-20 pb-10 overflow-hidden">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2 space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">AK</div>
                            Arif Ahmad Khan
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Building intelligent agentic systems and scalable AI architectures. Let's create something extraordinary together.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400">Open to new opportunities</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link to="/projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Case Studies</Link></li>
                            <li><Link to="/skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Expertise</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">Technical Blog</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Me</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="https://github.com/ahmadarif238" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/arif-a-0b853580" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:ahmadarif238@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg" asChild>
                            <Link to="/contact">
                                Start a Project <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} Arif Ahmad Khan.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        Designed with <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-1" /> and React.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

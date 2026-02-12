import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0B0F19]">
            <div className="container mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Copy & Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Let's Build the Future
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-4 pt-4">
                            <a href="mailto:ahmadarif238@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#1F2937] border border-gray-800 hover:border-indigo-500 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Email Me</h3>
                                    <p className="text-gray-400">ahmadarif238@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://github.com/ahmadarif238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#1F2937] border border-gray-800 hover:border-indigo-500 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">GitHub</h3>
                                    <p className="text-gray-400">github.com/ahmadarif238</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/arif-a-0b853580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#1F2937] border border-gray-800 hover:border-indigo-500 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">LinkedIn</h3>
                                    <p className="text-gray-400">linkedin.com/in/arif-a-0b853580</p>
                                </div>
                            </a>

                            <a href="https://wa.me/923438992587" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#1F2937] border border-gray-800 hover:border-green-500 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">WhatsApp</h3>
                                    <p className="text-gray-400">+92 343 8992587</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-[#1F2937] border border-gray-800 shadow-xl">
                            <CardContent className="p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors min-h-[150px]"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full h-12 text-base font-bold shadow-lg shadow-indigo-500/20"
                                    >
                                        {status === 'sending' ? (
                                            <>Sending...</>
                                        ) : status === 'success' ? (
                                            <><CheckCircle className="mr-2 w-4 h-4" /> Email Client Opened!</>
                                        ) : (
                                            <>Send Message <Send className="ml-2 w-4 h-4" /></>
                                        )}
                                    </Button>

                                    {status === 'success' && (
                                        <p className="text-sm text-green-400 text-center flex items-center justify-center gap-2">
                                            <CheckCircle className="w-4 h-4" />
                                            Message sent successfully! I'll get back to you soon.
                                        </p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-sm text-red-400 text-center flex items-center justify-center gap-2">
                                            <AlertCircle className="w-4 h-4" />
                                            Failed to send message. Please try again or email me directly.
                                        </p>
                                    )}
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Contact;

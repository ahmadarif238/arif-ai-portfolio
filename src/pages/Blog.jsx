import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const Blog = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-16"
                >
                    <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400">Insights</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white font-display">
                        Technical <span className="text-gradient-primary">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed font-sans font-light">
                        Deep dives into multi-agent architectures, production challenges, and lessons learned from building real-world AI systems.
                    </p>
                </motion.div>

                <div className="grid gap-8 max-w-4xl">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <Card className="bg-[#1F2937] border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl hover:shadow-indigo-900/10">
                                    <CardContent className="p-8">
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="bg-[#111827] border border-gray-700 text-gray-300 text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <span className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

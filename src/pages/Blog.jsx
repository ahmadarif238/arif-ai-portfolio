import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const Blog = () => {
    return (
        <div className="min-h-screen">
            {/* Head */}
            <section className="shell pb-14 pt-24 lg:pb-20 lg:pt-32">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-5 lg:col-span-7"
                    >
                        <span className="eyebrow block">Insights</span>
                        <h1 className="display text-[48px] leading-none lg:text-[80px]">
                            Field <br /> Notes
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[17px] leading-[1.7] text-muted lg:col-span-4 lg:col-start-9 lg:pt-4"
                    >
                        Deep dives into multi-agent architectures, retrieval grounding, and the
                        production failures that taught me more than the successes did.
                    </motion.p>
                </div>
            </section>

            {/* Post list — editorial rows */}
            <section className="shell pb-20 lg:pb-28">
                <div className="border-t border-border">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                            className="border-b border-border"
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="group grid grid-cols-1 gap-6 py-10 transition-colors duration-300 lg:grid-cols-12 lg:gap-8 lg:py-12"
                            >
                                <div className="flex flex-wrap items-center gap-5 lg:col-span-3">
                                    <span className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.14em] text-muted">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </span>
                                    <span className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.14em] text-muted">
                                        <Clock className="h-3.5 w-3.5" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <div className="space-y-4 lg:col-span-8">
                                    <h2 className="headline text-[26px] leading-tight transition-colors duration-300 group-hover:text-primary lg:text-[34px]">
                                        {post.title}
                                    </h2>
                                    <p className="max-w-2xl text-[16px] leading-relaxed text-muted">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="chip">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-1 lg:flex lg:justify-end">
                                    <span className="inline-flex h-11 w-11 items-center justify-center border border-border text-muted transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;

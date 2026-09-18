import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const Blog = () => {
    return (
        <section className="relative py-20">
            {/* Ambient glow, matching the home sections */}
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0ea5ea]/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
                            <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
                            <span>Insights</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Field <span className="color-linear">Notes</span>
                        </h1>
                    </div>

                    <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
                        Practical write-ups on building with AI, automating real workflows, and the
                        lessons that only show up once something is running in production.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-7 rounded-2xl flex flex-col group"
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-4 text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-[#0bd1d1]" />
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-[#0bd1d1]" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0bd1d1] transition-colors leading-snug">
                                {post.title}
                            </h2>

                            <p className="mt-3 text-sm text-[#94a9c9] leading-relaxed flex-1">
                                {post.excerpt}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="tag-badge">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 pt-4 border-t border-[#222f43] flex items-center gap-1.5 text-xs font-bold color-linear">
                                <span>Read article</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#0bd1d1] group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;

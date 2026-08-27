import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="text-center">
                    <h2 className="headline mb-6 text-[28px]">Post not found</h2>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-display text-[14px] font-bold uppercase tracking-[0.12em] text-on-primary"
                    >
                        Back to Journal
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <article className="shell pb-20 pt-24 lg:pt-32">
                <Link
                    to="/blog"
                    className="mb-12 inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-primary"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All Posts
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl border-b border-border pb-12"
                >
                    <div className="mb-6 flex flex-wrap items-center gap-6">
                        <span className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.16em] text-muted">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                        <span className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.16em] text-muted">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="display text-[36px] leading-[1.1] lg:text-[58px]">{post.title}</h1>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="chip">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.header>

                {/* Body */}
                <div className="mt-14 max-w-3xl">
                    {post.content.map((block, index) => {
                        switch (block.type) {
                            case 'heading':
                                return (
                                    <h2
                                        key={index}
                                        className="headline mb-5 mt-14 text-[24px] first:mt-0 lg:text-[30px]"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            case 'paragraph':
                                return (
                                    <p
                                        key={index}
                                        className="mb-6 text-[17px] leading-[1.8] text-secondary lg:text-[19px]"
                                    >
                                        {block.text}
                                    </p>
                                );
                            case 'list':
                                return (
                                    <ul key={index} className="mb-8 space-y-4 border-l border-border pl-6">
                                        {block.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-4 text-[17px] leading-[1.7] text-secondary"
                                            >
                                                <span className="mt-[11px] h-1 w-1 shrink-0 bg-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            default:
                                return null;
                        }
                    })}

                    {post.relatedProject && (
                        <div className="mt-16 border border-border bg-elev-1 p-8">
                            <span className="eyebrow mb-3 block">Related Case Study</span>
                            <Link
                                to={`/projects/${post.relatedProject}`}
                                className="group inline-flex items-center gap-3 font-display text-[22px] font-semibold uppercase text-bright transition-colors hover:text-primary"
                            >
                                View the full breakdown
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    )}

                    <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-primary"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            All Posts
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-[14px] font-bold uppercase tracking-[0.12em] text-on-primary transition-all hover:bg-primary-bright"
                        >
                            Let&apos;s Talk
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;

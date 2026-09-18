import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h1 className="text-2xl font-bold text-white">Post not found</h1>
                    <Link to="/blog" className="btn-linear">
                        <span>Back to Journal</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative py-20">
            <div className="absolute top-10 right-10 w-96 h-96 bg-[#0bd1d1]/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#94a9c9] hover:text-[#0bd1d1] transition-colors mb-8"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>All Posts</span>
                </Link>

                <article className="card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-10 rounded-3xl">
                    <div className="flex flex-wrap items-center gap-5 text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#0bd1d1]" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#0bd1d1]" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                        {post.title}
                    </h1>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span key={tag} className="tag-badge">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 article-body">
                        {post.content.map((block, index) => {
                            switch (block.type) {
                                case 'heading':
                                    return (
                                        <h2
                                            key={index}
                                            className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 first:mt-0"
                                        >
                                            {block.text}
                                        </h2>
                                    );
                                case 'paragraph':
                                    return (
                                        <p key={index} className="text-[15px] sm:text-base text-[#94a9c9]">
                                            {block.text}
                                        </p>
                                    );
                                case 'list':
                                    return (
                                        <ul key={index} className="mb-6 space-y-3 pl-1">
                                            {block.items.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-3 text-[15px] sm:text-base text-[#94a9c9] leading-relaxed"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0bd1d1]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>

                    <div className="mt-10 pt-6 border-t border-[#222f43] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-xs font-bold text-[#94a9c9] hover:text-[#0bd1d1] transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>All Posts</span>
                        </Link>

                        <a href="/#contact" className="btn-linear">
                            <span>Start a Project</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default BlogPost;

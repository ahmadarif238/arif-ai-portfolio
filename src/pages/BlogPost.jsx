import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { blogPosts } from '../data/blogs';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Post not found</h2>
                    <Button asChild>
                        <Link to="/blog">Back to Blog</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-[#0B0F19]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <Button variant="ghost" asChild className="mb-8 hover:bg-white/10 text-gray-300">
                        <Link to="/blog"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog</Link>
                    </Button>

                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white leading-tight">
                            {post.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-12">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="bg-indigo-900/30 border border-indigo-500/30 text-indigo-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            {post.content.map((block, index) => {
                                switch (block.type) {
                                    case 'heading':
                                        return (
                                            <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-4">
                                                {block.text}
                                            </h2>
                                        );
                                    case 'paragraph':
                                        return (
                                            <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                                                {block.text}
                                            </p>
                                        );
                                    case 'list':
                                        return (
                                            <ul key={index} className="space-y-3 mb-6 ml-4">
                                                {block.items.map((item, i) => (
                                                    <li key={i} className="text-gray-300 leading-relaxed text-lg flex items-start gap-3">
                                                        <span className="w-2 h-2 rounded-full bg-indigo-500 mt-3 shrink-0" />
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

                        {/* Related Project */}
                        {post.relatedProject && (
                            <div className="mt-16 p-6 rounded-xl bg-[#1F2937] border border-gray-800">
                                <p className="text-sm text-gray-400 mb-2">Related Project</p>
                                <Link to={`/projects/${post.relatedProject}`} className="text-indigo-400 font-bold text-lg hover:text-indigo-300 transition-colors">
                                    View the full case study →
                                </Link>
                            </div>
                        )}

                        {/* Bottom Nav */}
                        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between">
                            <Button variant="ghost" asChild className="text-gray-300 hover:bg-white/10">
                                <Link to="/blog">← All Posts</Link>
                            </Button>
                            <Button asChild className="rounded-full px-6">
                                <Link to="/contact">Let's Talk</Link>
                            </Button>
                        </div>
                    </motion.article>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;

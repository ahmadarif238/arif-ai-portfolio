import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogs';
import { Button, Eyebrow, Reveal, SplitTitle } from '../site/ui/primitives';
import { BlogCard, formatDate } from '../site/sections/BlogTeaser';
import { coverUrl } from '../site/data/covers';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <main>
                <section data-stage="ribbons" className="container-grid flex min-h-[80vh] flex-col items-start justify-center gap-8 pb-40 pt-44">
                    <h1 className="heading text-[length:var(--text-fluid-xl)]">Post not found</h1>
                    <Button variant="pink" to="/blog">Back to journal</Button>
                </section>
            </main>
        );
    }

    const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

    return (
        <main>
            <section data-stage="ribbons" className="container-grid pb-[calc(var(--radius-xl)+4rem)] pt-40">
                <Button variant="ghost" small to="/blog" icon={<ArrowLeft className="h-4 w-4" />}>
                    All posts
                </Button>
                <p className="text-label-sm mt-12 flex flex-wrap gap-x-4 gap-y-2 text-white/70">
                    <span className="text-white">{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                    {post.tags.map((t) => (
                        <span key={t} className="text-pink-300">{t}</span>
                    ))}
                </p>
                <SplitTitle as="h1" text={post.title} stagger={0.03} className="heading mt-6 max-w-[18ch] text-[length:var(--text-fluid-lg)]" />
            </section>

            <section className="sheet -mt-[var(--radius-xl)]">
                <div className="container-grid pb-20 pt-10">
                    <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-lg)] bg-charcoal">
                        <img src={coverUrl(`blog-${post.slug}`)} alt="" className="aspect-[16/7] w-full object-cover" />
                    </Reveal>
                    <article className="prose-sheet mx-auto mt-14 max-w-[42rem]">
                        <p className="!text-[length:var(--text-fluid-2xs)] !leading-[1.5] !text-navy-900">{post.excerpt}</p>
                        {post.content.map((block, i) => {
                            if (block.type === 'heading') return <h2 key={i}>{block.text}</h2>;
                            if (block.type === 'paragraph') return <p key={i} className="mt-4">{block.text}</p>;
                            if (block.type === 'list')
                                return (
                                    <ul key={i} className="mt-4">
                                        {block.items.map((it, j) => <li key={j}>{it}</li>)}
                                    </ul>
                                );
                            if (block.type === 'code') return <pre key={i} className="mt-5"><code>{block.text}</code></pre>;
                            if (block.type === 'quote') return <blockquote key={i} className="mt-6">{block.text}</blockquote>;
                            return null;
                        })}
                        <div className="mt-14 flex flex-col items-start gap-5 rounded-[var(--radius-lg)] bg-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                            <p className="text-[19px] tracking-[-0.02em] text-navy-900">Want something like this built for you?</p>
                            <Button variant="pink" to="/#contact">Start a project</Button>
                        </div>
                    </article>
                </div>
                <div className="container-grid pb-[calc(var(--radius-xl)+5rem)]">
                    <Eyebrow className="text-navy-900">Keep reading</Eyebrow>
                    <div className="mt-8 grid gap-3 md:grid-cols-3">
                        {more.map((p, i) => <BlogCard key={p.slug} post={p} i={i} />)}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPost;

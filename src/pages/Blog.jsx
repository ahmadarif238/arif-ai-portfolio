import { blogPosts } from '../data/blogs';
import { Eyebrow, SplitTitle, Reveal } from '../site/ui/primitives';
import { BlogCard } from '../site/sections/BlogTeaser';

/** Journal index: a short dark hero over the ribbons, then the posts on a sheet. */
const Blog = () => (
    <main>
        <section data-stage="ribbons" className="container-grid pb-[calc(var(--radius-xl)+4rem)] pt-44">
            <Eyebrow>Journal</Eyebrow>
            <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
                <SplitTitle as="h1" text={'Field *notes*'} className="heading text-[length:var(--text-fluid-2xl)] md:col-span-7" />
                <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
                    <p className="text-[length:var(--text-fluid-2xs)] leading-[1.45] text-white/70">
                        Practical write-ups on building with AI, automating real workflows, and the lessons that only show up once
                        something is running in production.
                    </p>
                </Reveal>
            </div>
        </section>
        <section className="sheet -mt-[var(--radius-xl)]">
            <div className="container-grid grid gap-3 pb-[calc(var(--radius-xl)+6rem)] pt-16 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post, i) => (
                    <BlogCard key={post.slug} post={post} i={i % 3} />
                ))}
            </div>
        </section>
    </main>
);

export default Blog;

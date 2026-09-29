import { Link } from 'react-router-dom';
import { Button, Reveal } from '../ui/primitives';
import { blogPosts } from '../../data/blogs';
import { coverUrl } from '../data/covers';

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export function BlogCard({ post, i = 0 }: { post: (typeof blogPosts)[number]; i?: number }) {
  return (
    <Reveal delay={i * 0.07} className="h-full">
      <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] bg-white">
        <div className="aspect-[16/9] overflow-hidden bg-charcoal">
          <img
            src={coverUrl(`blog-${post.slug}`)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-[1.06]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-label-sm flex flex-wrap gap-x-3 gap-y-1 text-navy-500">
            <span className="text-navy-900">{formatDate(post.date)}</span>
            {post.tags.slice(0, 2).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
          <h3 className="mt-4 text-[length:var(--text-fluid-2xs)] leading-[1.3] tracking-[-0.02em] text-navy-900 transition-colors group-hover:text-pink-600">{post.title}</h3>
          <p className="mt-auto pt-4 text-[14px] text-navy-500">{post.readTime}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export function BlogTeaser() {
  return (
    <div className="container-grid pb-[clamp(5rem,4rem+4vw,9rem)]">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-[length:var(--text-fluid-md)] tracking-[-0.03em] text-navy-900">Latest from the blog</h2>
        <Button variant="slate" to="/blog">
          See all
        </Button>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((p, i) => (
          <BlogCard key={p.slug} post={p} i={i} />
        ))}
      </div>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';

export function BlogShowcase() {
  const [featured, ...others] = blogPosts;

  return (
    <section className="section-shell">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Travel Tips & Stories</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Dive into high-intent guides for Georgia private tours, custom Caucasus itineraries, Tbilisi day trips, and more.
            Every story links to landing pages, AI chat, and WhatsApp.
          </p>
        </div>
        <Link href="/blog" className="text-sm font-semibold text-sand-600 hover:text-sand-500">
          Visit the blog →
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="md:col-span-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-glass">
            <div className="relative h-72 w-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-sand-600">{featured.category}</span>
              <h3 className="text-2xl font-semibold text-slate-900">{featured.title}</h3>
              <p className="text-sm text-slate-600">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
                <span>{featured.readTime}</span>
                <span>•</span>
                <Link href={`/blog/${featured.slug}`} className="text-sand-600">
                  Read story →
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="grid gap-6">
          {others.map((post) => (
            <article key={post.slug} className="flex gap-4 rounded-3xl bg-white p-4 shadow-glass">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-sand-600">{post.category}</span>
                <h3 className="text-base font-semibold text-slate-900">{post.title}</h3>
                <p className="text-xs text-slate-600">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-sand-600">
                  <span>{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`}>Read →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

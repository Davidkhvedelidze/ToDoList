import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Blog | [Company Name] Travel Stories'
};

export default function BlogPage() {
  return (
    <div className="section-shell space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sand-600">Travel Tips</p>
        <h1 className="text-4xl font-semibold text-slate-900">Georgia Insights, Crafted Monthly</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          A 3-month editorial plan featuring private tours, custom Caucasus itineraries, Tbilisi day trips, and more. Each
          article links to AI chat, landing pages, and WhatsApp conversions.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl bg-white shadow-glass">
            <div className="relative h-56 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3 p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-sand-600">{post.category}</span>
              <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
              <p className="text-sm text-slate-600">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
                <span>{post.readTime}</span>
                <span>•</span>
                <Link href={`/blog/${post.slug}`} className="text-sand-600">
                  Read Story →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

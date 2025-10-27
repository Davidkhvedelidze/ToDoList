import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return {
      title: 'Blog Post Not Found | [Company Name]'
    };
  }

  return {
    title: `${post.title} | [Company Name]`
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <article className="space-y-12">
      <header className="section-shell space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-sand-600">{post.category}</span>
        <h1 className="text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="text-sm text-slate-600">{post.readTime}</p>
      </header>
      <div className="relative h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <section className="section-shell space-y-6 text-sm text-slate-700">
        <p>
          Use our AI assistant to personalize this topic into your own itinerary. Whether you’re planning a Georgia private tour
          or chasing Kakheti sunsets, we link every article to actionable next steps.
        </p>
        <p>
          Tap the floating chat icon to share your travel dates, group size, pace, interests, accommodation style, and budget.
          We respond with a summary including regions, vehicle type, hotel style, and price estimate.
        </p>
        <div className="rounded-3xl bg-sand-100 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Ready to plan?</h2>
          <p className="mt-2">
            <a href="#ai-chat" className="font-semibold text-sand-600">
              Launch the AI Travel Assistant
            </a>{' '}
            or email <a href="mailto:hello@company.ge" className="text-sand-600">hello@company.ge</a> to receive this itinerary in
            your inbox.
          </p>
        </div>
      </section>
    </article>
  );
}

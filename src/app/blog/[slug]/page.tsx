import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
}

const posts: Record<string, Post> = {
  "hello-world": {
    slug: "hello-world",
    title: "Hello, World",
    date: "2025-03-25",
    tags: ["meta", "intro"],
    content: `Welcome to my corner of the internet.

I built this site as a launchpad — a place to share what I'm working on, thinking about, and building toward. Expect posts on technology, autonomous systems, infrastructure, and the occasional deep dive into whatever rabbit hole I've fallen into.

The future is being assembled from code, silicon, and ambition. Let's see where it goes.

Stay tuned.`,
  },
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  return { title: post.title };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// blog/{post.slug}</div>
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-accent glow">{post.title}</span>
      </h1>
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs text-accent/40">{post.date}</span>
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs text-muted/50">#{tag}</span>
        ))}
      </div>
      <div className="prose prose-invert max-w-none">
        {post.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-muted leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <a href="/blog" className="text-accent/50 text-sm mt-8 inline-block hover:text-accent transition-colors">
        &lt;- back to blog
      </a>
    </article>
  );
}

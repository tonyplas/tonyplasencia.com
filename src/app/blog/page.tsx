import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
};

const selectedSlugs = [
  "agency",
  "conviction-and-adaptation",
  "fueling-the-agent-engine",
  "thoughts-on-agents-jtbd-trading",
];

export default function Blog() {
  const posts = getAllPosts().filter((post) => selectedSlugs.includes(post.slug));

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// writing</div>
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-accent glow">Selected Writing</span>
      </h1>
      <p className="text-muted text-sm mb-8">
        Essays on agency, technology, markets, leadership, and building.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-surface-border p-6 bg-surface/30 hover:border-accent/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-muted font-mono">{post.date}</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted">#{tag}</span>
                ))}
              </div>
            </div>
            <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-body mt-2">{post.excerpt}</p>
            <div className="text-xs text-accent/30 mt-3">&gt; read_more_</div>
          </Link>
        ))}
      </div>

      <p className="text-xs text-muted/50 mt-8">
        Older academic writing remains available by direct link but is intentionally not part of this selected index.
      </p>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// blog</div>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-accent glow">Blog</span>
      </h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-surface-border p-6 bg-surface/30 hover:border-accent/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-accent/40 font-mono">{post.date}</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted/50">#{tag}</span>
                ))}
              </div>
            </div>
            <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-muted mt-2">{post.excerpt}</p>
            <div className="text-xs text-accent/30 mt-3">&gt; read_more_</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

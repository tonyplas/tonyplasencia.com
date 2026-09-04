import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Thinking",
  description: "Essays by Tony Plasencia on agency, artificial intelligence, markets, and building.",
  alternates: { canonical: "/blog" },
};

const selectedSlugs = [
  "globalization-without-geography",
  "the-agency-layer",
  "agency",
  "conviction-and-adaptation",
  "fueling-the-agent-engine",
  "thoughts-on-agents-jtbd-trading",
];

export default function Blog() {
  const posts = getAllPosts().filter((post) => selectedSlugs.includes(post.slug));

  return (
    <section className="writing-index max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="text-accent/40 text-xs tracking-[0.22em] uppercase mb-5">// thinking</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-5 tracking-[-0.05em]">
        <span className="text-foreground">Ideas about </span><span className="text-accent glow">agency.</span>
      </h1>
      <p className="text-body text-base md:text-lg max-w-2xl leading-relaxed mb-14">
        Essays on what happens when intelligence gets cheap, software learns to act, and the boundary between tools and economic actors begins to move.
      </p>

      <div className="space-y-px border-y border-surface-border">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`writing-card block py-8 md:py-10 transition-colors group ${index < 2 ? "featured" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
              <span className="text-xs text-accent/60 font-mono">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-xs text-muted font-mono">{post.date}</span>
              <span className="text-xs text-muted/60">{post.readingTime} min read</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted">#{tag}</span>
                ))}
              </div>
            </div>
            <h2 className={`${index < 2 ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"} font-bold tracking-[-0.035em] text-foreground group-hover:text-accent transition-colors`}>
              {post.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-body mt-3 max-w-2xl">{post.excerpt}</p>
            <div className="text-xs text-accent/40 mt-5 group-hover:text-accent transition-colors">read essay &rarr;</div>
          </Link>
        ))}
      </div>

      <p className="text-xs text-muted/50 mt-10">
        Older academic writing remains available by direct link but is intentionally not part of this selected index.
      </p>
    </section>
  );
}

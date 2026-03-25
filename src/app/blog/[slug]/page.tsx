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
  "fueling-the-agent-engine": {
    slug: "fueling-the-agent-engine",
    title: "Fueling the Agent Engine",
    date: "2026-03-25",
    tags: ["ai-agents", "crypto", "founder"],
    content: `I've spent the last decade chasing the same thread: how do you make powerful technology accessible to everyone?

It started at Uber in 2016. Six years in Silicon Valley taught me how growth works at scale — how to find leverage, how to build systems that compound, and how to move fast without breaking the things that matter.

Then I went down the crypto rabbit hole. I co-founded Underdog Protocol to make digital assets accessible via API. We scaled to $1M ARR, managed millions in digital assets, and proved that blockchain infrastructure could be developer-friendly. We raised our seed round from Oneblock Capital, eiV ventures, and Underdog Labs.

In 2024, I co-founded Griffain — an AI-powered super app for crypto built on Solana. The idea was simple: you should be able to search anything and do anything onchain in natural language. Personalize your agent, and let it work for you. The market validated the thesis — we hit a market cap north of $480M.

Now I'm at MoonPay, working on the next chapter: giving AI agents direct access to onchain capital markets. With one command — npm install -g @moonpay/cli — you can give anything you build access to prediction markets, virtual accounts, on/off ramps, cross-chain swaps, and more.

The pattern I keep seeing is this: the future belongs to autonomous agents that can operate in financial markets, execute complex strategies, and do it all without human babysitting. We're building the rails for that future.

The agent engine is warming up. Let's see where it goes.`,
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

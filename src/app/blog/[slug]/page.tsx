import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllPosts } from "@/lib/blog";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date, url: `/blog/${post.slug}` },
    twitter: { card: "summary", title: post.title, description: post.excerpt },
  };
}

function renderMarkdown(content: string) {
  const blocks: { type: string; text: string }[] = [];
  const lines = content.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // blank line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // heading
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (headingMatch) {
      blocks.push({ type: `h${headingMatch[1].length}`, text: headingMatch[2] });
      i++;
      continue;
    }

    if (line.trim() === "---") {
      blocks.push({ type: "hr", text: "" });
      i++;
      continue;
    }

    // blockquote
    if (line.startsWith(">")) {
      let quote = "";
      while (i < lines.length && (lines[i].startsWith(">") || (lines[i].trim() !== "" && quote))) {
        const qLine = lines[i].startsWith(">") ? lines[i].replace(/^>\s?/, "") : lines[i];
        quote += (quote ? " " : "") + qLine;
        i++;
        if (i < lines.length && lines[i].trim() === "") break;
      }
      blocks.push({ type: "blockquote", text: quote });
      continue;
    }

    // italic line (starts with *)
    if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      blocks.push({ type: "italic", text: line.slice(1, -1) });
      i++;
      continue;
    }

    // paragraph — collect consecutive non-blank, non-special lines
    let para = line;
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith(">")) {
      para += " " + lines[i];
      i++;
    }
    blocks.push({ type: "p", text: para });
  }

  return blocks;
}

function InlineText({ text }: { text: string }) {
  // handle **bold** and *italic*
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-foreground font-bold">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i} className="italic">{part.slice(1, -1)}</em>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blocks = renderMarkdown(post.content);

  return (
    <article className="essay-shell max-w-4xl mx-auto px-5 sm:px-8 py-14 md:py-24">
      <header className="essay-header border-b border-surface-border pb-10 md:pb-14 mb-10 md:mb-16">
        <div className="text-accent/40 text-xs tracking-[0.2em] uppercase mb-6">// thinking/{post.slug}</div>
        <h1 className="essay-title text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.06em] leading-[0.98] mb-6">
          {post.title}
        </h1>
        <p className="essay-dek text-lg md:text-xl leading-relaxed text-body max-w-2xl mb-8">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-xs text-muted">{post.date}</span>
        <span className="text-xs text-muted/60">{post.readingTime} min read</span>
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs text-muted">#{tag}</span>
        ))}
        </div>
      </header>
      <div className="essay-body">
        {blocks.map((block, i) => {
          if (block.type === "h2") {
            return <h2 key={i}>{block.text}</h2>;
          }
          if (block.type === "h3") {
            return <h3 key={i}>{block.text}</h3>;
          }
          if (block.type === "blockquote") {
            return (
              <blockquote key={i}>
                <InlineText text={block.text} />
              </blockquote>
            );
          }
          if (block.type === "hr") return <hr key={i} />;
          if (block.type === "italic") {
            return <p key={i} className="italic"><InlineText text={block.text} /></p>;
          }
          return <p key={i}><InlineText text={block.text} /></p>;
        })}
      </div>
      <a href="/blog" className="text-accent/50 text-sm mt-16 inline-block hover:text-accent transition-colors">
        &larr; all thinking
      </a>
    </article>
  );
}

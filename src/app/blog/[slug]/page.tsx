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
  return { title: post.title };
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
      <div className="space-y-4">
        {blocks.map((block, i) => {
          if (block.type === "h2") {
            return <h2 key={i} className="text-xl font-bold text-accent mt-8 mb-2">{block.text}</h2>;
          }
          if (block.type === "h3") {
            return <h3 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">{block.text}</h3>;
          }
          if (block.type === "blockquote") {
            return (
              <blockquote key={i} className="border-l-2 border-accent/30 pl-4 text-muted/70 italic my-4">
                <InlineText text={block.text} />
              </blockquote>
            );
          }
          if (block.type === "italic") {
            return <p key={i} className="text-muted leading-relaxed italic"><InlineText text={block.text} /></p>;
          }
          return <p key={i} className="text-muted leading-relaxed"><InlineText text={block.text} /></p>;
        })}
      </div>
      <a href="/blog" className="text-accent/50 text-sm mt-8 inline-block hover:text-accent transition-colors">
        &lt;- back to blog
      </a>
    </article>
  );
}

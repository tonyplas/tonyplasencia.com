import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
};

interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/", handle: "@tony" },
  { label: "LinkedIn", url: "https://linkedin.com/in/", handle: "/in/tony" },
  { label: "X / Twitter", url: "https://x.com/", handle: "@tony" },
  { label: "Email", url: "mailto:hello@tonyplasencia.com", handle: "hello@tonyplasencia.com" },
];

export default function Links() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// links</div>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-accent glow">Links</span>
      </h1>

      <div className="space-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-surface-border p-4 bg-surface/30 hover:border-accent/30 transition-colors group"
          >
            <span className="text-foreground group-hover:text-accent transition-colors font-bold">
              {link.label}
            </span>
            <span className="text-sm text-muted group-hover:text-accent/60 transition-colors">
              {link.handle}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12 text-accent/20 text-xs text-center">
        &gt; connection.established_
      </div>
    </section>
  );
}

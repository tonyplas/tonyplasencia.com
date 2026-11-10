import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
};

interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

const contactLinks: SocialLink[] = [
  { label: "General inquiries", url: "mailto:tony@tonyplasencia.com", handle: "tony@tonyplasencia.com" },
  { label: "Investing", url: "mailto:vc@tonyplasencia.com", handle: "vc@tonyplasencia.com" },
  { label: "GTM & partnerships", url: "mailto:operator@tonyplasencia.com", handle: "operator@tonyplasencia.com" },
];

const socialLinks: SocialLink[] = [
  { label: "X / Twitter", url: "https://x.com/tonyplasencia3", handle: "@tonyplasencia3" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/efren-plasencia/", handle: "/in/efren-plasencia" },
  { label: "GitHub — Personal", url: "https://github.com/tonyplas", handle: "@tonyplas" },
  { label: "GitHub — Agents", url: "https://github.com/tonyagents", handle: "@tonyagents" },
  { label: "Griffain", url: "https://griffain.com", handle: "griffain.com" },
  { label: "MoonPay", url: "https://www.moonpay.com", handle: "moonpay.com" },
];

export default function Links() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// links</div>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-accent glow">Links</span>
      </h1>

      <div className="space-y-3 mb-8">
        <h2 className="text-sm text-accent mb-4">Get in touch</h2>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="flex flex-col gap-1 border border-surface-border p-4 bg-surface/30 hover:border-accent/30 transition-colors group"
          >
            <span className="text-foreground group-hover:text-accent transition-colors font-bold">
              {link.label}
            </span>
            <span className="text-sm text-muted group-hover:text-accent/60 transition-colors break-words">
              {link.handle}
            </span>
          </a>
        ))}
      </div>

      <div className="space-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border border-surface-border p-4 bg-surface/30 hover:border-accent/30 transition-colors group"
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

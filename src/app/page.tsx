import Image from "next/image";

const highlights = [
  "Founder through strategic exit",
  "Built 2 $1M+ software businesses",
  "Helped scale a Top 10 Finance app on iOS",
];

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-start gap-6">
      <div className="text-accent/30 text-sm font-mono">// init v2.0</div>

      <Image
        src="/headshot.jpg"
        alt="Tony Plasencia"
        width={120}
        height={120}
        className="rounded-full border-2 border-accent/30"
        priority
      />

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        <span className="text-accent glow">Tony</span>{" "}
        <span className="text-foreground">Plasencia</span>
      </h1>

      <p className="text-body text-lg max-w-2xl leading-relaxed">
        Founder and operator exploring technology, markets, and agency. I build
        products that make powerful technology useful to more people and now lead
        GTM at <span className="text-accent">MoonPay Labs</span>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="border border-surface-border bg-surface/30 px-4 py-3 text-xs text-body font-mono leading-relaxed"
          >
            <span className="text-accent/40">$ </span>
            {highlight}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://t.me/tonyplasencia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent/10 border border-accent text-accent px-6 py-2.5 text-sm font-bold hover:bg-accent/20 transition-colors"
        >
          Work with me &rarr;
        </a>
        <a
          href="/about"
          className="border border-accent/30 text-accent px-5 py-2.5 text-sm hover:bg-accent/10 transition-colors"
        >
          about.exe
        </a>
        <a
          href="/resume"
          className="border border-surface-border text-muted px-5 py-2.5 text-sm hover:border-accent/30 hover:text-accent transition-colors"
        >
          work.exe
        </a>
      </div>

      <div className="mt-16 text-accent/20 text-xs font-mono space-y-1">
        <p>&gt; system.status: online</p>
        <p>&gt; location: oakland, ca</p>
        <p>&gt; current_question: how do we build technology that expands agency responsibly?_</p>
      </div>
    </section>
  );
}

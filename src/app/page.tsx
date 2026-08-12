import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-start gap-6">
      <div className="text-accent/30 text-sm font-mono">// init v1.0</div>

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

      <p className="text-body text-lg max-w-xl leading-relaxed">
        Built startups in crypto + AI agents. Now Head of GTM at{" "}
        <span className="text-accent">MoonPay Labs</span>. Thinking deeply about how
        to use technology to make people&apos;s lives easier.
      </p>

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
          resume.exe
        </a>
      </div>

      <div className="mt-16 text-accent/20 text-xs font-mono space-y-1">
        <p>&gt; system.status: online</p>
        <p>&gt; location: oakland, ca</p>
        <p>&gt; mission: be the best version of myself_</p>
      </div>
    </section>
  );
}

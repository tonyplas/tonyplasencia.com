export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-start gap-6">
      <div className="text-accent/30 text-sm font-mono">// init v1.0</div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        <span className="text-accent glow">Tony</span>{" "}
        <span className="text-foreground">Plasencia</span>
      </h1>

      <p className="text-muted text-lg max-w-xl leading-relaxed">
        Fueling the agent engine. Co-founder building at the intersection of
        AI agents and crypto. Making onchain interactions insanely easy.
      </p>

      <div className="flex gap-4 mt-4">
        <a
          href="/about"
          className="border border-accent/30 text-accent px-5 py-2 text-sm hover:bg-accent/10 transition-colors"
        >
          about.exe
        </a>
        <a
          href="/resume"
          className="border border-surface-border text-muted px-5 py-2 text-sm hover:border-accent/30 hover:text-accent transition-colors"
        >
          resume.pdf
        </a>
      </div>

      <div className="mt-16 text-accent/20 text-xs font-mono space-y-1">
        <p>&gt; system.status: online</p>
        <p>&gt; location: oakland, ca</p>
        <p>&gt; mission: fuel the agent engine_</p>
      </div>
    </section>
  );
}

import Image from "next/image";

const highlights = [
  "Exited founder",
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

      <div className="w-full mt-12">
        <h2 className="text-sm text-accent mb-6">&gt; projects.list()</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "Call Your Clanker",
              desc: "Voice robo-advisor you can phone for prices, trending tokens, and portfolio recommendations. Powered by Claude, Twilio, and ElevenLabs.",
              url: "https://github.com/tonyagents/call-your-clanker",
            },
            {
              name: "Ad Video Pipeline",
              desc: "Automated pipeline for generating ad video creatives with AI.",
              url: "https://github.com/tonyagents/ad-video-pipeline",
            },
            {
              name: "Character Studio",
              desc: "Code-only 3D character animation video pipeline. Describe a scenario, author a JSON scene script, render to MP4. Built with Remotion + Three.js.",
              url: "https://github.com/tonyagents/character-studio",
            },
            {
              name: "Cascade",
              desc: "AI-first GTM engine. Give it one product idea, it produces the entire launch stack — plan, brief, content, and assets — all in sync.",
              url: "https://github.com/tonyagents/cascade",
            },
          ].map((project) => (
            <a
              key={project.name}
              href={project.live || project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-surface-border p-4 bg-surface/30 hover:border-accent/30 transition-colors group block"
            >
              <div className="font-bold text-foreground group-hover:text-accent transition-colors text-sm">
                {project.name}
              </div>
              <p className="text-xs text-body mt-1 leading-relaxed">{project.desc}</p>
              <div className="flex gap-3 mt-2">
                <span className="text-xs text-muted">GitHub ↗</span>
                {project.live && <span className="text-xs text-accent/50">Live ↗</span>}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 text-accent/20 text-xs font-mono space-y-1">
        <p>&gt; system.status: online</p>
        <p>&gt; location: oakland, ca</p>
        <p>&gt; current_question: how do we build technology that expands agency responsibly?_</p>
      </div>
    </section>
  );
}

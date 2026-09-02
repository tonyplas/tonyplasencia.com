import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    name: "Vela",
    desc: "Personal AI you text — browser use, memory, and PayBox authority.",
    url: "https://github.com/tonyplas/vela",
  },
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
];

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// projects</div>
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-accent glow">Projects</span>
      </h1>
      <p className="text-muted text-sm mb-8">Things I built.</p>

      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-surface-border p-6 bg-surface/30 hover:border-accent/30 transition-colors group"
          >
            <div className="font-bold text-foreground group-hover:text-accent transition-colors">
              {project.name}
            </div>
            <p className="text-sm text-body mt-2 leading-relaxed">{project.desc}</p>
            <div className="text-xs text-muted mt-3">GitHub ↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}

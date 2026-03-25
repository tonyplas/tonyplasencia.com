import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

const experience: TimelineItem[] = [
  {
    period: "2024 - Present",
    role: "Growth & Partnerships",
    company: "MoonPay",
    description:
      "Building developer tooling that gives AI agents access to onchain capital markets. Working on the MoonPay CLI powering prediction markets, virtual accounts, on/off ramps, and cross-chain swaps.",
  },
  {
    period: "2024",
    role: "Co-Founder",
    company: "Griffain",
    description:
      "Built an AI-powered super app for crypto on Solana. Users could search anything and execute onchain actions in natural language through personalized AI agents. Reached a market cap surpassing $480M.",
  },
  {
    period: "2021 - 2024",
    role: "Co-Founder, Head of BD & Partnerships",
    company: "Underdog Protocol",
    description:
      "Scaled blockchain infrastructure empowering developers to integrate digital assets via API. Grew to $1M ARR, managed millions in digital assets. Raised $500K seed on a $10M post-money valuation.",
  },
  {
    period: "2016 - 2021",
    role: "Growth & Business Development",
    company: "Uber",
    description:
      "Spent six years in Silicon Valley building growth and sales capabilities at one of the world's largest tech platforms.",
  },
];

const education = {
  school: "San Francisco State University",
  degree: "B.A. Political Philosophy & Economy",
  gpa: "3.4 / 4.0",
  extra: "D1-AA Rugby — 3-year starter",
};

const skills = [
  { category: "Domains", items: ["AI Agents", "Web3", "DeFi", "Growth", "GTM Strategy"] },
  { category: "Blockchain", items: ["Solana", "EVM", "Digital Assets", "On/Off Ramps"] },
  { category: "Tools", items: ["MoonPay CLI", "Claude Code", "Coda", "Analytics"] },
  { category: "Languages", items: ["English (Native)", "Spanish (Professional)"] },
];

export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// resume</div>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-accent glow">Resume</span>
      </h1>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-sm text-accent mb-6">&gt; experience.log()</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.period + item.company} className="border-l border-accent/20 pl-6 relative">
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-accent/40 rounded-full" />
              <div className="text-xs text-accent/50 mb-1">{item.period}</div>
              <div className="font-bold text-foreground">{item.role}</div>
              <div className="text-sm text-muted mb-2">{item.company}</div>
              <p className="text-sm text-muted/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-sm text-accent mb-6">&gt; education.get()</h2>
        <div className="border border-surface-border p-6 bg-surface/30">
          <div className="font-bold text-foreground">{education.school}</div>
          <div className="text-sm text-muted">{education.degree}</div>
          <div className="text-xs text-accent/50 mt-2">GPA: {education.gpa}</div>
          <div className="text-xs text-muted/60 mt-1">{education.extra}</div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-sm text-accent mb-6">&gt; skills.scan()</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="border border-surface-border p-4 bg-surface/30">
              <h3 className="text-xs text-accent/60 mb-3">[{group.category}]</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs border border-accent/20 text-muted px-2 py-1 hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

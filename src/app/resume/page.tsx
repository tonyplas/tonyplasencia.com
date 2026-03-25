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
    period: "Oct 2025 - Present",
    role: "GTM Agents",
    company: "MoonPay",
    description:
      "Giving agents access to the OS for modern money movement.",
  },
  {
    period: "2021 - 2025",
    role: "Co-Founder, BD & Partnerships",
    company: "Griffain + Underdog Protocol",
    description:
      "Built a profitable digital asset and AI business on Solana before joining MoonPay via acquisition. Led all Business Development, Partnerships, and Product. Consumer app with 80K users, $22M ARR, and $20M in volume. SaaS at $1.5M ARR with 250+ customers. Backed by UnderdogLabs, E^I Ventures, and OneBlock Capital.",
  },
  {
    period: "Jan 2020 - Jun 2021",
    role: "BD & Partnerships",
    company: "Thumbtack (Setter)",
    description:
      "Setter was a virtual property management and concierge company backed by Sequoia and NFX until being acquired by Thumbtack. Sales, Product Marketing, and Ops. Managed a team of 15 BDRs with 100% quota attainment. Closed over $1.3M in Home Services and worked on partnerships with insurance firms like American Family.",
  },
  {
    period: "Aug 2018 - Jan 2020",
    role: "Growth, Merchants",
    company: "Ritual.co",
    description:
      "Ritual is a food ordering app for fast & easy pickup backed by Sequoia Capital and Greylock. Focused on merchant acquisition, performance, customer experience, and retention. Grew San Francisco and launched Oakland & San Jose. Onboarded over 200 SMBs.",
  },
  {
    period: "Aug 2016 - Aug 2018",
    role: "Growth, Special Projects",
    company: "Uber",
    description:
      "Driver acquisition and retention through in-person sales and launching projects across new markets. Onboarded over 1,000 Uber drivers and scaled projects to 5 markets.",
  },
];

const education = {
  school: "San Francisco State University",
  degree: "B.A. Political Philosophy & Economy",
  gpa: "3.4 / 4.0",
  extra: "D1-AA Rugby — 3-year starter",
};

const skills = [
  { category: "Skills", items: ["Sales", "GTM", "Vibe Coding", "Content Creation", "Virality", "0-1", "Cold Calling"] },
  { category: "Tools", items: ["CRM Tools", "Drive", "Claude Code", "Codex"] },
  { category: "Languages", items: ["English", "Spanish", "Brainrot"] },
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

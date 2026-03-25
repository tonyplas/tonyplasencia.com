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
    role: "Your Role",
    company: "Company Name",
    description: "Describe what you do here. Replace this with your actual experience.",
  },
  {
    period: "2022 - 2024",
    role: "Previous Role",
    company: "Previous Company",
    description: "Describe your previous role and accomplishments.",
  },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "Python", "Rust", "Go"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
  { category: "Frameworks", items: ["Next.js", "React", "Node.js", "FastAPI"] },
  { category: "Other", items: ["Git", "CI/CD", "Linux", "Networking"] },
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
            <div key={item.period} className="border-l border-accent/20 pl-6 relative">
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-accent/40 rounded-full" />
              <div className="text-xs text-accent/50 mb-1">{item.period}</div>
              <div className="font-bold text-foreground">{item.role}</div>
              <div className="text-sm text-muted mb-2">{item.company}</div>
              <p className="text-sm text-muted/80">{item.description}</p>
            </div>
          ))}
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

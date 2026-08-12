import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  url?: string;
  description: string;
}

const experience: TimelineItem[] = [
  {
    period: "Oct 2025 - Present",
    role: "Head of GTM, MoonPay Labs",
    company: "MoonPay",
    url: "https://www.moonpay.com",
    description:
      "Joined MoonPay with my cofounder following a strategic transaction involving Griffain's team and technology. Lead GTM across MoonPay Labs initiatives spanning AI agents, developer products, consumer apps, and new financial infrastructure. Helped scale Paybox to 370K users onboarded, 600K wallets connected, 40K mobile installs, 300K transactions, and 11.4M views on X, reaching the Top 10 Finance apps on iOS. Helped grow Moongate revenue 300% to $500K, built a partner ecosystem of 40+ companies, and led GTM end-to-end across multiple products.",
  },
  {
    period: "2021 - 2025",
    role: "Co-Founder, GTM & Product",
    company: "Edith Labs (Griffain + Underdog Protocol)",
    url: "https://griffain.com",
    description:
      "Built and operated two million-dollar software businesses across Solana infrastructure and AI agents. Led business development, partnerships, go-to-market, and product strategy. Underdog served hundreds of developer and business customers; Griffain grew to 80K signed-in users and thousands of paid users. Raised outside capital, built a profitable business, and navigated the company from developer infrastructure into consumer AI agents before joining MoonPay.",
  },
  {
    period: "Jan 2020 - Jun 2021",
    role: "BD, Partnerships & Growth",
    company: "Thumbtack (Setter)",
    description:
      "Joined Setter, a Sequoia- and NFX-backed home management company, before its acquisition by Thumbtack. Managed a 15-person BDR team, surpassed quota, and helped drive more than $1.3M in home-services value. Broke into American Family Insurance and Nationwide, opening strategic partnership discussions that helped move the business upstream toward institutional distribution during the period that culminated in Thumbtack's acquisition.",
  },
  {
    period: "Aug 2018 - Jan 2020",
    role: "Growth, Merchants",
    company: "Ritual.co",
    description:
      "Worked across merchant acquisition, performance, customer experience, and retention for a Sequoia- and Greylock-backed marketplace. Grew San Francisco, helped launch Oakland and San Jose, onboarded 200+ SMBs, and increased orders across managed merchants.",
  },
  {
    period: "Aug 2016 - Aug 2018",
    role: "Growth, Special Projects",
    company: "Uber",
    description:
      "Started on the front lines of driver acquisition and retention. Onboarded 1,000+ drivers in San Francisco, improved the onboarding experience, and helped launch an in-person acquisition model that expanded to five markets.",
  },
];

const education = {
  school: "San Francisco State University",
  degree: "B.A. Political Science",
  gpa: "3.2 / 4.0",
  extra: "Rugby — 3-year starter",
};

const capabilities = [
  { category: "Functions", items: ["GTM", "Partnerships", "Product Strategy", "Zero-to-One", "Sales Leadership"] },
  { category: "Domains", items: ["AI Agents", "Fintech", "Crypto Infrastructure", "Marketplaces"] },
  { category: "Languages", items: ["English", "Spanish"] },
];

export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// work</div>
      <h1 className="text-3xl font-bold mb-3">
        <span className="text-accent glow">Work</span>
      </h1>
      <p className="text-muted text-sm mb-10">
        A decade learning how products, distribution, and organizations get built.
      </p>

      <div className="mb-12">
        <h2 className="text-sm text-accent mb-6">&gt; experience.log()</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.period + item.company} className="border-l border-accent/20 pl-6 relative">
              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-accent/40 rounded-full" />
              <div className="text-xs text-muted mb-1">{item.period}</div>
              <div className="font-bold text-foreground">{item.role}</div>
              <div className="text-sm text-muted mb-2">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {item.company} ↗
                  </a>
                ) : (
                  item.company
                )}
              </div>
              <p className="text-sm text-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm text-accent mb-6">&gt; education.get()</h2>
        <div className="border border-surface-border p-6 bg-surface/30">
          <div className="font-bold text-foreground">{education.school}</div>
          <div className="text-sm text-body">{education.degree}</div>
          <div className="text-xs text-muted mt-2">GPA: {education.gpa}</div>
          <div className="text-xs text-muted mt-1">{education.extra}</div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm text-accent mb-6">&gt; capabilities.scan()</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((group) => (
            <div key={group.category} className="border border-surface-border p-4 bg-surface/30">
              <h3 className="text-xs text-accent/60 mb-3">[{group.category}]</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs border border-accent/20 text-body px-2 py-1 hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-surface-border text-center">
        <p className="text-muted text-sm mb-4">Interested in working together?</p>
        <a
          href="https://t.me/tonyplasencia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent/10 border border-accent text-accent px-6 py-2.5 text-sm font-bold hover:bg-accent/20 transition-colors"
        >
          Work with me &rarr;
        </a>
      </div>
    </section>
  );
}

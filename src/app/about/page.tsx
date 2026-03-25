import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// about</div>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-accent glow">About</span> Me
      </h1>

      <div className="space-y-6 text-muted leading-relaxed">
        <p>
          Hey, I&apos;m Tony. I&apos;ve spent the last decade building at the edge of
          technology &mdash; from growth at Uber in Silicon Valley, to co-founding
          companies in web3, to now building AI agents that interact with crypto
          markets autonomously.
        </p>

        <p>
          I studied Political Philosophy and Economy at San Francisco State
          University, where I also played D1-AA Rugby for three years. That
          combination of strategic thinking and grit has shaped how I approach
          building companies.
        </p>

        <p>
          Currently I&apos;m at <span className="text-accent">MoonPay</span>, working
          on giving AI agents access to onchain capital markets. Before that, I
          co-founded <span className="text-accent">Griffain</span> &mdash; an AI-powered
          super app for crypto where you can search anything and do anything onchain
          in natural language. And before that, I co-founded{" "}
          <span className="text-accent">Underdog Protocol</span>, scaling blockchain
          infrastructure to $1M ARR.
        </p>

        <p>
          I speak English and Spanish. When I&apos;m not building, you can find me
          watching Bluey with my dog Zoey.
        </p>

        <div className="border border-surface-border p-6 mt-8 bg-surface/50">
          <h2 className="text-accent text-sm mb-4">&gt; interests.list()</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "AI Agents",
              "Solana Ecosystem",
              "DeFi / Crypto",
              "Developer Tooling",
              "Growth & GTM",
              "Autonomous Systems",
              "Consumer Products",
              "Open Source",
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-2">
                <span className="text-accent/40">$</span>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

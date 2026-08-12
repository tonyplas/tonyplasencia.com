import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const podcasts = [
  {
    title: "Created Economy 030: Efren \"Tony\" Plasencia / Diffusion.me",
    url: "https://www.youtube.com/live/fdoDTej0FVQ",
  },
  {
    title: "This AI App Store is the Future... (Griffain)",
    url: "https://youtu.be/OTkDBtChRRs",
  },
  {
    title: "How Griffain Is Pioneering On-Chain Intelligence and Trading Strategies with AI Agents on Solana",
    url: "https://youtu.be/CcJWbqzSE8k",
  },
];

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-accent/30 text-sm mb-2">// about</div>
      <h1 className="text-3xl font-bold mb-8">
        <span className="text-accent glow">About</span> Me
      </h1>

      <div className="flex items-center gap-6 mb-8">
        <Image
          src="/headshot.jpg"
          alt="Tony Plasencia"
          width={100}
          height={100}
          className="rounded-full border-2 border-accent/30 flex-shrink-0"
        />
        <p className="text-body text-sm leading-relaxed">
          Tony Plasencia &mdash; founder, operator, and student of agency.
        </p>
      </div>

      <div className="space-y-6 text-body leading-relaxed">
        <p>
          I&apos;m Tony. I watch <span className="text-accent">Arsenal Football Club</span>,
          drink Guinness, and compete in Brazilian Jiu Jitsu at 10th Planet in Oakland.
          Most of my working life has been spent around marketplaces, startups, crypto,
          and AI.
        </p>

        <p>
          I studied political science and became fascinated by questions of agency and
          power: who gets to act, what institutions make possible, and how systems shape
          individual choices. I didn&apos;t expect those questions to follow me into
          technology, but they did.
        </p>

        <p>
          At <span className="text-accent">Uber</span>, I saw a marketplace change what
          people could do with their time and assets. At <span className="text-accent">Setter</span>,
          I learned that distribution and partnerships can reshape a company&apos;s product
          strategy. At <span className="text-accent">Underdog</span>, the question became
          how to make blockchain infrastructure easier for developers to use. At
          <span className="text-accent"> Griffain</span>, it became whether software itself
          could act on a person&apos;s behalf.
        </p>

        <p>
          Now I&apos;m at <span className="text-accent">MoonPay</span>, where I work on bringing
          agentic products and financial infrastructure to a much larger platform. The
          question I keep coming back to is no longer just how to make powerful technology
          accessible. It&apos;s how to build the products, organizations, and institutions
          around that technology responsibly.
        </p>

        <p>
          Philosophy still shapes how I think. I&apos;ve spent time with Foucault, Nietzsche,
          Arendt, Agamben, and others who ask uncomfortable questions about power,
          responsibility, and human action. Building companies has made those questions
          less abstract and more practical.
        </p>

        <p>
          Outside of work I&apos;m usually training, reading about history and markets, or
          watching Bluey with my chihuahua <span className="text-accent">Zoey</span>.
          She&apos;s the real one.
        </p>

        <p>
          Feel free to find me{" "}
          <a
            href="https://t.me/tonyplasencia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @tonyplasencia
          </a>{" "}
          on Telegram.
        </p>

        <div className="border border-surface-border p-6 mt-8 bg-surface/50">
          <h2 className="text-accent text-sm mb-4">&gt; interests.list()</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "AI & Agents",
              "Markets",
              "History & Philosophy",
              "Critical Infrastructure",
              "Arsenal FC",
              "Brazilian Jiu Jitsu",
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-2">
                <span className="text-accent/40">$</span>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-surface-border p-6 mt-8 bg-surface/50">
          <h2 className="text-accent text-sm mb-4">&gt; podcasts.play()</h2>
          <div className="space-y-4">
            {podcasts.map((pod) => (
              <a
                key={pod.url}
                href={pod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-surface-border p-4 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-accent/40 mt-0.5">&#9654;</span>
                  <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                    {pod.title}
                  </span>
                </div>
                <div className="text-xs text-muted/40 mt-1 ml-6">YouTube</div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-border text-center">
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
      </div>
    </section>
  );
}

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
          Hey, I&apos;m Tony. I&apos;m passionate about technology, autonomous systems,
          and building things that push boundaries.
        </p>

        <p>
          I believe the future is being written in code, and I want to be part of
          the team writing it. From infrastructure to AI, from drones to distributed
          systems &mdash; I&apos;m drawn to the places where software meets the physical world.
        </p>

        <div className="border border-surface-border p-6 mt-8 bg-surface/50">
          <h2 className="text-accent text-sm mb-4">&gt; interests.list()</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "Autonomous Systems",
              "Infrastructure",
              "AI / Machine Learning",
              "Distributed Systems",
              "Cybersecurity",
              "Open Source",
              "Blockchain",
              "Robotics",
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

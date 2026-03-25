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
          I am Tony. I enjoy watching <span className="text-accent">Arsenal Football Club</span> while
          drinking Guinness and competing Brazilian Jiu Jitsu at 10th Planet in Oakland.
        </p>

        <p>
          I&apos;ve spent the last decade figuring out how to use technology to make
          people&apos;s lives better and easier. I started at{" "}
          <span className="text-accent">Uber</span> where I figured out how to sell
          opportunity, and now I&apos;m at <span className="text-accent">MoonPay</span> where
          I&apos;m giving agents access to the operating system for modern money movement.
        </p>

        <p>
          I studied Political Philosophy in college where I found a deep appreciation
          for the writings of Michel Foucault, Friedrich Nietzsche, Hannah Arendt,
          and Giorgio Agamben. I think deeply about agency, power structures, and
          technology.
        </p>

        <p>
          I enjoy learning about product, history, the markets, and how to be a better
          human. I decided that my skills are best suited as a General in the markets,
          so I decided to found technology startups. This was super fun.
        </p>

        <p>
          Feel free to find me{" "}
          <span className="text-accent">@tonyplasencia</span> on Telegram.
        </p>

        <div className="border border-surface-border p-6 mt-8 bg-surface/50">
          <h2 className="text-accent text-sm mb-4">&gt; interests.list()</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "Product",
              "History",
              "The Markets",
              "Arsenal FC",
              "Brazilian Jiu Jitsu",
              "Philosophy",
              "Technology",
              "Startups",
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

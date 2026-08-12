import Image from "next/image";

const highlights = [
  "Founder through strategic exit",
  "Built 2 $1M+ software businesses",
  "Helped scale a Top 10 Finance app on iOS",
];

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-start gap-6">
      <div className="text-accent/30 text-sm font-mono">// init v2.0</div>

      <Image
        src="/headshot.jpg"
       
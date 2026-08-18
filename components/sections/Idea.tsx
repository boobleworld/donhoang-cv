"use client";

import { Reveal, RevealText } from "@/components/Reveal";

const items = [
  { n: "01", label: "Space" },
  { n: "02", label: "Nature" },
  { n: "03", label: "Focus" },
  { n: "04", label: "Connection" },
  { n: "05", label: "Time" },
];

export default function Idea() {
  return (
    <section className="bg-ivory-soft px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="eyebrow text-andaman-deep mb-8">The Idea</p>
        </Reveal>

        <RevealText>
          <h2 className="font-serif text-charcoal text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl text-balance">
            What if life was designed around what actually matters?
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 sm:mt-24">
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-1">
            <div className="space-y-5 text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-md">
              <p>
                Modern life has made everything connected. Always online.
                Always available. Always moving.
              </p>
              <p>We believe the next generation of lifestyle is different.</p>
              <p className="text-charcoal font-medium">
                More space. More nature. More connection. More meaningful
                experiences. More freedom.
              </p>
              <p>
                booble.Life builds the environments, businesses and
                experiences that make that possible.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <ul className="border-t border-charcoal/15">
              {items.map((item, i) => (
                <Reveal key={item.n} delay={0.05 * i}>
                  <li className="flex items-baseline justify-between py-5 sm:py-6 border-b border-charcoal/15 group">
                    <span className="eyebrow text-charcoal/40 group-hover:text-andaman-deep transition-colors duration-300">
                      {item.n}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:translate-x-2 transition-transform duration-400 ease-premium">
                      {item.label}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

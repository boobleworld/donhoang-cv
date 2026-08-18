"use client";

import { Reveal, RevealText } from "@/components/Reveal";

const ways = [
  {
    n: "01",
    title: "Invest",
    line: "Turn opportunity into ownership.",
    copy: "Explore selected real-world investment opportunities in Thailand.",
    cta: "Explore investments →",
    tone: "bg-charcoal text-ivory",
  },
  {
    n: "02",
    title: "Build",
    line: "Bring us an opportunity.",
    copy: "Have a property, idea, business or project? Let's build something around it.",
    cta: "Build with Booble →",
    tone: "bg-andaman-deep text-ivory",
  },
  {
    n: "03",
    title: "Partner",
    line: "Build something bigger together.",
    copy: "Join our network of owners, operators, entrepreneurs and strategic partners.",
    cta: "Partner with us →",
    tone: "bg-sand text-charcoal",
  },
  {
    n: "04",
    title: "Experience",
    line: "Discover what we're building.",
    copy: "Hospitality, ocean lifestyle, wellness, community and places worth returning to.",
    cta: "Explore ventures →",
    tone: "bg-ivory-deep text-charcoal",
  },
];

export default function FourWays() {
  return (
    <section id="ways-in" className="bg-ivory px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="eyebrow text-andaman-deep mb-8">Get Involved</p>
        </Reveal>
        <RevealText>
          <h2 className="font-serif text-charcoal text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-4xl">
            How do you want to be part of it?
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 sm:mt-20">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={0.08 * i}>
              <a
                href="#final-cta"
                data-cursor-expand
                className={`group block p-8 sm:p-10 lg:p-12 h-full min-h-[320px] flex flex-col justify-between transition-transform duration-500 ease-premium hover:-translate-y-1 ${w.tone}`}
              >
                <div className="flex items-center justify-between opacity-60">
                  <span className="eyebrow">{w.n}</span>
                  <span className="text-xl transition-transform duration-400 ease-premium group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl mt-6">
                    {w.title}
                  </h3>
                  <p className="font-serif italic text-lg sm:text-xl mt-3 opacity-90">
                    {w.line}
                  </p>
                  <p className="mt-4 opacity-70 leading-relaxed max-w-sm">
                    {w.copy}
                  </p>
                  <span className="eyebrow inline-block mt-8 border-b border-current pb-1">
                    {w.cta}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Reveal, RevealText } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    copy: "Find opportunities, locations and ideas.",
  },
  {
    n: "02",
    title: "Structure",
    copy: "Create the business model, strategy and capital structure.",
  },
  {
    n: "03",
    title: "Build",
    copy: "Brand, technology, product and customer experience.",
  },
  {
    n: "04",
    title: "Launch",
    copy: "Marketing, distribution and operations.",
  },
  {
    n: "05",
    title: "Scale",
    copy: "Optimize, grow and replicate what works.",
  },
];

const equation = [
  "Technology",
  "Brand",
  "Distribution",
  "Operations",
  "Capital",
];

export default function Engine() {
  return (
    <section className="bg-charcoal text-ivory px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="eyebrow text-andaman-soft mb-8">The Booble Engine</p>
        </Reveal>
        <RevealText>
          <h2 className="font-serif text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-4xl">
            We don&rsquo;t just invest in assets. We build businesses around
            them.
          </h2>
        </RevealText>

        <div className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i} className="relative">
              <div className="lg:pr-6">
                <span className="font-serif text-4xl sm:text-5xl text-andaman-soft/80">
                  {s.n}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl mt-4">
                  {s.title}
                </h3>
                <p className="text-ivory/60 text-sm sm:text-base leading-relaxed mt-3 max-w-xs">
                  {s.copy}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-0 translate-x-1/2 text-ivory/25 text-2xl">
                  →
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="lg:hidden mt-6 text-ivory/25 text-xl">↓</div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-24 sm:mt-32">
          <div className="hairline text-ivory/30 mb-12" />
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
              {equation.map((word, i) => (
                <span key={word} className="flex items-center gap-x-4">
                  <span className="eyebrow text-ivory/70">{word}</span>
                  {i < equation.length - 1 && (
                    <span className="text-ivory/30">+</span>
                  )}
                </span>
              ))}
            </div>
            <span className="text-ivory/40 text-2xl">=</span>
            <p className="font-serif italic text-3xl sm:text-4xl text-andaman-soft">
              Real-world value.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

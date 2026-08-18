"use client";

import { Reveal, RevealText } from "@/components/Reveal";

const nodes = [
  { label: "Thailand", sub: "Origin", filled: true },
  { label: "Next destination", sub: "TBD", filled: false },
  { label: "Next destination", sub: "TBD", filled: false },
  { label: "Next destination", sub: "TBD", filled: false },
];

export default function GlobalAmbition() {
  return (
    <section className="bg-ivory px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-andaman-deep mb-8">Global Ambition</p>
            </Reveal>
            <RevealText>
              <h2 className="font-serif text-charcoal text-[9vw] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                Thailand first. The world next.
              </h2>
            </RevealText>
            <Reveal delay={0.2} className="mt-8 space-y-4 text-charcoal/70 leading-relaxed max-w-md">
              <p>
                booble.Life begins in Thailand because that&rsquo;s where the
                story started.
              </p>
              <p>But the model is designed to travel.</p>
              <p className="text-charcoal font-medium">
                New destinations. New ventures. New communities. New ways of
                living.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex items-center">
            <Reveal delay={0.2} className="w-full">
              <div className="relative w-full py-16 sm:py-20">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-charcoal/25" />
                <div className="relative flex justify-between items-center">
                  {nodes.map((n) => (
                    <div key={n.label + n.sub} className="flex flex-col items-center text-center gap-4 w-1/4">
                      <span
                        className={`h-3 w-3 rounded-full ${
                          n.filled
                            ? "bg-andaman"
                            : "bg-ivory border border-charcoal/30"
                        }`}
                      />
                      <div>
                        <p
                          className={`eyebrow ${
                            n.filled ? "text-charcoal" : "text-charcoal/40"
                          }`}
                        >
                          {n.label}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest2 text-charcoal/30 mt-1">
                          {n.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

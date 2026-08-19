"use client";

import { Reveal, RevealText } from "@/components/Reveal";

const partners = [
  "VfB Stuttgart",
  "Stuttgart Surge",
  "Olympiastützpunkt Stuttgart",
  "Landessportbund BW",
  "Universitätsklinikum Tübingen",
  "TK Krankenkasse",
];

export default function Partners() {
  return (
    <section className="bg-pastel/40 px-6 sm:px-10 py-24 sm:py-32">
      <div className="max-w-editorial mx-auto">
        <RevealText>
          <h2 className="font-display font-semibold text-ink text-[8vw] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Unsere Partner.
          </h2>
        </RevealText>

        <div className="mt-16 sm:mt-20 flex flex-wrap gap-x-16 gap-y-12 sm:gap-x-24 sm:gap-y-16 items-center justify-between">
          {partners.map((p, i) => (
            <Reveal key={p} delay={0.05 * i}>
              <span className="font-display font-medium text-ink/50 text-xl sm:text-2xl tracking-tight hover:text-steel-deep transition-colors duration-300">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

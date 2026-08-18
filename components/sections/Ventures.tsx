"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const ventures = [
  {
    name: "Lovus",
    tag: "Ocean · Yachting · Music · Adventure · Community",
    copy: "A lifestyle built around the ocean.",
    detail: "Visual identity that feels energetic, social and adventurous.",
    cta: "Explore Lovus →",
    tone: "ocean" as const,
    motif: "wave" as const,
  },
  {
    name: "Lovia",
    tag: "Wellness · Nature · Movement · Longevity",
    copy: "A quieter dimension of the ecosystem.",
    detail: "Spaces designed to reset, recover and reconnect.",
    cta: "Explore Lovia →",
    tone: "sand" as const,
    motif: "arch" as const,
  },
  {
    name: "Ao Nang",
    tag: "Boutique Hospitality · Krabi",
    copy: "A boutique hospitality concept for modern travellers.",
    detail: "Designed for those seeking more than conventional accommodation.",
    cta: "View project →",
    tone: "dusk" as const,
    motif: "horizon" as const,
  },
  {
    name: "Koh Tao",
    tag: "Hospitality · Island Living",
    copy: "Our journey into physical hospitality.",
    detail:
      "Hands-on experience in development, operations, guest experience and distribution.",
    cta: "View project →",
    tone: "charcoal" as const,
    motif: "path" as const,
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="bg-ivory-soft py-28 sm:py-40">
      <div className="max-w-editorial mx-auto px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow text-andaman-deep mb-8">Our World</p>
        </Reveal>
        <RevealText>
          <h2 className="font-serif text-charcoal text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-4xl">
            Places, brands and experiences worth coming back to.
          </h2>
        </RevealText>
      </div>

      <div className="mt-16 sm:mt-20 pl-6 sm:pl-10">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pr-6 sm:pr-10 snap-x snap-mandatory">
          {ventures.map((v, i) => (
            <Reveal
              key={v.name}
              delay={0.06 * i}
              className="shrink-0 w-[82vw] sm:w-[46vw] lg:w-[30vw] snap-start"
            >
              <a href="#final-cta" data-cursor-expand className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImagePlaceholder
                    tone={v.tone}
                    motif={v.motif}
                    className="absolute inset-0"
                    zoom
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                </div>
                <div className="mt-6">
                  <p className="eyebrow text-andaman-deep">{v.tag}</p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-charcoal mt-3">
                    {v.name}
                  </h3>
                  <p className="text-charcoal/70 mt-2 leading-relaxed">
                    {v.copy}
                  </p>
                  <p className="text-charcoal/50 text-sm mt-1 leading-relaxed">
                    {v.detail}
                  </p>
                  <span className="eyebrow inline-block mt-5 text-charcoal border-b border-charcoal/30 pb-1 group-hover:border-charcoal transition-colors duration-300">
                    {v.cta}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.3} className="shrink-0 w-[82vw] sm:w-[46vw] lg:w-[30vw] snap-start">
            <a
              href="#ventures"
              data-cursor-expand
              className="group block h-full"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="font-serif text-3xl sm:text-4xl text-ivory">
                    More to come
                  </p>
                  <p className="text-ivory/50 mt-4 leading-relaxed">
                    The ecosystem is only beginning.
                  </p>
                  <span className="eyebrow inline-block mt-8 text-ivory border-b border-ivory/40 pb-1 group-hover:border-ivory transition-colors duration-300">
                    Explore all ventures →
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

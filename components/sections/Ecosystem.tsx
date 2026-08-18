"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const categories = [
  {
    name: "Hospitality",
    copy: "Places designed to stay, slow down and reconnect.",
    tone: "ocean" as const,
    motif: "arch" as const,
  },
  {
    name: "Real Estate",
    copy: "Real-world assets with long-term potential.",
    tone: "sand" as const,
    motif: "grid" as const,
  },
  {
    name: "Tourism",
    copy: "Experiences that turn destinations into memories.",
    tone: "dusk" as const,
    motif: "path" as const,
  },
  {
    name: "Technology",
    copy: "Digital infrastructure connecting people, businesses and places.",
    tone: "charcoal" as const,
    motif: "grid" as const,
  },
  {
    name: "Wellness",
    copy: "Spaces for movement, recovery, mindfulness and longevity.",
    tone: "ivory" as const,
    motif: "wave" as const,
  },
  {
    name: "Lifestyle",
    copy: "Brands and experiences built around freedom, culture and community.",
    tone: "ocean" as const,
    motif: "horizon" as const,
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-ivory px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <Reveal>
          <p className="eyebrow text-andaman-deep mb-8">The Booble Ecosystem</p>
        </Reveal>
        <RevealText>
          <h2 className="font-serif text-charcoal text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-4xl">
            One ecosystem. Many ways to experience it.
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 mt-16 sm:mt-20">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * i} className="bg-ivory">
              <a
                href="#ventures"
                data-cursor-expand
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <ImagePlaceholder
                  tone={c.tone}
                  motif={c.motif}
                  className="absolute inset-0"
                  zoom
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="relative z-10 h-full w-full flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center justify-between transition-transform duration-500 ease-premium group-hover:-translate-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                      {c.name}
                    </h3>
                    <span className="text-ivory text-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-premium">
                      →
                    </span>
                  </div>
                  <p className="mt-3 text-ivory/70 text-sm leading-relaxed max-w-[85%] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-premium delay-75">
                    {c.copy}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

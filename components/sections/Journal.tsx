"use client";

import Link from "next/link";
import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const articles = [
  {
    title: "The future of tropical hospitality",
    tone: "ocean" as const,
    motif: "arch" as const,
  },
  {
    title: "Why Thailand",
    tone: "sand" as const,
    motif: "path" as const,
  },
  {
    title: "Designing a better way to work and live",
    tone: "dusk" as const,
    motif: "horizon" as const,
  },
];

export default function Journal() {
  return (
    <section className="bg-ivory-soft px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-andaman-deep mb-8">Journal</p>
            </Reveal>
            <RevealText>
              <h2 className="font-serif text-charcoal text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
                Ideas worth exploring.
              </h2>
            </RevealText>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/journal"
              data-cursor-expand
              className="eyebrow inline-flex items-center gap-2 text-charcoal border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300 w-fit"
            >
              Explore the journal →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mt-16 sm:mt-20">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={0.08 * i}>
              <Link href="/journal" data-cursor-expand className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImagePlaceholder
                    tone={a.tone}
                    motif={a.motif}
                    className="absolute inset-0"
                    zoom
                  />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal mt-5 leading-snug group-hover:text-andaman-deep transition-colors duration-300">
                  {a.title}
                </h3>
                <span className="eyebrow inline-block mt-3 text-charcoal/50">
                  Read the piece →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

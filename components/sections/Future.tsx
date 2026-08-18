"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const pillars = ["Freedom", "Connection", "Nature", "Creativity", "Peace"];

export default function Future() {
  return (
    <section className="relative bg-charcoal text-ivory px-6 sm:px-10 py-32 sm:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <ImagePlaceholder tone="charcoal" motif="horizon" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />

      <div className="relative z-10 max-w-editorial mx-auto text-center">
        <RevealText className="mx-auto">
          <h2 className="font-serif leading-[1.05] tracking-tight text-[10vw] sm:text-6xl lg:text-7xl text-balance max-w-4xl mx-auto">
            One day, we want to own an island.
          </h2>
        </RevealText>

        <Reveal delay={0.2} className="mt-10 max-w-2xl mx-auto space-y-4 text-ivory/65 text-base sm:text-lg leading-relaxed">
          <p>Not simply to build another resort.</p>
          <p>
            But to create a place where people can work remotely, reconnect
            with nature, meet interesting people, build ideas, rest, create
            and finally have enough space to think.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-14">
          <p className="eyebrow text-ivory/40 mb-6">A modern island built around</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {pillars.map((p, i) => (
              <span key={p} className="flex items-center gap-x-3">
                <span className="font-serif italic text-2xl sm:text-3xl text-andaman-soft">
                  {p}
                </span>
                {i < pillars.length - 1 && (
                  <span className="text-ivory/20">·</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-16">
          <p className="eyebrow text-ivory/40">This is the direction.</p>
        </Reveal>
      </div>
    </section>
  );
}

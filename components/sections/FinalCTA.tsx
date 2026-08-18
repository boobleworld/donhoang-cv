"use client";

import { Reveal, RevealText } from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-ivory px-6 sm:px-10 py-32 sm:py-48">
      <div className="max-w-editorial mx-auto text-center">
        <RevealText className="mx-auto">
          <h2 className="font-serif text-charcoal leading-[1.02] tracking-tight text-[11vw] sm:text-7xl lg:text-8xl text-balance max-w-4xl mx-auto">
            What are you building next?
          </h2>
        </RevealText>

        <Reveal delay={0.2} className="mt-8 max-w-lg mx-auto">
          <p className="text-charcoal/60 text-base sm:text-lg leading-relaxed">
            Whether you&rsquo;re looking to invest, build, partner or simply
            discover what we&rsquo;re creating — we&rsquo;d love to hear from
            you.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:hello@booble.life"
            data-cursor-expand
            className="eyebrow inline-flex items-center justify-center gap-2 bg-charcoal text-ivory px-8 py-4 hover:bg-andaman-deep transition-colors duration-400 ease-premium"
          >
            Start a conversation
          </a>
          <a
            href="#ecosystem"
            data-cursor-expand
            className="eyebrow inline-flex items-center justify-center gap-2 border border-charcoal/30 text-charcoal px-8 py-4 hover:border-charcoal transition-colors duration-400 ease-premium"
          >
            Explore Booble
          </a>
        </Reveal>
      </div>
    </section>
  );
}

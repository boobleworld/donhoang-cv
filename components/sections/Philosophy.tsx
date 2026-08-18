"use client";

import { Reveal, RevealText } from "@/components/Reveal";

const words = ["Space", "Nature", "Connection", "Curiosity", "Movement", "Freedom"];

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-ivory-soft px-6 sm:px-10 py-32 sm:py-48">
      <div className="max-w-editorial mx-auto text-center">
        <RevealText className="mx-auto">
          <h2 className="font-serif text-charcoal leading-[0.98] tracking-tight">
            <span className="block text-[13vw] sm:text-7xl lg:text-8xl">
              Less noise.
            </span>
            <span className="block text-[13vw] sm:text-7xl lg:text-8xl italic text-andaman-deep">
              More aliveness.
            </span>
          </h2>
        </RevealText>

        <Reveal delay={0.2} className="mt-16 sm:mt-20">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 sm:gap-x-5">
            {words.map((w, i) => (
              <span key={w} className="flex items-center gap-x-3 sm:gap-x-5">
                <span className="font-serif text-xl sm:text-2xl text-charcoal/70">
                  {w}
                </span>
                {i < words.length - 1 && (
                  <span className="text-charcoal/25">·</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-16 sm:mt-20 max-w-xl mx-auto space-y-4">
          <p className="text-charcoal/70 leading-relaxed">
            We choose ventures that earn their place in the world. They
            should create value for people, for places and for the
            communities around them.
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-charcoal">
            The goal isn&rsquo;t to build more. The goal is to build better.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

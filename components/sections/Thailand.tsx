"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Thailand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="thailand"
      ref={ref}
      className="relative min-h-[100vh] w-full overflow-hidden bg-charcoal text-ivory flex flex-col justify-end"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 h-[124%] -top-[12%]">
        <ImagePlaceholder
          tone="dusk"
          motif="path"
          className="h-full w-full"
          label="Krabi limestone karsts rising from the Andaman Sea"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/60" />

      <div className="relative z-10 px-6 sm:px-10 pt-40 sm:pt-56 pb-20 sm:pb-28">
        <div className="max-w-editorial mx-auto">
          <Reveal>
            <p className="eyebrow text-andaman-soft mb-6">Where It Begins</p>
          </Reveal>
          <RevealText>
            <h2 className="font-serif text-[18vw] sm:text-8xl lg:text-9xl leading-none tracking-tight">
              Thailand.
            </h2>
          </RevealText>

          <Reveal delay={0.15} className="mt-10 max-w-2xl">
            <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance">
              A place that changed the way we see opportunity.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-8 max-w-xl space-y-4 text-ivory/70 text-base sm:text-lg leading-relaxed">
            <p>Thailand is more than our market.</p>
            <p>
              It is where we learned how powerful the combination of
              destination, hospitality, technology and community can become.
            </p>
            <p>
              From the Andaman Sea to the islands of the Gulf of Thailand, we
              are building our first ecosystem of ventures.
            </p>
          </Reveal>

          <Reveal delay={0.35} className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <p className="eyebrow text-ivory/50 tracking-widest2">
              Krabi · Phuket · Koh Phi Phi · Koh Tao · Thailand
            </p>
            <a
              href="#ventures"
              data-cursor-expand
              className="eyebrow inline-flex items-center gap-2 text-ivory border-b border-ivory/40 pb-1 hover:border-ivory transition-colors duration-300 w-fit"
            >
              Explore Thailand →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

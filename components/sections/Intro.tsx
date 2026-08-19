"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="relative bg-offwhite px-6 sm:px-10 py-28 sm:py-40 overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 sm:-top-20 left-1/2 -translate-x-1/2 font-display font-extrabold text-pastel/50 text-[42vw] leading-none"
      >
        01
      </span>

      <div className="relative max-w-editorial mx-auto">
        <Reveal>
          <p className="eyebrow text-steel-deep mb-8">01 — Über uns</p>
        </Reveal>

        <RevealText>
          <h2 className="font-display font-semibold text-ink text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl text-balance">
            Ihre Bewegung.
            <br />
            Unsere Mission.
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 sm:mt-24 items-start">
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-1">
            <div className="space-y-5 text-ink/70 text-base sm:text-lg leading-relaxed max-w-md">
              <p>
                Die Sportpraxis Stuttgart verbindet moderne Orthopädie,
                Unfallchirurgie und innovative Behandlungsmethoden zu einem
                ganzheitlichen Konzept.
              </p>
              <p className="text-ink font-medium">
                Konservativ. Operativ. Ästhetisch. Immer auf Ihre Bewegung
                ausgerichtet.
              </p>
              <p>
                Unser Team begleitet Sie mit medizinischer Präzision und
                persönlicher Nähe — von der ersten Diagnose bis zur
                vollständigen Genesung.
              </p>
            </div>
          </Reveal>

          <motion.div
            style={{ y: imgY }}
            className="lg:col-span-6 lg:col-start-7 relative h-[60vh] sm:h-[70vh]"
          >
            <ImagePlaceholder
              tone="medical"
              motif="horizon"
              className="h-full w-full"
              label="Sportpraxis Stuttgart — moderne Diagnostik"
              zoom
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const words = [
  { word: "Ankommen.", tone: "pastel" as const, motif: "horizon" as const },
  { word: "Behandeln.", tone: "medical" as const, motif: "pulse" as const },
  { word: "Bewegen.", tone: "steel" as const, motif: "wave" as const },
];

function PraxisFrame({ word, tone, motif }: { word: string; tone: "pastel" | "medical" | "steel"; motif: "horizon" | "pulse" | "wave" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.75, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.15, 0.4], [40, 0]);
  const textColor = tone === "pastel" ? "text-ink" : "text-offwhite";

  return (
    <div ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0 h-[124%] w-full">
        <ImagePlaceholder tone={tone} motif={motif} className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-steel-deep/25" />
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 h-full w-full flex items-center justify-center"
      >
        <h3 className={`font-display font-extrabold ${textColor} text-[16vw] sm:text-[10vw] tracking-tight`}>
          {word}
        </h3>
      </motion.div>
    </div>
  );
}

export default function Praxis() {
  return (
    <section id="praxis" className="relative bg-steel-deep">
      {words.map((w) => (
        <PraxisFrame key={w.word} word={w.word} tone={w.tone} motif={w.motif} />
      ))}
    </section>
  );
}

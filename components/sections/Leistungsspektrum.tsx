"use client";

import { motion } from "framer-motion";
import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const panels = [
  {
    n: "01",
    title: ["Konservative", "Therapie"],
    tone: "pastel" as const,
    textTone: "text-ink",
  },
  {
    n: "02",
    title: ["Operative", "Therapie"],
    tone: "medical" as const,
    textTone: "text-offwhite",
  },
  {
    n: "03",
    title: ["Ästhetische", "Medizin"],
    tone: "steel" as const,
    textTone: "text-offwhite",
  },
];

export default function Leistungsspektrum() {
  return (
    <section id="leistungen" className="bg-steel-deep px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <RevealText>
          <h2 className="font-display font-semibold text-offwhite text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl text-balance">
            Unser
            <br />
            Leistungsspektrum.
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {panels.map((p, i) => (
            <Reveal key={p.n} delay={0.1 * i} className="group">
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative h-[70vh] sm:h-[75vh] overflow-hidden cursor-pointer"
                data-cursor-expand
              >
                <ImagePlaceholder tone={p.tone} motif="none" className="absolute inset-0 h-full w-full" zoom />
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                />

                <span
                  aria-hidden
                  className={`absolute top-6 right-6 font-display font-extrabold text-[7rem] leading-none opacity-15 ${p.textTone}`}
                >
                  {p.n}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <motion.div
                    variants={{ rest: { y: 0 }, hover: { y: -12 } }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className={`eyebrow mb-4 ${p.textTone === "text-ink" ? "text-ink/60" : "text-offwhite/70"}`}>
                      {p.n}
                    </p>
                    <h3 className={`font-display font-semibold text-3xl sm:text-4xl leading-[1.05] ${p.textTone}`}>
                      {p.title[0]}
                      <br />
                      {p.title[1]}
                    </h3>
                    <motion.span
                      variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`mt-6 inline-flex eyebrow items-center gap-2 ${p.textTone === "text-ink" ? "text-ink" : "text-offwhite"}`}
                    >
                      Mehr entdecken →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

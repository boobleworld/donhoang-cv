"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealText } from "@/components/Reveal";

const reviews = [
  {
    quote:
      "Schnelle und freundliche Behandlung. Ich habe mich vom ersten Termin an sehr gut aufgehoben gefühlt.",
    name: "M. Schneider",
  },
  {
    quote:
      "Kompetente Beratung und eine Therapie, die wirklich geholfen hat. Absolute Empfehlung.",
    name: "T. Brenner",
  },
  {
    quote:
      "Modernes Ambiente, kurze Wartezeiten und ein Ärzteteam, das sich Zeit nimmt.",
    name: "S. Kessler",
  },
  {
    quote:
      "Nach meiner Sportverletzung war ich hier bestens aufgehoben — schnelle Diagnose, klarer Behandlungsplan.",
    name: "F. Albrecht",
  },
  {
    quote:
      "Ein Praxisteam, das mit Herz und Fachwissen arbeitet. Ich komme sehr gerne wieder.",
    name: "N. Hartmann",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <section className="bg-mist px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <RevealText>
          <h2 className="font-display font-semibold text-ink text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-3xl">
            Was Patienten
            <br />
            über uns sagen.
          </h2>
        </RevealText>

        <Reveal delay={0.15} className="mt-16 sm:mt-20 max-w-3xl">
          <div className="relative bg-offwhite shadow-[0_20px_60px_-25px_rgba(47,111,145,0.35)] p-10 sm:p-14 min-h-[280px]">
            <span className="font-display font-extrabold text-steel/25 text-6xl sm:text-7xl leading-none">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-steel-deep mb-5 tracking-[0.3em] text-sm">★★★★★</p>
                <p className="font-display text-ink text-xl sm:text-2xl leading-relaxed max-w-xl">
                  {reviews[index].quote}
                </p>
                <p className="eyebrow text-ink/50 mt-8">{reviews[index].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={() => go(-1)}
              data-cursor-expand
              aria-label="Vorherige Bewertung"
              className="eyebrow text-steel-deep hover:text-steel-deep/60 transition-colors duration-300"
            >
              ←
            </button>
            <span className="eyebrow text-ink/50">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(1)}
              data-cursor-expand
              aria-label="Nächste Bewertung"
              className="eyebrow text-steel-deep hover:text-steel-deep/60 transition-colors duration-300"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

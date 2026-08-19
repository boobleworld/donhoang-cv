"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const treatments = [
  {
    n: "01",
    title: "Fokussierte Stoßwellentherapie",
    text: "Gezielte Schallwellen regen die Selbstheilung an und lindern chronische Beschwerden an Sehnen und Muskeln.",
  },
  {
    n: "02",
    title: "Magnetfeldtherapie",
    text: "Sanfte elektromagnetische Impulse fördern die Durchblutung und beschleunigen die Regeneration des Gewebes.",
  },
  {
    n: "03",
    title: "Akupunktur",
    text: "Traditionelle Nadeltherapie zur Schmerzlinderung und Aktivierung körpereigener Regulationsmechanismen.",
  },
  {
    n: "04",
    title: "ACP / PRP Therapie",
    text: "Körpereigenes Plasma mit konzentrierten Wachstumsfaktoren unterstützt die natürliche Heilung von Gelenken und Sehnen.",
  },
  {
    n: "05",
    title: "Stammzellbehandlung",
    text: "Regenerative Zelltherapie zur nachhaltigen Behandlung von Knorpel- und Gelenkschäden.",
  },
  {
    n: "06",
    title: "Manuelle Medizin",
    text: "Gezielte Handgriffe lösen Blockaden und stellen die natürliche Beweglichkeit von Gelenken und Wirbelsäule wieder her.",
  },
];

export default function StickyTherapy() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const step = 1 / treatments.length;
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(treatments.length - 1, Math.floor(v / step));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section id="therapie" ref={ref} className="relative bg-mist" style={{ height: `${treatments.length * 90}vh` }}>
      <div className="sticky top-0 h-[100svh] w-full flex items-center overflow-hidden px-6 sm:px-10">
        <div className="max-w-editorial mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-steel-deep mb-6">04 — Behandlungen</p>
            <h2 className="font-display font-semibold text-ink text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Konservative
              <br />
              Therapie
            </h2>
            <p className="mt-6 text-ink/65 leading-relaxed max-w-sm">
              Moderne, nicht-operative Behandlungsmethoden zur Schmerzlinderung
              und Regeneration — individuell auf Ihre Bewegung abgestimmt.
            </p>

            <ul className="mt-10 hidden sm:flex flex-col gap-2">
              {treatments.map((t, i) => (
                <li key={t.n} className="flex items-center gap-3">
                  <span
                    className={`h-px transition-all duration-500 ease-premium ${
                      active === i ? "w-8 bg-steel-deep" : "w-4 bg-ink/20"
                    }`}
                  />
                  <span className={`eyebrow transition-colors duration-500 ${active === i ? "text-steel-deep" : "text-ink/35"}`}>
                    {t.n}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 relative h-[55vh] sm:h-[60vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
                animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                exit={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <ImagePlaceholder
                  tone={active % 2 === 0 ? "medical" : "pastel"}
                  motif="pulse"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                  <span
                    aria-hidden
                    className="font-display font-extrabold text-offwhite/25 text-[8rem] sm:text-[10rem] leading-none absolute top-4 right-6"
                  >
                    {treatments[active].n}
                  </span>
                  <div className="relative max-w-lg">
                    <h3 className="font-display font-semibold text-offwhite text-3xl sm:text-4xl leading-[1.1]">
                      {treatments[active].title}
                    </h3>
                    <p className="mt-4 text-offwhite/85 leading-relaxed">
                      {treatments[active].text}
                    </p>
                    <a
                      href="#kontakt"
                      data-cursor-expand
                      className="mt-6 inline-flex eyebrow items-center gap-2 text-offwhite border-b border-offwhite/40 pb-1 hover:border-offwhite transition-colors duration-300"
                    >
                      Mehr erfahren →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

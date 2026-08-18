"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      <motion.div style={{ y: imgY }} className="absolute inset-0 h-[122%] w-full">
        <ImagePlaceholder
          tone="ocean"
          motif="wave"
          className="h-full w-full"
          label="Andaman Sea, Thailand — coastline at first light"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/50" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full w-full flex flex-col justify-end px-6 sm:px-10 pb-20 sm:pb-24"
      >
        <div className="max-w-editorial mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow text-ivory/80 mb-6"
          >
            Thailand · Real-World Ventures · Life
          </motion.p>

          <h1 className="font-serif text-ivory leading-[0.98] tracking-tight text-balance">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[15vw] sm:text-[9vw] lg:text-[7vw]"
            >
              Build places.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[15vw] sm:text-[9vw] lg:text-[7vw] italic text-andaman-soft"
            >
              Create freedom.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl"
          >
            <p className="text-ivory/85 text-base sm:text-lg leading-relaxed">
              booble.Life builds businesses, places and experiences for a more
              intentional way of living.
            </p>
            <p className="text-ivory/60 text-sm sm:text-base mt-2 tracking-wide">
              Thailand first. Built to expand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#ecosystem"
              data-cursor-expand
              className="eyebrow inline-flex items-center justify-center gap-2 bg-ivory text-charcoal px-7 py-4 hover:bg-andaman hover:text-ivory transition-colors duration-400 ease-premium"
            >
              Explore the world of booble
            </a>
            <a
              href="#final-cta"
              data-cursor-expand
              className="eyebrow inline-flex items-center justify-center gap-2 border border-ivory/50 text-ivory px-7 py-4 hover:border-ivory hover:bg-ivory/10 transition-colors duration-400 ease-premium"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-6 sm:right-10 z-10 flex items-center gap-3 text-ivory/70"
      >
        <span className="eyebrow hidden sm:block">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

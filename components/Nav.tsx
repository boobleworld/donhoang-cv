"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#top" },
  { label: "Sprechzeiten", href: "#kontakt" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
          scrolled && !open
            ? "bg-steel-deep/95 backdrop-blur-md border-b border-offwhite/10"
            : "bg-steel-deep"
        }`}
      >
        <div className="max-w-editorial mx-auto flex items-center justify-between px-6 sm:px-10 h-20">
          <a
            href="#top"
            className="font-display font-semibold text-offwhite leading-[1.05] tracking-tight text-sm sm:text-base"
          >
            SPORTPRAXIS
            <br />
            STUTTGART
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-cursor-expand
                className="eyebrow text-offwhite/70 hover:text-offwhite transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#kontakt"
              data-cursor-expand
              className="eyebrow inline-flex items-center gap-2 bg-pastel text-steel-deep px-5 py-3 hover:bg-offwhite transition-all duration-400 ease-premium"
            >
              Termin buchen →
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative z-10 h-10 w-10 flex flex-col items-center justify-center gap-[6px]"
          >
            <span
              className={`block h-px w-6 bg-offwhite transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-offwhite transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-steel-deep text-offwhite flex flex-col justify-between px-6 sm:px-10 pt-28 pb-10 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-medium text-4xl sm:text-5xl py-3 border-b border-offwhite/10"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="eyebrow inline-flex w-fit items-center gap-2 bg-pastel text-steel-deep px-6 py-4"
              >
                Termin buchen →
              </a>
              <p className="eyebrow text-offwhite/40">Stuttgart · Orthopädie · Sportmedizin</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

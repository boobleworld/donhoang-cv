"use client";

import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-steel-deep px-6 sm:px-10 py-28 sm:py-40 overflow-hidden">
      <div className="max-w-editorial mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-end">
        <div className="lg:col-span-7">
          <RevealText>
            <h2 className="font-display font-semibold text-offwhite text-[11vw] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
              Wieder in
              <br />
              Bewegung.
            </h2>
          </RevealText>

          <Reveal delay={0.2} className="mt-8">
            <p className="text-offwhite/75 text-lg max-w-md">
              Vereinbaren Sie jetzt Ihren Termin in der Sportpraxis Stuttgart.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <a
              href="#"
              data-cursor-expand
              className="eyebrow inline-flex items-center gap-2 bg-pastel text-steel-deep px-8 py-5 hover:bg-offwhite transition-colors duration-400 ease-premium"
            >
              Online Termin buchen →
            </a>
          </Reveal>

          <Reveal delay={0.4} className="mt-14 space-y-1">
            <a href="tel:+497114141205" className="block font-display text-offwhite text-2xl sm:text-3xl tracking-tight hover:text-pastel transition-colors duration-300">
              0711 / 4141205
            </a>
            <p className="text-offwhite/70 mt-4 leading-relaxed">
              Sportpraxis Stuttgart
              <br />
              Bockelstraße 146
              <br />
              70619 Stuttgart
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="relative h-[40vh] sm:h-[45vh] overflow-hidden">
            <ImagePlaceholder tone="medical" motif="grid" className="h-full w-full" label="Anfahrt · Bockelstraße 146, Stuttgart" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

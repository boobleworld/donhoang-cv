"use client";

import { Reveal, RevealText, RevealScale } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const doctors = [
  {
    name: "Gerhard Zeithammel",
    specialties: "Chirurgie · Orthopädie · Unfallchirurgie",
    tone: "pastel" as const,
  },
  {
    name: "Florian Pfalzer",
    specialties: "Orthopädie · Unfallchirurgie · Spezielle Unfallchirurgie",
    tone: "medical" as const,
  },
];

export default function Aerzte() {
  return (
    <section id="aerzte" className="bg-mist px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <RevealText>
          <h2 className="font-display font-semibold text-ink text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
            Die Ärzte.
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 mt-16 sm:mt-24">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name} delay={0.1 * i}>
              <RevealScale delay={0.05 * i}>
                <div className="relative h-[62vh] sm:h-[70vh] overflow-hidden group" data-cursor-expand>
                  <ImagePlaceholder tone={doc.tone} motif="none" className="h-full w-full" zoom />
                </div>
              </RevealScale>
              <div className="mt-6">
                <p className="eyebrow text-steel-deep mb-2">Dr. med.</p>
                <h3 className="font-display font-semibold text-ink text-3xl sm:text-4xl tracking-tight">
                  {doc.name}
                </h3>
                <p className="mt-3 text-ink/60 text-sm sm:text-base">{doc.specialties}</p>
                <a
                  href="#kontakt"
                  data-cursor-expand
                  className="mt-6 inline-flex eyebrow items-center gap-2 text-steel-deep border-b border-steel-deep/30 pb-1 hover:border-steel-deep transition-colors duration-300"
                >
                  Profil entdecken →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

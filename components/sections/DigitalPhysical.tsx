"use client";

import { Reveal, RevealScale } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const chips = [
  "Hospitality",
  "Real Estate",
  "Tourism",
  "Technology",
  "Wellness",
  "Lifestyle",
];

export default function DigitalPhysical() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 sm:px-10 py-24 sm:py-32 lg:py-40 flex items-center">
          <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-16">
            <Reveal>
              <p className="eyebrow text-andaman-soft mb-8">
                From Digital to Physical
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                We started online. Now we&rsquo;re building in the real
                world.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 space-y-5 text-ivory/65 text-base sm:text-lg leading-relaxed">
              <p>
                booble began in the digital economy — building websites,
                brands, software, marketing systems and growth engines.
              </p>
              <p>
                Today, we apply that experience to physical businesses.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
              {chips.map((c) => (
                <span
                  key={c}
                  className="eyebrow border border-ivory/20 px-4 py-2 text-ivory/70"
                >
                  {c}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.4} className="mt-10">
              <p className="font-serif italic text-xl sm:text-2xl text-andaman-soft">
                Digital expertise. Real-world execution.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="min-h-[60vh] lg:min-h-0">
          <RevealScale className="h-full w-full">
            <ImagePlaceholder
              tone="dusk"
              motif="arch"
              className="h-full w-full min-h-[60vh]"
              label="Tropical architecture meets the ocean — booble sites, Thailand"
            />
          </RevealScale>
        </div>
      </div>
    </section>
  );
}

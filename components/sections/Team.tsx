"use client";

import Image from "next/image";
import { Reveal, RevealText } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const team = [
  { name: "Frau Pucelj", role: "Praxisteam", tone: "pastel" as const, photo: "/images/team/pucelj.jpg", span: "sm:col-span-4 sm:row-span-2 h-[46vh] sm:h-full" },
  { name: "Frau Horváth", role: "Praxisteam", tone: "medical" as const, photo: "/images/team/horvath.jpg", span: "sm:col-span-3 h-[32vh]" },
  { name: "Petra Lang", role: "MFA", tone: "mist" as const, span: "sm:col-span-2 h-[32vh]" },
  { name: "Julia Ströbele", role: "Praxisteam", tone: "steel" as const, span: "sm:col-span-3 h-[38vh]" },
  { name: "Melanie Hauff", role: "MFA", tone: "pastel" as const, span: "sm:col-span-2 h-[38vh]" },
  { name: "Anna Berger", role: "Physiotherapie", tone: "medical" as const, span: "sm:col-span-4 h-[32vh]" },
];

export default function Team() {
  return (
    <section id="team" className="bg-offwhite px-6 sm:px-10 py-28 sm:py-40">
      <div className="max-w-editorial mx-auto">
        <RevealText>
          <h2 className="font-display font-semibold text-ink text-[9vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-3xl">
            Menschen, die
            <br />
            sich kümmern.
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-9 gap-4 sm:gap-5 mt-16 sm:mt-24 sm:auto-rows-[32vh]">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.06 * i} className={member.span}>
              <div
                className="relative h-full w-full overflow-hidden group"
                data-cursor-expand
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover object-top transition-transform duration-[1400ms] ease-premium group-hover:scale-[1.06]"
                  />
                ) : (
                  <ImagePlaceholder tone={member.tone} motif="none" className="h-full w-full" zoom />
                )}
                <div className="absolute inset-0 bg-steel-deep/0 group-hover:bg-steel-deep/55 transition-colors duration-500 ease-premium flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-premium">
                    <p className="font-display font-semibold text-offwhite text-xl sm:text-2xl">
                      {member.name}
                    </p>
                    <p className="eyebrow text-offwhite/75 mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

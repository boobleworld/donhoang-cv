"use client";

type Tone = "ocean" | "charcoal" | "sand" | "dusk" | "ivory";
type Motif = "horizon" | "wave" | "arch" | "grid" | "path" | "none";

const tones: Record<Tone, string> = {
  ocean: "linear-gradient(155deg, #17302E 0%, #2C6863 46%, #6FAFAA 100%)",
  charcoal: "linear-gradient(155deg, #0E0F12 0%, #1F2124 55%, #2B2D31 100%)",
  sand: "linear-gradient(155deg, #A9976F 0%, #C7B79C 50%, #DCD0BA 100%)",
  dusk: "linear-gradient(155deg, #2B2D31 0%, #4A5A56 55%, #6FAFAA 100%)",
  ivory: "linear-gradient(155deg, #EEE7D9 0%, #F6F2EA 55%, #FBF9F5 100%)",
};

const textOn: Record<Tone, string> = {
  ocean: "text-ivory/70",
  charcoal: "text-ivory/60",
  sand: "text-charcoal/60",
  dusk: "text-ivory/70",
  ivory: "text-charcoal/50",
};

function Motif({ motif, tone }: { motif: Motif; tone: Tone }) {
  const stroke = tone === "sand" || tone === "ivory" ? "#15161A" : "#F6F2EA";
  const opacity = 0.16;
  if (motif === "none") return null;
  if (motif === "horizon") {
    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <line x1="0" y1="62%" x2="100%" y2="58%" stroke={stroke} strokeOpacity={opacity} strokeWidth="1" />
      </svg>
    );
  }
  if (motif === "wave") {
    return (
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M0,60% C 20% 50%, 35% 70%, 55% 58% C 75% 46%, 85% 66%, 100% 55%" fill="none" stroke={stroke} strokeOpacity={opacity} strokeWidth="1" />
      </svg>
    );
  }
  if (motif === "arch") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M35,85 L35,45 A15,15 0 0 1 65,45 L65,85" fill="none" stroke={stroke} strokeOpacity={opacity} strokeWidth="0.6" />
      </svg>
    );
  }
  if (motif === "grid") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="33" x2="100" y2="33" stroke={stroke} strokeOpacity={opacity} strokeWidth="0.4" />
        <line x1="0" y1="66" x2="100" y2="66" stroke={stroke} strokeOpacity={opacity} strokeWidth="0.4" />
        <line x1="33" y1="0" x2="33" y2="100" stroke={stroke} strokeOpacity={opacity} strokeWidth="0.4" />
        <line x1="66" y1="0" x2="66" y2="100" stroke={stroke} strokeOpacity={opacity} strokeWidth="0.4" />
      </svg>
    );
  }
  if (motif === "path") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M10,95 C 30,70 25,40 55,30 C 75,23 80,10 92,5" fill="none" stroke={stroke} strokeOpacity={opacity} strokeWidth="0.6" />
      </svg>
    );
  }
  return null;
}

export default function ImagePlaceholder({
  tone = "ocean",
  motif = "horizon",
  label,
  index,
  className = "",
  zoom = false,
}: {
  tone?: Tone;
  motif?: Motif;
  label?: string;
  index?: string;
  className?: string;
  zoom?: boolean;
}) {
  const needsPositionContext = !/\b(absolute|fixed|sticky|relative)\b/.test(className);

  return (
    <div
      className={`overflow-hidden ${needsPositionContext ? "relative" : ""} ${className}`}
    >

      <div
        className={`grain absolute inset-0 transition-transform duration-[1400ms] ease-premium ${
          zoom ? "group-hover:scale-[1.06]" : ""
        }`}
        style={{ background: tones[tone] }}
      >
        <Motif motif={motif} tone={tone} />
      </div>
      {(label || index) && (
        <div className={`absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 sm:p-5 ${textOn[tone]}`}>
          {label && (
            <span className="eyebrow max-w-[70%] leading-snug">{label}</span>
          )}
          {index && <span className="eyebrow">{index}</span>}
        </div>
      )}
    </div>
  );
}

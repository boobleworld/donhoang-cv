"use client";

type Tone = "steel" | "medical" | "pastel" | "mist" | "offwhite";
type Motif = "horizon" | "wave" | "pulse" | "grid" | "path" | "none";

const tones: Record<Tone, string> = {
  steel: "linear-gradient(155deg, #1F4E66 0%, #2F6F91 46%, #4F89A8 100%)",
  medical: "linear-gradient(155deg, #2F6F91 0%, #4F89A8 50%, #6D9FBA 100%)",
  pastel: "linear-gradient(155deg, #9CBBCC 0%, #B9D1DF 55%, #E8F0F4 100%)",
  mist: "linear-gradient(155deg, #D9E6EC 0%, #E8F0F4 55%, #F7F6F4 100%)",
  offwhite: "linear-gradient(155deg, #EFEDE9 0%, #F7F6F4 55%, #FBFAF9 100%)",
};

const textOn: Record<Tone, string> = {
  steel: "text-offwhite/70",
  medical: "text-offwhite/70",
  pastel: "text-ink/60",
  mist: "text-ink/50",
  offwhite: "text-ink/45",
};

function Motif({ motif, tone }: { motif: Motif; tone: Tone }) {
  const stroke = tone === "pastel" || tone === "mist" || tone === "offwhite" ? "#2F6F91" : "#E8F0F4";
  const opacity = 0.18;
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
  if (motif === "pulse") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M0,55 L20,55 L28,35 L36,72 L44,45 L50,55 L100,55"
          fill="none"
          stroke={stroke}
          strokeOpacity={opacity}
          strokeWidth="0.7"
          vectorEffect="non-scaling-stroke"
        />
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
  tone = "steel",
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

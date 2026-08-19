import Link from "next/link";

const columns = [
  {
    title: "Praxis",
    links: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Ärzte", href: "#aerzte" },
      { label: "Team", href: "#team" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Impressum", href: "/impressum" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-steel-deep text-offwhite px-6 sm:px-10 pt-20 sm:pt-28 pb-10 overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-display font-extrabold text-offwhite/5 text-[16vw] leading-none tracking-tight"
      >
        SPORTPRAXIS STUTTGART
      </span>

      <div className="relative max-w-editorial mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 sm:pb-20 border-b border-offwhite/10">
          <div className="lg:col-span-6">
            <p className="font-display font-semibold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              SPORTPRAXIS
              <br />
              STUTTGART
            </p>
            <p className="text-offwhite/60 text-lg mt-4">
              Orthopädie · Unfallchirurgie · Sportmedizin
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-offwhite/40 mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        data-cursor-expand
                        className="text-offwhite/70 hover:text-offwhite transition-colors duration-300 text-sm leading-relaxed"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
          <p className="eyebrow text-offwhite/40">
            Bockelstraße 146 · 70619 Stuttgart
          </p>
          <p className="eyebrow text-offwhite/40">© {new Date().getFullYear()} Sportpraxis Stuttgart</p>
        </div>
      </div>
    </footer>
  );
}

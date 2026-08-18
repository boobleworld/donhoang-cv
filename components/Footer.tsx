import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Ventures", href: "#ecosystem" },
      { label: "Projects", href: "#ventures" },
      { label: "Thailand", href: "#thailand" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Build with us", href: "#ways-in" },
      { label: "Partners", href: "#ways-in" },
      { label: "Start a conversation", href: "#final-cta" },
    ],
  },
  {
    title: "Invest",
    links: [
      { label: "Why Thailand", href: "#thailand" },
      { label: "Opportunities", href: "#ways-in" },
      { label: "Investor information", href: "#ways-in" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "#story" },
      { label: "Our ethos", href: "#philosophy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory px-6 sm:px-10 pt-20 sm:pt-28 pb-10">
      <div className="max-w-editorial mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 sm:pb-20 border-b border-ivory/10">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl sm:text-5xl tracking-tight">
              booble<span className="text-andaman-soft">.</span>Life
            </p>
            <p className="font-serif italic text-ivory/60 text-lg sm:text-xl mt-4">
              Build places. Create freedom.
            </p>
            <div className="flex gap-6 mt-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-expand
                className="eyebrow text-ivory/50 hover:text-ivory transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-expand
                className="eyebrow text-ivory/50 hover:text-ivory transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-ivory/40 mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        data-cursor-expand
                        className="text-ivory/70 hover:text-ivory transition-colors duration-300 text-sm leading-relaxed"
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
          <p className="eyebrow text-ivory/40">
            Thailand · Andaman Sea · Building globally
          </p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="eyebrow text-ivory/40 hover:text-ivory/70 transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/legal/terms" className="eyebrow text-ivory/40 hover:text-ivory/70 transition-colors duration-300">
              Terms
            </Link>
            <Link href="/legal" className="eyebrow text-ivory/40 hover:text-ivory/70 transition-colors duration-300">
              Legal information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

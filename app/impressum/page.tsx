import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, RevealText } from "@/components/Reveal";

export default function ImpressumPage() {
  return (
    <main>
      <Nav />
      <section className="bg-offwhite px-6 sm:px-10 pt-40 sm:pt-52 pb-32 sm:pb-40 min-h-[70vh]">
        <div className="max-w-editorial mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-steel-deep mb-8">Rechtliches</p>
          </Reveal>
          <RevealText>
            <h1 className="font-display font-semibold text-ink text-5xl sm:text-6xl leading-[1.05] tracking-tight">
              Impressum.
            </h1>
          </RevealText>
          <Reveal delay={0.2} className="mt-10 space-y-4 text-ink/70 leading-relaxed">
            <p>
              Sportpraxis Stuttgart
              <br />
              Bockelstraße 146
              <br />
              70619 Stuttgart
            </p>
            <p>Telefon: 0711 / 4141205</p>
            <p>
              Verantwortlich für den Inhalt: Dr. med. Gerhard Zeithammel,
              Dr. med. Florian Pfalzer
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 text-ink border-b border-ink/30 pb-1 hover:border-ink transition-colors duration-300"
            >
              ← Zurück zur Startseite
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

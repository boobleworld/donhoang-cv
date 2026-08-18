import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, RevealText } from "@/components/Reveal";

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <section className="bg-ivory px-6 sm:px-10 pt-40 sm:pt-52 pb-32 sm:pb-40 min-h-[70vh]">
        <div className="max-w-editorial mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow text-andaman-deep mb-8">Legal</p>
          </Reveal>
          <RevealText>
            <h1 className="font-serif text-charcoal text-5xl sm:text-6xl leading-[1.05] tracking-tight">
              Terms of Use.
            </h1>
          </RevealText>
          <Reveal delay={0.2} className="mt-10 space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              These terms will govern the use of the booble.Life website and
              related digital properties.
            </p>
            <p>
              A complete set of terms is being finalized alongside our legal
              counsel. For any questions in the meantime, please get in
              touch directly.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <Link
              href="/"
              className="eyebrow inline-flex items-center gap-2 text-charcoal border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300"
            >
              ← Back to booble.Life
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

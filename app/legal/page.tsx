import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, RevealText } from "@/components/Reveal";

export default function LegalPage() {
  return (
    <main>
      <Nav />
      <section className="bg-ivory px-6 sm:px-10 pt-40 sm:pt-52 pb-32 sm:pb-40 min-h-[70vh]">
        <div className="max-w-editorial mx-auto">
          <Reveal>
            <p className="eyebrow text-andaman-deep mb-8">Legal</p>
          </Reveal>
          <RevealText>
            <h1 className="font-serif text-charcoal text-[10vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-3xl">
              Legal information.
            </h1>
          </RevealText>
          <Reveal delay={0.2} className="mt-10 space-y-4 max-w-md">
            <Link
              href="/legal/privacy"
              className="block eyebrow text-charcoal border-b border-charcoal/15 pb-4 hover:text-andaman-deep transition-colors duration-300"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/legal/terms"
              className="block eyebrow text-charcoal border-b border-charcoal/15 pb-4 hover:text-andaman-deep transition-colors duration-300"
            >
              Terms of Use →
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

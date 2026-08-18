import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, RevealText } from "@/components/Reveal";

export default function JournalPage() {
  return (
    <main>
      <Nav />
      <section className="bg-ivory px-6 sm:px-10 pt-40 sm:pt-52 pb-32 sm:pb-40 min-h-[70vh]">
        <div className="max-w-editorial mx-auto">
          <Reveal>
            <p className="eyebrow text-andaman-deep mb-8">Journal</p>
          </Reveal>
          <RevealText>
            <h1 className="font-serif text-charcoal text-[10vw] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance max-w-3xl">
              Ideas worth exploring, coming soon.
            </h1>
          </RevealText>
          <Reveal delay={0.2} className="mt-8 max-w-xl">
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
              We&rsquo;re building the booble.Life journal — essays on
              hospitality, place-making, Thailand and the future of
              intentional living. Check back soon.
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

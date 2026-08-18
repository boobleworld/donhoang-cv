"use client";

import { Reveal, RevealScale } from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Story() {
  return (
    <section id="story" className="bg-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 min-h-[55vh] lg:min-h-0">
          <RevealScale className="h-full w-full">
            <ImagePlaceholder
              tone="sand"
              motif="path"
              className="h-full w-full min-h-[55vh]"
              label="A quiet morning, Koh Tao — the beginning of a home"
            />
          </RevealScale>
        </div>

        <div className="order-1 lg:order-2 px-6 sm:px-10 py-24 sm:py-32 lg:py-40 flex items-center">
          <div className="max-w-lg mx-auto lg:mx-0 lg:mr-auto lg:ml-16">
            <Reveal>
              <p className="eyebrow text-andaman-deep mb-8">The Story</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-charcoal text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                Ten years ago, we found a place that changed everything.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 space-y-4 text-charcoal/70 text-base sm:text-lg leading-relaxed">
              <p>It was supposed to be another destination.</p>
              <p>Instead, we kept coming back.</p>
              <p>
                Over time, Thailand became more than a place to visit. It
                became home.
              </p>
              <p className="font-serif italic text-charcoal text-xl sm:text-2xl mt-6">
                A traveller&rsquo;s discovery became an entrepreneur&rsquo;s
                home. And eventually, a vision for something much bigger.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <a
                href="#philosophy"
                data-cursor-expand
                className="eyebrow inline-flex items-center gap-2 text-charcoal border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300"
              >
                Read our story →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

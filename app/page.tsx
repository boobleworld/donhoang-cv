import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Leistungsspektrum from "@/components/sections/Leistungsspektrum";
import StickyTherapy from "@/components/sections/StickyTherapy";
import Aerzte from "@/components/sections/Aerzte";
import Team from "@/components/sections/Team";
import Praxis from "@/components/sections/Praxis";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Intro />
      <Leistungsspektrum />
      <StickyTherapy />
      <Aerzte />
      <Team />
      <Praxis />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}

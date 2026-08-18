import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Idea from "@/components/sections/Idea";
import DigitalPhysical from "@/components/sections/DigitalPhysical";
import Ecosystem from "@/components/sections/Ecosystem";
import Engine from "@/components/sections/Engine";
import Thailand from "@/components/sections/Thailand";
import Ventures from "@/components/sections/Ventures";
import FourWays from "@/components/sections/FourWays";
import Story from "@/components/sections/Story";
import Philosophy from "@/components/sections/Philosophy";
import Future from "@/components/sections/Future";
import GlobalAmbition from "@/components/sections/GlobalAmbition";
import Journal from "@/components/sections/Journal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Idea />
      <DigitalPhysical />
      <Ecosystem />
      <Engine />
      <Thailand />
      <Ventures />
      <FourWays />
      <Story />
      <Philosophy />
      <Future />
      <GlobalAmbition />
      <Journal />
      <FinalCTA />
      <Footer />
    </main>
  );
}

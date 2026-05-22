"use client";

import { useState } from "react";
import Preloader from "@/components/preloader";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import MarqueeSection from "@/components/marquee-section";
import WorksSlider from "@/components/works-slider";
import Manifesto from "@/components/manifesto";
import Footer from "@/components/footer";
import Noise from "@/components/noise";
import ScrollBar from "@/components/scroll-bar";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Noise />
      <ScrollBar />
      <CustomCursor />

      <div
        className="transition-opacity duration-500 bg-primary min-h-screen overflow-x-hidden"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <Nav />
        <Hero />
        <MarqueeSection />
        <WorksSlider />
        <Manifesto />
        <Footer />
      </div>
    </>
  );
}

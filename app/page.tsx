"use client";

import { useState } from "react";
import Preloader from "@/components/preloader";
import Nav from "@/components/nav";
import Manifesto from "@/components/manifesto";
import Footer from "@/components/footer";
import Noise from "@/components/noise";
import ScrollBar from "@/components/scroll-bar";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />

      {/* Noise overlay — always present */}
      <Noise />

      {/* Scroll progress bar */}
      <ScrollBar />

      {/* Main site — fades in after preloader */}
      <div
        className="transition-opacity duration-500"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <Nav />
        <Manifesto />
        <Footer />
      </div>
    </>
  );
}

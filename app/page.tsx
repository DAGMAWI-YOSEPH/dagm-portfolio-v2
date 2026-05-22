import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Works from "@/components/works";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-canvas min-h-screen">
      <Nav />
      <Hero />
      <Works />
      <About />
      <Contact />
    </main>
  );
}

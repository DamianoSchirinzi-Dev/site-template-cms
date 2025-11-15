"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const updateHeroHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
        console.log("Hero height:", heroRef.current.offsetHeight);
      }
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);
    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  return (
    <>
      <main className="min-h-screen">
        <Header heroHeight={heroHeight} />
        <Hero ref={heroRef} />
        <About />
        <Gallery />
        <Testimonials />
        <Location />
        <ContactCta />
        <Footer />
      </main>
    </>
  );
}

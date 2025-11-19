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

interface HomeClientProps {
  data: {
    header: { businessName: string };
    footer: { businessName: string };

    hero: any;
    about: any;
    gallery: { images: string[] };
    testimonials: any[];
    location: any;
    contact: any;
  };
}

export default function HomeClient({ data }: HomeClientProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const updateHeroHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);

    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  return (
    <main className="min-h-screen">
      <Header heroHeight={heroHeight} businessName={data.header.businessName} />

      <Hero ref={heroRef} data={data.hero} />
      <About data={data.about} />
      <Gallery data={data.gallery} />
      <Testimonials data={data.testimonials} />
      <Location data={data.location} />
      <ContactCta data={data.contact} />

      <Footer businessName={data.footer.businessName} />
    </main>
  );
}
import { forwardRef } from "react";
import { urlFor } from "@/sanity/lib/image";

export interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage?: { asset: any };
  ctaPrimary: string;
  ctaSecondary: string;
}

interface HeroProps {
  data: HeroData;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ data }, ref) => {
  const bg = data.backgroundImage ? urlFor(data.backgroundImage).url() : "";

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 text-balance">
          {data.title}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light tracking-wide">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105 min-w-[160px]"
          >
            {data.ctaPrimary}
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/50 min-w-[160px]"
          >
            {data.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
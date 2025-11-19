"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  heroHeight: number;
  businessName: string;
}

export default function Header({ heroHeight, businessName }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const preferDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: light)").matches;

    setIsDark(preferDark);
    document.documentElement.classList.toggle("dark", preferDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const threshold = Math.max(heroHeight - 20, 0);
      setOverHero(scrollY < threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out ${
          scrolled
            ? "bg-background/95 backdrop-blur-2xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <a
            href="#"
            className={`text-2xl font-semibold tracking-tight transition-all ${
              overHero ? "text-white" : "text-gray-900"
            }`}
          >
            {businessName}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-md font-medium">
            {["About", "Gallery", "Find Us", "Contact"].map((item, idx) => {
              const href = ["#about", "#gallery", "#location", "#contact"][idx];

              return (
                <a
                  key={item}
                  href={href}
                  className={`relative transition-all duration-500 group ${
                    overHero
                      ? "text-white/80 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      overHero ? "bg-white" : "bg-gray-900"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className={`inline-flex h-9 w-9 items-center justify-center transition-all ${
                overHero ? "text-white" : "text-gray-900"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-100 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white/98 backdrop-blur-xl"></div>

        <div className="relative h-full flex flex-col items-center justify-center gap-10 px-6">
          {[
            { label: "About", href: "#about", delay: 100 },
            { label: "Gallery", href: "#gallery", delay: 150 },
            { label: "Find Us", href: "#location", delay: 250 },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`
                text-4xl font-semibold text-gray-900 
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                transform
                ${
                  open
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-95"
                }
              `}
              style={{ transitionDelay: open ? `${item.delay}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`
              inline-flex items-center rounded-full bg-gray-900 text-white 
              px-10 py-4 text-2xl font-semibold 
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:scale-105 active:scale-95
              ${
                open
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95 duration-0"
              }
            `}
            style={{ transitionDelay: open ? "350ms" : "0ms" }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
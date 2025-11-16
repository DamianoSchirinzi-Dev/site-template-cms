"use client";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header({ heroHeight }: { heroHeight: number }) {
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
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 20);

      const threshold = Math.max(heroHeight - 20, 0);
      setOverHero(scrollPosition < threshold);
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

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
            className={`text-2xl font-semibold tracking-tight hover:opacity-70 transition-all duration-500 ${
              overHero ? "text-white" : "text-gray-900"
            }`}
          >
            Business Name
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-md font-medium">
            <a
              href="#about"
              className={`relative transition-all duration-500 group ${
                overHero
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                  overHero ? "bg-white" : "bg-gray-900"
                }`}
              ></span>
            </a>
            <a
              href="#gallery"
              className={`relative transition-all duration-500 group ${
                overHero
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Gallery
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                  overHero ? "bg-white" : "bg-gray-900"
                }`}
              ></span>
            </a>
            <a
              href="#location"
              className={`relative transition-all duration-500 group ${
                overHero
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Find Us
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                  overHero ? "bg-white" : "bg-gray-900"
                }`}
              ></span>
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center rounded-full px-6 py-2.5 transition-all duration-500 hover:opacity-90 hover:scale-105 ${
                overHero ? "bg-white text-gray-900" : "bg-gray-900 text-white"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className={`inline-flex h-9 w-9 items-center justify-center transition-all duration-300 ease-out ${
                overHero ? "text-white" : "text-gray-900"
              }`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <div
                className={`transition-transform duration-300 ease-out ${
                  open ? "rotate-90" : "rotate-0"
                }`}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-100 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background with backdrop blur */}
        <div className="absolute inset-0 bg-white/98 backdrop-blur-xl"></div>

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-10 px-6">
          {[
            { label: "About", href: "#about", delay: 100 },
            { label: "Gallery", href: "#gallery", delay: 150 },
            { label: "Find Us", href: "#location", delay: 250 },
          ].map((item) => (
            <a
              key={item.label}
              onClick={() => setOpen(false)}
              href={item.href}
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
              style={{
                transitionDelay: open ? `${item.delay}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Contact Button */}
          <a
            onClick={() => setOpen(false)}
            href="#contact"
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

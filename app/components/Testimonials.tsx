"use client"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ITEMS = [
  {
    quote: "The best service in Manchester. Fast, friendly, and incredibly reliable. They exceeded every expectation.",
    name: "Alex Patterson",
    role: "Business Owner",
  },
  {
    quote: "Our bookings increased by 300% after working with them. Absolutely transformative for our business.",
    name: "Samira Khan",
    role: "Marketing Director",
  },
  {
    quote: "Beautiful work and lightning-fast support. I couldn't recommend them more highly to anyone.",
    name: "Marcus Lopez",
    role: "Creative Director",
  },
  {
    quote: "Their attention to detail is unmatched — our storefront looks stunning and conversion went up immediately.",
    name: "Priya Desai",
    role: "Retail Manager",
  },
  {
    quote: "Responsive, professional, and creative. They delivered on time and were a pleasure to work with.",
    name: "Liam O'Connell",
    role: "Operations Lead",
  },
  {
    quote: "A reliable partner who helped us scale our local marketing — bookings are higher than ever.",
    name: "Nadia Fernandez",
    role: "Owner",
  },
  {
    quote: "Creative solutions and exceptional support. We felt listened to from day one.",
    name: "Ethan Brooks",
    role: "Studio Founder",
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({
      left: dir * (ref.current.clientWidth * 0.9),
      behavior: "smooth",
    })
  }

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">What people say</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-all duration-300 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-all duration-300 hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[48%] lg:auto-cols-[32%] gap-6 overflow-x-auto snap-x snap-mandatory py-2 scrollbar-hide"
        >
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="snap-start rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <blockquote className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 font-light">
                "{t.quote}"
              </blockquote>
              <figcaption className="space-y-1">
                <div className="font-medium text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
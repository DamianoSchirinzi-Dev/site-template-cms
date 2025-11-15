export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  ]

  return (
    <section id="gallery" className="py-16 md:py-28 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          Our Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={src || "/placeholder.svg"}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                alt={`Gallery image ${i + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
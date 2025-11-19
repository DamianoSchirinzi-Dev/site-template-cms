export interface AboutStats {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  text: string;
  stats: AboutStats[];
}

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
          {data.title}
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          {data.text}
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {data.stats?.map((stat, i) => (
            <div key={i} className="space-y-3 group">
              <div className="text-5xl font-semibold transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
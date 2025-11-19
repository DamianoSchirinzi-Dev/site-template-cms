export interface ContactData {
  title: string;
  text: string;
  email: string;
}

interface ContactProps {
  data: ContactData;
}

export default function ContactCta({ data }: ContactProps) {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">{data.title}</h2>

        <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto font-light">
          {data.text}
        </p>

        <a
          href={`mailto:${data.email}`}
          className="inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-4 text-base font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 mt-4"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
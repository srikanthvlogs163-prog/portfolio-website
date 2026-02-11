import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Reddy",
    role: "Founder, BrandSpark Studios",
    text: "Bhavani transformed our raw footage into a cinematic masterpiece. His attention to pacing and color grading is unmatched. We saw a 40% increase in engagement after launching the videos he edited.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Content Creator",
    text: "Working with Bhavani was seamless. He understood my brand instantly and delivered scroll-stopping designs that my audience loved. Highly recommend for anyone serious about visual content.",
    rating: 5,
  },
  {
    name: "Karthik Sharma",
    role: "Marketing Head, FreshBite Foods",
    text: "Our social media presence completely changed after Bhavani redesigned our posters and reels. His designs are clean, bold, and always on brand. A true professional!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "CEO, Eventify",
    text: "Bhavani delivered event promos that exceeded our expectations. The motion graphics were smooth and eye-catching. He's now our go-to designer for all campaigns.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "YouTuber & Filmmaker",
    text: "I've worked with several editors but Bhavani's storytelling sense sets him apart. He knows exactly where to cut, what effects to use, and how to keep viewers hooked.",
    rating: 5,
  },
];

const TESTIMONIALS_PER_SLIDE = 1;
const slides: (typeof testimonials)[] = [];
for (let i = 0; i < testimonials.length; i += TESTIMONIALS_PER_SLIDE) {
  slides.push(testimonials.slice(i, i + TESTIMONIALS_PER_SLIDE));
}

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setIndex((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-3 text-center">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          What <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Don't just take my word for it — here's what some of my clients have to say about working together.
        </p>

        {/* Square container slideshow */}
        <div className="relative max-w-lg mx-auto aspect-square rounded-2xl bg-card border border-border overflow-hidden glow-green">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, si) => (
              <div key={si} className="flex-shrink-0 w-full h-full flex items-center justify-center p-8 md:p-12">
                {slide.map((t, ti) => (
                  <div key={ti} className="text-center flex flex-col items-center justify-center h-full">
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 rounded-full bg-gradient-green flex items-center justify-center text-primary-foreground text-2xl font-black mb-6">
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={18} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-primary/20 transition-colors" aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-primary/20 transition-colors" aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-foreground/30"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

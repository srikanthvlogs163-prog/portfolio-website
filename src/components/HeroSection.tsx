import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden"
    >
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Video Editor &amp; Graphic Designer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Turning Ideas into{" "}
          <span className="text-gradient">Scroll-Stopping</span>
          <br />
          Visual Stories
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          I'm Bhavani Srikanth, a Video Editor and Graphic Designer creating engaging videos,
          motion graphics, and visual designs that elevate brands and capture audience attention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a
            href="#portfolio"
            className="bg-gradient-green text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-primary/40 text-primary px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/10 transition-colors"
          >
            Work With Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 text-primary px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/10 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;

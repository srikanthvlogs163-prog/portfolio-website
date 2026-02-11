const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glow-green">
              <img
                src="https://res.cloudinary.com/davt16alp/image/upload/v1770650699/my_szel3g.png"
                alt="Bhavani Srikanth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <p className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Crafting Visuals That <span className="text-gradient">Speak Louder</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              I'm Bhavani Srikanth, a passionate Video Editor and Graphic Designer with a strong
              eye for storytelling and visual impact. I specialize in crafting engaging edits,
              motion graphics, and clean designs that help brands communicate clearly and creatively.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              I focus on detail, pacing, and aesthetics to ensure every project feels professional
              and effective. My goal is simple: deliver visuals that connect with audiences and add
              real value to your content.
            </p>
            <a
              href="https://wa.me/919705919200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 bg-gradient-green text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

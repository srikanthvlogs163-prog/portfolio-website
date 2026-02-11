import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Let's <span className="text-gradient">Create Together</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Have a project in mind? I'd love to hear from you. Let's bring your vision to life with stunning visuals.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://wa.me/919705919200"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="WhatsApp"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://www.instagram.com/spvisuals_x?igsh=dGRocXlucnV5a2hr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/srikanth-peruboina-11052b393"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:srikanthperuboina0@gmail.com"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <a
          href="mailto:srikanthperuboina0@gmail.com"
          className="inline-flex bg-gradient-green text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Work With Me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

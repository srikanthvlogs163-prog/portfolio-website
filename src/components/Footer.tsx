const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-black text-gradient">
          Bhavani Srikanth
        </a>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Bhavani Srikanth. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

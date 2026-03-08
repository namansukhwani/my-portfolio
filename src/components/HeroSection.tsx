import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/naman-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(120 100% 50% / 0.1) 2px, hsl(120 100% 50% / 0.1) 4px)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={avatar}
              alt="Naman Sukhwani"
              className="w-32 h-32 rounded-full border-2 border-primary/40 animate-pulse-glow"
            />
            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-ping opacity-20" />
          </div>
        </div>

        {/* Terminal-style intro */}
        <div className="mb-4 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> whoami
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-primary text-glow-strong">Naman</span>{" "}
          <span className="text-foreground">Sukhwani</span>
        </h1>

        <div className="font-mono text-lg md:text-xl text-muted-foreground mb-8">
          <span className="text-primary/70">&gt;</span> Software Development Engineer{" "}
          <span className="text-primary animate-flicker">_</span>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base leading-relaxed">
          Building scalable backend systems at <span className="text-primary/80">Bajaj Finserv Health</span>. 
          Passionate about microservices, event-driven architecture, and AI integration. 
          3+ years of shipping production-grade HealthTech solutions.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { icon: Github, href: "https://github.com/namansukhwani", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/namansukhwani", label: "LinkedIn" },
            { icon: Mail, href: "mailto:namansukhwani@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+918982338575", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:box-glow transition-all duration-300"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#experience" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="font-mono text-xs mb-2">scroll_down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

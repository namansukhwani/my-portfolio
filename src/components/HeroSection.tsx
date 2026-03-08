import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/naman-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 50% / 0.1) 2px, hsl(180 100% 50% / 0.1) 4px)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src={avatar}
              alt="Naman Sukhwani"
              className="w-32 h-32 rounded-full border-2 border-primary/40 animate-pulse-glow object-cover"
            />
            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-ping opacity-20" />
          </div>
        </motion.div>

        {/* Terminal-style intro */}
        <motion.div
          className="mb-4 font-mono text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-primary">$</span> whoami
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="text-primary text-glow-strong">Naman</span>{" "}
          <span className="text-foreground">Sukhwani</span>
        </motion.h1>

        <motion.div
          className="font-mono text-lg md:text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-primary/70">&gt;</span> Software Development Engineer{" "}
          <span className="text-primary animate-flicker">_</span>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Building scalable backend systems at{" "}
          <span className="text-primary/80">Bajaj Finserv Health</span>.
          Passionate about microservices, event-driven architecture, and AI integration.
          3+ years of shipping production-grade HealthTech solutions.
        </motion.p>

        {/* Social links + Resume */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { icon: Github, href: "https://github.com/namansukhwani", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/namansukhwani", label: "LinkedIn" },
            { icon: Mail, href: "mailto:namansukhwani@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+918982338575", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:box-glow transition-all duration-300"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}

          <motion.a
            href="/Naman_Sukhwani_Resume.pdf"
            download
            className="group px-5 py-3 rounded-lg border border-primary/40 bg-primary/10 backdrop-blur-sm hover:bg-primary/20 hover:box-glow transition-all duration-300 flex items-center gap-2 font-mono text-sm text-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#experience"
          className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="font-mono text-xs mb-2">scroll_down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;

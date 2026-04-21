import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const FooterSection = () => {
  return (
    <footer className="py-12 sm:py-16 px-6 relative overflow-hidden border-t border-white/5 bg-background/50">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <div className="font-mono text-[10px] sm:text-xs text-primary/60 tracking-[0.4em] mb-6 sm:mb-8 uppercase">
            Initialize Connection
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            Let's build the <span className="text-primary text-glow">future</span> together.
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground/70 mb-8 sm:mb-12 max-w-lg mx-auto leading-relaxed">
            Currently open to new opportunities and ambitious collaborations. 
            Drop a message and let's start the dialogue.
          </p>

          <motion.a
            href="mailto:namansukhwani@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl glass border border-primary/20 text-primary font-mono text-[10px] sm:text-sm tracking-widest hover:bg-primary/10 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.05)]"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            SAY_HELLO.SH
          </motion.a>

          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[
              { icon: Github, href: "https://github.com/namansukhwani", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/namansukhwani", label: "LinkedIn" },
              { icon: Mail, href: "mailto:namansukhwani@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl glass border-white/5 text-muted-foreground/60 hover:text-primary transition-all duration-500"
                whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 pt-8 border-t border-white/5 flex flex-col items-center justify-between gap-4 font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground/40 uppercase">
            <p>© {new Date().getFullYear()} Naman Sukhwani. [V2.0_REVAMPED]</p>
            <p className="text-center">Built with React + Framer Motion + Glassmorphism</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer Background Decor */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default FooterSection;

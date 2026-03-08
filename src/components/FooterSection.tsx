import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="font-mono text-sm text-muted-foreground mb-6">
            <span className="text-primary">$</span> echo "Let's connect"
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            Got a project in mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities and interesting ideas.
          </p>

          <motion.a
            href="mailto:namansukhwani@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:box-glow-strong transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </motion.a>

          <div className="flex items-center justify-center gap-6 mt-10">
            {[
              { icon: Github, href: "https://github.com/namansukhwani" },
              { icon: Linkedin, href: "https://linkedin.com/in/namansukhwani" },
              { icon: Mail, href: "mailto:namansukhwani@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground mt-10">
            © {new Date().getFullYear()} Naman Sukhwani. Built with passion & code.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default FooterSection;

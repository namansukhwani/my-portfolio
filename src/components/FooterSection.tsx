import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="font-mono text-sm text-muted-foreground mb-6">
          <span className="text-primary">$</span> echo "Let's connect"
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-4">
          Got a project in mind?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I'm always open to discussing new opportunities and interesting ideas.
        </p>

        <a
          href="mailto:namansukhwani@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:box-glow-strong transition-all duration-300"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a href="https://github.com/namansukhwani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/namansukhwani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:namansukhwani@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground mt-10">
          © {new Date().getFullYear()} Naman Sukhwani. Built with passion & code.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

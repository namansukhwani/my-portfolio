import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    // Open mailto with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:namansukhwani@gmail.com?subject=${subject}&body=${body}`, "_self");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
              Get In Touch
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - info */}
          <AnimatedSection delay={0.1}>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Let's build something <span className="text-primary text-glow">great</span> together
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm open to discussing impactful backend systems, platform engineering, AI integration, and real-time product challenges. Feel free to reach out.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:namansukhwani@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg border border-border group-hover:border-primary/30 group-hover:box-glow transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">namansukhwani@gmail.com</span>
                </a>
                <a
                  href="https://github.com/namansukhwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg border border-border group-hover:border-primary/30 group-hover:box-glow transition-all">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">github.com/namansukhwani</span>
                </a>
                <a
                  href="https://linkedin.com/in/namansukhwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg border border-border group-hover:border-primary/30 group-hover:box-glow transition-all">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">linkedin.com/in/namansukhwani</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-primary/70 mb-2">
                  {"// name"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:box-glow transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-primary/70 mb-2">
                  {"// email"}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:box-glow transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-primary/70 mb-2">
                  {"// message"}
                </label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:box-glow transition-all resize-none"
                  placeholder="Hey, I'd love to chat about..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:box-glow-strong transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sent" ? (
                  "Message opened in email client ✓"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

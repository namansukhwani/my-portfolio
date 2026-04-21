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

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:namansukhwani@gmail.com?subject=${subject}&body=${body}`, "_self");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
            <h2 className="font-mono text-[10px] text-primary/60 tracking-[0.6em] uppercase mb-4">
              CONNECT
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-glow">
              Get In Touch
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left side - Info & Socials */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/5 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                  Let's build the <br className="hidden sm:block"/>
                  <span className="text-primary text-glow">next generation</span> of tech.
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground/70 mb-8 sm:mb-10 leading-relaxed font-light">
                  I'm currently looking for new opportunities in HealthTech, Fintech, and AI-driven platforms. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    { icon: Mail, label: "namansukhwani@gmail.com", href: "mailto:namansukhwani@gmail.com" },
                    { icon: Github, label: "github.com/namansukhwani", href: "https://github.com/namansukhwani" },
                    { icon: Linkedin, label: "linkedin.com/in/namansukhwani", href: "https://linkedin.com/in/namansukhwani" },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10"
                      whileHover={{ x: 10 }}
                    >
                      <div className="p-2.5 sm:p-3 rounded-xl glass border border-white/5 text-primary group-hover:scale-110 transition-transform">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-sm text-muted-foreground/60 group-hover:text-foreground transition-colors">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Terminal Line */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-primary/40">
                  <span className="animate-pulse">●</span>
                  <span>SYSTEM_READY</span>
                  <span className="opacity-20 ml-auto">EST: 2026</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - Form */}
          <AnimatedSection delay={0.4}>
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative z-10">
                <div className="group">
                  <label htmlFor="name" className="block font-mono text-[9px] sm:text-[10px] text-primary/40 mb-2 sm:mb-3 tracking-widest uppercase group-focus-within:text-primary transition-colors">
                    $ name --input
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-mono text-xs sm:text-sm placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all duration-300"
                    placeholder="Enter your name..."
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block font-mono text-[9px] sm:text-[10px] text-primary/40 mb-2 sm:mb-3 tracking-widest uppercase group-focus-within:text-primary transition-colors">
                    $ email --input
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-mono text-xs sm:text-sm placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all duration-300"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block font-mono text-[9px] sm:text-[10px] text-primary/40 mb-2 sm:mb-3 tracking-widest uppercase group-focus-within:text-primary transition-colors">
                    $ message --body
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-mono text-xs sm:text-sm placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all duration-300 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 sm:py-5 rounded-2xl glass border border-primary/20 text-primary font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-primary/10 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.05)] disabled:opacity-50"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sent" ? (
                    <span className="text-primary/80 animate-pulse">MESSAGE_DISPATCHED_SUCCESSFULLY ✓</span>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-4 h-4" />
                      EXECUTE_SEND.SH
                    </div>
                  )}
                </motion.button>
              </form>

              {/* Form background decoration */}
              <div className="absolute top-0 right-0 p-8 font-mono text-[8px] text-white/5 tracking-[0.5em] pointer-events-none">
                01101111 01101111
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Section Background Decor */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-primary/3 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContactSection;

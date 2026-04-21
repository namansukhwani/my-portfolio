import { useState, useEffect } from "react";
import { Menu, X, Download, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const id = href.slice(1);
    const el = document.getElementById(id);

    if (el) {
      // Use a small timeout to allow the mobile menu to close before scrolling
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        scrolled ? "pt-4" : "pt-8"
      }`}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-5xl mx-auto rounded-2xl border transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-[#0a0a0f] lg:glass-dark border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] py-3 px-6"
            : "bg-transparent border-transparent py-4 px-2"
        } flex items-center justify-between relative`}
      >
        <Magnetic>
          <motion.a
            href="#"
            className="font-mono text-lg font-bold text-primary group flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 glass border border-primary/20 rounded-lg flex items-center justify-center group-hover:border-primary/50 transition-all duration-500">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="text-glow tracking-tighter hidden sm:block">
              NAMAN_S
            </span>
          </motion.a>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 p-1 glass border border-white/5 rounded-xl">
          {navItems.map((item) => (
            <Magnetic key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 relative group px-4 py-2 rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-primary text-glow bg-primary/5"
                    : "text-muted-foreground/60 hover:text-primary hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            </Magnetic>
          ))}

          <div className="w-px h-4 bg-white/10 mx-2" />

          <Magnetic>
            <motion.a
              href="/Naman_Sukhwani_Resume.pdf"
              download
              className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] tracking-widest hover:bg-primary/20 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-3 h-3" />
              RESUME.EXE
            </motion.a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-primary"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>

        {/* Opaque Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 z-[200] lg:hidden flex flex-col overflow-y-auto"
              style={{ backgroundColor: "#050508" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Terminal Corner Metadata - Top Left */}
              <div className="absolute top-8 left-8 font-mono text-[8px] text-primary/40 tracking-[0.4em] uppercase hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                  [SYSTEM_STATUS: READY]
                </div>
                <div className="mt-1">PATH: root/navigation</div>
              </div>

              {/* Close Button - Top Right */}
              <div className="absolute top-8 right-8 z-[210]">
                <Magnetic>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileOpen(false)}
                    className="p-4 rounded-full bg-white/5 border border-primary/20 text-primary shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                  >
                    <X className="w-8 h-8" />
                  </motion.button>
                </Magnetic>
              </div>

              {/* Main Navigation Links */}
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">
                <nav className="flex flex-col items-center gap-4 sm:gap-8">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.5 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group relative flex flex-col items-center py-2"
                    >
                      <span className="font-mono text-[10px] text-primary tracking-[0.5em] mb-1 opacity-60">
                        0{i + 1}
                      </span>
                      <h2
                        className={`text-2xl sm:text-4xl font-bold tracking-tighter transition-all duration-500 ${
                          activeSection === item.href.slice(1)
                            ? "text-primary text-glow-strong scale-110"
                            : "text-white hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </h2>
                      <div
                        className={`mt-2 h-[1px] bg-primary transition-all duration-500 ${
                          activeSection === item.href.slice(1)
                            ? "w-full"
                            : "w-0 group-hover:w-12"
                        }`}
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Footer Metadata */}
              <div className="relative z-10 p-12 flex flex-col items-center gap-8">
                <motion.a
                  href="/Naman_Sukhwani_Resume.pdf"
                  download
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-10 py-5 rounded-2xl bg-primary text-black font-mono text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 group flex items-center gap-4 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  FETCH_RESUME.EXE
                </motion.a>

                <div className="flex items-center gap-4 font-mono text-[8px] text-white/20 tracking-widest uppercase">
                  <span>© 2026</span>
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  <span>NAMAN_S_PORTFOLIO</span>
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  <span>V2.0.4</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;

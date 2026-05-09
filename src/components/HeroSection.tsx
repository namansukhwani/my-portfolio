import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";
import avatar from "@/assets/naman-avatar.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 30 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [-1, 1, -1, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          x: springX,
          y: springY,
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.05) 0%, transparent 70%)"
        }}
      />

      <motion.div
        style={{ y: y1, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full text-center"
      >
        {/* Avatar with Enhanced Glow */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12 flex justify-center">
          <div className="relative group">
            <motion.div 
              className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative">
              <img
                src={avatar}
                alt="Naman Sukhwani"
                width={128}
                height={128}
                fetchpriority="high"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-primary/30 p-1 backdrop-blur-sm object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -inset-0.5 rounded-full border border-primary/50 animate-ping opacity-10" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] text-primary/60 uppercase">
            // system_v2.0 // sde_portfolio
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="relative mb-6 sm:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground selection:bg-primary selection:text-black">
            <motion.span variants={glitchVariants} animate="animate" className="text-primary text-glow">Naman</motion.span> Sukhwani
          </h1>
          <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl hidden sm:block" />
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl hidden sm:block" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <h2 className="font-mono text-sm sm:text-lg md:text-xl text-primary tracking-[0.1em] sm:tracking-[0.2em] font-medium uppercase text-glow opacity-80 px-4">
            Senior Software Development Engineer
          </h2>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl text-muted-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4"
        >
          Architecting <span className="text-foreground font-medium">high-availability</span> microservices & 
          <span className="text-foreground font-medium italic"> AI-driven</span> platforms at Bajaj Finserv Health.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-20">
          <div className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 glass-dark rounded-2xl border border-white/5 h-14 sm:h-[60px]">
            {[
              { icon: Github, href: "https://github.com/namansukhwani", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/namansukhwani", label: "LinkedIn" },
              { icon: Mail, href: "mailto:namansukhwani@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+918982338575", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <Magnetic key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </Magnetic>
            ))}
          </div>

          <Magnetic>
            <motion.a
              href="/Naman_Sukhwani_Resume.pdf"
              download
              className="h-14 sm:h-[60px] px-6 sm:px-8 glass-dark border border-primary/20 rounded-2xl flex items-center gap-3 font-mono text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] text-primary hover:bg-primary/10 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.05)] group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>GET_RESUME.EXE</span>
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Interactive Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#experience"
          className="flex flex-col items-center gap-3 text-primary/40 hover:text-primary transition-colors group"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Initialize Scroll</span>
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-primary/60 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

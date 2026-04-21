import { Trophy, Award, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const awards = [
  { title: "MVP of the Year 2025-26", icon: Trophy, description: "Recognition as the top-performing employee for the entire year.", tier: "gold" },
  { title: "MVP Q4 2024-25", icon: Star, description: "Awarded for achieving the highest impact and performance during the final quarter.", tier: "gold" },
  { title: "Hero of the Month July 2024", icon: Award, description: "Monthly honor for going above and beyond regular duties.", tier: "silver" },
  { title: "Sharp Shark Award July 2023", icon: Zap, description: "Specialized recognition for keen problem-solving, precision, and high efficiency.", tier: "silver" },
];

const achievements = [
  { label: "Nearly 4 Years", description: "Architecting high-availability microservices in HealthTech." },
  { label: "80% Cost Savings", description: "Delivered through infrastructure optimization." },
  { label: "AI + Real-Time", description: "Built scalable solutions spanning LLM workflows." },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-12 sm:py-20 px-6 relative overflow-hidden bg-background/30">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <h2 className="font-mono text-[10px] text-primary/60 tracking-[0.6em] uppercase mb-4">
              RECOGNITION
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Honors & Impact
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative glass-card p-6 sm:p-8 rounded-3xl border border-white/5 transition-all duration-500 overflow-hidden ${
                  award.tier === "gold" ? "hover:shadow-[0_0_50px_rgba(0,255,255,0.1)]" : "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                  <div className={`p-3 sm:p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    award.tier === "gold" 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "bg-white/5 text-muted-foreground border border-white/10"
                  }`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {award.title}
                    </h4>
                    <p className="text-muted-foreground/70 mt-2 text-xs sm:text-sm leading-relaxed font-light">
                      {award.description}
                    </p>
                  </div>
                </div>

                {/* Background Grade Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${
                  award.tier === "gold" ? "from-primary to-transparent" : "from-white to-transparent"
                }`} />
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            <h3 className="font-mono text-[10px] sm:text-xs text-primary mb-8 sm:mb-10 tracking-[0.3em] uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-primary/30" />
              SYSTEM_METRICS.LOG
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {achievements.map((a, i) => (
                <motion.div 
                  key={a.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="flex flex-col gap-2 sm:gap-3 group"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                    {a.label}
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground/60 leading-relaxed font-light">
                    {a.description}
                  </p>
                  <div className="w-12 h-[1px] bg-primary/20 group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </div>
            
            {/* Background Grid Line */}
            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/5 rotate-90 origin-top-right whitespace-nowrap hidden sm:block">
              01010101010101010101010101010101
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Section Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default AwardsSection;

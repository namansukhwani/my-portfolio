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
  { label: "Nearly 4 Years", description: "Architecting high-availability microservices and event-driven systems in HealthTech." },
  { label: "80% Cost Savings", description: "Delivered through infrastructure optimization and platform consolidation." },
  { label: "AI + Real-Time Systems", description: "Built scalable solutions spanning LLM workflows, notifications, and WebSocket infrastructure." },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <Trophy className="w-5 h-5 text-primary" />
            <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
              Awards & Recognition
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <AnimatedSection key={award.title} delay={i * 0.1}>
                <motion.div
                  className={`group p-6 rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-500 h-full ${
                    award.tier === "gold"
                      ? "border-primary/30 hover:border-primary/60 hover:box-glow"
                      : "border-border hover:border-primary/30"
                  }`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      award.tier === "gold" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="p-6 rounded-lg border border-border bg-card/30">
            <h3 className="font-mono text-xs text-primary mb-4 tracking-wider uppercase">
              {"// Impact Snapshot"}
            </h3>
            <div className="flex flex-wrap gap-4">
              {achievements.map((a) => (
                <div key={a.label} className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/30 border border-border">
                  <span className="text-primary text-lg">⚡</span>
                  <div>
                    <p className="font-mono text-sm text-foreground">{a.label}</p>
                    <p className="text-xs text-muted-foreground">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AwardsSection;

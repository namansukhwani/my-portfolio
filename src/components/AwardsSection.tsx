import { Trophy, Award, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const awards = [
  { title: "MVP of the Year 2025", icon: Trophy, description: "Recognized as the Most Valuable Player across the entire organization for outstanding contributions and impact.", tier: "gold" },
  { title: "MVP Q4 2024–25", icon: Star, description: "Quarterly MVP recognition for exceptional performance and delivery during Q4 of fiscal year 2024–25.", tier: "gold" },
  { title: "Hero of the Month", icon: Award, description: "Monthly recognition for going above and beyond in delivering critical features and supporting team success.", tier: "silver" },
  { title: "Sharp Shark Award", icon: Zap, description: "Special recognition for sharp problem-solving skills and quick execution on high-priority initiatives.", tier: "silver" },
];

const achievements = [
  { label: "Pull Shark x2", description: "GitHub Achievement — Prolific pull request contributor" },
  { label: "Arctic Code Vault Contributor", description: "GitHub Achievement — Code preserved in Arctic vault for future generations" },
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
              {"// GitHub Achievements"}
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

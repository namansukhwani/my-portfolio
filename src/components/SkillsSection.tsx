import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  { category: "Languages", skills: ["Java", "TypeScript", "JavaScript", "SQL", "YAML"] },
  { category: "Frameworks", skills: ["Spring Boot", "Spring WebFlux", "Node.js", "NestJS", "ReactJS"] },
  { category: "Technologies", skills: ["R2DBC", "JPA", "WebSockets", "Redis", "MongoDB", "PostgreSQL", "OracleDB", "ELK"] },
  { category: "Tools", skills: ["Docker", "Git", "Apache Kafka", "Azure Service Bus", "APIM", "ArgoCD", "Keda"] },
  { category: "Core Competencies", skills: ["Microservices", "Event-Driven Architecture", "System Design", "AI-Integration"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <Code2 className="w-5 h-5 text-primary" />
            <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
              Tech Stack
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.1}>
              <motion.div
                className="p-6 rounded-lg border border-border bg-card/30 h-full"
                whileHover={{ scale: 1.03, borderColor: "hsl(180 100% 45% / 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-mono text-xs text-primary mb-4 tracking-wider uppercase">
                  {`// ${group.category}`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary/50 text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

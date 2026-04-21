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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-12 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10 sm:mb-14 group">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:rotate-12 transition-transform duration-500">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="font-mono text-[10px] text-primary/60 tracking-[0.4em] uppercase mb-1">
                Phase 03
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-glow">Technical Arsenal</h3>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 h-full relative group"
            >
              <h3 className="font-mono text-[10px] sm:text-xs text-primary mb-4 sm:mb-6 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                {group.category}
              </h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 sm:gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                      borderColor: "rgba(0, 255, 255, 0.3)",
                      color: "#00FFFF"
                    }}
                    className="font-mono text-[10px] sm:text-[11px] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 text-muted-foreground border border-white/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

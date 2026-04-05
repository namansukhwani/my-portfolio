import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "Acropolis Institute Of Technology and Research",
    location: "Indore, India",
    period: "2018 – 2022",
    highlights: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
              Education
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div
              className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-sm text-primary/70">
                    {edu.field}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    {edu.institution} — {edu.location}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              {edu.highlights.length > 0 && (
                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary/50 mt-1 shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

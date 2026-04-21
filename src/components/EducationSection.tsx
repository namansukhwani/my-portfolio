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
    highlights: ["Specialization in Algorithms & System Design", "Graduated with Honors"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-12 sm:py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10 sm:mb-12 group">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:rotate-12 transition-transform duration-500">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="font-mono text-[10px] text-primary/60 tracking-[0.4em] uppercase mb-1">
                Phase 04
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Academic Foundation</h3>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.05)]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-[10px] sm:text-sm text-primary/70 mt-1 uppercase tracking-wider">
                      {edu.field}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground/60 mt-2">
                      {edu.institution} <span className="opacity-20">//</span> {edu.location}
                    </p>
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/5 inline-block">
                    {edu.period}
                  </div>
                </div>

                {edu.highlights.length > 0 && (
                  <ul className="flex flex-wrap gap-2 sm:gap-3">
                    {edu.highlights.map((h, j) => (
                      <li 
                        key={j} 
                        className="font-mono text-[9px] sm:text-[10px] px-2.5 py-1 rounded-lg bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Senior Software Development Engineer",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, Maharashtra, India",
    period: "February 2025 – Present",
    highlights: [
      "Led and mentored a backend engineering team of 4, overseeing end-to-end API development and system architecture while improving sprint velocity by 20%.",
      "Built strong HealthTech domain expertise across IPD and OPD workflows, insurance claim life cycles, and hospital coordination systems.",
      "Engineered the migration from a legacy single-tenant system to a multi-tenant claim and pre-authorization submission platform using a control plane architecture, increasing hospital adoption from 20% to 80%.",
      "Optimized claim processing by re-engineering the AI engine with LLM-integrated OCR and NER, automating manual review steps and cutting claim response TAT by 10%.",
      "Created the backend for the Hospital IPD Concierge platform, inspired by Salesforce case and task workflows, reducing discharge time by 3 hours.",
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, Maharashtra, India",
    period: "July 2023 – January 2025",
    highlights: [
      "Directed backend development across multiple teams, maintaining zero P0 issues and reducing defect rates to 0.02 per story.",
      "Built an in-house URL shortener and deep-linking system supporting 12,000 TPM, eliminating third-party dependencies and saving 30 lakh INR annually.",
      "Designed SocketRx, a generic WebSocket Gateway, cutting implementation time by 60%.",
      "Designed an AI-assisted voice prescription feature using speech-to-text and LLM integration, enabling automatic prescription drafting for doctors.",
      "Developed a unified notification platform delivering 30,000+ daily messages, lowering failures by 95%.",
      "Implemented a unified push notification service supporting token lifecycle management, reducing external expenses by 85%.",
    ],
  },
  {
    title: "Associate Software Development Engineer",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, Maharashtra, India",
    period: "June 2022 – June 2023",
    highlights: [
      "Managed and enhanced the entire B2C journey, including doctor listing and appointment booking flow.",
      "Led the migration of company-wide chat and video infrastructure, reducing operational costs by 50%.",
      "Delivered a centralized caching service using Elasticsearch for location intelligence, reducing external API costs by 80%.",
      "Adopted event-driven patterns using Azure Service Bus and Kafka, reducing service interactions by 20%.",
      "Built the backend for Ask Free Question, leading to a 50% increase in SEO traffic.",
    ],
  },
  {
    title: "SDE Trainee",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, Maharashtra, India",
    period: "August 2021 – May 2022",
    highlights: [
      "Stabilized chat, audio, and video systems via Twilio and Exotel, supporting 20,000 MAU.",
      "Improved performance of critical APIs, cutting response times by 70% and reducing DB load by 20%.",
      "Developed the Instant Consult doctor allocation engine inspired by ride matching systems, boosting appointments by 40% with zero cancellations.",
      "Modernized legacy components by migrating them to NestJS and Spring Boot.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12 sm:mb-16 group">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-primary/60 tracking-[0.4em] uppercase mb-1">
                Phase 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Work Experience</h2>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent ml-4" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-12 sm:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative pl-8 md:pl-28"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-12 top-2 w-3 h-3 -translate-x-[6px] rounded-full bg-background border-2 border-primary box-glow shadow-[0_0_15px_rgba(0,255,255,0.4)] z-20" />

                <div className="group relative">
                  {/* Glass Card */}
                  <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                          {exp.title}
                        </h3>
                        <p className="font-mono text-[10px] sm:text-sm text-primary/70 mt-1">
                          {exp.company} <span className="opacity-30 mx-2">//</span> {exp.location}
                        </p>
                      </div>
                      <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-muted-foreground bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/5 whitespace-normal sm:whitespace-nowrap inline-block">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-3">
                      {exp.highlights.map((h, j) => (
                        <motion.li 
                          key={j} 
                          className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <span className="text-primary mt-1.5 shrink-0 text-[10px]">▶</span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative Background Glow on Hover */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

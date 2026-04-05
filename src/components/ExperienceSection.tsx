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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
              Work Experience
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-[3px] rounded-full bg-primary box-glow" />

                  <motion.div
                    className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="font-mono text-sm text-primary/70">
                          {exp.company} — {exp.location}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary/50 mt-1 shrink-0">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

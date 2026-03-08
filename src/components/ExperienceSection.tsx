import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, IND",
    period: "July 2023 – Present",
    highlights: [
      "Zero P0 issues with 0.02 defect rate per story through structured reviews",
      "Built in-house URL shortener & deep-linking (12,000 TPM), saving ₹30L annually",
      "Designed SocketRx — generic WebSocket Gateway, cutting implementation time by 60%",
      "AI-assisted Voice Prescription using STT + LLM for automatic prescription drafting",
      "Unified notification platform: WhatsApp, SMS, email, push — 30K+ daily messages, 95% fewer failures",
      "Unified push notification service with FCM/APN, reducing external costs by 85%",
      "Hospital IPD Concierge platform — reduced discharge time by 3 hours",
    ],
  },
  {
    title: "Associate Software Development Engineer",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, IND",
    period: "June 2022 – June 2023",
    highlights: [
      "Managed entire B2C journey: doctor listing, slot management, appointment booking",
      "Led chat & video infra migration — 50% cost reduction with backward compatibility",
      "Centralized caching via Elasticsearch for location intelligence — 80% cost reduction",
      "Event-driven patterns with Azure Service Bus & Kafka — 20% fewer service interactions",
      "Built 'Ask Free Question' backend — +50% SEO traffic improvement",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Bajaj Finserv Health Ltd.",
    location: "Pune, IND",
    period: "August 2021 – May 2022",
    highlights: [
      "Stabilized chat/audio/video systems (Twilio, Exotel) for 20,000 MAU",
      "Optimized critical APIs — 70% faster response times, 20% reduced DB load",
      "Built Instant Consult doctor allocation engine — 40% more appointments, zero cancellations",
      "Migrated legacy components to NestJS and Spring Boot",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Briefcase className="w-5 h-5 text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
            Work Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-[3px] rounded-full bg-primary box-glow" />

                <div className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

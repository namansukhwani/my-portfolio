import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    name: "PocketDoc — Patient App",
    repo: "namansukhwani/PocketDocReactNativeMobileApp",
    description:
      "A new healthcare system mobile app for patients. React Native based telemedicine platform with appointment booking, video consultations, and health records.",
    tech: ["React Native", "JavaScript", "Firebase"],
    stars: 5,
    forks: 2,
  },
  {
    name: "PocketDoc — Doctor App",
    repo: "namansukhwani/PocketDocDoctorMobileApp",
    description:
      "Doctor-side app for managing online appointments, patient records, and real-time consultations at a single place.",
    tech: ["React Native", "JavaScript", "Node.js"],
    stars: 3,
    forks: 0,
  },
  {
    name: "FlexMeet — Frontend",
    repo: "namansukhwani/FlexMeet",
    description:
      "Video conferencing web app frontend with real-time communication, screen sharing, and chat features built with modern web technologies.",
    tech: ["React", "JavaScript", "WebRTC"],
    stars: 1,
    forks: 0,
  },
  {
    name: "FlexMeet — Backend",
    repo: "namansukhwani/FlexMeet-Backend",
    description:
      "Backend service powering the FlexMeet video conferencing platform. Handles signaling, room management, and real-time communication.",
    tech: ["Node.js", "Express", "Socket.io"],
    stars: 1,
    forks: 0,
  },
  {
    name: "PVote",
    repo: "namansukhwani/Voting-Dapp-PVote",
    description:
      "Blockchain-based secure voting platform frontend. Modern UI for casting and verifying votes with transparency and security.",
    tech: ["React", "JavaScript", "Web3"],
    stars: 1,
    forks: 0,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={`https://github.com/${project.repo}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block relative glass-card p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
            {project.name}
          </h3>
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
        </div>

        <p className="text-muted-foreground/80 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] sm:text-[10px] tracking-wider px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono text-muted-foreground/60">
            {project.stars > 0 && (
              <span className="flex items-center gap-1 group-hover:text-amber-400/80 transition-colors">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" /> {project.stars}
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                <GitFork className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {project.forks}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Gloss Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.a>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-20 px-6 relative overflow-hidden bg-background/50">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
            <div className="font-mono text-[10px] text-primary/60 tracking-[0.6em] uppercase mb-4">
              PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.repo} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 sm:mt-20 text-center">
            <motion.a
              href="https://github.com/namansukhwani?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-4 glass-card rounded-2xl font-mono text-[10px] sm:text-xs tracking-widest text-muted-foreground hover:text-primary border-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              EXPLORE_ALL_REPOS.EXE <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;

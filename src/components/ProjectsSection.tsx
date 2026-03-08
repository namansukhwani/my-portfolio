import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "PocketDoc — Patient App",
    repo: "namansukhwani/PocketDocReactNativeMobileApp",
    description: "A new healthcare system mobile app for patients. React Native based telemedicine platform with appointment booking, video consultations, and health records.",
    tech: ["React Native", "JavaScript", "Firebase"],
    stars: 5,
    forks: 2,
  },
  {
    name: "PocketDoc — Doctor App",
    repo: "namansukhwani/PocketDocDoctorMobileApp",
    description: "Doctor-side app for managing online appointments, patient records, and real-time consultations at a single place.",
    tech: ["React Native", "JavaScript", "Node.js"],
    stars: 3,
    forks: 0,
  },
  {
    name: "Flextream",
    repo: "namansukhwani/Flextream",
    description: "Open movie streaming service. Ad-free, no sign-up required. Built with modern web technologies for seamless streaming experience.",
    tech: ["JavaScript", "React", "Node.js"],
    stars: 3,
    forks: 5,
  },
  {
    name: "Flextream APIs",
    repo: "namansukhwani/flextreamAPIs",
    description: "Backend API service powering the Flextream streaming platform. RESTful architecture with content management and streaming endpoints.",
    tech: ["TypeScript", "Node.js", "Express"],
    stars: 3,
    forks: 0,
  },
  {
    name: "ChatApp",
    repo: "namansukhwani/ChatApp-python-react",
    description: "Real-time chat application built with Python backend and React frontend. WebSocket-based messaging with modern UI.",
    tech: ["Python", "React", "WebSockets"],
    stars: 2,
    forks: 0,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Github className="w-5 h-5 text-primary" />
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase">
            Open Source Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.repo}
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:box-glow transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs px-2 py-0.5 rounded bg-secondary/50 text-secondary-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" /> {project.stars}
                    </span>
                  )}
                  {project.forks > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {project.forks}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/namansukhwani?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all repositories <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

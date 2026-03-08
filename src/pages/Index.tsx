import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AwardsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;

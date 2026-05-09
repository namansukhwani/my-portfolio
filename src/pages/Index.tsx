import { useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CustomCursor from "@/components/CustomCursor";

// Lazy load non-critical sections and heavy visuals
const ParticlesBackground = lazy(() => import("@/components/ParticlesBackground"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const AwardsSection = lazy(() => import("@/components/AwardsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <CustomCursor />
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <Suspense fallback={<div className="h-40" />}>
          <SkillsSection />
          <EducationSection />
          <AwardsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Index;

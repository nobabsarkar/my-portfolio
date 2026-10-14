import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;

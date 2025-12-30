import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>William Domingues Barbosa | Engenheiro de Software Java Back end</title>
        <meta 
          name="description" 
          content="Engenheiro de Software Java Back end especializado em Java, Spring Boot, AWS e arquitetura de microsserviços. +15 anos de experiência no setor financeiro." 
        />
        <meta 
          name="keywords" 
          content="William Domingues Barbosa, Engenheiro de Software Java Back end, Java Developer, Spring Boot, AWS, Microservices, Backend Developer, Brazil" 
        />
        <meta property="og:title" content="William Domingues Barbosa | Engenheiro de Software Java Back end" />
        <meta property="og:description" content="Engenheiro de Software Java Back end especializado em Java, Spring Boot, AWS e arquitetura de microsserviços." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://williamdbarbosa.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

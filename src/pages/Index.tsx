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
import { useLanguage } from "@/contexts/language";

const Index = () => {
  const { language } = useLanguage();
  const copy = {
    pt: {
      title: "William Domingues Barbosa | Engenheiro de Software Java Back end",
      description:
        "Engenheiro de Software Java Back end especializado em Java, Spring Boot, AWS e arquitetura de microsserviços. +15 anos de experiência no setor financeiro.",
      keywords:
        "William Domingues Barbosa, Engenheiro de Software Java Back end, Java Developer, Spring Boot, AWS, Microservices, Backend Developer, Brazil",
      ogTitle:
        "William Domingues Barbosa | Engenheiro de Software Java Back end",
      ogDescription:
        "Engenheiro de Software Java Back end especializado em Java, Spring Boot, AWS e arquitetura de microsserviços.",
    },
    en: {
      title: "William Domingues Barbosa | Java Backend Software Engineer",
      description:
        "Java backend software engineer specialized in Java, Spring Boot, AWS, and microservices architecture. 15+ years of experience in the financial sector.",
      keywords:
        "William Domingues Barbosa, Java Backend Software Engineer, Java Developer, Spring Boot, AWS, Microservices, Backend Developer, Brazil",
      ogTitle: "William Domingues Barbosa | Java Backend Software Engineer",
      ogDescription:
        "Java backend software engineer specialized in Java, Spring Boot, AWS, and microservices architecture.",
    },
  } as const;
  const text = copy[language];

  return (
    <>
      <Helmet>
        <title>{text.title}</title>
        <meta 
          name="description" 
          content={text.description} 
        />
        <meta 
          name="keywords" 
          content={text.keywords} 
        />
        <meta property="og:title" content={text.ogTitle} />
        <meta property="og:description" content={text.ogDescription} />
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

import { Award, GraduationCap, Languages } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Languages,
      title: "EF SET English Certificate",
      issuer: "EF Standard English Test",
      year: "2019",
      description: "C2 Proficient - Score 84/100",
      link: "https://www.efset.org/cert/9YBMWA"
    }
  ];

  const education = [
    {
      degree: "Bacharel em Ciência da Computação",
      institution: "Universidade Carlos Drummond de Andrade",
      period: "2010 – 2013"
    },
    {
      degree: "Curso Técnico em Computação",
      institution: "Centro Paula Souza",
      period: "2008 – 2009"
    },
    {
      degree: "General English Language Course",
      institution: "Limerick International Study Centre, Ireland",
      period: "2014"
    }
  ];

  const skills = [
    "AWS Cloud Services",
    "Java Certification Path",
    "Spring Professional",
    "Kubernetes Administration",
    "Clean Architecture",
    "Domain-Driven Design"
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Formação
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certificações & 
            <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent"> Educação</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Educação</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                  <p className="text-sm text-primary font-mono mb-1">{edu.period}</p>
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Certificações</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <a 
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-l-2 border-accent/30 pl-4 hover:border-accent transition-colors"
                >
                  <p className="text-sm text-accent font-mono mb-1">{cert.year}</p>
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-primary mt-1">{cert.description}</p>
                </a>
              ))}
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Áreas de foco para certificações:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Stats */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Idiomas</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">Português</span>
                  <span className="text-primary font-mono text-sm">Nativo</span>
                </div>
                <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">Inglês</span>
                  <span className="text-primary font-mono text-sm">C2 Proficient</span>
                </div>
                <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                  <div className="h-full w-[84%] bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="pt-6 border-t border-border/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <p className="text-3xl font-bold text-accent">50+</p>
                    <p className="text-sm text-muted-foreground">Projetos Entregues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
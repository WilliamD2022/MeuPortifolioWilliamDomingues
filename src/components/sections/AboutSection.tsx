import { Code2, Cloud, Database, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Expert",
      description: "Especialista em Java 17+, Spring Boot e arquiteturas de microsserviços"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Kubernetes e pipelines CI/CD automatizados"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "PostgreSQL, MySQL, Redis e modelagem de dados escalável"
    },
    {
      icon: Rocket,
      title: "Clean Architecture",
      description: "DDD, SOLID, TDD e práticas de código limpo e sustentável"
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Construindo o futuro com 
            <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent"> código</span>
          </h2>
        </div>

        {/* Bio */}
        <div className="glass-card p-8 md:p-12 mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sou um <span className="text-foreground font-semibold">Engenheiro de Software Sênior</span> com mais de 15 anos de experiência, 
            especializado em desenvolver aplicações escaláveis, performáticas e seguras. Minha trajetória inclui projetos 
            complexos no <span className="text-primary">setor financeiro</span>, onde atuei no desenvolvimento de sistemas 
            para controle de empréstimos, créditos e análise de risco.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Tenho forte atuação em <span className="text-accent">Clean Architecture, DDD e princípios SOLID</span>, 
            garantindo código sustentável e de fácil manutenção. Minha experiência abrange desde sistemas SCADA 
            para empresas globais como Chevron até plataformas de trading de commodities.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Atualmente focado em <span className="text-neon-blue">arquitetura de microsserviços</span>, 
            cloud computing (AWS), automação de testes e práticas DevOps modernas.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="glass-card p-6 group hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_100%_65%/0.2)] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
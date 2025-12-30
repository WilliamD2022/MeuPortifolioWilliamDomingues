import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Engineer Java Back End",
      company: "ACT DIGITAL",
      period: "Atualmente",
      location: "Barueri/SP, Brazil",
      description: "Desenvolvimento de sistemas para bancos e instituições financeiras, focando em controle de empréstimos, créditos e débitos.",
      highlights: [
        "desenvolvendo e mantendo APIs escaláveis com Java 17+, Spring Boot e Spring Data JPA, integradas a PostgreSQL e MongoDB"
      ]
    },
    {
      role: "Engenheiro de Software SR",
      company: "ITAU UNIBANCO",
      period: "Mai 2018 – Setembro 2025",
      location: "São Paulo, Brazil",
      description: "Desenvolvimento com back-end, front-end e automações para o ecossistema PJ do Itaú.",
      highlights: [
          "Atuei na modernização de microsserviços críticos para o ecossistema PJ (Pix, Open Finance)",
          "Desenvolvimento de APIs REST e BFF com Java, Spring Boot e AWS.",
          "Otimização de pipelines CI/CD e redução de 40% no tempo de validação de testes regressivos.",
          "Implementação de estratégias de Automação de Testes (Cypress/Selenium)"
      ]
    },
    {
      role: "Analista de Testes e Automação",
      company: "Sempre IT",
      period: "out 2017 – jul 2018",
      location: "São Paulo, Brazil",
      description: "Desenvolvimento de automações de testes",
      highlights: [
        "Cenários de testes automatizados com Selenium WebDriver e Java",
        "Integração com Jenkins para execução contínua de testes",
        "Criação de relatórios detalhados para análise de qualidade",
      ]
    },
    {
      role: "Analista de Automação de Testes",
      company: "Tatsoft",
      period: "Nov 2016 – Out 2017",
      location: "Santo Amaro, SP, Brazil",
      description: "Desenvolvimento de scripts de transações financeiras e automação de testes para sistemas ISO8583.",
      highlights: [
        "Atuação em instituições financeiras e em sistemas de cartões de crédito com protocolo ISO-8583. " +
        "Experiência em modelagem e análise de casos de teste, elaboração de documentação técnica, " +
        "bem como abertura, acompanhamento e fechamento de bugs."
      ]
    },

    {
      role: "Analista de Testes",
      company: "Inmetrics/Redecard",
      period: "Set 2010 – Ago 2016",
      location: "Alphaville, SP, Brazil",
      description: "Analista de testes para sistemas bancários e financeiros ISO8583.",
      highlights: [
        "Teste de Transações Financeiras",
        "Criação de Scripts ISO8583",
        "Automação de Testes com Selenium",
        "Documentação e Relatórios de Bugs"

      ]
    }

  ];

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiência 
            <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent"> Profissional</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-neon-blue transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.period}`}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 shadow-[0_0_20px_hsl(270_100%_65%/0.5)]" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_100%_65%/0.2)] transition-all duration-300">
                  {/* Period */}
                  <div className="flex items-center gap-2 text-primary text-sm font-mono mb-3">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-border">•</span>
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "System Analyst / Senior Developer",
      company: "Função Sistemas",
      period: "Nov 2019 – Presente",
      location: "São Paulo, Brazil",
      description: "Desenvolvimento de sistemas para bancos e instituições financeiras, focando em controle de empréstimos, créditos e débitos.",
      highlights: [
        "Arquitetura e planejamento de sistemas conforme novas regulamentações",
        "Sistema de Gerenciamento de Empréstimos Vencidos",
        "WebCCOB: Sistema de visualização e gestão de filas de cobrança",
        "Front: Sistema de análise de risco e cálculo de taxas"
      ]
    },
    {
      role: ".NET Developer",
      company: "Engelhart Commodities Trading Partners (BTG)",
      period: "Mai 2018 – Nov 2019",
      location: "São Paulo, Brazil",
      description: "Desenvolvimento de sistemas para trading de commodities utilizando .NET Core, Angular e SQL Server.",
      highlights: [
        "Implementação de processos Sefaz (NF-e, exportação)",
        "Criação de relatórios SQL para contratos e estoques",
        "Suporte técnico à equipe de execução"
      ]
    },
    {
      role: ".NET Developer",
      company: "Função Sistemas",
      period: "Abr 2015 – Abr 2018",
      location: "São Paulo, Brazil",
      description: "Desenvolvimento de sistemas bancários utilizando .NET C# e PL/SQL.",
      highlights: [
        "Implementação de novas funcionalidades",
        "Análise e correção de bugs",
        "Planejamento de arquitetura de sistemas"
      ]
    },
    {
      role: ".NET Developer",
      company: "Tatsoft",
      period: "Set 2014 – Abr 2015",
      location: "Houston, TX (Remote)",
      description: "Desenvolvimento de sistemas SCADA para a Chevron, coletando dados de perfuração em embarcações.",
      highlights: [
        "Sistema de monitoramento em tempo real",
        "Sistema de notificação customizado para alarmes",
        "Participação em reuniões de especificação técnica"
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
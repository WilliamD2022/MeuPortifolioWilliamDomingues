const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java 17+", "Spring Boot", "Quarkus", "Micronaut", "Node.js", "REST APIs"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "DynamoDB"]
    },
    {
      title: "Architecture",
      skills: ["Microservices", "Clean Architecture", "DDD", "SOLID", "Event-Driven", "TDD"]
    },
    {
      title: "Testing",
      skills: ["JUnit", "REST Assured", "Cypress", "Selenium", "Robot Framework"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "IntelliJ IDEA", "Maven", "Gradle", "Swagger"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Tecnologias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stack 
            <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent"> Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para construir soluções robustas e escaláveis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_100%_65%/0.15)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
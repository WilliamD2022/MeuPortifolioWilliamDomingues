import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "WilliamD2022",
      href: "https://github.com/WilliamD2022"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/williamdominguesbarbosa",
      href: "https://www.linkedin.com/in/williamdominguesbarbosa/"
    },
    {
      icon: Mail,
      label: "Email",
      value: "Entrar em contato",
      href: "mailto:contact@williamdbarbosa.dev"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Atibaia, SP - Brasil",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos 
            <span className="bg-gradient-to-r from-primary via-accent to-neon-blue bg-clip-text text-transparent"> Conversar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interessado em colaborar ou tem alguma pergunta? Ficarei feliz em conversar sobre seu próximo projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_hsl(270_100%_65%/0.3)] hover:shadow-[0_0_30px_hsl(270_100%_65%/0.5)] transition-all duration-300"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Links de Contato</h3>
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <div key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{link.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {link.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-transparent">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <link.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{link.label}</p>
                          <p className="text-foreground font-medium">{link.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <h3 className="text-xl font-bold text-foreground mb-3">Pronto para começar?</h3>
              <p className="text-muted-foreground mb-6">
                Estou disponível para projetos freelance, consultoria em arquitetura de software e oportunidades CLT/PJ.
              </p>
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <a 
                  href="https://www.linkedin.com/in/williamdominguesbarbosa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Conectar no LinkedIn
                  <Linkedin className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { motion } from "motion/react";
import {
  Zap,
  Shield,
  Award,
  Wrench,
  Gauge,
  Compass,
  Flame,
} from "lucide-react";
import { StyleCard } from "../components/StyleCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProcessStep } from "../components/ProcessStep";
import { TestimonialCard } from "../components/TestimonialCard";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string, tab?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1549636367-13c144c47063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwd29ya3Nob3AlMjBnYXJhZ2V8ZW58MXx8fHwxNzYxNTgyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Oficina Yoshi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0E]/80 via-[#0B0D0E]/70 to-[#0B0D0E]" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative container-custom text-center z-10 pt-40 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[#F2F2F2] mb-6 max-w-5xl mx-auto"
          >
            Oficina Yoshi — customização sob medida, sem
            atalhos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-[#C8CDD2] mb-12 max-w-3xl mx-auto"
          >
            Projetos autorais nos estilos Café Racer, Bobber,
            Scrambler e Chopper, com engenharia, estética e
            garantia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => onNavigate("portfolio")}
              className="px-8 py-4 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Ver portfólio
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#D72638] text-[#D72638] rounded hover:bg-[#D72638] hover:text-white transition-all duration-200"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Value Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-4">
                <Shield
                  size={28}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] text-lg mb-2">
                Projeto transparente
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-4">
                <Wrench
                  size={28}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] text-lg mb-2">
                Execução artesanal
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-4">
                <Award
                  size={28}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] text-lg mb-2">
                Entrega certificada
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-[#F2F2F2] mb-4">
              Nossos Estilos
            </h2>
            <p className="text-[#C8CDD2] max-w-2xl mx-auto">
              Especializados em quatro estilos icônicos de
              customização, cada um com sua identidade única.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StyleCard
              title="Café Racer"
              description="Visual minimalista, ergonomia esportiva e foco em desempenho. Tanque e banco alinhados, guidão baixo, pedaleiras recuadas."
              accentColor="#D72638"
              icon={<Zap size={32} />}
              onClick={() =>
                onNavigate("estilos", "cafe-racer")
              }
            />
            <StyleCard
              title="Bobber"
              description="Linha baixa e limpa. Paralama dianteiro removido, traseiro encurtado, peso reduzido e presença marcante."
              accentColor="#B08D57"
              icon={<Gauge size={32} />}
              onClick={() => onNavigate("estilos", "bobber")}
            />
            <StyleCard
              title="Scrambler"
              description="Rua com DNA off-road leve. Pneus com gomos, escape alto, guidão largo e simplicidade funcional."
              accentColor="#7A8F4E"
              icon={<Compass size={32} />}
              onClick={() => onNavigate("estilos", "scrambler")}
            />
            <StyleCard
              title="Chopper"
              description="Proporções alongadas e postura radical. Rake aumentado, bengalas estendidas, guidões altos e sissy bar sob medida."
              accentColor="#6C2BD9"
              icon={<Flame size={32} />}
              onClick={() => onNavigate("estilos", "chopper")}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-[#F2F2F2] mb-4">
              Destaques do Portfólio
            </h2>
            <p className="text-[#C8CDD2] max-w-2xl mx-auto">
              Confira alguns dos nossos projetos mais recentes e
              transformações marcantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1655229048877-149c557dfba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBtb3RvcmN5Y2xlJTIwdmludGFnZXxlbnwxfHx8fDE3NjE1ODcxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              afterImage="https://images.unsplash.com/photo-1612682450476-7ce72ff2c5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjYWZlJTIwcmFjZXIlMjBidWlsZHxlbnwxfHx8fDE3NjE1ODcxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              title="Triumph Bonneville Café Racer"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1760229306350-e6cb85e93977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbW90b3JjeWNsZSUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc2MTU4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080"
              afterImage="https://images.unsplash.com/photo-1635468324938-3304f24288d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2JiZXIlMjBtb3RvcmN5Y2xlJTIwY3VzdG9tfGVufDF8fHx8MTc2MTU4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              title="Harley Davidson Bobber"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Honda CB 750 Café Racer"
              style="cafe-racer"
              duration="8 semanas"
              imageUrl="https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmFjZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTU0NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080"
              services={[
                "Pintura",
                "Suspensão",
                "Escape",
                "Elétrica",
              ]}
              onClick={() => onNavigate("portfolio")}
            />
            <ProjectCard
              title="Yamaha XV 950 Bobber"
              style="bobber"
              duration="10 semanas"
              imageUrl="https://images.unsplash.com/photo-1635468324938-3304f24288d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2JiZXIlMjBtb3RvcmN5Y2xlJTIwY3VzdG9tfGVufDF8fHx8MTc2MTU4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
              services={[
                "Chassi",
                "Pintura",
                "Banco",
                "Guidão",
              ]}
              onClick={() => onNavigate("portfolio")}
            />
            <ProjectCard
              title="Ducati Scrambler Desert"
              style="scrambler"
              duration="6 semanas"
              imageUrl="https://images.unsplash.com/photo-1635764440683-bbe5c839ee5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhbWJsZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTUwMzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              services={[
                "Suspensão",
                "Pneus",
                "Escape",
                "Proteção",
              ]}
              onClick={() => onNavigate("portfolio")}
            />
          </div>

          <motion.div
            {...fadeInUp}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate("portfolio")}
              className="px-8 py-3 border-2 border-[#D72638] text-[#D72638] rounded hover:bg-[#D72638] hover:text-white transition-all duration-200"
            >
              Ver portfólio completo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-[#F2F2F2] mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-[#C8CDD2] max-w-2xl mx-auto">
              Nosso processo é estruturado para garantir
              transparência, qualidade e sua total satisfação.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <ProcessStep
              number={1}
              title="Briefing técnico e estético"
              description="Entendemos sua moto, seu uso e sua referência."
            />
            <ProcessStep
              number={2}
              title="Design & mockup"
              description="Apresentamos proposta visual e lista de peças."
            />
            <ProcessStep
              number={3}
              title="Construção e homologação"
              description="Execução, ajustes finos e checagem de segurança."
            />
            <ProcessStep
              number={4}
              title="Entrega e garantia"
              description="Checklist final, manual do projeto e acompanhamento."
              isLast
            />
          </div>

          <motion.div
            {...fadeInUp}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate("processo")}
              className="px-8 py-3 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200"
            >
              Conhecer nosso processo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-[#F2F2F2] mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-[#C8CDD2] max-w-2xl mx-auto">
              Depoimentos de quem confiou seus sonhos à Oficina
              Yoshi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="A transformação da minha CB foi incrível. Ficou exatamente como eu imaginava, com atenção a cada detalhe. A equipe é extremamente profissional."
              author="Carlos Eduardo"
              project="Honda CB 750 Café Racer"
              rating={5}
            />
            <TestimonialCard
              quote="Acompanhei todo o processo e fiquei impressionado com a transparência. Recebi fotos e vídeos semanais. O resultado superou minhas expectativas."
              author="Marina Silva"
              project="Yamaha XV 950 Bobber"
              rating={5}
            />
            <TestimonialCard
              quote="Profissionalismo do início ao fim. O mockup apresentado foi fiel ao resultado final. A moto está perfeita e a garantia me dá total segurança."
              author="Roberto Andrade"
              project="Ducati Scrambler Desert"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-[#F2F2F2] mb-6">
              Agende uma Visita
            </h2>
            <p className="text-[#C8CDD2] text-lg mb-12 max-w-2xl mx-auto">
              Visite nossa oficina, conheça nosso trabalho de
              perto e converse com nossa equipe sobre seu
              projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate("orcamentos")}
                className="px-8 py-4 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              >
                Pedir orçamento
              </button>
              <button
                onClick={() => onNavigate("contato")}
                className="px-8 py-4 border-2 border-[#D72638] text-[#D72638] rounded hover:bg-[#D72638] hover:text-white transition-all duration-200"
              >
                Falar com a equipe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
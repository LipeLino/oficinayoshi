import { motion } from "motion/react";
import { Users, Award, Wrench, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SobrePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const team = [
    {
      name: "Carllos Sandrioshy",
      role: "Fundador e Mestre Mecânico",
      bio: "Mais de 20 anos de experiência em customização de motos clássicas.",
      image:
        "https://images.unsplash.com/photo-1610259998914-d1b9afe0dc55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Lucas Montenegro",
      role: "Designer e Projetista",
      bio: "Especialista em design automotivo e mockups 3D.",
      image:
        "https://images.unsplash.com/photo-1628577478162-d4d00467c627?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Rafael Costa",
      role: "Pintor e Finalizador",
      bio: "Expertise em pintura customizada e acabamento premium.",
      image:
        "https://images.unsplash.com/photo-1589235598363-6ff85713edae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      name: "Bruno Silva",
      role: "Mecânico Especialista",
      bio: "Foco em suspensão, freios e performance.",
      image:
        "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTU2NTIxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const certifications = [
    "Certificação em Soldagem MIG/TIG",
    "Especialização em Motores Boxer e V-Twin",
    "Curso de Design Automotivo",
    "Certificação de Segurança Veicular",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-[#151A1E] py-16 border-b border-[#2A2F35]">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F2F2F2] mb-4"
          >
            Sobre a Oficina Yoshi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#C8CDD2] text-lg max-w-2xl"
          >
            Paixão por motos, compromisso com a excelência e
            atenção a cada detalhe.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-[#F2F2F2] mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-[#C8CDD2]">
                <p>
                  A Oficina Yoshi nasceu em 2015 do sonho de
                  Carllos Sandrioshy, um apaixonado por motos
                  clássicas que sempre acreditou que cada moto
                  tem uma personalidade única esperando para ser
                  revelada.
                </p>
                <p>
                  O que começou como uma garagem doméstica
                  transformando motos de amigos se tornou um dos
                  principais estúdios de customização de São
                  Paulo, especializado em quatro estilos
                  icônicos: Café Racer, Bobber, Scrambler e
                  Chopper.
                </p>
                <p>
                  Hoje, nossa equipe de especialistas trabalha
                  com dedicação artesanal, unindo técnica
                  refinada e visão criativa. Cada projeto é
                  único, desenvolvido em colaboração próxima com
                  o cliente, do briefing inicial até a entrega
                  final.
                </p>
                <p>
                  Nosso compromisso é simples: entregar motos
                  que superem expectativas, com qualidade
                  certificada, transparência total no processo e
                  garantia de 12 meses em todos os serviços.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580401422563-bfb02b6cec07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbWVjaGFuaWMlMjB3b3JrfGVufDF8fHx8MTc2MTU4MjQ3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oficina Yoshi - Atelier"
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom">
          <motion.h2
            {...fadeInUp}
            className="text-[#F2F2F2] mb-16 text-center"
          >
            Nossos Valores
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mx-auto mb-6">
                <Wrench
                  size={32}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">
                Artesanato Premium
              </h3>
              <p className="text-[#C8CDD2] text-sm">
                Cada detalhe é executado manualmente com
                precisão e cuidado artesanal.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mx-auto mb-6">
                <Shield
                  size={32}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">
                Transparência Total
              </h3>
              <p className="text-[#C8CDD2] text-sm">
                Você acompanha cada etapa com atualizações
                semanais e acesso direto à equipe.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mx-auto mb-6">
                <Award
                  size={32}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">
                Garantia Certificada
              </h3>
              <p className="text-[#C8CDD2] text-sm">
                12 meses de garantia em todos os serviços com
                suporte pós-entrega.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#D72638]/10 flex items-center justify-center mx-auto mb-6">
                <Users
                  size={32}
                  className="text-[#D72638]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">
                Colaboração Próxima
              </h3>
              <p className="text-[#C8CDD2] text-sm">
                Desenvolvemos cada projeto em parceria com você,
                do conceito à entrega.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom">
          <motion.h2
            {...fadeInUp}
            className="text-[#F2F2F2] mb-16 text-center"
          >
            Nossa Equipe
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.article
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-[#151A1E] rounded-lg overflow-hidden border border-[#2A2F35] group hover:border-[#D72638] transition-all"
              >
                <div className="aspect-square overflow-hidden bg-[#2A2F35]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#F2F2F2] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#D72638] text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#C8CDD2] text-sm">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom max-w-4xl">
          <motion.h2
            {...fadeInUp}
            className="text-[#F2F2F2] mb-12 text-center"
          >
            Certificações e Especialidades
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-[#0B0D0E] p-6 rounded-lg border border-[#2A2F35]"
              >
                <div
                  className="w-2 h-2 rounded-full bg-[#D72638] flex-shrink-0"
                  aria-hidden="true"
                />
                <p className="text-[#C8CDD2]">{cert}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="mt-12 bg-[#0B0D0E] p-8 rounded-lg border border-[#2A2F35]"
          >
            <h3 className="text-[#F2F2F2] mb-4">
              Nosso Atelier
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p
                  className="text-3xl text-[#D72638] mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  250+
                </p>
                <p className="text-[#C8CDD2] text-sm">
                  Projetos concluídos
                </p>
              </div>
              <div>
                <p
                  className="text-3xl text-[#D72638] mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  8
                </p>
                <p className="text-[#C8CDD2] text-sm">
                  Anos de experiência
                </p>
              </div>
              <div>
                <p
                  className="text-3xl text-[#D72638] mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  4
                </p>
                <p className="text-[#C8CDD2] text-sm">
                  Especialistas
                </p>
              </div>
              <div>
                <p
                  className="text-3xl text-[#D72638] mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  100%
                </p>
                <p className="text-[#C8CDD2] text-sm">
                  Clientes satisfeitos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-[#F2F2F2] mb-6">
              Visite Nossa Oficina
            </h2>
            <p className="text-[#C8CDD2] text-lg mb-8 max-w-2xl mx-auto">
              Venha conhecer nosso espaço, ver projetos em
              andamento e conversar com a equipe.
            </p>
            <button className="px-8 py-4 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200 hover:-translate-y-0.5 shadow-md">
              Agendar visita
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
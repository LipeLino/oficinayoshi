import { motion } from 'motion/react';
import { ProcessStep } from '../components/ProcessStep';
import { CheckCircle2, Clock, Shield, FileText } from 'lucide-react';

export function ProcessoPage() {
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
            Nosso Processo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#C8CDD2] text-lg max-w-2xl"
          >
            Transparência, qualidade e compromisso em cada etapa do seu projeto.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F2F2F2] mb-16 text-center"
          >
            Linha do Tempo do Projeto
          </motion.h2>

          <div className="space-y-0">
            <ProcessStep
              number={1}
              title="Briefing técnico e estético"
              description="Entendemos sua moto, seu uso e sua referência. Nesta etapa, avaliamos o estado atual da moto, discutimos suas expectativas e referências visuais, e definimos o escopo inicial do projeto. Realizamos medições, fotos detalhadas e um diagnóstico técnico completo."
              status="completed"
            />
            <ProcessStep
              number={2}
              title="Design & mockup"
              description="Apresentamos proposta visual e lista de peças. Nossa equipe de design desenvolve mockups fotorrealistas mostrando como sua moto ficará após a customização. Junto com as imagens, você recebe uma lista completa de peças, orçamento detalhado e cronograma estimado."
              status="active"
            />
            <ProcessStep
              number={3}
              title="Construção e homologação"
              description="Execução, ajustes finos e checagem de segurança. Com sua aprovação, iniciamos a desmontagem, preparação e modificação. Você recebe atualizações semanais com fotos e vídeos do progresso. Antes da finalização, realizamos testes de segurança e ajustes finos de suspensão, freios e motor."
            />
            <ProcessStep
              number={4}
              title="Entrega e garantia"
              description="Checklist final, manual do projeto e acompanhamento. Você recebe sua moto com um manual completo do projeto, documentação fotográfica de todo o processo, certificado de garantia e orientações de manutenção. Oferecemos suporte pós-entrega e acompanhamento nos primeiros 1000km."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F2F2F2] mb-16 text-center"
          >
            O Que Está Incluído
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B0D0E] p-8 rounded-lg border border-[#2A2F35]"
            >
              <div className="w-14 h-14 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-6">
                <CheckCircle2 size={28} className="text-[#D72638]" aria-hidden="true" />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">Mockups 3D</h3>
              <p className="text-[#C8CDD2] text-sm">
                Visualize sua moto customizada antes de começarmos. Aprovação garantida antes da execução.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B0D0E] p-8 rounded-lg border border-[#2A2F35]"
            >
              <div className="w-14 h-14 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-6">
                <Clock size={28} className="text-[#D72638]" aria-hidden="true" />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">Atualizações Semanais</h3>
              <p className="text-[#C8CDD2] text-sm">
                Receba fotos e vídeos do progresso toda semana. Acompanhe cada etapa de perto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B0D0E] p-8 rounded-lg border border-[#2A2F35]"
            >
              <div className="w-14 h-14 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-6">
                <Shield size={28} className="text-[#D72638]" aria-hidden="true" />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">Garantia 12 Meses</h3>
              <p className="text-[#C8CDD2] text-sm">
                Cobertura completa para todos os serviços executados. Suporte e ajustes inclusos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#0B0D0E] p-8 rounded-lg border border-[#2A2F35]"
            >
              <div className="w-14 h-14 rounded-full bg-[#D72638]/10 flex items-center justify-center mb-6">
                <FileText size={28} className="text-[#D72638]" aria-hidden="true" />
              </div>
              <h3 className="text-[#F2F2F2] mb-3">Documentação Completa</h3>
              <p className="text-[#C8CDD2] text-sm">
                Manual do projeto, lista de peças, fotos antes/depois e certificado de garantia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Estimates */}
      <section className="py-24 bg-[#0B0D0E]">
        <div className="container-custom max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F2F2F2] mb-12 text-center"
          >
            Prazos Estimados
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#151A1E] p-6 rounded-lg border border-[#2A2F35] flex justify-between items-center"
            >
              <div>
                <h3 className="text-[#F2F2F2] mb-2">Customização Básica</h3>
                <p className="text-[#C8CDD2] text-sm">
                  Guidão, banco, escape, iluminação
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl text-[#D72638]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  4-6
                </span>
                <p className="text-[#C8CDD2] text-sm">semanas</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#151A1E] p-6 rounded-lg border border-[#2A2F35] flex justify-between items-center"
            >
              <div>
                <h3 className="text-[#F2F2F2] mb-2">Customização Intermediária</h3>
                <p className="text-[#C8CDD2] text-sm">
                  Inclui suspensão, rodas, pintura parcial
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl text-[#B08D57]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  6-8
                </span>
                <p className="text-[#C8CDD2] text-sm">semanas</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#151A1E] p-6 rounded-lg border border-[#2A2F35] flex justify-between items-center"
            >
              <div>
                <h3 className="text-[#F2F2F2] mb-2">Customização Completa</h3>
                <p className="text-[#C8CDD2] text-sm">
                  Projeto full custom com modificações estruturais
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl text-[#7A8F4E]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  10-12
                </span>
                <p className="text-[#C8CDD2] text-sm">semanas</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C8CDD2] text-sm mt-8 text-center"
          >
            * Os prazos podem variar conforme disponibilidade de peças importadas e complexidade do projeto.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#F2F2F2] mb-6">Pronto para Começar?</h2>
            <p className="text-[#C8CDD2] text-lg mb-8 max-w-2xl mx-auto">
              Agende uma visita à oficina ou solicite um orçamento online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200 hover:-translate-y-0.5 shadow-md">
                Solicitar orçamento
              </button>
              <button className="px-8 py-4 border-2 border-[#D72638] text-[#D72638] rounded hover:bg-[#D72638] hover:text-white transition-all duration-200">
                Agendar visita
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

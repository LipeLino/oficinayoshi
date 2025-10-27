import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

interface EstilosPageProps {
  initialTab?: string;
}

type StyleType = 'cafe-racer' | 'bobber' | 'scrambler' | 'chopper';

const styles = {
  'cafe-racer': {
    name: 'Café Racer',
    color: '#D72638',
    description: 'Visual minimalista, ergonomia esportiva e foco em desempenho. Tanque e banco alinhados, guidão baixo, pedaleiras recuadas.',
    hero: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmFjZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTU0NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    modifications: [
      'Guidão baixo tipo clip-on ou mini ape',
      'Pedaleiras recuadas para postura esportiva',
      'Banco mono-seat ou duplo estreito',
      'Tanque alongado e linha contínua até o banco',
      'Escapamento esportivo com ponteiras baixas',
      'Iluminação minimalista com faróis redondos',
    ],
    faqs: [
      {
        question: 'O que caracteriza um Café Racer?',
        answer: 'O estilo Café Racer nasceu nos anos 60 em Londres, focado em velocidade e minimalismo. Caracteriza-se pela postura agressiva, linha contínua do tanque ao banco e estética limpa.',
      },
      {
        question: 'Posso fazer Café Racer em qualquer moto?',
        answer: 'Motos naked ou clássicas são as melhores bases. Modelos como CB, XJ, Bonneville e BMW série R são ideais. Avaliamos caso a caso.',
      },
    ],
  },
  'bobber': {
    name: 'Bobber',
    color: '#B08D57',
    description: 'Linha baixa e limpa. Paralama dianteiro removido, traseiro encurtado, peso reduzido e presença marcante.',
    hero: 'https://images.unsplash.com/photo-1635468324938-3304f24288d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2JiZXIlMjBtb3RvcmN5Y2xlJTIwY3VzdG9tfGVufDF8fHx8MTc2MTU4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    modifications: [
      'Remoção ou encurtamento de paralamas',
      'Banco solo baixo e minimalista',
      'Guidão reto ou mini ape',
      'Suspensão rebaixada',
      'Rodas spoke wire ou raiadas',
      'Acabamento clean com fiação oculta',
    ],
    faqs: [
      {
        question: 'Bobber é confortável para viagens?',
        answer: 'Bobbers priorizam estética sobre conforto em longas distâncias. São ideais para uso urbano e passeios de até 200km. Podemos ajustar o banco para mais conforto.',
      },
      {
        question: 'Preciso regularizar as modificações?',
        answer: 'Sim. Orientamos sobre requisitos do Detran e executamos dentro das normas. Remoção de paralamas exige aprovação e alguns estados têm restrições.',
      },
    ],
  },
  'scrambler': {
    name: 'Scrambler',
    color: '#7A8F4E',
    description: 'Rua com DNA off-road leve. Pneus com gomos, escape alto, guidão largo e simplicidade funcional.',
    hero: 'https://images.unsplash.com/photo-1635764440683-bbe5c839ee5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhbWJsZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTUwMzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    modifications: [
      'Pneus dual-sport com gomos',
      'Escape alto do lado direito',
      'Guidão largo e alto tipo motocross',
      'Protetor de motor e cárter',
      'Suspensão com curso maior',
      'Assento estreito e confortável',
    ],
    faqs: [
      {
        question: 'Scrambler serve para trilhas pesadas?',
        answer: 'O Scrambler é ideal para terra leve, cascalho e estradas não pavimentadas. Para trilhas técnicas, recomendamos motos específicas de enduro.',
      },
      {
        question: 'Quanto tempo leva uma conversão Scrambler?',
        answer: 'De 4 a 8 semanas dependendo do escopo. Conversões básicas (pneus, guidão, escape) são mais rápidas. Projetos com pintura e customização de tanque levam mais tempo.',
      },
    ],
  },
  'chopper': {
    name: 'Chopper',
    color: '#6C2BD9',
    description: 'Proporções alongadas e postura radical. Rake aumentado, bengalas estendidas, guidões altos e sissy bar sob medida.',
    hero: 'https://images.unsplash.com/photo-1549915248-523e65cb5b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9wcGVyJTIwbW90b3JjeWNsZXxlbnwxfHx8fDE3NjE1ODI0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    modifications: [
      'Bengalas frontais estendidas',
      'Rake aumentado no chassi',
      'Guidão alto tipo ape hanger',
      'Sissy bar alta personalizada',
      'Tanque tipo peanut ou alongado',
      'Rodas grandes (21" na frente comum)',
    ],
    faqs: [
      {
        question: 'Chopper é difícil de pilotar?',
        answer: 'Exige adaptação devido ao rake aumentado e comprimento. Manobras em baixa velocidade são mais desafiadoras. Recomendamos para pilotos experientes.',
      },
      {
        question: 'Posso chopar qualquer moto?',
        answer: 'Cruisers V-twin são as melhores bases (Shadow, Dragstar, Sportster). Avaliamos a viabilidade técnica e estrutural antes de iniciar o projeto.',
      },
    ],
  },
};

export function EstilosPage({ initialTab = 'cafe-racer' }: EstilosPageProps) {
  const [activeTab, setActiveTab] = useState<StyleType>(initialTab as StyleType);

  useEffect(() => {
    if (initialTab && initialTab in styles) {
      setActiveTab(initialTab as StyleType);
    }
  }, [initialTab]);

  const currentStyle = styles[activeTab];

  return (
    <div className="min-h-screen pt-20">
      {/* Tabs Navigation */}
      <div className="bg-[#151A1E] border-b border-[#2A2F35] sticky top-20 z-40">
        <div className="container-custom">
          <nav className="flex overflow-x-auto" role="tablist" aria-label="Estilos de customização">
            {Object.entries(styles).map(([key, style]) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                onClick={() => setActiveTab(key as StyleType)}
                className={`px-6 py-4 whitespace-nowrap transition-colors relative ${
                  activeTab === key ? 'text-[#F2F2F2]' : 'text-[#C8CDD2] hover:text-[#F2F2F2]'
                }`}
              >
                {style.name}
                {activeTab === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: style.color }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
        {/* Hero */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <ImageWithFallback
            src={currentStyle.hero}
            alt={currentStyle.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(11, 13, 14, 0.7), rgba(11, 13, 14, 0.9))`,
            }}
          />
          <div className="relative container-custom text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={activeTab}
              className="text-[#F2F2F2] mb-4"
              style={{ color: currentStyle.color }}
            >
              {currentStyle.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              key={`${activeTab}-desc`}
              className="text-xl text-[#C8CDD2] max-w-3xl mx-auto"
            >
              {currentStyle.description}
            </motion.p>
          </div>
        </section>

        {/* Modifications */}
        <section className="py-24 bg-[#0B0D0E]">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F2F2F2] mb-12 text-center"
            >
              Modificações Típicas
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {currentStyle.modifications.map((mod, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-[#151A1E] p-4 rounded border border-[#2A2F35]"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: currentStyle.color }}
                    aria-hidden="true"
                  />
                  <p className="text-[#C8CDD2] text-sm">{mod}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-24 bg-[#151A1E]">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F2F2F2] mb-12 text-center"
            >
              Galeria de Projetos
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title={`Projeto ${currentStyle.name} #1`}
                style={activeTab}
                duration="8 semanas"
                imageUrl={currentStyle.hero}
                services={['Pintura', 'Suspensão', 'Escape', 'Elétrica']}
              />
              <ProjectCard
                title={`Projeto ${currentStyle.name} #2`}
                style={activeTab}
                duration="10 semanas"
                imageUrl={currentStyle.hero}
                services={['Chassi', 'Motor', 'Guidão', 'Banco']}
              />
              <ProjectCard
                title={`Projeto ${currentStyle.name} #3`}
                style={activeTab}
                duration="6 semanas"
                imageUrl={currentStyle.hero}
                services={['Estética', 'Rodas', 'Freios']}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#0B0D0E]">
          <div className="container-custom max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F2F2F2] mb-12 text-center"
            >
              Perguntas Frequentes
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-4">
              {currentStyle.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#151A1E] border border-[#2A2F35] rounded-lg px-6"
                >
                  <AccordionTrigger className="text-[#F2F2F2] hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#C8CDD2] pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem
                value="item-general"
                className="bg-[#151A1E] border border-[#2A2F35] rounded-lg px-6"
              >
                <AccordionTrigger className="text-[#F2F2F2] hover:no-underline py-4">
                  Quanto tempo leva um projeto?
                </AccordionTrigger>
                <AccordionContent className="text-[#C8CDD2] pb-4">
                  De 4 a 12 semanas, conforme escopo e peças. Projetos mais simples com modificações básicas podem ser concluídos em 4-6 semanas, enquanto transformações completas com pintura customizada levam 10-12 semanas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-regularize"
                className="bg-[#151A1E] border border-[#2A2F35] rounded-lg px-6"
              >
                <AccordionTrigger className="text-[#F2F2F2] hover:no-underline py-4">
                  Vocês regularizam as alterações?
                </AccordionTrigger>
                <AccordionContent className="text-[#C8CDD2] pb-4">
                  Orientamos sobre requisitos e executamos dentro das normas aplicáveis. Fornecemos toda documentação necessária e indicamos despachantes especializados quando necessário.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
}

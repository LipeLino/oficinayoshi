import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Honda CB 750 Café Racer',
    style: 'cafe-racer' as const,
    duration: '8 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmFjZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTU0NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    services: ['Pintura', 'Suspensão', 'Escape', 'Elétrica'],
  },
  {
    id: 2,
    title: 'Yamaha XV 950 Bobber',
    style: 'bobber' as const,
    duration: '10 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1635468324938-3304f24288d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2JiZXIlMjBtb3RvcmN5Y2xlJTIwY3VzdG9tfGVufDF8fHx8MTc2MTU4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    services: ['Chassi', 'Pintura', 'Banco', 'Guidão'],
  },
  {
    id: 3,
    title: 'Ducati Scrambler Desert',
    style: 'scrambler' as const,
    duration: '6 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1635764440683-bbe5c839ee5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhbWJsZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTUwMzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    services: ['Suspensão', 'Pneus', 'Escape', 'Proteção'],
  },
  {
    id: 4,
    title: 'Harley Sportster Chopper',
    style: 'chopper' as const,
    duration: '12 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1549915248-523e65cb5b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9wcGVyJTIwbW90b3JjeWNsZXxlbnwxfHx8fDE3NjE1ODI0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    services: ['Chassi', 'Bengalas', 'Sissy bar', 'Pintura'],
  },
  {
    id: 5,
    title: 'BMW R Nine T Café Racer',
    style: 'cafe-racer' as const,
    duration: '7 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmFjZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTU0NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    services: ['Banco', 'Escapamento', 'Guidão', 'Elétrica'],
  },
  {
    id: 6,
    title: 'Triumph Bonneville Scrambler',
    style: 'scrambler' as const,
    duration: '9 semanas',
    imageUrl: 'https://images.unsplash.com/photo-1635764440683-bbe5c839ee5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhbWJsZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTUwMzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    services: ['Suspensão', 'Rodas', 'Proteção', 'Escape'],
  },
];

type FilterType = 'all' | 'cafe-racer' | 'bobber' | 'scrambler' | 'chopper';

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.style === activeFilter);

  const filters = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'cafe-racer', label: 'Café Racer', color: '#D72638' },
    { id: 'bobber', label: 'Bobber', color: '#B08D57' },
    { id: 'scrambler', label: 'Scrambler', color: '#7A8F4E' },
    { id: 'chopper', label: 'Chopper', color: '#6C2BD9' },
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
            Portfólio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#C8CDD2] text-lg max-w-2xl"
          >
            Explore nossos projetos de customização e veja o antes e depois de cada transformação.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#0B0D0E] py-8 sticky top-20 z-40 border-b border-[#2A2F35]">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} className="text-[#C8CDD2]" aria-hidden="true" />
            <span className="text-[#C8CDD2]">Filtrar por estilo:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as FilterType)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'text-white'
                    : 'bg-[#151A1E] text-[#C8CDD2] hover:bg-[#2A2F35]'
                }`}
                style={{
                  backgroundColor: activeFilter === filter.id ? filter.color || '#D72638' : undefined,
                }}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#0B0D0E]">
        <div className="container-custom">
          <div className="mb-6">
            <p className="text-[#C8CDD2]">
              Mostrando {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto' : 'projetos'}
            </p>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#C8CDD2] text-lg">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
            </div>
          )}
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
            <h2 className="text-[#F2F2F2] mb-6">Pronto para o Seu Projeto?</h2>
            <p className="text-[#C8CDD2] text-lg mb-8 max-w-2xl mx-auto">
              Transforme sua moto em uma obra única. Entre em contato e vamos começar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-all duration-200 hover:-translate-y-0.5 shadow-md">
                Pedir orçamento
              </button>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#D72638] text-[#D72638] rounded hover:bg-[#D72638] hover:text-white transition-all duration-200 inline-block"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

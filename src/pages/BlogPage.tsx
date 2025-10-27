import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const blogPosts = [
  {
    id: 1,
    title: 'Guia Completo: Como Escolher o Estilo Ideal para Sua Moto',
    excerpt: 'Descubra qual estilo de customização combina mais com seu perfil de pilotagem e estética desejada.',
    date: '15 de Outubro, 2025',
    readTime: '8 min',
    imageUrl: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmFjZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTU0NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Guia', 'Estilos'],
    featured: true,
  },
  {
    id: 2,
    title: 'Café Racer: História e Evolução do Estilo',
    excerpt: 'Dos cafés londrinos dos anos 60 até as modernas interpretações contemporâneas.',
    date: '10 de Outubro, 2025',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1642418425655-7168f530b42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcmFjZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTU0NzQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Café Racer', 'História'],
  },
  {
    id: 3,
    title: '5 Dicas de Manutenção para Motos Customizadas',
    excerpt: 'Cuidados essenciais para manter sua custom em perfeito estado por muito mais tempo.',
    date: '5 de Outubro, 2025',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1580401422563-bfb02b6cec07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwbWVjaGFuaWMlMjB3b3JrfGVufDF8fHx8MTc2MTU4MjQ3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Manutenção', 'Dicas'],
  },
  {
    id: 4,
    title: 'Bobber vs Chopper: Entenda as Diferenças',
    excerpt: 'Duas estéticas icônicas que muitas vezes são confundidas. Saiba como diferenciá-las.',
    date: '28 de Setembro, 2025',
    readTime: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1635468324938-3304f24288d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2JiZXIlMjBtb3RvcmN5Y2xlJTIwY3VzdG9tfGVufDF8fHx8MTc2MTU4MjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Bobber', 'Chopper'],
  },
  {
    id: 5,
    title: 'Scrambler: A Moto Urbana com DNA Off-Road',
    excerpt: 'Por que o estilo Scrambler conquistou pilotos urbanos em todo o mundo.',
    date: '20 de Setembro, 2025',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1635764440683-bbe5c839ee5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JhbWJsZXIlMjBtb3RvcmN5Y2xlfGVufDF8fHx8MTc2MTUwMzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Scrambler'],
  },
  {
    id: 6,
    title: 'Regularização de Motos Customizadas: O Que Você Precisa Saber',
    excerpt: 'Guia prático sobre documentação, inspeção e regularização junto ao Detran.',
    date: '12 de Setembro, 2025',
    readTime: '10 min',
    imageUrl: 'https://images.unsplash.com/photo-1549636367-13c144c47063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwd29ya3Nob3AlMjBnYXJhZ2V8ZW58MXx8fHwxNzYxNTgyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Regulamentação', 'Dicas'],
  },
];

export function BlogPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#C8CDD2] text-lg max-w-2xl"
          >
            Dicas, guias e histórias do mundo da customização de motos.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-[#0B0D0E]">
          <div className="container-custom">
            <motion.article
              {...fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#151A1E] rounded-lg overflow-hidden border border-[#2A2F35]"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
                <ImageWithFallback
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D72638] text-white px-3 py-1 rounded text-xs">
                    Destaque
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#2A2F35] text-[#C8CDD2] text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-[#F2F2F2] mb-4">{featuredPost.title}</h2>

                <p className="text-[#C8CDD2] mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6 text-[#C8CDD2] text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} aria-hidden="true" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} aria-hidden="true" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-[#D72638] hover:gap-3 transition-all">
                  Ler artigo
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-[#0B0D0E]">
        <div className="container-custom">
          <motion.h2
            {...fadeInUp}
            className="text-[#F2F2F2] mb-12"
          >
            Todos os Artigos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
                className="group bg-[#151A1E] rounded-lg overflow-hidden border border-[#2A2F35] hover:border-[#D72638] transition-all cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-[#2A2F35] text-[#C8CDD2] text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-[#F2F2F2] mb-3 group-hover:text-[#D72638] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#C8CDD2] text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-[#C8CDD2] text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} aria-hidden="true" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#D72638] text-sm group-hover:gap-3 transition-all">
                    Ler mais
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#151A1E]">
        <div className="container-custom max-w-3xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-[#F2F2F2] mb-6">Fique por Dentro</h2>
            <p className="text-[#C8CDD2] text-lg mb-8">
              Receba novos artigos, dicas e novidades da Oficina Yoshi direto no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded bg-[#0B0D0E] border border-[#2A2F35] text-[#F2F2F2] placeholder:text-[#C8CDD2] focus:outline-none focus:border-[#D72638]"
                aria-label="Seu e-mail"
              />
              <button className="px-6 py-3 bg-[#D72638] text-white rounded hover:bg-[#C11F2E] transition-colors whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

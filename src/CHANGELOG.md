# Changelog - Oficina Yoshi

## [1.1.0] - 2025-10-27

### 🎨 Added - Design Premium
- Novo header com efeito glass morphism e gradiente
- Logo redesenhado com tagline "Custom Motorcycles"
- Efeito shimmer no hover do logo
- Indicador de navegação ativa com animação fluida (layoutId)
- CTA com gradiente e glow effect
- Mobile menu com backdrop blur e design premium
- Footer com identidade visual consistente
- Ícones sociais com efeito de escala no hover

### 📸 Changed - Imagens
- Before/After sliders com fotos reais e diferentes
  - Café Racer: Vintage → Custom build
  - Bobber: Restoration → Bobber customizado
- Fotos profissionais adicionadas para toda a equipe
  - Carllos Sandrioshy (mecânico)
  - Lucas Montenegro (designer)
  - Rafael Costa (artesão)
  - Bruno Silva (engenheiro)

### 👤 Changed - Conteúdo
- Nome do fundador atualizado: Paulo Yoshida → **Carllos Sandrioshy**
- História da empresa atualizada com novo nome
- Bio da equipe mantida

### ✨ Enhanced - Componentes

#### StyleCard
- Elevação aumentada no hover (y: -6px)
- Borda lateral animada
- Gradiente radial no fundo (hover)
- Sombra premium
- Duração de animação: 300ms
- Easing suave: cubic-bezier(0.2, 0.8, 0.2, 1)

#### ProjectCard
- Elevação mais pronunciada (y: -6px)
- Overlay de gradiente nas imagens
- Badge com backdrop-blur
- Zoom de imagem mais dramático (scale 1.1, 700ms)
- Border colorida no hover
- Shadow expandida

#### Header
- Padding aumentado (py-5)
- Background: gradiente transparente → glass blur
- Border-bottom sutil quando scrolled
- Navegação com estados hover melhorados
- Botões com background semi-transparente
- Mobile menu com gradientes nos itens ativos

#### Footer
- Background escuro consistente (#0B0D0E)
- Tagline adicionada ao logo
- Botões sociais com semi-transparência
- Hover effects melhorados

### 🎭 Enhanced - Animações
- Duração padrão aumentada para 300ms (premium)
- Easing customizado para suavidade
- Shimmer effect no logo (8s loop)
- Transições de imagem mais lentas e suaves
- Indicador de navegação com spring animation
- Micro-interações em todos os elementos interativos

### 📝 Added - Documentação
- `IMPROVEMENTS.md` - Lista completa de melhorias
- `DESIGN_SYSTEM.md` - Sistema de design completo
- `IMAGE_SOURCES.md` - Catálogo de imagens
- `CHANGELOG.md` - Este arquivo

### 🎨 Added - CSS Utilities
- `.nav-shimmer` - Efeito de brilho animado
- `.focus-brand` - Focus ring com cor da marca
- Smooth scroll behavior (quando suportado)
- Tap highlight removido para mobile

### 🔧 Technical
- Todas as animações respeitam prefers-reduced-motion
- Performance otimizada com will-change implícito
- Transições GPU-accelerated
- Lazy loading de imagens mantido

---

## [1.0.0] - 2025-10-27 (Initial Release)

### 🎉 Initial Features
- Sistema de design completo com tokens
- 8 páginas totalmente funcionais
  - Home
  - Estilos (com tabs)
  - Portfólio (com filtros)
  - Processo
  - Orçamentos (formulário multi-etapas)
  - Sobre
  - Blog
  - Contato
- Componentes reutilizáveis
  - Header com menu mobile
  - Footer responsivo
  - StyleCard
  - ProjectCard
  - ProcessStep
  - TestimonialCard
  - BeforeAfterSlider
- Navegação por hash
- Animações com Motion (Framer Motion)
- Formulários com validação
- Toast notifications (Sonner)
- Acessibilidade WCAG 2.1 AA
- Design responsivo (mobile, tablet, desktop)
- Paleta de cores por estilo de moto
- Tipografia premium (Oswald + Inter)

---

## 🎯 Próximas Versões

### [1.2.0] - Planejado
- [ ] Lightbox para galeria de projetos
- [ ] Filtros avançados no portfólio
- [ ] Busca global no header
- [ ] Breadcrumbs em páginas internas
- [ ] Animação de scroll reveal em mais seções

### [2.0.0] - Futuro
- [ ] Integração com Supabase
- [ ] Sistema de login para clientes
- [ ] Acompanhamento de projetos em tempo real
- [ ] Chat em tempo real
- [ ] Galeria de cliente (upload de fotos)
- [ ] Sistema de agendamento online
- [ ] Carrinho de orçamentos

---

## 📊 Métricas de Qualidade

### Performance
- ✅ Animações otimizadas (GPU-accelerated)
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Reduced motion support

### Acessibilidade
- ✅ WCAG 2.1 AA compliance
- ✅ Contraste mínimo 4.5:1
- ✅ Hierarquia semântica correta
- ✅ Todos os elementos interativos acessíveis via teclado
- ✅ ARIA labels completos
- ✅ Alt text descritivo em todas as imagens

### Responsividade
- ✅ Mobile-first approach
- ✅ Breakpoints: 768px, 1024px, 1440px
- ✅ Grid responsivo (12/8/4 colunas)
- ✅ Tipografia fluida

### SEO
- ✅ Estrutura semântica HTML5
- ✅ Meta tags apropriadas
- ✅ Hierarquia de títulos correta
- ✅ Alt text em imagens
- ✅ URLs amigáveis (hash-based)

---

## 👥 Contribuidores

- **Design & Development**: IA Assistant
- **Conteúdo**: Cliente Oficina Yoshi
- **Imagens**: Unsplash (diversos fotógrafos)

---

## 📄 Licença

Código proprietário - © 2025 Oficina Yoshi
Todos os direitos reservados.

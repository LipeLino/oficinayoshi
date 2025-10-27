# Design System - Oficina Yoshi

## 🎨 Identidade Visual

### Logotipo
- **Primário**: "Oficina Yoshi" (Oswald, semibold/bold)
- **Tagline**: "Custom Motorcycles" (texto pequeno, uppercase, tracking expandido)
- **Cor de destaque**: "Yoshi" em #D72638

### Paleta de Cores

#### Base
```css
--color-carbon-black: #0B0D0E    /* Fundo principal */
--color-graphite: #151A1E        /* Superfície secundária */
--color-surface-contrast: #F5F7FA /* Superfície clara */
```

#### Texto
```css
--color-text-primary: #F2F2F2    /* Texto principal */
--color-text-secondary: #C8CDD2  /* Texto secundário */
--color-divider: #2A2F35         /* Linhas e divisores */
```

#### Acentos (Estilos de Motos)
```css
--color-cafe-racer: #D72638   /* Vermelho vibrante */
--color-bobber: #B08D57       /* Dourado/Bronze */
--color-scrambler: #7A8F4E    /* Verde militar */
--color-chopper: #6C2BD9      /* Roxo profundo */
```

#### Utilidades
```css
--color-success: #22C55E   /* Verde sucesso */
--color-warning: #F59E0B   /* Laranja aviso */
--color-error: #EF4444     /* Vermelho erro */
--color-info: #3B82F6      /* Azul informação */
```

## 📐 Tipografia

### Fontes
- **Títulos**: Oswald (semibold 600, bold 700)
- **Corpo/UI**: Inter (regular 400, medium 500, semibold 600)

### Escala Tipográfica
```css
h1: 3.5rem (56px) desktop | 2.5rem (40px) mobile
h2: 2.5rem (40px) desktop | 2rem (32px) mobile
h3: 1.875rem (30px) desktop | 1.5rem (24px) mobile
h4: 1.5rem (24px) desktop | 1.25rem (20px) mobile
p: 1rem (16px)
```

### Propriedades
- **Line-height**: 1.2 (títulos) | 1.6-1.7 (corpo)
- **Letter-spacing**: -0.02em (h1) | -0.01em (h2) | normal (demais)

## 🌊 Animações

### Duração
```css
Fast: 180ms        /* Micro-interações */
Default: 200-240ms /* Transições gerais */
Premium: 300ms     /* Navegação e cards */
Slow: 500-700ms    /* Imagens e efeitos especiais */
```

### Easing
```css
/* Padrão Premium */
cubic-bezier(0.2, 0.8, 0.2, 1)

/* Entrada/Saída */
ease-in-out

/* Spring (Motion) */
type: 'spring', damping: 25, stiffness: 200-350
```

### Efeitos Especiais
- **Shimmer**: 8s ease-in-out infinite
- **Hover Elevation**: -6px translateY
- **Image Scale**: 1.05-1.1 scale
- **Glow**: 0 0 20px rgba(215, 38, 56, 0.3)

## 📏 Espaçamento

### Escala (base 8px)
```css
--spacing-1: 0.5rem (8px)
--spacing-2: 1rem (16px)
--spacing-3: 1.5rem (24px)
--spacing-4: 2rem (32px)
--spacing-6: 3rem (48px)
--spacing-8: 4rem (64px)
--spacing-12: 6rem (96px)
```

### Container
- **Max-width**: 1200px
- **Padding**: 1.5rem (24px) lateral

### Grid
- **Desktop**: 12 colunas
- **Tablet**: 8 colunas
- **Mobile**: 4 colunas
- **Gap**: 24px

## 🎯 Componentes

### Botões

#### Primário (CTA)
```css
background: linear-gradient(to right, #D72638, #C11F2E)
padding: 0.625rem 1.5rem (10px 24px)
border-radius: 0.375rem (6px)
hover: translateY(-2px) + glow effect
```

#### Secundário (Outline)
```css
border: 2px solid #D72638
color: #D72638
padding: 0.625rem 1.5rem
hover: background #D72638, color white
```

#### Ghost
```css
background: transparent
hover: background rgba(42, 47, 53, 0.2)
```

### Cards

#### StyleCard
- **Padding**: 2rem (32px)
- **Border**: 1px solid #2A2F35
- **Border-left**: 4px solid [accent-color]
- **Hover**: translateY(-6px) + shadow

#### ProjectCard
- **Aspect Ratio**: 4:3 (imagem)
- **Padding**: 1.5rem (24px) conteúdo
- **Overlay**: Gradiente em hover
- **Badge**: Backdrop-blur + borda colorida

### Navegação

#### Header
- **Height**: Auto (py-5)
- **Background**: Gradiente transparente → blur glass em scroll
- **Sticky**: top: 0, z-index: 50
- **Border-bottom**: 1px rgba(42, 47, 53, 0.5) quando scrolled

#### Footer
- **Background**: #0B0D0E
- **Padding**: 4rem (64px) vertical
- **Columns**: 4 (desktop) | 2 (tablet) | 1 (mobile)

## 🖼️ Imagens

### Aspect Ratios
- **Hero**: 16:9 ou 21:9
- **Projeto**: 4:3
- **Equipe**: 1:1 (square)
- **Before/After**: 16:10

### Efeitos
- **Hover Scale**: 1.05-1.1
- **Duração**: 500-700ms
- **Overlay**: Gradiente preto 60% opacidade

## 📱 Breakpoints

```css
Mobile: < 768px
Tablet: 768px - 1023px
Desktop: ≥ 1024px
Large Desktop: ≥ 1440px
```

## 🔍 Acessibilidade

### Contraste
- **Texto principal**: 14.5:1 (#F2F2F2 sobre #0B0D0E)
- **Texto secundário**: 8.6:1 (#C8CDD2 sobre #0B0D0E)
- **Mínimo exigido**: 4.5:1 ✅

### Focus States
- **Outline**: 2px solid #D72638
- **Offset**: 2px
- **Border-radius**: 2px

### Motion
- **Prefers-reduced-motion**: Todas animações desativadas
- **Duração mínima**: 0.01ms quando reduced

## 🎨 Efeitos Visuais

### Shadows
```css
sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
md: 0 6px 16px 0 rgb(0 0 0 / 0.14)
lg: 0 10px 24px 0 rgb(0 0 0 / 0.18)
premium: 0 8px 30px rgba(0, 0, 0, 0.3)
```

### Blur
- **Backdrop**: blur(24px) - xl
- **Backdrop modal**: blur(8px)

### Gradientes
- **Header**: from-[#0B0D0E]/80 to-transparent
- **CTA**: from-[#D72638] to-[#C11F2E]
- **Overlay**: to bottom, black/60 → transparent

## 🛠️ Implementação Técnica

### CSS Framework
- **Tailwind CSS v4.0** (via @import)
- **Custom tokens** via @theme
- **Utility-first** approach

### Animações
- **Motion (Framer Motion)** para animações complexas
- **CSS transitions** para estados simples
- **LayoutId** para animações de lista

### Responsividade
- **Mobile-first** approach
- **Breakpoints utilitários** do Tailwind
- **Container queries** quando aplicável

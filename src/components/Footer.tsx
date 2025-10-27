import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D0E] border-t border-[#2A2F35]/50 mt-24" role="contentinfo">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl leading-none mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Oficina <span className="text-[#D72638]">Yoshi</span>
              </h3>
              <span className="text-[9px] text-[#C8CDD2] tracking-[0.2em] uppercase opacity-60">
                Custom Motorcycles
              </span>
            </div>
            <p className="text-[#C8CDD2] text-sm leading-relaxed mb-6">
              Customização sob medida, sem atalhos. Projetos autorais com engenharia, estética e garantia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2A2F35]/40 hover:bg-[#D72638] hover:scale-110 transition-all duration-200"
                aria-label="Visite nosso Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2A2F35]/40 hover:bg-[#D72638] hover:scale-110 transition-all duration-200"
                aria-label="Visite nosso Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2A2F35]/40 hover:bg-[#D72638] hover:scale-110 transition-all duration-200"
                aria-label="Visite nosso YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('estilos')}
                  className="text-[#C8CDD2] hover:text-[#D72638] transition-colors text-sm"
                >
                  Estilos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-[#C8CDD2] hover:text-[#D72638] transition-colors text-sm"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('processo')}
                  className="text-[#C8CDD2] hover:text-[#D72638] transition-colors text-sm"
                >
                  Processo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="text-[#C8CDD2] hover:text-[#D72638] transition-colors text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-[#C8CDD2] hover:text-[#D72638] transition-colors text-sm"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="mb-4">Estilos</h4>
            <ul className="space-y-3">
              <li className="text-[#C8CDD2] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D72638]" aria-hidden="true"></span>
                Café Racer
              </li>
              <li className="text-[#C8CDD2] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B08D57]" aria-hidden="true"></span>
                Bobber
              </li>
              <li className="text-[#C8CDD2] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7A8F4E]" aria-hidden="true"></span>
                Scrambler
              </li>
              <li className="text-[#C8CDD2] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6C2BD9]" aria-hidden="true"></span>
                Chopper
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#C8CDD2] text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Rua das Oficinas, 1234<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-[#C8CDD2] text-sm">
                <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
                <a href="tel:+5511999999999" className="hover:text-[#D72638]">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#C8CDD2] text-sm">
                <Mail size={18} className="flex-shrink-0" aria-hidden="true" />
                <a href="mailto:contato@oficinayoshi.com.br" className="hover:text-[#D72638]">
                  contato@oficinayoshi.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2F35]">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#C8CDD2]">
            <p>© {currentYear} Oficina Yoshi. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#D72638] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#D72638] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Estilos", page: "estilos" },
    { label: "Portfólio", page: "portfolio" },
    { label: "Processo", page: "processo" },
    { label: "Orçamentos", page: "orcamentos" },
    { label: "Sobre", page: "sobre" },
    { label: "Blog", page: "blog" },
    { label: "Contato", page: "contato" },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0D0E]/98 backdrop-blur-xl shadow-[0_1px_0_0_rgba(42,47,53,0.5)] border-b border-[#2A2F35]/50"
          : "bg-gradient-to-b from-[#0B0D0E]/80 to-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container-custom py-5 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="group flex flex-col focus:outline-none focus-visible:outline-2 focus-visible:outline-[#D72638] focus-visible:outline-offset-4 relative"
          aria-label="Oficina Yoshi - Ir para página inicial"
        >
          <span
            className="text-2xl tracking-tight leading-none transition-all duration-300 group-hover:scale-105"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Oficina{" "}
            <span className="text-[#D72638] relative inline-block">
              Yoshi
              <span
                className="absolute inset-0 nav-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              />
            </span>
          </span>
          <span className="text-[10px] text-[#C8CDD2] tracking-[0.2em] uppercase mt-0.5 opacity-60 transition-opacity group-hover:opacity-80">
            Custom Motorcycles
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.page}>
              <button
                onClick={() => handleNavClick(item.page)}
                className={`relative px-4 py-2 text-sm transition-all duration-200 rounded-md ${
                  currentPage === item.page
                    ? "text-[#F2F2F2] bg-[#2A2F35]/40"
                    : "text-[#C8CDD2] hover:text-[#F2F2F2] hover:bg-[#2A2F35]/20"
                }`}
                aria-current={
                  currentPage === item.page ? "page" : undefined
                }
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D72638]"
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 350,
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <button
          onClick={() => handleNavClick("orcamentos")}
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#D72638] to-[#C11F2E] text-white px-6 py-2.5 rounded-md hover:shadow-[0_0_20px_rgba(215,38,56,0.3)] transition-all duration-200 hover:-translate-y-0.5 group"
        >
          <span>Pedir orçamento</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#F2F2F2] hover:text-[#D72638] hover:bg-[#2A2F35]/20 rounded-md transition-all"
          aria-label={
            isMobileMenuOpen ? "Fechar menu" : "Abrir menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#0B0D0E]/98 backdrop-blur-xl border-l border-[#2A2F35]/50 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação mobile"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#2A2F35]/50">
                  <div className="flex flex-col">
                    <span
                      className="text-xl leading-none"
                      style={{
                        fontFamily: "Oswald, sans-serif",
                      }}
                    >
                      Oficina{" "}
                      <span className="text-[#D72638]">
                        Yoshi
                      </span>
                    </span>
                    <span className="text-[9px] text-[#C8CDD2] tracking-[0.2em] uppercase mt-1 opacity-60">
                      Custom Motorcycles
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:text-[#D72638] hover:bg-[#2A2F35]/20 rounded-md transition-all"
                    aria-label="Fechar menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-6">
                  <ul className="space-y-1 px-4">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.page}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <button
                          onClick={() =>
                            handleNavClick(item.page)
                          }
                          className={`w-full text-left px-4 py-3.5 rounded-md transition-all ${
                            currentPage === item.page
                              ? "bg-gradient-to-r from-[#D72638]/20 to-transparent text-[#D72638] border-l-2 border-[#D72638]"
                              : "text-[#C8CDD2] hover:bg-[#2A2F35]/20 hover:text-[#F2F2F2] border-l-2 border-transparent"
                          }`}
                          aria-current={
                            currentPage === item.page
                              ? "page"
                              : undefined
                          }
                        >
                          {item.label}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="p-6 border-t border-[#2A2F35]/50">
                  <button
                    onClick={() => handleNavClick("orcamentos")}
                    className="w-full bg-gradient-to-r from-[#D72638] to-[#C11F2E] text-white px-6 py-3.5 rounded-md hover:shadow-[0_0_20px_rgba(215,38,56,0.3)] transition-all"
                  >
                    Pedir orçamento
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
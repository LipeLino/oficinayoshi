import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { EstilosPage } from './pages/EstilosPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessoPage } from './pages/ProcessoPage';
import { OrcamentosPage } from './pages/OrcamentosPage';
import { SobrePage } from './pages/SobrePage';
import { BlogPage } from './pages/BlogPage';
import { ContatoPage } from './pages/ContatoPage';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'estilos' | 'portfolio' | 'processo' | 'orcamentos' | 'sobre' | 'blog' | 'contato';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [estilosTab, setEstilosTab] = useState<string>('cafe-racer');

  useEffect(() => {
    // Handle hash-based routing for better navigation
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const [page, tab] = hash.split('/');
      setCurrentPage(page as Page);
      if (tab && page === 'estilos') {
        setEstilosTab(tab);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, tab?: string) => {
    setCurrentPage(page as Page);
    if (tab && page === 'estilos') {
      setEstilosTab(tab);
      window.location.hash = `${page}/${tab}`;
    } else {
      window.location.hash = page;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'estilos':
        return <EstilosPage initialTab={estilosTab} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'processo':
        return <ProcessoPage />;
      case 'orcamentos':
        return <OrcamentosPage />;
      case 'sobre':
        return <SobrePage />;
      case 'blog':
        return <BlogPage />;
      case 'contato':
        return <ContatoPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D0E]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main role="main">
        {renderPage()}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      
      <Toaster 
        theme="dark" 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#151A1E',
            color: '#F2F2F2',
            border: '1px solid #2A2F35',
          },
        }}
      />
    </div>
  );
}

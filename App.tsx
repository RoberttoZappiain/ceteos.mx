import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SiteLayout } from './components/Layout';
import { 
  HeroSection, 
  ServiceFeatures, 
  PromoGrid, 
  ProductShowcase, 
  FlashSaleBanner, 
  CarouselRow,
  BrandLogos,
  BigBanner,
  BlogSection 
} from './components/HomeSections';
import { FabricaSoftware } from './pages/FabricaSoftware';
import { Infraestructura } from './pages/Infraestructura';
import { Licencias } from './pages/Licencias';
import { SoporteTecnico } from './pages/Soporte';
import { MiCuenta } from './pages/MiCuenta';
import { Pagar } from './pages/Pagar';
import { FAQ } from './pages/FAQ';
import { products } from './data';
import { SectionHeader } from './components/Common';
import { PageLoader } from './components/PageLoader';
import { ContactForm } from './components/ContactForm';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's default scroll restoration to prevent conflicts
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Small delay ensures DOM layout is stable before scrolling
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth < 1024;
      const navElement = document.getElementById('main-navigation');

      if (isMobile) {
        const mainElement = document.getElementById('main-content');
        const navElement = document.getElementById('main-navigation');
        
        if (mainElement && navElement) {
          // Calculate the height of the sticky navigation to offset the scroll
          const navHeight = navElement.offsetHeight || 64; 
          // Position at the start of main content, with the menu just above it
          const scrollPosition = mainElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'instant'
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServiceFeatures />
      <PromoGrid />
      
      {/* Section: New Arrival with Right Sidebar */}
      <div className="mt-12">
          <ProductShowcase 
            title="NUEVA LLEGADA" 
            productsData={products.slice(0, 8)} 
            hasSidebar={true}
            sidebarConfig={{
              title: "ESCRIBENOS",
              subtitle: "Asegura tu información y evita incidentes.",
              image: "/media-clear/site1.png",
              position: "right"
            }}
          />
      </div>

      <FlashSaleBanner />
      <CarouselRow />
      
      <div className="container mx-auto px-4 md:px-8 mb-8">
          <div className="text-center font-bold text-sm tracking-widest uppercase border-b border-gray-100 dark:border-gray-800 pb-4 mb-8 text-gray-800 dark:text-white">
            Comprar Por Marca
          </div>
          <BrandLogos />
      </div>
      
      {/* Section: Feature Product with Left Sidebar */}
      <ProductShowcase 
        title="PRODUCTO DESTACADO" 
        productsData={products.slice(0, 8).reverse()} 
        hasSidebar={true}
        sidebarConfig={{
          title: "INSTALACIÓN O VENTA",
          subtitle: "instalamos tu starlink o cotizamos una nueva.",
          image: "/media-clear/star-pre.png",
          position: "left"
        }}
      />

      <BigBanner />

      {/* You May Also Like Section (Simple Grid reuse) */}
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SectionHeader title="TAMBIÉN TE PUEDE GUSTAR" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {products.slice(0, 6).map(p => (
              <div key={p.id} className="scale-90 origin-top group cursor-pointer">
                <div className="overflow-hidden mb-2">
                  <img src={p.image} className="transition-transform duration-500 group-hover:scale-110" alt=""/>
                </div>
                <p className="text-xs font-bold text-center dark:text-gray-200">{p.name}</p>
              </div>
            ))}
        </div>
      </div>

      <BlogSection />
      
      <div className="container mx-auto px-4 md:px-8">
        <ContactForm />
      </div>
    </>
  );
};

const App: React.FC = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Dark mode state with persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    // Handler to hide loader
    const handleLoad = () => {
      // Small delay to ensure smooth transition and that React has painted
      setTimeout(() => setIsLoading(false), 800);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Apply dark mode class to html element and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Router>
        <ScrollToTop />
        <SiteLayout darkMode={darkMode} toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fabrica-software" element={<FabricaSoftware />} />
            <Route path="/infraestructura-tecnologica" element={<Infraestructura />} />
            <Route path="/suite-licencias" element={<Licencias />} />
            <Route path="/soporte-tecnico" element={<SoporteTecnico />} />
            <Route path="/mi-cuenta" element={<MiCuenta />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </SiteLayout>
      </Router>
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { categories } from '../data';
import { useHalftoneBackground } from './HalftoneBackground';
import { ContactForm } from './ContactForm';

// --- Background Video Component ---


interface TopBarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white text-[10px] py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center tracking-[0.2em] border-b border-white/10 z-[60] relative font-bold uppercase">
      <div className="flex gap-6 mb-2 md:mb-0">
        <Link to="/mi-cuenta" className="hover:text-gold-500 transition-colors">Mi Cuenta</Link>
        <Link to="/pagar" className="hover:text-gold-500 transition-colors">Pagar</Link>
        <Link to="/faq" className="hover:text-gold-500 transition-colors">FAQ</Link>
        <Link to="/soporte-tecnico" className="hover:text-gold-500 transition-colors">Soporte</Link>
      </div>
      <div className="flex items-center gap-6 m-4">
        <button 
          onClick={toggleTheme} 
          className="flex items-center gap-2 hover:text-gold-500 transition-colors group"
          title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xs group-hover:rotate-12 transition-transform`}></i>
          <span className=" sm:inline">{isDarkMode ? 'MODO CLARO' : 'MODO OSCURO'}</span>
        </button>

      </div> 
        <div className="flex gap-4 text-gray-600 dark:text-gray-400">
           <i className="fa-brands fa-facebook-f hover:text-gold-500 cursor-pointer transition-all hover:scale-110"></i>
           <i className="fa-brands fa-twitter hover:text-gold-500 cursor-pointer transition-all hover:scale-110"></i>
           <i className="fa-brands fa-instagram hover:text-gold-500 cursor-pointer transition-all hover:scale-110"></i>
           <i className="fa-brands fa-youtube hover:text-gold-500 cursor-pointer transition-all hover:scale-110"></i>
        </div>
    </div>
  );
};

export const MainHeader: React.FC = () => {
  return (
    <div className="py-8 px-4 md:px-8 relative z-[60]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
           
           <div>
             <h1 className="text-3xl font-black tracking-tighter dark:text-white uppercase">ceteos<span className="text-gold-500">.</span>MX</h1>
             <p className="text-[9px] font-bold tracking-[0.35em] text-gray-500 dark:text-gray-400 uppercase mt-1">la compañía más conectada</p>
           </div>
        </div>

        {/* Search */}
        {/* <div className="flex-1 max-w-2xl w-full relative">
          <div className="flex philips-glass rounded-2xl overflow-hidden border border-white/20 px-2 py-1.5 shadow-lg group focus-within:border-gold-500/50 transition-colors">
             <input 
               type="text" 
               placeholder="¿Qué estás buscando hoy?" 
               className="flex-1 bg-transparent px-6 py-2 outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-medium"
             />
             <button className="px-6 text-gray-500 dark:text-gray-400 hover:text-gold-500 transition-colors">
               <i className="fa-solid fa-magnifying-glass text-lg"></i>
             </button>
          </div>
        </div> */}

        {/* Contact */}
        <Link to="/soporte-tecnico" className="hidden xl:flex items-center gap-4 philips-glass px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors cursor-pointer">
           <i className="fa-solid fa-headset text-2xl text-gold-500 animate-pulse"></i>
           <div className="text-[10px] font-bold tracking-widest">
             <span className="block text-gray-500 dark:text-gray-400 uppercase">Soporte Clientes</span>
             <span className="text-sm dark:text-white">+5965-525-889</span>
           </div>
        </Link>

      </div>
    </div>
  );
};

interface NavigationProps {
  onOpenContact?: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContact, mobileMenuOpen, setMobileMenuOpen }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Software', href: '/fabrica-software' },
    { name: 'Infraestructura', href: '/infraestructura-tecnologica' },
    { name: 'Licencias', href: '/suite-licencias' },
    { name: 'Soporte', href: '/soporte-tecnico' },
  ];

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `relative transition-colors hover:text-gold-500 ${
      isActive 
        ? 'text-gold-500 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gold-500' 
        : 'text-gray-700 dark:text-gray-200'
    }`;
  };

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <div className={`sticky top-6 z-[100] transition-all duration-500 px-4 md:px-8 flex justify-center w-full`}>
      <div className={`
        max-w-6xl w-full philips-glass glass-hover rounded-[2rem] px-6 md:px-10 h-20
        flex items-center justify-between transition-all duration-500 border border-white/20 shadow-2xl
        ${scrolled ? 'scale-[0.95] mt-0 backdrop-blur-2xl' : 'mt-2'}
      `}>
        
        {/* Categories Trigger */}
        <div 
          className="flex items-center gap-4 cursor-pointer relative select-none group"
          onClick={() => setCategoriesOpen(!categoriesOpen)}
        >
          
          <span className="text-[11px] font-black uppercase tracking-[0.2em] dark:text-white">Menú</span>
          
          {/* Dropdown */}
          {categoriesOpen && (
            <div className="absolute top-full left-0 mt-6 w-72 philips-glass rounded-3xl shadow-2xl z-[110] animate-fade-in overflow-hidden border border-white/20 backdrop-blur-3xl">
              <ul className="divide-y divide-white/10 text-gray-800 dark:text-gray-200">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link 
                      to={cat.href || "#"} 
                      className="flex items-center gap-4 px-8 py-5 text-xs font-bold uppercase tracking-widest hover:text-gold-500 dark:hover:text-gold-400 hover:bg-white/10 transition-all group"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {cat.iconClass && <i className={`${cat.iconClass} text-gold-500 w-5 text-center group-hover:scale-125 transition-transform`}></i>}
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em]">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={getLinkClass(link.href)}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-6">
          <button 
            onClick={onOpenContact}
            className="hidden sm:block bg-gold-500 text-white text-[10px] font-black px-8 py-4 rounded-2xl uppercase tracking-[0.2em] hover:bg-gold-600 shadow-xl shadow-gold-500/30 transition-all cursor-pointer active:scale-95"
          >
            Cotizar Proyecto
          </button>

          <button className="lg:hidden w-12 h-12 rounded-xl glass-interactive flex items-center justify-center text-gray-800 dark:text-white" onClick={() => setMobileMenuOpen(true)}>
             <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 bottom-0 w-[320px] philips-glass shadow-2xl flex flex-col slide-in-left border-l border-white/20 backdrop-blur-3xl">
             <div className="flex items-center justify-between p-8 border-b border-white/10">
               <span className="font-black tracking-[0.3em] text-gray-900 dark:text-white uppercase text-sm">Navegación</span>
               <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-xl glass-interactive">
                 <i className="fa-solid fa-xmark text-lg"></i>
               </button>
             </div>
             <div className="overflow-y-auto flex-1 py-10">
                <nav className="flex flex-col text-[11px] font-black uppercase tracking-[0.3em] text-gray-700 dark:text-gray-300">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      to={link.href} 
                      className={`px-10 py-6 hover:text-gold-500 hover:bg-white/10 transition-all ${pathname === link.href ? 'text-gold-500 bg-white/5' : ''}`}
                      onClick={() => handleMobileLinkClick(link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="my-2 border-t border-white/10 mx-10 opacity-30"></div>
                  <span className="px-10 py-4 text-[9px] text-gold-500 font-bold opacity-80">CATEGORÍAS</span>

                  {categories.map((cat) => (
                    <Link 
                      key={cat.id} 
                      to={cat.href || "#"} 
                      className="px-10 py-4 hover:text-gold-500 hover:bg-white/10 transition-all flex items-center gap-4"
                      onClick={() => handleMobileLinkClick(cat.href || "#")}
                    >
                      {cat.iconClass && <i className={`${cat.iconClass} w-5 text-center text-gold-500`}></i>}
                      {cat.name}
                    </Link>
                  ))}

                  <button 
                    onClick={() => { setMobileMenuOpen(false); if (onOpenContact) onOpenContact(); }}
                    className="mx-10 my-6 bg-gold-500 text-white text-[10px] font-black px-8 py-4 rounded-2xl uppercase tracking-[0.2em] hover:bg-gold-600 shadow-xl shadow-gold-500/30 transition-all text-center"
                  >
                    Cotizar Proyecto
                  </button>
                </nav>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer id="contact-footer" className="bg-white/5 dark:bg-black/40 backdrop-blur-3xl pt-24 pb-12 border-t border-white/10 text-sm text-gray-600 dark:text-gray-400 relative z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div>
            <h4 className="font-black text-black dark:text-white uppercase mb-8 tracking-[0.3em] text-[10px]">Filosofía</h4>
            <p className="leading-relaxed mb-8 text-sm font-medium">
              Especialistas en la creación de ecosistemas digitales de alto rendimiento. Transformamos la complejidad técnica en experiencias fluidas.
            </p>
            <div className="flex gap-5">
              {[ 'facebook-f', 'instagram', 'twitter', 'linkedin-in' ].map(icon => (
                <span key={icon} className="w-12 h-12 flex items-center justify-center glass-interactive rounded-xl hover:bg-gold-500 hover:text-white transition-all cursor-pointer shadow-lg">
                  <i className={`fa-brands fa-${icon}`}></i>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-black dark:text-white uppercase mb-8 tracking-[0.3em] text-[10px]">Recursos</h4>
            <ul className="space-y-5 text-[10px] font-bold tracking-widest uppercase">
              <li><Link to="/faq" className="hover:text-gold-500 transition-colors">Centro de Ayuda</Link></li>
              <li><Link to="/docs" className="hover:text-gold-500 transition-colors">Documentación</Link></li>
              <li><Link to="/status" className="hover:text-gold-500 transition-colors">API Status</Link></li>
            </ul>
          </div>

           <div>
            <h4 className="font-black text-black dark:text-white uppercase mb-8 tracking-[0.3em] text-[10px]">Compañía</h4>
            <ul className="space-y-5 text-[10px] font-bold tracking-widest uppercase">
              <li><Link to="/equipo" className="hover:text-gold-500 transition-colors">Nuestros Expertos</Link></li>
              <li><Link to="/casos-exito" className="hover:text-gold-500 transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/laboratorio" className="hover:text-gold-500 transition-colors">Laboratorio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-black dark:text-white uppercase mb-8 tracking-[0.3em] text-[10px]">Newsletter</h4>
            <p className="text-[10px] mb-6 font-bold uppercase tracking-widest">Suscríbete para actualizaciones exclusivas.</p>
            <div className="flex glass-interactive p-1.5 rounded-2xl border border-white/10">
              <input type="text" placeholder="Tu email" className="bg-transparent flex-1 px-4 outline-none text-xs" />
              <button className="bg-gold-500 text-white p-3 rounded-xl hover:bg-gold-600 transition-colors">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
            <div className="bg-gold-500 text-white p-2.5 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg shadow-gold-500/30">
              <i className="fa-solid fa-bolt-lightning text-sm"></i>
            </div>
            <span className="font-black text-xl uppercase tracking-[0.3em] text-black dark:text-white">CETEOS</span>
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
            © 2026 CETEOS TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>

          <button 
             onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
             className="w-14 h-14 flex items-center justify-center glass-interactive rounded-2xl hover:bg-gold-500 hover:text-white transition-all shadow-2xl active:scale-90"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp: React.FC<{ isHidden?: boolean }> = ({ isHidden }) => {
  return (
    <a 
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-10 right-10 z-[150] flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 rounded-[2rem] shadow-2xl hover:bg-[#20bd5a] hover:-translate-y-3 transition-all duration-700 group ${isHidden ? 'opacity-0 scale-0 pointer-events-none translate-y-20' : 'opacity-100 scale-100 translate-y-0 animate-bounce-subtle'}`}
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></div>
      <i className="fa-brands fa-whatsapp text-3xl group-hover:rotate-12 transition-transform relative z-10"></i>
      <span className="font-black text-[11px] uppercase tracking-[0.2em] relative z-10">Solicitar cotización</span>
    </a>
  );
};

// --- Main Layout Wrapper ---
export const SiteLayout: React.FC<{ children: React.ReactNode; darkMode: boolean; toggleTheme: () => void }> = ({ children, darkMode, toggleTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const halftoneBackground = useHalftoneBackground({
    variant: 'combined',
    intensity: 'medium',
    animated: true,
    breathing: true,
    responsive: true
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-white transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Halftone Background Layer */}
      {halftoneBackground}
      
      <TopBar isDarkMode={darkMode} toggleTheme={toggleTheme} />
      <MainHeader />
      <Navigation onOpenContact={toggleModal} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-grow relative z-10 py-10">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp isHidden={mobileMenuOpen} />

      {/* Contact Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md" 
            onClick={toggleModal}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent rounded-[2.5rem] animate-fade-in no-scrollbar">
             <button 
               onClick={toggleModal}
               className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-gold-500 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
             >
               <i className="fa-solid fa-xmark text-lg"></i>
             </button>
             <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};
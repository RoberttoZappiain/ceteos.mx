import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from './SEOHead';
import { categories, products, brands, blogPosts } from '../data';
import { ProductCard, PromoCard, SectionHeader, SidebarBanner } from './Common';

// --- HERO SECTION ---
export const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-0 mb-12 md:mb-16 relative z-10">
      <SEOHead 
        title="ceteos.mx | La compañia más conectada"
        description="Soluciones tecnológicas integrales: Desarrollo de Software, Infraestructura TI, Soporte Técnico y Licenciamiento. Potencia tu negocio con Ceteos."
        keywords="desarrollo web, aplicaciones moviles, infraestructura ti, soporte tecnico, licencias software, ceteos"
      />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
       
      `}</style>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Banner */}
        <div className="flex-1 relative philips-glass min-h-[450px] md:min-h-[550px] flex items-center overflow-hidden rounded-[2rem] border border-white/10 transition-all duration-500 shadow-2xl">
            <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-16 z-20 max-w-lg pr-4 md:pr-0">
              <span className="text-gold-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Oferta Exclusiva 2026</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-800 dark:text-gray-100 leading-[1.1] mb-2 tracking-tight">Landing page</h2>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">+ Punto de venta</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 md:mb-10 text-xs md:text-sm font-medium tracking-wide">Incluye dominio | Hosting mensual | Gestión de publicidad.</p>
              <button className="bg-gold-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold-600 shadow-xl shadow-gold-500/30 transition-all active:scale-95">
                Cotiza ahora
              </button>
            </div>
            
            {/* Background element */}
            <div className="absolute right-0 top-0 h-full w-full lg:w-3/4 flex items-center justify-end overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 dark:from-black/95 dark:via-black/60 to-transparent z-10 lg:block hidden"></div>
               <div className="absolute inset-0 bg-white/80 dark:bg-black/80 z-10 lg:hidden block"></div>
              
              <div className="relative w-full h-full flex items-center justify-end">
                 {/* Desktop Image */}
                 <img 
                    src="/media-clear/proyects/pos-ecomerce-system-by-ceteos.webp" 
                    className="absolute right-[-10%] md:right-[-1%]  w-[80%] object-contain opacity-30 dark:opacity-50 blur-[2px] md:blur-0 rounded-xl shadow-2xl"
                    style={{ animation: 'drift 10s ease-in-out infinite alternate' }}
                    alt="Ecommerce System by ceteos"
                    fetchPriority="high"
                    width="1000"
                    height="800"
                 />
                 
                 {/* Mobile Image */}
                 <img 
                    src="/media-clear/proyects/more/rifas-bahia-app-by-ceteos.png" 
                    className="absolute right-[-10%] md:right-[55%] bottom-[-5%] w-[60%] md:w-[50%] object-contain drop-shadow-2xl z-20"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                    alt="Mobile App by ceteos"
                    loading="lazy"
                    width="400"
                    height="800"
                 />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- SERVICE FEATURES ---
export const ServiceFeatures: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 border-b border-white/10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex items-center justify-center gap-6 p-6 philips-glass rounded-2xl border border-white/5 group hover:scale-105 transition-transform duration-500">
          <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-truck-fast text-2xl text-gold-500 group-hover:text-white"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-xs uppercase tracking-widest">Rediseñamos tu sitio</h4>
            <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Mejoramos la propuesta que envíes</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 p-6 philips-glass rounded-2xl border border-white/5 group hover:scale-105 transition-transform duration-500">
          <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-headset text-2xl text-gold-500 group-hover:text-white"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-xs uppercase tracking-widest">Entregamos en 24 horas</h4>
            <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">*Aplica para landing pages</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 p-6 philips-glass rounded-2xl border border-white/5 group hover:scale-105 transition-transform duration-500">
          <div className="w-14 h-14 bg-gold-500/10 rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
            <i className="fa-solid fa-rotate-left text-2xl text-gold-500 group-hover:text-white"></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-xs uppercase tracking-widest">Garantía y Mantenimiento</h4>
            <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Satisfacción Total</p>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- PROMO GRID ---
export const PromoGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PromoCard 
          title="Top Ofertas" 
          subtitle="Software y Apps" 
          image="/media-clear/software-multiplataforma-1536x1536.png" 
        />
        <PromoCard 
          title="Mejores Tratos" 
          subtitle="Infraestructura" 
          image="/media-clear/64388BA8-B5AD-4E03-82E8-2F2B763BED75_1_102_o-1536x1536.jpeg" 
        />
        <PromoCard 
          title="Nueva Llegada" 
          subtitle="Licencias Cloud" 
          image="/media-clear/adobe-creative-cloud-licencias-suite-adobe-by-ceteos.png" 
        />
         <PromoCard 
          title="Descuento" 
          subtitle="Menús Digitales" 
          image="/media-clear/85E3267A-B527-47FA-88A7-AF789A3D637A_1_102_o-1536x1536.jpeg" 
        />
      </div>
    </div>
  );
};

// --- PRODUCT SHOWCASE (Generic) ---
interface ProductShowcaseProps {
  title: string;
  productsData: typeof products;
  hasSidebar?: boolean;
  sidebarConfig?: {
    title: string;
    subtitle: string;
    image: string;
    position: 'left' | 'right';
  };
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ title, productsData, hasSidebar, sidebarConfig }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
      <SectionHeader title={title} />
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar if configured */}
        {hasSidebar && sidebarConfig?.position === 'left' && (
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <SidebarBanner 
              title={sidebarConfig.title} 
              subtitle={sidebarConfig.subtitle} 
              image={sidebarConfig.image} 
              position="left" 
            />
          </div>
        )}

        {/* Product Grid */}
        <div className={`flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${hasSidebar ? 'lg:grid-cols-4' : 'lg:grid-cols-4'} gap-8`}>
           {productsData.slice(0, hasSidebar ? 8 : 4).map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
        </div>

        {/* Right Sidebar if configured */}
        {hasSidebar && sidebarConfig?.position === 'right' && (
           <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
             <SidebarBanner 
               title={sidebarConfig.title} 
               subtitle={sidebarConfig.subtitle} 
               image={sidebarConfig.image} 
               position="right" 
             />
           </div>
        )}
      </div>
    </div>
  );
};

// --- FLASH SALE BANNER ---
export const FlashSaleBanner: React.FC = () => {
  return (
    <div className="relative py-12 md:py-24 px-4 md:px-8 overflow-hidden my-12 md:my-20 z-10">
      {/* Background with Glass Effect */}
      <div className="absolute inset-0 z-0 philips-glass opacity-60"></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20 z-[1]">
        <img src="/media-clear/Diseno-sin-titulo-1920x550.png" alt="Background by ceteos" className="w-full h-full object-cover grayscale" loading="lazy" width="1920" height="550" />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-gray-900 dark:text-white">
        <div className="max-w-2xl mb-8 md:mb-0 text-center md:text-left">
          <span className="text-gold-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Velocidad y Calidad</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight uppercase">Entregamos tu landing configurada en 24 horas</h2>
          <p className="text-gray-500 dark:text-gray-400 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">*Al confirmar la compra. *Limitado a sugerencias de cambios.</p>
        </div>
        <button className="bg-black dark:bg-white text-white dark:text-black px-10 md:px-12 py-4 md:py-5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold-500 dark:hover:bg-gold-500 dark:hover:text-white transition-all shadow-2xl">
          Empieza hoy
        </button>
      </div>
    </div>
  );
};

// --- CAROUSEL ROW (Flash Sale Products) ---
export const CarouselRow: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 -mt-16 relative z-30 mb-24">
       <div className="philips-glass p-8 rounded-[2.5rem] shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border border-white/10 overflow-hidden">
         {products.slice(4, 9).map(p => (
           <ProductCard key={p.id} product={p} />
         ))}
       </div>
    </div>
  );
};

// --- BRAND LOGOS ---
export const BrandLogos: React.FC = () => {
  const scrollBrands = [...brands, ...brands, ...brands];
  
  return (
    <div className="container mx-auto px-4 md:px-8 py-4 mb-16 relative z-10 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>

      <div className="flex gap-24 animate-marquee hover:[animation-play-state:paused] items-center w-max">
        {scrollBrands.map((brand, i) => (
          <div key={i} className="flex-shrink-0 group flex flex-col items-center justify-center">
             <img 
               src={brand.logo} 
               alt={`${brand.name} by ceteos`} 
               className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 dark:brightness-0 dark:invert"
               loading="lazy"
               width="150"
               height="50"
             />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- BIG SUMMER SALE BANNER ---
export const BigBanner: React.FC = () => {
  return (
    <div className="philips-glass py-4 md:py-24 my-12 md:my-20 relative overflow-hidden z-10 border-y border-white/10">
       <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-gray-400 dark:text-gray-800 text-5xl md:text-9xl font-black uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 select-none whitespace-nowrap tracking-tighter">
            ceteos.com
          </h3>
          <h2 className="text-3xl md:text-5xl font-light text-gray-800 dark:text-gray-200 uppercase tracking-[0.2em] mb-4 relative">
            Atención <span className="font-black text-gold-500">Personalizada</span>
          </h2>
          <p className="text-gold-500 font-bold tracking-[0.5em] text-[9px] md:text-[10px] uppercase mb-10 relative">
            estamos para solucionar tus dudas.
          </p>
          <div className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-xs font-medium tracking-widest uppercase relative">
            <p>Nuestros planes de software incluyen dominio | hosting mensual | Ads en redes sociales.</p>
          </div>
       </div>
    </div>
  );
};

// --- LATEST NEWS ---
export const BlogSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-4 mb-24 relative z-10">
      <SectionHeader title="Equipo y Patrocinadores" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {blogPosts.map(post => (
          <div key={post.id} className="group philips-glass p-6 rounded-[2rem] border border-white/5 glass-hover">
            <div className="overflow-hidden mb-6 relative aspect-[3/2] rounded-2xl shadow-xl">
              <img src={post.image} alt={`${post.title} by ceteos`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" width="600" height="400" />
            </div>
            <h3 className="text-xs font-bold text-gray-800 dark:text-gray-100 mb-3 uppercase tracking-widest leading-relaxed group-hover:text-gold-500 transition-colors">
              {post.title}
            </h3>
            <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 mb-4 flex gap-4 uppercase tracking-[0.2em]">
               <span>{post.date}</span>
               <span>{post.author}</span>
            </div>
            <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <Link to={`/blog/${post.id}`} className="text-[9px] font-bold uppercase border-b border-white/20 text-gray-600 dark:text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all tracking-[0.3em] pb-1">
              Leer Más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
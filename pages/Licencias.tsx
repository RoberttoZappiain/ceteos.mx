import React from 'react';
import { SectionHeader, ProductCard } from '../components/Common';
import { ContactForm } from '../components/ContactForm';
import { categories, products, brands } from '../data';

export const Licencias: React.FC = () => {
  // Filter license-related categories
  const licenseCategories = categories.filter(cat => 
    ['Licencias Suite Adobe', 'Licencias Microsoft', 'Licencias Autodesk', 'Sistemas Operativos', 'Software Contable', 'Software Restaurantero'].includes(cat.name)
  );

  const licenseProducts = products.filter(product => 
    licenseCategories.some(cat => cat.name === product.category)
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-4 relative z-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in">
        <a href="/" className="hover:text-gold-500 transition-colors flex items-center gap-2">
          <i className="fa-solid fa-house opacity-70"></i>
          <span>Home</span>
        </a>
        <i className="fa-solid fa-chevron-right text-[10px] mx-4 opacity-50"></i>
        <span className="bg-gold-500/10 text-gold-600 dark:text-gold-400 px-3 py-1 rounded-full font-medium text-xs tracking-wide border border-gold-500/20">
          SUITE LICENCIAS
        </span>
      </nav>

      {/* Section Header */}
      <div className="text-start mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Suite de <span className="text-gold-500">Licencias</span>
        </h1>
        <p className="text-xl text-start text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          Maximiza la productividad de tu equipo con software original y herramientas de vanguardia. 
          Somos partners certificados de las marcas líderes en tecnología global.
        </p>
      </div>

      {/* Partner Ecosystem & Compatibility - Modern Bento Grid */}
      <div className="mb-24 relative overflow-hidden p-4 -m-4">
         {/* Background Blobs */}
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

         <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            
            {/* 1. Compatibility Hub (Hero Block - 2x2) - NEW INFO FOCUS */}
            <div className="md:col-span-6 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/media-clear/software-multiplataforma-1536x1536.png')] bg-cover opacity-10 dark:opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                            <i className="fa-solid fa-layer-group"></i> Multi-Ecosistema
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">
                            Totalmente Compatible con <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Tu Infraestructura</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md leading-relaxed">
                            Nuestras licencias están certificadas para los sistemas operativos más modernos. Rendimiento nativo garantizado.
                        </p>
                    </div>
                    
                    {/* OS Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-gray-200 dark:border-white/10 flex items-center gap-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl">
                                <i className="fa-brands fa-windows"></i>
                            </div>
                            <div>
                                <span className="block font-bold text-gray-900 dark:text-white text-sm">Windows</span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">10 & 11 Pro/Ent</span>
                            </div>
                        </div>
                        <div className="bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-gray-200 dark:border-white/10 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-700 dark:text-white text-xl">
                                <i className="fa-brands fa-apple"></i>
                            </div>
                            <div>
                                <span className="block font-bold text-gray-900 dark:text-white text-sm">macOS</span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">Intel & Silicon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Microsoft (1x1) */}
            <div className="md:col-span-3 lg:col-span-1 bg-blue-50/50 dark:bg-blue-900/10 backdrop-blur-xl border border-blue-200 dark:border-blue-500/20 rounded-[2rem] p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
                <i className="fa-brands fa-microsoft absolute -right-4 -bottom-4 text-8xl text-blue-500/10 group-hover:text-blue-500/20 transition-colors"></i>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg shadow-blue-500/30">
                        <i className="fa-brands fa-windows"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Microsoft CSP</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 font-medium uppercase tracking-wider">Partner Tier-1</p>
                    <ul className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500"></div> Microsoft 365 / Office</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500"></div> Windows 11 Enterprise</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500"></div> Azure Cloud Solutions</li>
                    </ul>
                </div>
            </div>

            {/* 3. Specialized Software (CONTPAQi & SoftRestaurant) (1x1) - NEW */}
            <div className="md:col-span-3 lg:col-span-1 bg-orange-50/50 dark:bg-orange-900/10 backdrop-blur-xl border border-orange-200 dark:border-orange-500/20 rounded-[2rem] p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
                <i className="fa-solid fa-calculator absolute -right-4 -bottom-4 text-8xl text-orange-500/10 group-hover:text-orange-500/20 transition-colors"></i>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg shadow-orange-500/30">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Gestión Empresarial</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 font-medium uppercase tracking-wider">Punto de Venta y Contabilidad</p>
                    <ul className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                        <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> <strong>CONTPAQi</strong> Contabilidad</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> <strong>SoftRestaurant</strong> v11 Pro</li>
                        <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-orange-500"></div> Facturación Electrónica</li>
                    </ul>
                </div>
            </div>

            {/* 4. Adobe (1x1) */}
            <div className="md:col-span-3 lg:col-span-1 bg-gold-50/50 dark:bg-gold-900/10 backdrop-blur-xl border border-gold-200 dark:border-gold-500/20 rounded-[2rem] p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
                <i className="fa-brands fa-adobe absolute -right-4 -bottom-4 text-8xl text-gold-500/10 group-hover:text-gold-500/20 transition-colors"></i>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold-600 text-white flex items-center justify-center text-2xl mb-4 shadow-lg shadow-gold-600/30">
                        <i className="fa-solid fa-pen-nib"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Adobe Creative</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                        Photoshop, Illustrator, Premiere Pro. Suite completa para creativos.
                    </p>
                </div>
            </div>

            {/* 5. Autodesk (1x1) */}
            <div className="md:col-span-3 lg:col-span-1 bg-teal-50/50 dark:bg-teal-900/10 backdrop-blur-xl border border-teal-200 dark:border-teal-500/20 rounded-[2rem] p-6 relative overflow-hidden group hover:-translate-y-1 transition-all">
                <i className="fa-solid fa-compass-drafting absolute -right-4 -bottom-4 text-8xl text-teal-500/10 group-hover:text-teal-500/20 transition-colors"></i>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center text-2xl mb-4 shadow-lg shadow-teal-500/30">
                        <i className="fa-solid fa-layer-group"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Autodesk Gold</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                        AutoCAD, Revit, 3ds Max. Soluciones para Arquitectura e Ingeniería.
                    </p>
                </div>
            </div>

         </div>
      </div>

      {/* Licenses Catalog */}
      <div className="mb-20">
        <SectionHeader title="Catálogo de Licencias" />
        
        {/* Categories Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {licenseCategories.map((category) => (
            <div key={category.id} className="glass-interactive rounded-full px-6 py-2 flex items-center gap-3 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group border border-gray-200 dark:border-white/10">
              {category.iconClass && (
                <i className={`${category.iconClass} text-gray-500 dark:text-gray-400 group-hover:text-inherit`}></i>
              )}
              <span className="text-sm dark:text-white font-bold tracking-widest">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {licenseProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Brands Trust Section */}
      <div className="mb-24">
        <div className="text-center mb-10">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 block mb-2">Ecosistema Global</span>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nuestras Alianzas Estratégicas</h3>
        </div>
        
        <div className="philips-glass rounded-[2rem] p-10 border border-white/10 bg-white/40 dark:bg-black/40">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {brands.map((brand, idx) => (
                    <img 
                        key={idx} 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="h-8 md:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 dark:invert" 
                    />
                ))}
            </div>
        </div>
      </div>

      <ContactForm />

    </div>
  );
};
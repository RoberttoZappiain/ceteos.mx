import React from 'react';
import { SectionHeader, ProductCard } from '../components/Common';
import { ContactForm } from '../components/ContactForm';
import { categories, products } from '../data';

export const Infraestructura: React.FC = () => {
  // Filter infrastructure-related categories
  const infraCategories = categories.filter(cat => 
    ['Mantenimiento Site', 'Mantenimiento CCTV', 'Infraestructura'].includes(cat.name)
  );

  const infraProducts = products.filter(product => 
    infraCategories.some(cat => cat.name === product.category)
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
          INFRAESTRUCTURA
        </span>
      </nav>

      {/* Section Header */}
      <div className="text-start mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Infraestructura <span className="text-gold-500">Tecnológica</span>
        </h1>
        <p className="text-xl text-start text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          Potencia tu empresa con soluciones de infraestructura robustas, seguras y escalables. 
          Diseñamos el ecosistema digital que tu negocio necesita para operar sin interrupciones.
        </p>
      </div>

      {/* Before & After Optimization Showcase */}
      <div className="mb-24 relative group">
         {/* Decorative Background Blob */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
         
         <div className="bg-white/30 dark:bg-black/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-cyan-500 opacity-60"></div>
            
            <div className="text-center mb-10">
               <span className="text-gold-500 font-black tracking-[0.3em] uppercase text-xs mb-3 block">Caso de Éxito Real</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                 Optimización de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-gold-500">Data Center</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
               {/* Before Card */}
               <div className="relative group/card overflow-hidden rounded-2xl border border-gold-500/20 shadow-lg">
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-lg font-sans text-sm border border-white/10 uppercase tracking-wider">
                     <i className="fa-solid fa-triangle-exclamation text-orange-500 mr-2"></i> Antes
                  </div>
                  <img 
                    src="/media-clear/antes.jpg" 
                    alt="Site antes del mantenimiento" 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/card:scale-105 filter grayscale-[30%] group-hover/card:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white z-20 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                     <p className="text-sm font-medium opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                       Cableado desestructurado, flujo de aire deficiente y riesgo operativo alto.
                     </p>
                  </div>
               </div>

               {/* After Card */}
               <div className="relative group/card overflow-hidden rounded-2xl border border-green-500/20 shadow-2xl shadow-green-500/10">
                  <div className="absolute top-4 left-4 z-20 bg-green-500 text-white px-4 py-1.5 rounded-lg font-sans text-sm shadow-lg uppercase tracking-wider font-bold">
                     <i className="fa-solid fa-check-circle mr-2"></i> Después
                  </div>
                  <img 
                    src="/media-clear/Gemini_Generated_Image_1cog3y1cog3y1cog.png" 
                    alt="Site optimizado" 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  {/* Tech Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent mix-blend-overlay"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white z-20 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                     <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-green-400">Resultados</span>
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-500"></div>)}
                        </div>
                     </div>
                     <p className="text-xs text-gray-200">
                       Peinado estructurado certificado, gestión térmica optimizada y etiquetado profesional norma ANSI/TIA-606-B.
                     </p>
                  </div>
               </div>
               
               {/* Arrow Icon in Center (Desktop) */}
               <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white dark:bg-gray-900 rounded-full items-center justify-center shadow-2xl border-4 border-gray-100 dark:border-gray-800 text-gray-400">
                  <i className="fa-solid fa-arrow-right-long text-2xl"></i>
               </div>
            </div>
         </div>
      </div>

      {/* Liquid Glass Bento Grid */}
      <div className="mb-20 relative overflow-hidden p-4 -m-4">
        {/* Ambient Backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/10 dark:bg-gold-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Item 1: Cloud Servers (Large - 2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-gold-500/20 transition-colors"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 text-3xl mb-4 group-hover:scale-110 transition-transform duration-500 border border-gold-500/20">
                <i className="fa-solid fa-cloud"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Cloud Computing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Servidores en la nube de alta disponibilidad. AWS, Azure y Google Cloud gestionados por expertos. Escalabilidad instantánea para tus aplicaciones críticas.
                </p>
              </div>
              <div className="mt-6">
                 <button className="text-gold-500 font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all">
                   Ver Planes <i className="fa-solid fa-arrow-right"></i>
                 </button>
              </div>
            </div>
          </div>

          {/* Item 2: Security (Tall - 1x2) */}
          <div className="md:col-span-1 md:row-span-2 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl mb-6 border border-blue-500/20">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ciberseguridad</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 flex-1">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-500"></i> Firewalls Avanzados</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-500"></i> Protección DDoS</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-500"></i> Auditorías Pentest</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-500"></i> VPN Corporativa</li>
                </ul>
             </div>
          </div>

          {/* Item 3: Data Centers (1x1) */}
          <div className="md:col-span-1 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
             <div className="flex items-start justify-between mb-4">
               <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 text-xl border border-purple-500/20">
                  <i className="fa-solid fa-server"></i>
               </div>
             </div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Data Centers</h3>
             <p className="text-xs text-gray-600 dark:text-gray-300">
               Infraestructura física dedicada. Colocation y servidores bare-metal para máximo rendimiento.
             </p>
          </div>

          {/* Item 4: Networking (1x1) */}
          <div className="md:col-span-1 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
             <div className="flex items-start justify-between mb-4">
               <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 text-xl border border-green-500/20">
                  <i className="fa-solid fa-network-wired"></i>
               </div>
             </div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Networking</h3>
             <p className="text-xs text-gray-600 dark:text-gray-300">
               Diseño de redes estructuradas, fibra óptica y enlaces dedicados de alta velocidad.
             </p>
          </div>

           {/* Item 5: Analytics & Monitoring (Wide - 2x1) */}
           <div className="md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex items-center">
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gold-500/20 to-transparent"></div>
              <div className="flex-1 pr-8">
                <h3 className="text-xl font-bold text-white mb-2">Monitoreo 24/7</h3>
                <p className="text-gray-300 text-sm">
                  Centro de operaciones (NOC) vigilando tu infraestructura en tiempo real. Alertas proactivas y respuesta inmediata ante incidentes.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl animate-pulse">
                 <i className="fa-solid fa-chart-line"></i>
              </div>
           </div>

           {/* Item 6: Virtualization (1x1) */}
           <div className="md:col-span-1 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
             <div className="flex items-start justify-between mb-4">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-xl border border-orange-500/20">
                  <i className="fa-solid fa-layer-group"></i>
               </div>
             </div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Virtualización</h3>
             <p className="text-xs text-gray-600 dark:text-gray-300">
               VMware, Hyper-V y contenedores Docker/Kubernetes.
             </p>
           </div>
           
           {/* Item 7: Backup (1x1) */}
           <div className="md:col-span-1 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
             <div className="flex items-start justify-between mb-4">
               <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-xl border border-cyan-500/20">
                  <i className="fa-solid fa-database"></i>
               </div>
             </div>
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Backups</h3>
             <p className="text-xs text-gray-600 dark:text-gray-300">
               Copias de seguridad automáticas y recuperación ante desastres (DRP).
             </p>
           </div>

        </div>
      </div>

      {/* Infrastructure Services & Products */}
      <div className="mb-20">
        <SectionHeader title="Nuestros Servicios de Infraestructura" />
        
        {/* Categories Filter Pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {infraCategories.map((category) => (
            <div key={category.id} className="glass-interactive rounded-full px-6 py-2 flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer group border border-blue-500/10 hover:border-blue-500/50">
              {category.iconClass && (
                <i className={`${category.iconClass} text-blue-500 group-hover:text-white`}></i>
              )}
              <span className="text-sm font-bold dark:text-white tracking-widest">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {infraProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <ContactForm />

    </div>
  );
};
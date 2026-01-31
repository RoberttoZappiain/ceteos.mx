import React from 'react';
import { SectionHeader, ProductCard } from '../components/Common';
import { ContactForm } from '../components/ContactForm';
import { categories, products } from '../data';

export const FabricaSoftware: React.FC = () => {
  // Filter software-related categories and products
  const softwareCategories = categories.filter(cat => 
    ['Aplicaciones Web', 'Aplicaciones Móvil', 'Apps con Base de Datos', 'Menús Digitales'].includes(cat.name)
  );

  const softwareProducts = products.filter(product => 
    softwareCategories.some(cat => cat.name === product.category)
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in">
        <a href="/" className="hover:text-gold-500 transition-colors flex items-center gap-2">
          <i className="fa-solid fa-house opacity-70"></i>
          <span>Home</span>
        </a>
        <i className="fa-solid fa-chevron-right text-[10px] mx-4 opacity-50"></i>
        <span className="bg-gold-500/10 text-gold-600 dark:text-gold-400 px-3 py-1 rounded-full font-medium text-xs tracking-wide border border-gold-500/20">
          FÁBRICA DE SOFTWARE
        </span>
      </nav>

      {/* Section Header */}
      <div className="text-start mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Fábrica de <span className="text-gold-500">Software</span>
        </h1>
        <p className="text-xl text-start text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          Transformamos tus ideas en soluciones digitales potentes y escalables. 
          Desarrollo de software a medida con las mejores prácticas del mercado.
        </p>
      </div>
     
      {/* Liquid Glass Ecosystem Section */}
      <div className="mb-32 space-y-32 relative overflow-hidden p-4 -m-4">
        
        {/* Ambient Liquid Backgrounds - Adapted for Light/Dark */}
        <div className="absolute top-0 left-[-20%] w-[600px] h-[600px] bg-gold-500/10 dark:bg-gold-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-0 right-[-20%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '2s' }}></div>

        {/* Feature Block 1: The Core Structure */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Video Module (Left, spans 7 cols) */}
            <div className="lg:col-span-7 relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/50 to-purple-600/50 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-black/40 backdrop-blur-md transform transition-transform duration-500 group-hover:rotate-y-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 dark:from-black/60 via-transparent to-transparent z-10"></div>
                <video 
                  className="w-full h-full object-cover aspect-[16/10] opacity-90 group-hover:scale-105 transition-transform duration-700"
                  autoPlay 
                  muted 
                  playsInline
                  src="/media-clear/video1.mp4"
                />
              </div>
            </div>

            {/* Content Module (Right, spans 5 cols, overlapping effect) */}
            <div className="lg:col-span-5 lg:-ml-12 relative z-20">
              <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-xl transition-shadow duration-500">
                <div className="mb-6">
                  <h3 className="text-gold-600 dark:text-gold-500 text-sm tracking-[0.2em] mb-2 uppercase font-bold">Arquitectura Web</h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight uppercase">
                    PAGINAS Y SECCIONES <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-purple-600 dark:from-white dark:to-gray-400">INCLUIDAS:</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Header Item */}
                  <div className="group relative p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-gold-50 dark:hover:bg-gold-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-sm">
                        <i className="fa-solid fa-compass text-xs"></i>
                      </div>
                      <div>
                        <strong className="block text-gray-900 dark:text-white text-sm">Header</strong>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Logo, menú de navegación y buscador (opcional).</p>
                      </div>
                    </div>
                  </div>

                  {/* Grid of Sections */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "1. Banners Principal.-", "2. Home.-", "3. Marcas / clientes.-",
                      "4. Nosotros / Quienes somos.-", "5. Productos / Servicios.", "6. Proyectos.-",
                      "7. Testimonios.-", "8. FAQ.-", "9. Contacto.-",
                      "10. Comunicados.-", "11. Aviso de privacidad.-"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-5 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-gold-500/20 transition-all cursor-default group">
                        <div className="w-1 h-1 rounded-full bg-gold-500"></div>
                        <span className="text-[11px] text-gray-700 dark:text-gray-300 font-medium group-hover:text-gold-500 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Item */}
                  <div className="group relative p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-gold-50 dark:hover:bg-gold-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20 shadow-sm">
                        <i className="fa-solid fa-copyright text-xs"></i>
                      </div>
                      <div>
                        <strong className="block text-gray-900 dark:text-white text-sm">Footer</strong>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Información legal, enlaces rápidos, suscripción y copyright.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Block 2: Services (Mirrored) */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Content Module (Left, spans 5 cols, overlapping effect) */}
            <div className="lg:col-span-5 lg:order-1 order-2 lg:-mr-12 relative z-20">
              <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-xl transition-shadow duration-500">
                <div className="mb-6 text-right lg:text-left">
                  <h3 className="text-blue-600 dark:text-blue-500 text-sm tracking-[0.2em] mb-2 uppercase font-bold">Servicios Premium</h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight uppercase">
                    QUE INCLUYE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">COMO SERVICIO:</span>
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { text: "diseño moderno y funcional", icon: "fa-swatchbook" },
                    { text: "diseño responsive (celular y tabletas)", icon: "fa-mobile-screen-button" },
                    { text: "optimization de carga", icon: "fa-bolt-lightning" },
                    { text: "integracion con redes sociales", icon: "fa-share-nodes" },
                    { text: "hosting mensual", icon: "fa-server" },
                    { text: "dominio incluido", icon: "fa-globe" },
                    { text: "30 días de garantía y mantenimiento", icon: "fa-shield" },
                    { text: "1 campaña publicitaria", icon: "fa-rectangle-ad" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-gray-5 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-sm group-hover:scale-110 transition-transform">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors capitalize">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Module (Right, spans 7 cols) */}
            <div className="lg:col-span-7 lg:order-2 order-1 relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-l from-blue-600/50 to-cyan-600/50 rounded-[2.5rem] blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-black/40 backdrop-blur-md transform transition-transform duration-500 group-hover:-rotate-y-1">
                 <div className="absolute inset-0 bg-gradient-to-bl from-white/40 dark:from-black/60 via-transparent to-transparent z-10"></div>
                <video 
                  className="w-full h-full object-cover aspect-[16/10] opacity-90 group-hover:scale-105 transition-transform duration-700"
                  autoPlay 
                  muted 
                  playsInline
                  src="/media-clear/video2.mp4"
                />

                 {/* Tech Overlay Elements */}
                 <div className="absolute top-0 right-0 p-8 z-20 opacity-50">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-white/20"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-white/20"></div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Our Software Products */}
      <div className="mb-20">
        <SectionHeader title="Nuestros Productos de Software" />
        
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {softwareCategories.map((category) => (
            <div key={category.id} className="glass-interactive rounded-full px-6 py-2 flex items-center gap-3 hover:bg-gold-500 hover:text-white transition-colors cursor-pointer group">
              {category.iconClass && (
                <i className={`${category.iconClass} text-gold-500 group-hover:text-white`}></i>
              )}
              <span className="text-sm font-bold dark:text-white tracking-widest">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {softwareProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

    </div>
  );
};
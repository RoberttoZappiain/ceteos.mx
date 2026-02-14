import React from 'react';
import { SectionHeader } from '../components/Common';
import { ContactForm } from '../components/ContactForm';

export const SoporteTecnico: React.FC = () => {
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
          SOPORTE TI
        </span>
      </nav>

      {/* Section Header */}
      <div className="text-start mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Soporte Técnico <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Nivel 1, 2 y 3</span>
        </h1>
        <p className="text-xl text-start text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          Tu propio departamento de TI, bajo demanda. Atendemos desde incidencias cotidianas hasta arquitectura de servidores crítica para PyMEs. 
          <span className="block mt-2 text-blue-500 font-bold">Rápido. Eficiente. Seguro.</span>
        </p>
      </div>

      {/* The Support Matrix (Holographic Cards) */}
      <div className="mb-32 relative">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Level 1: User Support */}
            <div className="relative group hover:-translate-y-2 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="h-full bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                     <span className="text-6xl font-black text-gray-900 dark:text-white">01</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 text-3xl mb-6 shadow-inner border border-blue-500/20">
                     <i className="fa-solid fa-headset"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Help Desk (Nivel 1)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[3rem]">
                     Soporte inmediato al usuario final. Resolución de problemas básicos y configuración de dispositivos.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-blue-500"></i> Configuración de Correo</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-blue-500"></i> Impresoras y Periféricos</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-blue-500"></i> Instalación de Office/Antivirus</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-blue-500"></i> Soporte Remoto (AnyDesk/TeamViewer)</li>
                  </ul>
               </div>
            </div>

            {/* Level 2: SysAdmin */}
            <div className="relative group hover:-translate-y-2 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="h-full bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                     <span className="text-6xl font-black text-gray-900 dark:text-white">02</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-3xl mb-6 shadow-inner border border-cyan-500/20">
                     <i className="fa-solid fa-terminal"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">SysAdmin (Nivel 2)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[3rem]">
                     Administración técnica avanzada. Redes, servidores y software especializado empresarial.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-cyan-500"></i> Gestión de Active Directory</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-cyan-500"></i> Soporte CONTPAQi / SoftRestaurant</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-cyan-500"></i> Configuración de Redes/VLANs</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-check text-cyan-500"></i> Backups y Recuperación</li>
                  </ul>
               </div>
            </div>

            {/* Level 3: Infrastructure */}
            <div className="relative group hover:-translate-y-2 transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="h-full bg-gradient-to-br from-gray-900 to-black text-white backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl">
                   {/* Animated Border Gradient */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 rounded-[2rem] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]"></div>
                  
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <span className="text-6xl font-black text-white">03</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-3xl mb-6 shadow-inner border border-purple-500/30">
                     <i className="fa-solid fa-server"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ingeniería (Nivel 3)</h3>
                  <p className="text-sm text-gray-300 mb-6 min-h-[3rem]">
                     Arquitectura crítica y ciberseguridad. Soluciones de infraestructura compleja y virtualización.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-300">
                     <li className="flex items-center gap-3"><i className="fa-solid fa-shield-halved text-purple-400"></i> Ciberseguridad Defensiva</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-server text-purple-400"></i> Virtualización (VMware/Hyper-V)</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-cloud text-purple-400"></i> Migración Cloud (AWS/Azure)</li>
                     <li className="flex items-center gap-3"><i className="fa-solid fa-network-wired text-purple-400"></i> Diseño de Data Centers</li>
                  </ul>
               </div>
            </div>

         </div>
      </div>

      {/* NOC Dashboard Simulation (Visual Trust) */}
      <div className="mb-24">
         <div className="bg-black/90 backdrop-blur-md rounded-[2rem] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
               
               <div className="text-left max-w-lg">
                  <div className="flex items-center gap-2 mb-4">
                     <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                     </span>
                     <span className="text-green-500 font-sans text-xs uppercase tracking-widest">Sistemas Operativos</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                     Monitoreo Proactivo
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                     No esperamos a que algo falle. Utilizamos herramientas de monitoreo RMM para detectar anomalías en tus servidores y redes antes de que detengan tu operación.
                  </p>
               </div>

               {/* Stats Cards */}
               <div className="flex flex-wrap gap-6 justify-center">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-40 text-center backdrop-blur-md">
                     <i className="fa-solid fa-clock text-blue-500 text-2xl mb-2"></i>
                     <div className="text-3xl font-black text-white mb-1">15<span className="text-sm font-normal text-gray-400">min</span></div>
                     <div className="text-[10px] text-gray-500 uppercase tracking-wider">Tiempo Respuesta</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-40 text-center backdrop-blur-md">
                     <i className="fa-solid fa-thumbs-up text-green-500 text-2xl mb-2"></i>
                     <div className="text-3xl font-black text-white mb-1">99<span className="text-sm font-normal text-gray-400">%</span></div>
                     <div className="text-[10px] text-gray-500 uppercase tracking-wider">Satisfacción</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-40 text-center backdrop-blur-md">
                     <i className="fa-solid fa-ticket text-purple-500 text-2xl mb-2"></i>
                     <div className="text-3xl font-black text-white mb-1">24<span className="text-sm font-normal text-gray-400">/7</span></div>
                     <div className="text-[10px] text-gray-500 uppercase tracking-wider">Disponibilidad</div>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('/media-clear/site1.png')] bg-cover opacity-10 mix-blend-multiply"></div>
         <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
               ¿Problemas Técnicos?
            </h2>
            <p className="text-blue-100 text-lg mb-10">
               Deja que nuestros expertos tomen el control. Abre un ticket ahora o agenda una visita técnica de diagnóstico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-xl">
                  <i className="fa-brands fa-whatsapp mr-2"></i> Soporte Express
               </button>
               <button className="bg-blue-700/50 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors backdrop-blur-sm">
                  <i className="fa-solid fa-envelope mr-2"></i> Abrir Ticket
               </button>
            </div>
         </div>
      </div>

      <ContactForm />

    </div>
  );
};

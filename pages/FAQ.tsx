import React, { useState } from 'react';
import { ContactForm } from '../components/ContactForm';

const faqData = [
  {
    category: "Servicios Generales",
    questions: [
      {
        q: "¿Qué tipo de garantía ofrecen en sus servicios?",
        a: "Ofrecemos garantía por escrito en todos nuestros servicios. Para desarrollo de software, incluimos 3 meses de soporte post-implementación. En hardware e infraestructura, nos apegamos a las garantías del fabricante más nuestra garantía de instalación de 30 días."
      },
      {
        q: "¿Realizan facturación?",
        a: "Sí, todos nuestros precios incluyen IVA y emitimos factura fiscal válida en México. Los comprobantes se envían automáticamente a su portal de 'Mi Cuenta' una vez procesado el pago."
      },
      {
        q: "¿Cuál es su tiempo de respuesta para soporte técnico?",
        a: "Para clientes con póliza de mantenimiento, el tiempo de respuesta es menor a 2 horas. Para servicios bajo demanda, agendamos diagnósticos dentro de las siguientes 24 horas hábiles."
      }
    ]
  },
  {
    category: "Licenciamiento y Software",
    questions: [
      {
        q: "¿Las licencias de software son permanentes?",
        a: "Depende del producto. Manejamos licencias perpetuas (pago único) y modelos de suscripción (SaaS) anual o mensual. Nuestros asesores le recomendarán la mejor opción costo-beneficio para su empresa."
      },
      {
        q: "¿Pueden ayudarme a regularizar el software de mi empresa?",
        a: "Absolutamente. Realizamos auditorías de software y le ayudamos a regularizar su situación con Microsoft, Adobe, y otros proveedores, evitando multas y asegurando el cumplimiento legal."
      }
    ]
  },
  {
    category: "Infraestructura y Hardware",
    questions: [
      {
        q: "¿Instalan Starlink en zonas remotas?",
        a: "Sí, somos expertos en instalación de antenas Starlink en zonas rurales, industriales y residenciales. Realizamos el estudio de obstrucciones y la instalación profesional del cableado y red Wi-Fi."
      },
      {
        q: "¿Venden equipo de cómputo o solo dan mantenimiento?",
        a: "Ambos. Somos distribuidores autorizados de las principales marcas (Dell, HP, Lenovo) y armamos equipos a medida (Workstations, Servidores) según sus necesidades específicas."
      }
    ]
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          FAQ
        </span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
          Preguntas <span className="text-gold-500">Frecuentes</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          Resolvemos tus dudas sobre nuestros servicios, facturación y soporte técnico. 
          Si no encuentras lo que buscas, contáctanos directamente.
        </p>
      </div>

      {/* Search Bar Placeholder */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gold-500 blur-lg opacity-20 group-hover:opacity-30 transition-opacity rounded-2xl"></div>
          <div className="relative bg-white dark:bg-black/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-2 flex items-center shadow-xl">
            <i className="fa-solid fa-magnifying-glass text-gray-400 ml-4"></i>
            <input 
              type="text" 
              placeholder="Buscar una pregunta..." 
              className="w-full bg-transparent border-none outline-none px-4 py-3 text-gray-700 dark:text-gray-200 placeholder-gray-400 font-medium"
            />
            <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto space-y-12 mb-24">
        {faqData.map((section, sIndex) => (
          <div key={sIndex} className="animate-fade-in-up" style={{ animationDelay: `${sIndex * 100}ms` }}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-200 dark:border-white/10 pb-4">
              <i className="fa-solid fa-layer-group text-gold-500"></i>
              {section.category}
            </h3>
            
            <div className="space-y-4">
              {section.questions.map((item, qIndex) => {
                const uniqueId = `${sIndex}-${qIndex}`;
                const isOpen = openIndex === uniqueId;

                return (
                  <div 
                    key={qIndex} 
                    className={`bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-lg ring-1 ring-gold-500/20' : 'hover:bg-gray-50 dark:hover:bg-white/10'}`}
                  >
                    <button 
                      onClick={() => toggleAccordion(uniqueId)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-bold text-gray-800 dark:text-gray-200 pr-8">{item.q}</span>
                      <span className={`w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-500 text-white' : 'text-gray-500'}`}>
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-dashed border-gray-200 dark:border-white/10 mt-2">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions? */}
      <div className="bg-gray-900 dark:bg-white/5 rounded-3xl p-8 md:p-12 text-center mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
           <i className="fa-solid fa-comments text-9xl text-white"></i>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">¿No encontraste lo que buscabas?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
          Nuestro equipo de soporte está listo para responder tus dudas específicas. 
          Contáctanos por WhatsApp o envíanos un correo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
           <a href="/soporte-tecnico" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-gold-500/30">
             Ir a Soporte
           </a>
           <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-3 rounded-xl font-bold transition-all">
             WhatsApp Directo
           </a>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};
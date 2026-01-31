import React, { useState } from 'react';

// Configuration for email submission
// TODO: When deploying to your VPS/Production:
// 1. Create a backend endpoint (e.g., using Node.js/Express, PHP, Python) that accepts POST requests.
// 2. Configure this endpoint to send emails using SMTP (e.g., using nodemailer in Node.js).
// 3. Update the `API_ENDPOINT` constant below to point to your backend URL.
//    Example: const API_ENDPOINT = 'https://your-domain.com/api/send-email';
// 
// For now, in local development, you can test the UI logic. 
// A fallback `mailto` link is also generated as a simple alternative.

const API_ENDPOINT = 'http://localhost:3000/api/send-email'; // CHANGE THIS for Production
const EMAIL_RECIPIENT = 'ventas@ceteos.mx';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Desarrollo Web',
    budget: 'Menos de $1k MXM',
    details: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // --- BACKEND INTEGRATION STARTS HERE ---
      // Uncomment and adapt the following fetch call when you have a backend:
      
      /*
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: EMAIL_RECIPIENT,
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      */
     
      // --- MOCK SUCCESS FOR LOCAL DEV ---
      // Simulating a network request delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // OPTIONAL: Fallback to opening mail client if no backend
      const subject = `Nuevo Proyecto de ${formData.name} - ${formData.projectType}`;
      const body = `Nombre: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0APresupuesto: ${formData.budget}%0D%0A%0D%0ADetalles:%0D%0A${formData.details}`;
      // window.location.href = `mailto:${EMAIL_RECIPIENT}?subject=${subject}&body=${body}`;

      setStatus('success');
      setFormData({ name: '', company: '', email: '', projectType: 'Desarrollo Web', budget: 'Menos de $1k MXM', details: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto mb-20">
      {/* Background Blobs for Form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gold-500/10 to-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="bg-white/80 dark:bg-black/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative group">
        
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-purple-500 to-blue-500 opacity-80"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Header & Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Inicia tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-purple-600">Transformación</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Cuéntanos sobre tu proyecto. Nuestros ingenieros analizarán tus requerimientos para ofrecerte una propuesta técnica a medida.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gold-500 border border-gray-200 dark:border-white/10">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-70">Email Directo</span>
                    <span className="text-lg font-medium">{EMAIL_RECIPIENT}</span>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-blue-500 border border-gray-200 dark:border-white/10">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider opacity-70">Garantía</span>
                    <span className="text-lg font-medium">NDA & Confidencialidad</span>
                  </div>
               </div>
            </div>
          </div>

          {/* The Form */}
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Empresa</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Correo Electrónico</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@empresa.com"
                required
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Tipo de Proyecto</label>
                <div className="relative">
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all cursor-pointer"
                  >
                    <option>Desarrollo Web</option>
                    <option>App Móvil</option>
                    <option>E-Commerce</option>
                    <option>Sistema a Medida</option>
                    <option>Infraestructura</option>
                    <option>Licenciamiento</option>
                    <option>Otro</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Presupuesto Publicidad.</label>
                 <div className="relative">
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all cursor-pointer"
                  >
                    <option>Menos de $1k MXM</option>
                    <option>$5k - $15k MXM</option>
                    <option>$15k - $50k MXM</option>
                    <option>Más de $50k MXM</option>
                    <option>No definido</option>
                  </select>
                   <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Detalles del Proyecto</label>
              <textarea 
                rows={4}
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Describe brevemente tus objetivos..."
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-gold-500/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-gold-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>Enviar Solicitud</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
            
            {status === 'success' && (
              <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in flex items-center gap-3">
                <i className="fa-solid fa-circle-check"></i>
                <span>¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-gold-100 border border-gold-200 text-gold-700 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in flex items-center gap-3">
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>Hubo un error al enviar. Por favor intenta de nuevo o escríbenos directo.</span>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MiCuenta: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 relative z-10 min-h-[80vh] flex flex-col justify-center">
      
      <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24 max-w-6xl mx-auto w-full">
        
        {/* Left Side: Welcome/Branding */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-gold-500 font-bold tracking-widest uppercase mb-4 text-sm">Portal de Clientes</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Gestiona tu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-purple-600">Ecosistema Digital</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Accede a tus facturas, estatus de proyectos, tickets de soporte y renovación de licencias en un solo lugar.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-100 dark:bg-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Facturación</h4>
                  <p className="text-xs text-gray-500 mt-1">Descarga XML y PDF al instante.</p>
                </div>
             </div>
             <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                  <i className="fa-solid fa-ticket"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Soporte 24/7</h4>
                  <p className="text-xs text-gray-500 mt-1">Seguimiento en tiempo real.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="flex-1 max-w-md w-full mx-auto lg:mx-0">
           <div className="bg-white dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Toggle Tabs */}
              <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl mb-8">
                <button 
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'login' ? 'bg-white dark:bg-white/10 shadow-md text-gold-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  Iniciar Sesión
                </button>
                <button 
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'register' ? 'bg-white dark:bg-white/10 shadow-md text-gold-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  Registrarse
                </button>
              </div>

              {/* Login Form */}
              {activeTab === 'login' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Corporativo</label>
                    <div className="flex items-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus-within:border-gold-500/50 focus-within:ring-2 focus-within:ring-gold-500/20 transition-all">
                      <i className="fa-solid fa-envelope text-gray-400 mr-3"></i>
                      <input type="email" placeholder="nombre@empresa.com" className="bg-transparent border-none outline-none w-full text-sm dark:text-white placeholder-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Contraseña</label>
                    <div className="flex items-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus-within:border-gold-500/50 focus-within:ring-2 focus-within:ring-gold-500/20 transition-all">
                      <i className="fa-solid fa-lock text-gray-400 mr-3"></i>
                      <input type="password" placeholder="••••••••" className="bg-transparent border-none outline-none w-full text-sm dark:text-white placeholder-gray-400" />
                    </div>
                    <div className="text-right mt-2">
                      <a href="#" className="text-xs text-gold-500 hover:underline font-bold">¿Olvidaste tu contraseña?</a>
                    </div>
                  </div>

                  <button className="w-full bg-gold-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-gold-500/30 hover:bg-gold-600 hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                    Entrar al Portal
                  </button>
                </div>
              )}

              {/* Register Form */}
              {activeTab === 'register' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Nombre</label>
                       <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-500/50 text-sm dark:text-white" placeholder="Juan" />
                    </div>
                    <div>
                       <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Apellido</label>
                       <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-500/50 text-sm dark:text-white" placeholder="Pérez" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Empresa</label>
                    <div className="flex items-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3">
                      <i className="fa-solid fa-building text-gray-400 mr-3"></i>
                      <input type="text" placeholder="Nombre de tu Organización" className="bg-transparent border-none outline-none w-full text-sm dark:text-white placeholder-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
                    <input type="email" placeholder="nombre@empresa.com" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-500/50 text-sm dark:text-white" />
                  </div>

                  <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                    Crear Cuenta
                  </button>
                </div>
              )}

              <div className="mt-8 text-center text-xs text-gray-500">
                <p>Protegido por reCAPTCHA y sujeto a la <a href="#" className="underline hover:text-gold-500">Política de Privacidad</a>.</p>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};
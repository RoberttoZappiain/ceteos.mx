import React from 'react';

export const Pagar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8 animate-fade-in">
        <a href="/" className="hover:text-gold-500 transition-colors flex items-center gap-2">
          <i className="fa-solid fa-house opacity-70"></i>
          <span>Home</span>
        </a>
        <i className="fa-solid fa-chevron-right text-[10px] mx-4 opacity-50"></i>
        <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full font-medium text-xs tracking-wide border border-green-500/20">
          PAGOS
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Payment Column */}
        <div className="lg:col-span-2">
           <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 uppercase">Centro de Pagos</h1>
           <p className="text-gray-500 mb-10">Realiza tus pagos de manera segura y reporta transferencias.</p>

           {/* Quick Pay By Invoice */}
           <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <i className="fa-solid fa-credit-card text-9xl"></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">1</span>
                 Pago Rápido de Factura
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">No. de Factura / Referencia</label>
                    <input type="text" placeholder="Ej. A-10245" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-500 transition-colors text-sm dark:text-white" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Monto a Pagar (MXN)</label>
                    <input type="number" placeholder="0.00" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-green-500 transition-colors text-sm dark:text-white font-mono" />
                 </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/20 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3 relative z-10">
                 <i className="fa-solid fa-lock"></i> Proceder al Pago Seguro
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 <i className="fa-brands fa-cc-visa text-3xl"></i>
                 <i className="fa-brands fa-cc-mastercard text-3xl"></i>
                 <i className="fa-brands fa-cc-amex text-3xl"></i>
                 <i className="fa-brands fa-cc-paypal text-3xl"></i>
              </div>
           </div>

           {/* Bank Transfer Details */}
           <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">2</span>
                 Transferencia Bancaria (SPEI)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 relative group cursor-pointer hover:border-blue-500/50 transition-colors">
                    <div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-500">
                       <i className="fa-regular fa-copy"></i>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Banco</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">BBVA Bancomer</p>
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 relative group cursor-pointer hover:border-blue-500/50 transition-colors">
                    <div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-500">
                       <i className="fa-regular fa-copy"></i>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">CLABE Interbancaria</p>
                    <p className="text-lg font-mono font-bold text-gray-900 dark:text-white tracking-widest">012 180 0158963452 8</p>
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 relative group cursor-pointer hover:border-blue-500/50 transition-colors">
                    <div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-500">
                       <i className="fa-regular fa-copy"></i>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Nombre / Razón Social</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">CETEOS TECHNOLOGIES SA DE CV</p>
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Correo para Comprobantes</p>
                    <a href="mailto:facturacion@ceteos.com" className="text-lg font-bold text-blue-500 hover:underline">facturacion@ceteos.com</a>
                 </div>
              </div>
           </div>

        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-8">
           
           <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 rounded-full blur-[80px] opacity-20"></div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10"><i className="fa-solid fa-shield-halved text-green-400 mr-2"></i> Seguridad Garantizada</h3>
              <p className="text-sm text-gray-300 mb-6 relative z-10 leading-relaxed">
                 Tus pagos son procesados a través de plataformas encriptadas SSL de 256-bits. No almacenamos información sensible de tarjetas.
              </p>
              
              <div className="space-y-3 relative z-10">
                 <div className="flex items-center gap-3 text-sm text-gray-300">
                    <i className="fa-solid fa-check text-green-400"></i> Facturación Inmediata
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-300">
                    <i className="fa-solid fa-check text-green-400"></i> Confirmación por SMS/Email
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-300">
                    <i className="fa-solid fa-check text-green-400"></i> Soporte en Pagos
                 </div>
              </div>
           </div>

           <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-500/20 p-6 rounded-2xl">
              <h4 className="text-orange-600 dark:text-orange-400 font-bold mb-2 flex items-center gap-2">
                 <i className="fa-solid fa-circle-info"></i> Aviso Importante
              </h4>
              <p className="text-xs text-orange-800 dark:text-orange-200 leading-relaxed">
                 Si realizas transferencia SPEI, recuerda poner tu <strong>Número de Factura</strong> en el concepto de pago para agilizar la conciliación. Los pagos se reflejan en un lapso de 1 a 2 horas hábiles.
              </p>
           </div>

        </div>

      </div>
    </div>
  );
};
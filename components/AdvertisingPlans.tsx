import React from 'react';

const plans = [
  {
    investment: '1,000',
    color: 'gold',
    metaReach: '10,000 - 18,000',
    metaTraffic: '150 - 250',
    metaIdeal: 'Branding local, promociones visuales, generar curiosidad.',
    googleReach: '500 - 1,000',
    googleTraffic: '30 - 60',
    googleIdeal: 'Servicios muy específicos de bajo costo por clic.',
  },
  {
    investment: '2,500',
    color: 'cyan',
    metaReach: '25,000 - 40,000',
    metaTraffic: '400 - 700',
    metaIdeal: 'Negocios de comida, moda, servicios de belleza, eventos.',
    googleReach: '1,500 - 2,500',
    googleTraffic: '80 - 150',
    googleIdeal: 'Servicios profesionales (Abogados, Dentistas, Plomeros).',
  },
  {
    investment: '5,000',
    color: 'purple',
    metaReach: '50,000 - 90,000',
    metaTraffic: '900 - 1,400',
    metaIdeal: 'E-commerce, escalar ventas, campañas de retargeting.',
    googleReach: '3,000 - 6,000',
    googleTraffic: '200 - 350',
    googleIdeal: 'Captar clientes listos para comprar ya (Alta intención).',
  },
];

const PlanCard: React.FC<{ plan: typeof plans[0] }> = ({ plan }) => {
  const colorVariants = {
    gold: {
      bg: 'bg-gold-500/10',
      border: 'border-gold-500/20',
      text: 'text-gold-500',
      iconBg: 'bg-gold-500/10',
      titleText: 'text-gold-400',
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      text: 'text-cyan-500',
      iconBg: 'bg-cyan-500/10',
      titleText: 'text-cyan-400',
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
      titleText: 'text-purple-400',
    },
  };

  const selectedColor = colorVariants[plan.color as keyof typeof colorVariants];

  return (
    <div className={`bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${selectedColor.border}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className={`text-2xl font-bold ${selectedColor.titleText}`}>Inversión Mensual</h3>
        <div className={`px-4 py-1 rounded-full text-lg font-extrabold border ${selectedColor.bg} ${selectedColor.border} ${selectedColor.text}`}>
          ${plan.investment} <span className="text-xs">MXN</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Meta Ads */}
        <div className={`p-4 rounded-xl ${selectedColor.bg} border ${selectedColor.border}`}>
          <h4 className="font-bold mb-2 flex items-center gap-3 text-gray-400"><i className="fa-brands fa-meta text-xl"></i> Meta Ads (FB/IG)</h4>
          <p className="text-sm text-gray-300 mb-2">{plan.metaIdeal}</p>
          <div className="flex justify-around text-center text-xs gap-2">
            <div><i className={`fa-solid fa-users ${selectedColor.text} mb-1`}></i><p className="font-semibold">{plan.metaReach}</p><span className="text-gray-400">Alcance</span></div>
            <div><i className={`fa-solid fa-mouse-pointer ${selectedColor.text} mb-1`}></i><p className="font-semibold">{plan.metaTraffic}</p><span className="text-gray-400">Tráfico</span></div>
          </div>
        </div>

        {/* Google Ads */}
        <div className={`p-4 rounded-xl ${selectedColor.bg} border ${selectedColor.border}`}>
          <h4 className="font-bold mb-2 flex items-center gap-3 text-gray-400"><i className="fa-brands fa-google text-xl"></i> Google Ads</h4>
          <p className="text-sm text-gray-300 mb-2">{plan.googleIdeal}</p>
          <div className="flex justify-around text-center text-xs gap-2">
            <div><i className={`fa-solid fa-users ${selectedColor.text} mb-1`}></i><p className="font-semibold">{plan.googleReach}</p><span className="text-gray-400">Alcance</span></div>
            <div><i className={`fa-solid fa-hand-pointer ${selectedColor.text} mb-1`}></i><p className="font-semibold">{plan.googleTraffic}</p><span className="text-gray-400">Tráfico</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdvertisingPlans: React.FC = () => {
  return (
    <div className="py-4 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Impulsa tu <span className="text-gold-500">Visibilidad Digital</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Compara nuestros planes de pauta y elige la estrategia perfecta para que tus clientes te encuentren.
          </p>
           <p className="text-xs text-gray-500 mt-2">
            *Las estimaciones están basadas en costos promedio (CPC y CPM) en México. Los resultados reales pueden variar.*
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <PlanCard key={plan.investment} plan={plan} />
          ))}
        </div>

        {/* Guía Rápida & Tip Pro */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Guía Rápida */}
            <div className="lg:col-span-3 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg">
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white"><i className="fa-solid fa-brain text-gold-500"></i> Guía Rápida de Estrategia</h3>
                 <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg text-gold-400 flex items-center gap-2"><i className="fa-brands fa-google"></i> Google Ads para "Necesidad"</h4>
                        <p className="text-gray-400 mt-1 text-sm"><b>Sectores:</b> Plomeros, cerrajeros, abogados, médicos.</p>
                        <p className="mt-2 text-sm"><b>Estrategia:</b> Captura a clientes con alta intención de compra que buscan soluciones inmediatas. Ideal con presupuestos de <b className="text-white">$2,500+</b>.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gold-400 flex items-center gap-2"><i className="fa-brands fa-meta"></i> Meta Ads para "Deseo"</h4>
                        <p className="text-gray-400 mt-1 text-sm"><b>Sectores:</b> Restaurantes, moda, bienes raíces, eventos.</p>
                        <p className="mt-2 text-sm"><b>Estrategia:</b> Genera reconocimiento de marca y antojo con contenido visual atractivo. Funciona increíble desde <b className="text-white">$1,000</b>.</p>
                    </div>
                 </div>
            </div>
          
            {/* Tip Pro */}
            <div className="lg:col-span-2 bg-gold-500/10 backdrop-blur-xl border border-gold-500/20 rounded-3xl p-8 shadow-lg text-center">
                <i className="fa-solid fa-lightbulb text-gold-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-bold text-gray-400 mb-2">Tu Sitio Web es la Clave</h3>
                <p className="text-gold-200/80 text-sm">
                De nada sirve atraer miles de visitas si tu página no carga rápido o no inspira confianza. <b className="text-gray-400/50">Nosotros creamos sitios optimizados para convertir esas visitas en ventas.</b>
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};
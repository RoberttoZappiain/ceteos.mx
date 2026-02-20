import React, { useState, useEffect } from 'react';

const PROJECT_IMAGES = [
  '/media-clear/proyects/more/blog-malandro-by-ceteos.png',
  '/media-clear/proyects/more/e-learning-platform-by-ceteos.png',
  '/media-clear/proyects/more/ecommerce-solution-by-ceteos.png',
  '/media-clear/proyects/more/imac-display-mockup-by-ceteos.png',
  '/media-clear/proyects/more/landing-page-abogados-legal-by-ceteos.png',
  '/media-clear/proyects/more/rifas-bahia-app-by-ceteos.png',
  '/media-clear/proyects/more/ruedas-patas-pet-shop-by-ceteos.png',
  '/media-clear/proyects/more/sass-dashboard-personalizado-by-ceteos.png',
  '/media-clear/proyects/more/sitio-medico-healthcare-by-ceteos.png'
];

export const ProjectCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECT_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-2xl bg-white/50 dark:bg-black/40 backdrop-blur-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {PROJECT_IMAGES.map((src, index) => (
            <img 
                key={src}
                src={src}
                alt={`Proyecto de Software ${index + 1} - Desarrollo Web y Móvil by ceteos`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === activeIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
            />
        ))}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {PROJECT_IMAGES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex 
                        ? 'bg-blue-500 w-6' 
                        : 'bg-white/50 hover:bg-white'
                    }`}
                />
            ))}
        </div>

        {/* Navigation Arrows */}
        <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-sm z-20"
        >
            <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button 
             onClick={() => setActiveIndex((prev) => (prev + 1) % PROJECT_IMAGES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 backdrop-blur-sm z-20"
        >
            <i className="fa-solid fa-chevron-right"></i>
        </button>
        
        {/* Tech Decor */}
         <div className="absolute top-0 right-0 p-6 z-20 opacity-80">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
         </div>
    </div>
  );
};

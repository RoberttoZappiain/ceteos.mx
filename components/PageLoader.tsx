import React from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="relative">
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full animate-pulse"></div>
        
        {/* Main Logo Text */}
        <div className="relative z-10 flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase animate-fade-in-up">
              ceteos<span className="text-gold-500 animate-pulse">.</span>MX
            </h1>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
              <div className="h-full bg-gold-500 animate-loading-bar w-full origin-left"></div>
            </div>

            <p className="text-[10px] font-bold tracking-[0.5em] text-gray-500 uppercase animate-pulse">
              Cargando Experiencia
            </p>
        </div>
      </div>
    </div>
  );
};

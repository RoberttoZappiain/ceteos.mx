import React from 'react';
import { Product } from '../types';

// --- Section Header ---
interface SectionHeaderProps {
  title: string;
  actionText?: string;
  onAction?: () => void;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, actionText = "VER MÁS", onAction, centered }) => {
  return (
    <div className={`flex items-center justify-between border-b border-white/10 dark:border-white/5 mb-8 ${centered ? 'justify-center border-none' : ''}`}>
      <div className="philips-glass text-black dark:text-white px-6 py-2 uppercase font-bold text-xs tracking-[0.2em] rounded-t-lg">
        {title}
      </div>
      {!centered && (
        <button onClick={onAction} className="text-gray-500 dark:text-gray-400 text-[10px] font-bold hover:text-gold-500 uppercase tracking-widest transition-colors">
          {actionText}
        </button>
      )}
    </div>
  );
};

// --- Product Card ---
interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col items-center philips-glass glass-hover p-4 rounded-2xl transition-all border border-white/10 dark:border-white/5 overflow-hidden">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Badges */}
        {product.isSale && (
          <span className="absolute top-2 left-2 bg-gold-500 text-white text-[9px] font-bold px-3 py-1 uppercase rounded-full shadow-lg shadow-gold-500/20">
            Incluye Punto de Venta
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-white/20 backdrop-blur-md text-black dark:text-white text-[9px] font-bold px-3 py-1 uppercase rounded-full border border-white/20">
            Nuevo
          </span>
        )}
      </div>

      <h3 className="text-gray-800 dark:text-gray-200 font-bold text-xs mb-1 text-center group-hover:text-gold-500 transition-colors uppercase tracking-widest line-clamp-2 min-h-[2rem]">
        {product.name}
      </h3>

      {product.description && (
        <p className="text-[10px] text-gray-500 dark:text-gray-400 text-center mb-3 line-clamp-2 italic">
          {product.description}
        </p>
      )}

    </div>
  );
};

// --- Small Promo Card (e.g. "Top Offers") ---
interface PromoCardProps {
  title: string;
  subtitle: string;
  image: string;
  color?: string; // Highlight color for text
  actionText?: string;
}

export const PromoCard: React.FC<PromoCardProps> = ({ title, subtitle, image, color = "text-gold-500", actionText = "EXPLORAR" }) => {
  return (
    <div className="philips-glass glass-hover p-6 rounded-2xl flex justify-between items-center h-48 relative overflow-hidden group border border-white/10 transition-all">
      <div className="z-10 relative">
        <span className={`text-[10px] font-bold uppercase mb-2 block tracking-widest ${color}`}>{title}</span>
        <h3 className="text-sm font-bold text-gray-800 dark:text-white leading-tight mb-4 max-w-[120px] uppercase tracking-wide">{subtitle}</h3>
        <button className="text-[9px] font-bold text-gray-500 dark:text-gray-400 border-b border-white/20 hover:text-gold-500 hover:border-gold-500 uppercase tracking-widest transition-colors">
          {actionText}
        </button>
      </div>
      <div className="w-1/2 h-full absolute right-0 top-0 bottom-0 overflow-hidden">
         <img src={image} alt={subtitle} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 rounded-l-3xl" />
      </div>
    </div>
  );
};

// --- Sidebar Banner (Vertical) ---
export const SidebarBanner: React.FC<{ 
  title: string; 
  subtitle: string; 
  discount?: string; 
  image: string; 
  position: 'left' | 'right' 
}> = ({ title, subtitle, discount, image, position }) => {
  return (
    <div className="h-full philips-glass rounded-3xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border border-white/10 transition-all">
      <div className="z-10 relative">
        <span className="text-gold-500 font-bold text-[10px] uppercase mb-3 block tracking-widest">{title}</span>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 uppercase tracking-tight leading-tight">{subtitle}</h3>
        <button className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-white/20 dark:text-gray-200 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors">CONTACTAR</button>
      </div>
      <div className="mt-8 w-full">
        <img src={image} alt="Banner" className="w-full object-contain opacity-90 transition-transform duration-700 hover:scale-105" />
      </div>
    </div>
  );
};
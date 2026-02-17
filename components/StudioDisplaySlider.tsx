import React, { useState, useEffect, useRef } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';

const SLIDE_IMAGES = [
  '/media-clear/proyects/cobreapp.png',
  '/media-clear/proyects/img2.jpeg',
  '/media-clear/proyects/buffete.png',
  '/media-clear/proyects/hospital.png',
  '/media-clear/proyects/nexus.png',

];

export const StudioDisplaySlider: React.FC = () => {
  const [macIndex, setMacIndex] = useState(0);
  const [iphoneIndex, setIphoneIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Adjusted Dimensions
  const MAC_WIDTH = 1200; 
  const MAC_HEIGHT = 750;
  const IPHONE_WIDTH = 173;
  const IPHONE_HEIGHT = 375;
  
  // Total reference width calculation
  // Since iPhone will overlap significantly, we mainly care about Mac Width + a bit of spillover
  const OVERLAP_OFFSET = 80; // How much the iPhone sticks out to the right
  const BASE_WIDTH = MAC_WIDTH + OVERLAP_OFFSET + 50; // Add some padding
  const MAX_SCALE = 0.8; 

  const SLIDE_INTERVAL = 4000; // 4 seconds
  const autoSlideRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newScale = Math.min(containerWidth / BASE_WIDTH, MAX_SCALE);
        setScale(newScale);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(handleMacNext, SLIDE_INTERVAL);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  // Mac Controls
  const handleMacNext = () => {
    setMacIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
  };
  
  const handleMacPrev = () => {
    setMacIndex((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
    resetAutoSlide();
  };
  
  const handleMacDotClick = (index: number) => {
    setMacIndex(index);
    resetAutoSlide();
  };

  // iPhone Controls
  const handlePhoneClick = () => setIphoneIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);

  return (
    <div 
      ref={containerRef} 
      className="w-full flex justify-center items-center overflow-hidden"
      style={{ height: `${(MAC_HEIGHT + 450) * scale}px` }} // Increased height buffer significantly
    >
      <div 
        className="relative"
        style={{ 
          width: `${MAC_WIDTH}px`,
          height: `${MAC_HEIGHT}px`,
          transform: `scale(${scale})`, 
          transformOrigin: 'center center',
          transition: 'transform 0.5s ease-out',
          flexShrink: 0
        }}
      >
        {/* MacBook Pro - Main Container */}
        <div style={{ width: '100%', height: '100%' }} className="relative z-10">
          <DeviceFrameset device="MacBook Pro" color="gold">
              <div className="w-full h-full relative group bg-black">
                  {/* Images */}
                  {SLIDE_IMAGES.map((src, index) => (
                      <img
                          key={index}
                          src={src}
                          alt={`Mac Slide ${index + 1}`}
                          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
                              index === macIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                      />
                  ))}

                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none" />

                  {/* Controls - Arrows */}
                  <button 
                      onClick={handleMacPrev}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm focus:outline-none"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                  </button>
                  <button 
                      onClick={() => { handleMacNext(); resetAutoSlide(); }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm focus:outline-none"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                  </button>

                  {/* Controls - Dots */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-4 bg-black/40 px-5 py-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {SLIDE_IMAGES.map((_, idx) => (
                          <button
                              key={idx}
                              onClick={() => handleMacDotClick(idx)}
                              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                  idx === macIndex ? 'bg-white scale-150' : 'bg-white/50 hover:bg-white/80'
                              }`}
                          />
                      ))}
                  </div>
              </div>
          </DeviceFrameset>
        </div>

        {/* iPhone X - Absolutely Positioned relative to Mac Container */}
        <div 
          style={{ 
            width: `${IPHONE_WIDTH}px`, 
            height: `${IPHONE_HEIGHT}px`,
            position: 'absolute',
            bottom: '0',
            right: '190px', // Adjusted to 190px overlap
            zIndex: 20
          }} 
          className="cursor-pointer" 
          // onClick={handlePhoneClick} // Removed click handler for static image
        >
          <DeviceFrameset device="iPhone X" color="gold">
              <div className="w-full h-full relative bg-black group">
                  {/* Static Image */}
                  <img
                      src="/media-clear/proyects/nexus-movil.png"
                      alt="Nexus Mobile App"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none" />
              </div>
          </DeviceFrameset>
        </div>
      </div>
    </div>
  );
};

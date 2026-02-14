import React, { useEffect, useRef, useMemo, useState } from 'react';

interface HalftoneBackgroundProps {
  darkMode?: boolean;
  intensity?: 'subtle' | 'medium' | 'bold';
  accentColor?: string;
}

export const HalftoneBackground: React.FC<HalftoneBackgroundProps> = ({
  darkMode = false,
  intensity = 'medium',
  accentColor = '212, 175, 55' // Tailwind gold-500
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationFrameRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = intensity === 'subtle' ? 40 : intensity === 'bold' ? 120 : 80;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
        pulse: Math.random() * Math.PI
      });
    }
  }, [intensity]);

  // Handle Resize without resetting particles
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = darkMode ? '255, 255, 255' : '0, 0, 0';
      const opacityBase = darkMode ? 0.2 : 0.1;

      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const pulseSize = p.size * (1 + Math.sin(p.pulse) * 0.5);
        ctx.fillStyle = `rgba(${color}, ${opacityBase * (0.5 + Math.sin(p.pulse) * 0.5)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 150) * opacityBase * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [darkMode]); // Only re-bind loop if color mode changes

  const gridColor = darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)';
  
  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Background fill to avoid transparency issues */}
      <div className={`absolute inset-0 transition-colors duration-700 ${darkMode ? 'bg-black' : 'bg-white'}`} style={{ zIndex: -1 }} />

      {/* Layer 1: Isometric Grid */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-50">
        <defs>
          <pattern id="isoGrid" width="60" height="104" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d="M 60 0 L 0 34.6 L 0 104 L 60 138.6 L 120 104 L 120 34.6 Z" fill="none" stroke={gridColor} strokeWidth="1" />
            <path d="M 60 0 L 60 69.2 L 0 34.6 M 60 69.2 L 120 34.6" fill="none" stroke={gridColor} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isoGrid)" />
      </svg>

      {/* Layer 2: Neural Mesh (Canvas) */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Layer 3: Moving Tech Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"
            style={{
              width: '300px',
              height: '1px',
              top: `${10 + i * 15}%`,
              left: '-300px',
              transform: `rotate(${i % 2 === 0 ? 30 : -30}deg)`,
              filter: 'blur(2px)',
              animation: `moveBeam ${15 + i * 5}s linear infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Layer 4: Ambient Glow */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <style>{`
        @keyframes moveBeam {
          0% { transform: translate(-100px, -100px) rotate(30deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 300px), calc(50vh + 300px)) rotate(30deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export const useHalftoneBackground = (props?: any) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const checkDark = () => setDarkMode(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    checkDark();
    return () => observer.disconnect();
  }, []);
  return <HalftoneBackground {...props} darkMode={darkMode} />;
};

export default HalftoneBackground;

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function WaterParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.querySelectorAll('.particle');
    
    particles.forEach((particle) => {
      // Randomize starting properties
      gsap.set(particle, {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        scale: () => Math.random() * 0.5 + 0.1,
        opacity: () => Math.random() * 0.4 + 0.1,
      });

      // Float around endlessly
      gsap.to(particle, {
        y: "-=150",
        x: "+=" + (Math.random() * 100 - 50),
        rotation: "+=360",
        opacity: 0,
        duration: () => Math.random() * 5 + 5,
        repeat: -1,
        yoyo: false,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % window.innerWidth),
          y: gsap.utils.unitize(y => parseFloat(y) % window.innerHeight)
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-50">
      {/* Create 30 particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i} 
          className="particle absolute w-16 h-16 rounded-full bg-blue-300 blur-2xl opacity-0"
        />
      ))}
      {/* And some sharper bubbles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={`bubble-${i}`} 
          className="particle absolute w-2 h-2 rounded-full bg-blue-100 border border-blue-200/50 shadow-inner opacity-0"
        />
      ))}
    </div>
  );
}

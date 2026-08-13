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
 <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-60">
 {/* Create 30 ambient glow particles */}
 {Array.from({ length: 30 }).map((_, i) => (
 <div 
 key={`glow-${i}`} 
 className="particle absolute w-24 h-24 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#3333FF]/20 blur-3xl opacity-0"
 />
 ))}
 {/* And some premium glass bubbles */}
 {Array.from({ length: 25 }).map((_, i) => (
 <div 
 key={`bubble-${i}`} 
 className="particle absolute w-3 h-3 rounded-full border border-white/30 bg-gradient-to-br from-white/40 to-transparent shadow-[inset_0_0_8px_rgba(255,255,255,0.4)] backdrop-blur-md opacity-0"
 />
 ))}
 </div>
 );
}

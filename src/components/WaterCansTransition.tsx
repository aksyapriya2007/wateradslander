import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WaterCansTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const can1Ref = useRef<HTMLDivElement>(null);
  const can2Ref = useRef<HTMLDivElement>(null);
  const can3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Main scroll-based entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5, // Smoother momentum
      }
    });

    // Can 1 rolls in from the left
    tl.fromTo(can1Ref.current, 
      { x: -300, y: -50, rotation: -45, opacity: 0, scale: 0.8 },
      { x: 50, y: 150, rotation: 10, opacity: 1, scale: 1, ease: "power2.out" },
      0
    );

    // Can 2 rolls in from the right, slightly delayed
    tl.fromTo(can2Ref.current, 
      { x: 300, y: 50, rotation: 45, opacity: 0, scale: 0.8 },
      { x: -50, y: 220, rotation: -12, opacity: 1, scale: 1.1, ease: "power2.out" },
      0.1
    );

    // Can 3 comes from the bottom, floating up into the stream
    tl.fromTo(can3Ref.current,
      { x: 0, y: 300, rotation: 0, opacity: 0, scale: 0.8 },
      { x: 20, y: 80, rotation: 5, opacity: 1, scale: 1.15, ease: "back.out(1.5)" },
      0.2
    );

    // Add continuous soft floating animation independent of scroll
    gsap.to([can1Ref.current, can2Ref.current, can3Ref.current], {
      y: "+=15",
      rotation: "+=3",
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 0.3,
        from: "random"
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative z-20 w-full h-[60vh] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        
        {/* Can 1 */}
        <div ref={can1Ref} className="absolute left-[10%] md:left-[20%]">
          <WaterCan label="Brand A" color="bg-gradient-to-br from-blue-400 to-blue-600" />
        </div>

        {/* Can 2 */}
        <div ref={can2Ref} className="absolute right-[10%] md:right-[20%]">
          <WaterCan label="Local Ad" color="bg-gradient-to-br from-rose-300 to-rose-500" />
        </div>

        {/* Can 3 */}
        <div ref={can3Ref} className="absolute bottom-[20%]">
          <WaterCan label="Promo!" color="bg-gradient-to-br from-amber-300 to-amber-500" />
        </div>

      </div>
    </section>
  );
}

// A highly stylized cute/smooth representation of a water can with a label
function WaterCan({ label, color }: { label: string, color: string }) {
  return (
    <div className="relative w-[110px] h-[170px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105">
      {/* Cap */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-5 bg-slate-100 rounded-full shadow-[inset_0_-3px_5px_rgba(0,0,0,0.1)] z-10" />
      
      {/* Body */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[40px] shadow-[inset_-8px_0_20px_rgba(0,0,0,0.05),inset_8px_0_20px_rgba(255,255,255,1)] border border-white/60 overflow-hidden flex flex-col justify-center items-center">
        
        {/* Inner Water Level (Visual only) */}
        <div className="absolute bottom-0 w-full h-[65%] bg-blue-50/50 rounded-b-[40px]" />
        
        {/* Physical Sticker Label - Fully smooth and rounded inside */}
        <div className={`relative w-[90%] h-[75px] ${color} rounded-[20px] shadow-sm flex items-center justify-center transform transition-transform`}>
          <span className="text-white font-extrabold text-[11px] uppercase tracking-widest drop-shadow-sm text-center px-2 leading-tight">
            {label}
          </span>
          {/* Subtle glossy overlay on the sticker */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 rounded-[20px] pointer-events-none" />
        </div>
        
      </div>
    </div>
  );
}

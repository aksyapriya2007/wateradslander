import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DeliveryVehicleTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const wheelsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !truckRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });

    // Truck drives across the screen and slightly down
    tl.fromTo(truckRef.current,
      { x: -500, y: -50, rotation: -5, opacity: 0, scale: 0.8 },
      { x: window.innerWidth + 200, y: 200, rotation: 2, opacity: 1, scale: 1.1, ease: "sine.inOut" }
    );

    // Soft suspension bounce for the body
    gsap.to(truckRef.current.querySelector('.truck-body'), {
      y: 6,
      repeat: -1,
      yoyo: true,
      duration: 0.4,
      ease: "sine.inOut"
    });

    // Slight wheel rotation while driving
    if (wheelsRef.current) {
      gsap.to(wheelsRef.current.children, {
        rotation: 360,
        repeat: -1,
        duration: 2,
        ease: "linear"
      });
    }

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative z-30 w-full h-[50vh] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <div ref={truckRef} className="absolute left-0 top-1/4 flex flex-col items-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
        
        {/* Cute Rounded Truck Body */}
        <div className="truck-body bg-white rounded-[40px] rounded-br-[20px] shadow-[inset_-8px_0_20px_rgba(0,0,0,0.03),inset_8px_0_20px_rgba(255,255,255,1)] border border-slate-100 p-8 flex items-center gap-8 relative z-20">
          
          <div className="flex flex-col">
            <span className="font-black text-4xl tracking-tighter uppercase text-slate-800 drop-shadow-sm">WaterAds</span>
            <span className="text-[10px] font-extrabold text-blue-500 tracking-[0.2em] uppercase mt-1">Delivery Logistics</span>
          </div>

          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-[20px] shadow-inner flex items-center justify-center border border-blue-200/50">
            <Truck className="w-8 h-8 text-blue-500 drop-shadow-sm" />
          </div>
          
        </div>
        
        {/* Cute Chonky Wheels */}
        <div ref={wheelsRef} className="w-full flex justify-between px-10 -mt-4 relative z-30">
          <div className="w-12 h-12 bg-slate-700 rounded-full border-[6px] border-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
             <div className="w-3 h-3 bg-slate-300 rounded-full" />
          </div>
          <div className="w-12 h-12 bg-slate-700 rounded-full border-[6px] border-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
             <div className="w-3 h-3 bg-slate-300 rounded-full" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

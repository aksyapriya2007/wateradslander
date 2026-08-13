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

 // Use will-change to hint the browser for hardware acceleration
 gsap.set([can1Ref.current, can2Ref.current, can3Ref.current], {
 willChange: "transform, opacity"
 });

 // Main scroll-based entrance animation
 const tl = gsap.timeline({
 scrollTrigger: {
 trigger: containerRef.current,
 start: "top 80%",
 end: "bottom 20%",
 scrub: 1.2, // Faster scrub for smoother feel
 }
 });

 // Can 1 rolls in from the left
 tl.fromTo(can1Ref.current, 
 { x: -200, y: -50, rotation: -30, opacity: 0, scale: 0.8 },
 { x: 0, y: 100, rotation: -10, opacity: 1, scale: 1, ease: "power1.out" },
 0
 );

 // Can 2 rolls in from the right
 tl.fromTo(can2Ref.current, 
 { x: 200, y: 0, rotation: 30, opacity: 0, scale: 0.8 },
 { x: 0, y: 150, rotation: 15, opacity: 1, scale: 1.05, ease: "power1.out" },
 0.1
 );

 // Can 3 comes from the bottom center
 tl.fromTo(can3Ref.current,
 { x: 0, y: 200, rotation: 0, opacity: 0, scale: 0.8 },
 { x: 0, y: 40, rotation: -5, opacity: 1, scale: 1.1, ease: "back.out(1.2)" },
 0.2
 );

 // Add continuous soft floating animation independent of scroll
 // Only animating transforms ensures 60fps
 gsap.to([can1Ref.current, can2Ref.current, can3Ref.current], {
 y: "+=12",
 rotation: "+=2",
 duration: 3,
 yoyo: true,
 repeat: -1,
 ease: "sine.inOut",
 stagger: {
 each: 0.4,
 from: "random"
 }
 });

 }, { scope: containerRef });

 return (
 <section 
 ref={containerRef}
 className="relative z-20 w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden pointer-events-none"
 >
 {/* Container is flex and relative to properly space the absolute cans responsively */}
 <div className="relative w-full max-w-5xl h-full flex items-center justify-between px-4 md:px-20">
 
 {/* Can 1 - Left */}
 <div ref={can1Ref} className="absolute left-[5%] md:left-[15%] top-[10%]">
 <WaterCan label="Brand A" color="bg-[#3333FF]" />
 </div>

 {/* Can 3 - Center */}
 <div ref={can3Ref} className="absolute left-1/2 -translate-x-1/2 bottom-[20%]">
 <WaterCan label="Promo!" color="bg-amber-400" isJug />
 </div>

 {/* Can 2 - Right */}
 <div ref={can2Ref} className="absolute right-[5%] md:right-[15%] top-[15%]">
 <WaterCan label="Local Ad" color="bg-rose-500" />
 </div>

 </div>
 </section>
 );
}

// A 60fps optimized, flat-vector style cute water bottle/jug
function WaterCan({ label, color, isJug = false }: { label: string, color: string, isJug?: boolean }) {
 // Dimensions for standard bottle vs big jug
 const dims = isJug 
 ? {
 capW: "w-[24px] md:w-[32px]", capH: "h-[12px] md:h-[16px]",
 ringW: "w-[30px] md:w-[40px]",
 neckW: "w-[24px] md:w-[32px]",
 bodyW: "w-[90px] md:w-[130px]", bodyH: "h-[100px] md:h-[140px]",
 radius: "rounded-t-[33px] md:rounded-t-[49px]"
 }
 : {
 capW: "w-[20px] md:w-[26px]", capH: "h-[12px] md:h-[16px]",
 ringW: "w-[26px] md:w-[34px]",
 neckW: "w-[20px] md:w-[26px]",
 bodyW: "w-[70px] md:w-[100px]", bodyH: "h-[110px] md:h-[160px]",
 radius: "rounded-t-[25px] md:rounded-t-[37px]"
 };

 return (
 <div className="relative flex flex-col items-center hover:scale-105 transition-transform duration-300 pointer-events-auto">
 
 {/* Cap */}
 <div className={`${dims.capW} ${dims.capH} ${color} rounded-t-[4px] z-20 relative`} />
 
 {/* Neck Ring */}
 <div className={`${dims.ringW} h-[4px] md:h-[6px] bg-sky-300 z-10 relative -mt-[1px] rounded-sm`} />
 
 {/* Neck */}
 <div className={`${dims.neckW} h-[8px] md:h-[12px] bg-sky-200 z-10 relative -mt-[1px]`} />
 
 {/* Body */}
 <div className={`${dims.bodyW} ${dims.bodyH} bg-sky-200 ${dims.radius} rounded-b-[10px] md:rounded-b-[14px] relative overflow-hidden -mt-[1px] shadow-2xl`}>
 
 {/* Flat Vector Highlight Left */}
 <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-wa-bg/50 z-10 pointer-events-none" />
 
 {/* Flat Vector Shadow Right */}
 <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-[#3333FF]/30 z-10 pointer-events-none" />
 
 {/* Label */}
 <div className={`absolute top-1/2 -translate-y-1/2 w-full h-[40px] md:h-[55px] ${color} z-20 flex items-center justify-center`}>
 
 {/* Label Highlights/Shadows to match bottle */}
 <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-wa-bg/30 pointer-events-none" />
 <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-black/10 pointer-events-none" />
 
 <span className="text-white font-black text-[9px] md:text-[12px] uppercase tracking-widest z-30 drop-shadow-sm px-1 text-center leading-tight">
 {label}
 </span>
 </div>

 {/* Bottom Ribs (cute detailing) */}
 <div className="absolute bottom-2 w-full h-[3px] md:h-[4px] bg-sky-300/60 z-10 pointer-events-none" />
 <div className="absolute bottom-5 md:bottom-6 w-full h-[3px] md:h-[4px] bg-sky-300/60 z-10 pointer-events-none" />
 {isJug && <div className="absolute bottom-8 md:bottom-10 w-full h-[3px] md:h-[4px] bg-sky-300/60 z-10 pointer-events-none" />}
 </div>
 
 </div>
 );
}

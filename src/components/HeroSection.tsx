import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Smooth cursor follow for the interactive water blob
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate position relative to the section
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Use animate for smoother performance than style.transform
        cursorRef.current.animate(
          { transform: `translate(${x}px, ${y}px)` },
          { duration: 2500, fill: 'forwards', easing: 'ease-out' }
        );
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative z-10 pt-32 pb-48 w-full bg-[#f8fafc] flex flex-col items-center justify-center min-h-[95vh] overflow-hidden"
    >
      <style>{`
        /* Animated Liquid Text */
        .liquid-text {
          background-image: url("data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200 C 100 100, 300 300, 400 200 C 500 100, 700 300, 800 200 L 800 400 L 0 400 Z' fill='%230ea5e9' opacity='0.8'/%3E%3Cpath d='M0 220 C 150 320, 250 120, 400 220 C 550 320, 650 120, 800 220 L 800 400 L 0 400 Z' fill='%230284c7' opacity='0.6'/%3E%3C/svg%3E");
          background-size: 200% 120%;
          background-position: 0% 100%;
          background-repeat: repeat-x;
          -webkit-background-clip: text;
          color: transparent;
          animation: wave-text 8s linear infinite, fill-text 4s ease-in-out infinite alternate;
        }
        
        @keyframes wave-text {
          0% { background-position: 0% 100%; }
          100% { background-position: -200% 100%; }
        }
        
        @keyframes fill-text {
          0% { background-size: 200% 80%; }
          100% { background-size: 200% 120%; }
        }

        /* Floating Blobs */
        @keyframes floatBlob {
          0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
          33% { transform: translate(30px, -40px) scale(1.05) rotate(5deg); }
          66% { transform: translate(-30px, 30px) scale(0.95) rotate(-5deg); }
          100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
        }
        .animate-blob {
          animation: floatBlob 15s ease-in-out infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* Subtle Glowing Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Mouse Follower Blob - Toned down significantly */}
         <div 
           ref={cursorRef} 
           className="absolute top-0 left-0 w-[300px] h-[300px] bg-sky-300/40 rounded-full -ml-[150px] -mt-[150px] mix-blend-multiply blur-[60px]"
         />
         
         {/* Stationary / Floating Background Blobs - Smaller, softer, more spread out */}
         <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-cyan-200/50 rounded-full animate-blob mix-blend-multiply blur-[80px]" />
         <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-300/40 rounded-full animate-blob animation-delay-2000 mix-blend-multiply blur-[80px]" />
         <div className="absolute top-[30%] left-[60%] w-[350px] h-[350px] bg-sky-200/50 rounded-full animate-blob animation-delay-4000 mix-blend-multiply blur-[80px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-6 text-center">
        
        {/* Dynamic Liquid Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative inline-block"
        >
          {/* Base Text (Solid color fallback) */}
          <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter m-0 p-0 leading-none text-slate-800 drop-shadow-xl">
            WATERADS
          </h1>
          {/* Animated Overlay Text */}
          <h1 className="absolute top-0 left-0 text-[15vw] md:text-[12vw] font-black tracking-tighter m-0 p-0 leading-none liquid-text w-full h-full">
            WATERADS
          </h1>
        </motion.div>

        {/* Minimalist Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-700 mt-8 font-medium max-w-2xl bg-white/60 backdrop-blur-md px-8 py-4 rounded-3xl shadow-sm border border-slate-100"
        >
          The fluid offline network. We connect brands with distributors to build smart, trackable campaigns that scale.
        </motion.p>

        {/* Playful Floating Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12"
        >
          <a
            href="#network"
            className="group relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10"
          >
            {/* Button liquid hover effect */}
            <div className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Explore Network
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          <a
            href="#planner"
            className="px-8 py-4 rounded-full text-lg font-bold text-slate-800 bg-white/80 backdrop-blur-lg border border-slate-200 hover:bg-white transition-all shadow-lg shadow-sky-500/5 hover:scale-105 active:scale-95"
          >
            Plan a Campaign
          </a>
        </motion.div>
      </div>

    </section>
  );
}

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#F0F7FA] via-[#E6F2F5] to-[#DDF0F7] overflow-hidden flex flex-col justify-center items-center">
      
      {/* Abstract Layered Wave Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[150vw] md:w-[120vw] max-w-[2500px] aspect-[2/1] opacity-90 mix-blend-multiply"
        >
          <svg viewBox="0 0 1000 600" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a5f3fc" />
              </linearGradient>
            </defs>
            
            {/* Generate multiple layered overlapping waves for 3D effect */}
            {[...Array(12)].map((_, i) => {
              // The trick to make it look like a tunnel/layered wave is to scale and shift
              const scale = 1 - (i * 0.05);
              const shiftX = i * 20;
              const shiftY = i * 15;
              const opacity = 0.9 - (i * 0.06);
              
              return (
                <path 
                  key={i}
                  d="M100,600 C 100,100 500,50 700,300 C 850,500 950,300 950,200 L 1050,600 Z" 
                  fill="url(#hero-grad)" 
                  opacity={opacity}
                  style={{
                    transform: `translate(${shiftX}px, ${shiftY}px) scale(${scale})`,
                    transformOrigin: 'center'
                  }}
                />
              );
            })}
          </svg>
        </motion.div>
      </div>

      {/* Main Typography */}
      <div className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 flex flex-col items-start justify-center h-full pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-6xl lg:text-[5.5rem] font-light tracking-tight text-[#111] uppercase leading-[1.05] max-w-5xl"
        >
          FLUID OFFLINE NETWORKS<br />FOR A LIMITLESS FUTURE
        </motion.h1>
      </div>

      {/* Bottom Corner Elements */}
      <div className="absolute bottom-8 inset-x-6 md:bottom-12 md:inset-x-12 flex justify-between items-end z-20 pointer-events-none">
        
        {/* Scroll to explore */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[10px] md:text-xs font-mono text-slate-500 lowercase tracking-widest"
        >
          scroll to explore
        </motion.div>

        {/* Description paragraph */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-[240px] md:max-w-sm text-[10px] md:text-xs font-mono text-slate-700 leading-relaxed text-right md:text-left"
        >
          Our platform powers the future of offline automation, enabling brands to build, integrate, and collaborate with intelligent distribution networks that transform industries.
        </motion.div>

      </div>

    </section>
  );
}

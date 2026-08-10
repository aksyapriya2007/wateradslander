import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Building2, Printer, Factory, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EcosystemSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const liquidFillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !liquidFillRef.current) return;

    // As user scrolls through this section, the card fills up with "water" using height for a rising tide effect
    gsap.fromTo(liquidFillRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="ecosystem" ref={containerRef} className="relative z-10 bg-[#FAFAFA] pt-32 md:pt-48 pb-12 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Marquee Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] flex z-0 pointer-events-none opacity-[0.03]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <h2 className="text-[15vw] font-serif tracking-tighter leading-none text-black">
            &nbsp;E C O S Y S T E M &nbsp;&middot;&nbsp; N E T W O R K &nbsp;&middot;&nbsp; E C O S Y S T E M &nbsp;&middot;&nbsp; N E T W O R K
          </h2>
        </motion.div>
      </div>

      {/* Background Mesh Gradient Orbs for Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] z-10 pointer-events-none opacity-50">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-10 left-[40%] w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-[80px]" 
        />
      </div>

      {/* Floating Ecosystem Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-5xl px-6 md:px-12 flex flex-col"
      >
        {/* The Card Itself */}
        <motion.div 
          ref={cardRef}
          animate={{ y: [-10, 10] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full bg-white/95 rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/80 ring-1 ring-black/[0.03] p-10 md:p-20 relative overflow-hidden z-20"
        >
          {/* LIQUID FILL LAYER (GSAP controlled) */}
          <div 
            ref={liquidFillRef}
            className="absolute inset-x-0 bottom-0 z-0 pointer-events-none flex flex-col justify-start overflow-hidden rounded-[2rem] md:rounded-[3rem]"
          >
            {/* The liquid body */}
            <div className="absolute inset-x-0 bottom-0 top-[20px] bg-gradient-to-t from-sky-200/60 to-sky-100/20 mix-blend-multiply" />
            
            {/* Animated Wave 1 */}
            <div 
              className="absolute left-0 w-[200%] h-[40px] md:h-[60px] opacity-70 mix-blend-multiply top-0" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,108.9,106.33,116.1,160.85,115.3,215.38,114.5,269.83,106.7,321.39,56.44Z\' fill=\'%23bae6fd\'/%3E%3C/svg%3E")',
                backgroundSize: '50% 100%',
                animation: 'wave-move 12s linear infinite'
              }}
            />
            {/* Animated Wave 2 */}
            <div 
              className="absolute left-0 w-[200%] h-[50px] md:h-[70px] opacity-50 mix-blend-multiply top-[5px]" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z\' fill=\'%237dd3fc\'/%3E%3C/svg%3E")',
                backgroundSize: '50% 100%',
                animation: 'wave-move 8s linear infinite reverse'
              }}
            />
          </div>

          {/* Subtle Noise Texture overlay */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          
          {/* Inner top/left highlight for 3D glass effect */}
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_1px_0_1px_rgba(255,255,255,0.8)] pointer-events-none z-0" />

          {/* Gradient Overlay for lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-white/10 pointer-events-none z-0" />

          {/* Header inside the card */}
          <div className="text-center mb-16 md:mb-24 relative z-20">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              The Ecosystem
            </h3>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight drop-shadow-sm">
              A perfectly connected<br className="hidden md:block" /> offline network.
            </h2>
          </div>

          {/* The Nodes Grid */}
          <div className="relative w-full mx-auto mt-12 md:mt-20 mb-8 md:mb-12">
            
            {/* Animated Progress Line */}
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-[40px] left-[10%] h-[1px] bg-slate-200 hidden md:block origin-left z-0 relative" 
            >
              {/* Traveling Data Packet */}
              <motion.div
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]"
              />
              <motion.div
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(96,165,250,0.6)]"
              />
            </motion.div>
            
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1px] bg-slate-200 md:hidden origin-top z-0 relative" 
            >
              <motion.div
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]"
              />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0 relative z-10 w-full py-8 md:py-0">
              {[
                { icon: Building2, title: "Brands", desc: "Initiate targeted local campaigns." },
                { icon: Printer, title: "Printing Press", desc: "Produces serialized label rolls." },
                { icon: Factory, title: "Water Plant", desc: "Bottles and applies labels." },
                { icon: Truck, title: "Distributors", desc: "Deliver to target consumer zones." },
              ].map((node, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                  className="flex flex-col items-center text-center relative group cursor-pointer"
                >
                  <div className="w-20 h-20 relative z-10 mb-6">
                    {/* Pulsing Ring Behind */}
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.4, 0.1] }}
                      transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-sky-300/30 -z-10 group-hover:bg-cyan-400/40 group-hover:scale-[1.6] transition-all duration-500"
                    />
                    {/* Main Icon Circle */}
                    <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:scale-[1.15] group-hover:shadow-[0_8px_30px_-4px_rgba(34,211,238,0.3)] group-hover:text-cyan-500 group-hover:border-cyan-200">
                      <node.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-[#111827] mb-2 group-hover:text-cyan-600 transition-colors">{node.title}</h4>
                    <p className="text-[13px] font-medium text-[#64748b] px-4 max-w-[200px] mx-auto leading-relaxed">{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reflection */}
        <div 
          className="w-full h-[250px] md:h-[350px] mt-2 relative pointer-events-none opacity-30 select-none overflow-hidden z-0"
          style={{
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)"
          }}
        >
          <motion.div 
            animate={{ y: [10, -10] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0"
            style={{ transform: "scaleY(-1)" }}
          >
             <div className="w-full bg-white/40 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 blur-[2px] border border-white/50">
               <div className="text-center mb-16 md:mb-24 relative z-20 opacity-80">
                 <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">The Ecosystem</h3>
                 <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight">
                   Seamless distribution<br className="hidden md:block" /> network.
                 </h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0 mt-12 md:mt-20 mb-8 md:mb-12 relative opacity-50">
                  <div className="absolute top-[40px] left-[10%] w-[80%] h-[1px] bg-slate-300 hidden md:block" />
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-white/80 border border-white/50 mb-6" />
                      <div className="w-24 h-5 bg-slate-300/50 rounded mb-2" />
                      <div className="w-32 h-3 bg-slate-200/50 rounded" />
                    </div>
                  ))}
               </div>
             </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

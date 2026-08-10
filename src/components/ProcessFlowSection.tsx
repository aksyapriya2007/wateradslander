import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Asterisk, ScanLine, Box, Cpu, Navigation as NavIcon } from 'lucide-react';

export default function ProcessFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#F0F2F5] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#111] uppercase leading-none">
            THE FLOW
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: CREATE (Lime Green) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#D2F34C] rounded-[40px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[450px]"
            >
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Large animated asterisk */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1A1A1A]/90"
                >
                  <Asterisk className="w-64 h-64 md:w-80 md:h-80" strokeWidth={1.5} />
                </motion.div>
              </div>
              
              <div className="relative z-10 mt-auto pt-40">
                <h3 className="text-5xl font-medium tracking-tight text-[#1A1A1A] mb-4">
                  CREATE
                </h3>
                <p className="text-[#1A1A1A]/70 text-lg md:text-xl font-medium max-w-sm mx-auto leading-snug">
                  We define your target network, duration, and can quantity based on brand goals.
                </p>
              </div>
            </motion.div>

            {/* Card 2: PRINT (White, pill buttons and heart rate) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between items-center min-h-[300px]"
            >
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6 max-w-[200px] leading-relaxed">
                  SERIALIZATION &<br />PRECISION PRINTING
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#D2F34C] flex items-center justify-center">
                    <Box className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                    <Asterisk className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="px-5 py-3 rounded-full bg-slate-50 text-slate-400 font-medium text-sm flex items-center justify-center border border-slate-100">
                    Print
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <ScanLine className="w-5 h-5" />
                  </div>
                  <div className="px-5 py-3 rounded-full bg-[#D2F34C] text-[#1A1A1A] font-bold text-sm flex items-center justify-center">
                    SpO2
                  </div>
                  <div className="px-5 py-3 rounded-full bg-slate-50 text-slate-400 font-medium text-sm flex items-center justify-center border border-slate-100">
                    Labels
                  </div>
                </div>
              </div>

              {/* Heart rate visual */}
              <div className="relative w-48 h-48 rounded-full border border-slate-100 flex items-center justify-center shrink-0">
                <div className="absolute inset-2 rounded-full border border-slate-50 border-dashed" />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 relative"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                    <path d="M50 88 C 50 88, 15 65, 15 35 C 15 20, 25 10, 40 10 C 46 10, 50 15, 50 15 C 50 15, 54 10, 60 10 C 75 10, 85 20, 85 35 C 85 65, 50 88, 50 88 Z" fill="#D2F34C" />
                    <path d="M15 35 C 15 45, 50 55, 85 35 L 85 10 L 15 10 Z" fill="rgba(255,255,255,0.4)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pt-2">
                    <span className="text-2xl font-medium tracking-tighter text-[#1A1A1A]">89<span className="text-xs">ppm</span></span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 5: BRANDING (Black) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#111] rounded-[40px] p-8 md:p-12 relative overflow-hidden min-h-[225px] flex items-center"
            >
              <div className="flex flex-col gap-3 z-10">
                <Asterisk className="w-5 h-5 text-white/50" />
                <Asterisk className="w-5 h-5 text-white" />
                <Asterisk className="w-5 h-5 text-white/50" />
              </div>
              
              {/* Abstract Glowing Graphic */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-transparent to-white/10 rounded-full blur-2xl pointer-events-none translate-x-1/4" />
              <div className="absolute right-12 top-1/2 -translate-y-1/2">
                <Cpu className="w-24 h-24 text-white/20" strokeWidth={1} />
              </div>
            </motion.div>
            
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Card 3: DISTRIBUTE (Black, carousel of cards) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#111] rounded-[40px] p-8 relative overflow-hidden min-h-[350px] flex items-center justify-center"
            >
              {/* Fake carousel of UI cards */}
              <div className="relative w-full h-[200px] flex items-center justify-center">
                {/* Back card */}
                <motion.div 
                  initial={{ x: 80, scale: 0.9, opacity: 0.5 }}
                  whileInView={{ x: 60, scale: 0.9, opacity: 0.5 }}
                  className="absolute w-[280px] h-[160px] bg-white/20 backdrop-blur-sm rounded-[24px]"
                />
                
                {/* Front card */}
                <motion.div 
                  className="absolute w-[320px] h-[180px] bg-white rounded-[24px] shadow-2xl flex items-center p-6 z-10"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-[16px] mr-6 flex items-center justify-center overflow-hidden">
                    <NavIcon className="w-10 h-10 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 font-medium mb-1">Routing</div>
                    <div className="text-3xl font-medium tracking-tighter text-[#111]">139<span className="text-sm font-normal text-slate-400">/loc</span></div>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-medium text-slate-500">Local</span>
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-medium text-slate-500">Zoned</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 4: MEASURE (Grey, tall, glass card overlay) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#E5E7EB] rounded-[40px] p-4 relative overflow-hidden flex-1 min-h-[500px] flex flex-col justify-end"
            >
              {/* Abstract background graphic instead of plant */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-white/40 rounded-full mix-blend-overlay blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-slate-300/40 rounded-full mix-blend-overlay blur-2xl" />
                
                {/* A subtle geometric shape to replace the plant visual */}
                <motion.div 
                  animate={{ rotate: 5 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                  className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border-[2px] border-white/30 rounded-[100px] rotate-12"
                />
              </div>

              <div className="absolute top-8 left-8 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Dashboard</span>
              </div>

              {/* Glassmorphism Bottom Card */}
              <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[32px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] z-10">
                <h3 className="text-3xl font-medium tracking-tight text-[#1A1A1A] mb-4">
                  MEASURE
                </h3>
                <p className="text-slate-500 text-base leading-relaxed pr-8">
                  Unique QR scans capture real-time engagement and provide robust campaign tracking, giving you a highly competitive solution to all your security needs.
                </p>
                <div className="flex gap-4 mt-8 opacity-40">
                  <div className="w-1 h-4 bg-slate-400 -rotate-12" />
                  <div className="w-1 h-4 bg-slate-400 -rotate-12" />
                  <div className="w-1 h-4 bg-slate-400 rotate-12" />
                  <div className="w-1 h-4 bg-slate-400 rotate-12" />
                  <div className="w-4 h-1 bg-slate-400 rounded-full" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

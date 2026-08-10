import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Navigation, Target, Activity } from 'lucide-react';

const steps = [
  {
    title: "CREATE",
    desc: "We define your target network, duration, and can quantity based on brand goals.",
    icon: Target
  },
  {
    title: "PRINT",
    desc: "We serialize the advertising labels and produce them with extreme precision.",
    icon: CheckCircle2
  },
  {
    title: "DISTRIBUTE",
    desc: "Plants apply the labels and dispatch cans to strictly targeted geographic zones.",
    icon: Navigation
  },
  {
    title: "MEASURE",
    desc: "Unique QR scans capture real-time engagement and provide robust campaign tracking.",
    icon: Activity
  }
];

export default function ProcessFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#F3F4F6] py-32 px-6 overflow-hidden">
      
      {/* Background Liquid Waves (Foreground) */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] z-0 pointer-events-none overflow-hidden flex items-end opacity-40">
        <div className="relative w-full h-full">
          {/* Back Wave (slower, cyan) */}
          <div className="absolute bottom-0 left-0 w-[200%] h-full flex items-end animate-[wave-move_12s_linear_infinite]">
            <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-full fill-cyan-400 opacity-40">
              <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"></path>
              <path d="M1200,40 C1350,80 1550,0 1800,40 C2050,80 2250,0 2400,40 L2400,120 L1200,120 Z"></path>
            </svg>
          </div>

          {/* Front Wave (faster, sky blue) */}
          <div className="absolute bottom-0 left-0 w-[200%] h-[80%] flex items-end animate-[wave-move_8s_linear_infinite_reverse]">
            <svg viewBox="0 0 2400 120" preserveAspectRatio="none" className="w-full h-full fill-sky-500 opacity-60">
              <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"></path>
              <path d="M1200,60 C1400,120 1600,0 1800,60 C2000,120 2200,0 2400,60 L2400,120 L1200,120 Z"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-sky-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-2 block">
            PROCESS: 4 STEPS
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111] uppercase leading-none">
            THE FLOW
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          
          {/* Card 1: CREATE (Wide, Col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-3 bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group min-h-[400px]"
          >
            {/* Animated Abstract Graphic */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[150%] h-[150%] absolute -top-[25%] -right-[25%] bg-gradient-to-bl from-sky-400 to-transparent rounded-full blur-3xl"
              />
            </div>
            
            <div className="z-10">
              <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-12">
                <Target className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] uppercase mb-4">
                {steps[0].title}
              </h3>
              <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed max-w-sm">
                {steps[0].desc}
              </p>
            </div>
            <div className="absolute top-10 right-10 text-[80px] md:text-[120px] font-black text-slate-50 leading-none pointer-events-none group-hover:text-sky-50 transition-colors duration-500">
              01
            </div>
          </motion.div>

          {/* Card 2: PRINT (Tall, Col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-2 bg-[#F8FAFC] rounded-[40px] md:rounded-[100px] p-10 md:p-14 shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[400px]"
          >
             <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-10 z-10"
              >
                <CheckCircle2 className="w-10 h-10 text-[#0F172A]" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-[#111] uppercase mb-4 z-10">
                {steps[1].title}
              </h3>
              <p className="text-base md:text-lg font-medium text-slate-500 leading-relaxed z-10 max-w-[250px]">
                {steps[1].desc}
              </p>
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-slate-100 leading-none pointer-events-none opacity-50 group-hover:-translate-y-4 transition-transform duration-500">
                02
              </div>
          </motion.div>

          {/* Card 3: DISTRIBUTE (Tall, Col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-2 bg-[#1A3636] rounded-[40px] md:rounded-[100px] p-10 md:p-14 shadow-lg flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[400px]"
          >
             <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-10 z-10 border border-white/20"
              >
                <Navigation className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase mb-4 z-10">
                {steps[2].title}
              </h3>
              <p className="text-base md:text-lg font-medium text-white/70 leading-relaxed z-10 max-w-[250px]">
                {steps[2].desc}
              </p>
              
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/30 transition-colors duration-500" />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/5 leading-none pointer-events-none">
                03
              </div>
          </motion.div>

          {/* Card 4: MEASURE (Wide, Col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-3 bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group min-h-[400px]"
          >
            {/* Animated abstract bar chart */}
            <div className="absolute right-10 bottom-10 flex items-end gap-3 opacity-20 pointer-events-none h-48">
              {[40, 70, 45, 90, 60, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                  className="w-8 bg-[#111] rounded-t-lg"
                />
              ))}
            </div>

            <div className="z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-12">
                <Activity className="w-8 h-8 text-[#111]" />
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] uppercase mb-4">
                  {steps[3].title}
                </h3>
                <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed max-w-sm">
                  {steps[3].desc}
                </p>
              </div>
            </div>
            <div className="absolute top-10 right-10 text-[80px] md:text-[120px] font-black text-slate-50 leading-none pointer-events-none group-hover:text-slate-100 transition-colors duration-500">
              04
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

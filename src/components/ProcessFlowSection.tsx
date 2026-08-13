import { useState, useRef } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Asterisk, ScanLine, Box, Navigation as NavIcon, QrCode, Droplet, BarChart } from 'lucide-react';

export default function ProcessFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState(['create', 'print', 'distribute', 'measure']);

  const renderCard = (id: string) => {
    switch (id) {
      case 'create':
        return (
          <div className="bg-wa-card rounded-[40px] p-12 flex flex-col items-center justify-between text-center relative overflow-hidden h-full">
            <div className="flex-1 w-full flex items-center justify-center pointer-events-none pb-8">
              <svg className="w-48 h-48 text-[#3333FF]" viewBox="0 0 100 100">
                <motion.line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="100" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
                <motion.line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="100" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }} />
                <motion.line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="100" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.4 }} />
                <motion.line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="100" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }} />
                <motion.circle cx="50" cy="50" r="6" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="20" cy="20" r="4" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                <motion.circle cx="80" cy="20" r="4" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <motion.circle cx="20" cy="80" r="4" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
                <motion.circle cx="80" cy="80" r="4" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black tracking-tighter text-wa-text mb-4">CREATE</h3>
              <p className="text-wa-text-muted text-lg md:text-xl font-medium max-w-sm mx-auto leading-snug">
                We define your target network, duration, and can quantity based on brand goals.
              </p>
            </div>
          </div>
        );
      case 'print':
        return (
          <div className="bg-wa-bg shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[40px] p-8 md:p-12 flex flex-col gap-8 justify-center items-center h-full">
            <div className="w-full text-center md:text-left">
              <p className="text-[10px] text-[#3333FF] font-bold uppercase tracking-widest mb-6 leading-relaxed">
                SERIALIZATION & PRECISION PRINTING
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-wa-accent-light flex items-center justify-center"><Box className="w-5 h-5 text-[#3333FF]" /></div>
                <div className="w-12 h-12 rounded-full bg-wa-card flex items-center justify-center"><Asterisk className="w-5 h-5 text-wa-text-muted opacity-80" /></div>
                <div className="px-5 py-3 rounded-full bg-wa-card text-wa-text-muted opacity-90 font-medium text-sm flex items-center justify-center">Print</div>
                <div className="w-12 h-12 rounded-full bg-wa-card flex items-center justify-center text-wa-text-muted opacity-80"><ScanLine className="w-5 h-5" /></div>
                <div className="px-5 py-3 rounded-full bg-[#3333FF] text-white font-bold text-sm flex items-center justify-center shadow-md shadow-[#3333FF]/20">QR Code</div>
                <div className="px-5 py-3 rounded-full bg-wa-card text-wa-text-muted opacity-90 font-medium text-sm flex items-center justify-center">Labels</div>
              </div>
            </div>
            <div className="relative w-48 h-48 rounded-[36px] flex items-center justify-center shrink-0 bg-wa-card shadow-inner overflow-hidden mt-auto md:mt-0">
              <div className="absolute inset-2 rounded-[28px] border-dashed" />
              <motion.div animate={{ y: ["-100%", "300%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute inset-x-8 h-[2px] bg-[#3333FF] z-20 shadow-[0_0_15px_3px_rgba(51,51,255,0.6)]" />
              <motion.div animate={{ scale: [0.95, 1.02, 0.95] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-28 h-28 relative bg-wa-bg rounded-[24px] shadow-xl flex items-center justify-center">
                <QrCode className="w-12 h-12 text-[#3333FF] opacity-90" strokeWidth={1.5} />
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#3333FF]/50 rounded-tl-sm" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#3333FF]/50 rounded-tr-sm" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#3333FF]/50 rounded-bl-sm" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#3333FF]/50 rounded-br-sm" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-wa-text rounded-full flex items-center justify-center shadow-lg border-[3px] border-wa-bg z-30"><ScanLine className="w-4 h-4 text-wa-bg" /></div>
              </motion.div>
            </div>
          </div>
        );
      case 'distribute':
        return (
          <div className="bg-wa-dark rounded-[40px] p-8 relative overflow-hidden h-full flex items-center justify-center group">
            <div className="absolute inset-0 bg-wa-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <motion.div animate={{ x: [60, 55, 60] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-[280px] h-[160px] bg-wa-bg/10 backdrop-blur-sm rounded-[24px]" />
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-[320px] h-[180px] bg-wa-bg rounded-[24px] shadow-2xl flex items-center p-6 z-10">
                <div className="w-24 h-24 bg-wa-accent-light rounded-[16px] mr-6 flex items-center justify-center overflow-hidden"><NavIcon className="w-10 h-10 text-[#3333FF]" /></div>
                <div className="flex-1">
                  <div className="text-xs text-wa-text-muted opacity-80 font-bold tracking-widest uppercase mb-1">Routing</div>
                  <div className="text-3xl font-black tracking-tighter text-wa-text">139<span className="text-sm font-medium text-wa-text-muted opacity-80">/loc</span></div>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 bg-wa-card rounded-full text-[10px] font-bold text-wa-text-muted opacity-90 uppercase tracking-wider">Local</span>
                    <span className="px-3 py-1 bg-[#DDDEFF] rounded-full text-[10px] font-bold text-[#3333FF] uppercase tracking-wider">Zoned</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      case 'measure':
        return (
          <div className="bg-wa-card rounded-[40px] p-6 md:p-8 relative overflow-hidden h-full flex flex-col shadow-sm">
            {/* Clean, subtle background glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3333FF]/10 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            {/* Dashboard Badge */}
            <div className="absolute top-8 left-8 bg-wa-bg/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-wa-border/50 z-10">
              <BarChart className="w-3.5 h-3.5 text-[#3333FF]" />
              <span className="text-[10px] font-bold text-wa-text-muted uppercase tracking-widest">Dashboard</span>
            </div>
            
            {/* Top Half: Visual Chart */}
            <div className="flex-1 w-full relative flex items-center justify-center pointer-events-none mt-8">
              <motion.div animate={{ y: [-5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }} className="w-[180px] h-[120px] flex items-end justify-between px-2 gap-3 z-0">
                <div className="w-full bg-wa-bg border border-wa-border shadow-lg rounded-t-xl h-[40%]" />
                <div className="w-full bg-wa-bg border border-wa-border shadow-lg rounded-t-xl h-[65%]" />
                <div className="w-full bg-[#3333FF] shadow-[0_0_20px_rgba(51,51,255,0.4)] rounded-t-xl h-[100%]" />
                <div className="w-full bg-wa-bg border border-wa-border shadow-lg rounded-t-xl h-[80%]" />
              </motion.div>
            </div>

            {/* Bottom Half: Text Content */}
            <div className="bg-wa-bg p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-wa-border/50 z-10 relative mt-auto">
              <h3 className="text-3xl font-black tracking-tighter text-wa-text mb-4">MEASURE</h3>
              <p className="text-wa-text-muted text-base font-medium leading-relaxed">
                Unique QR scans capture real-time engagement and provide robust campaign tracking, giving you a transparent view of your campaign's performance and ROI.
              </p>
              <div className="flex gap-3 mt-8">
                <div className="w-2 h-2 rounded-full bg-wa-border-hover opacity-60" />
                <div className="w-2 h-2 rounded-full bg-wa-border-hover opacity-60" />
                <div className="w-6 h-2 rounded-full bg-[#3333FF]" />
                <div className="w-2 h-2 rounded-full bg-wa-border-hover opacity-60" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const groupRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-wa-bg py-24 px-6 md:px-12 overflow-hidden ">
      {/* ── THEME LIQUID ORB (HORIZONTAL WAVE) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Soft background glow spanning width */}
        <div className="absolute w-[150vw] h-[60vw] max-h-[800px] bg-[#3333FF]/10 blur-[150px] rounded-[100%] mix-blend-overlay rotate-12" />
        
        {/* Primary organic horizontal wave */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 0.95, 1],
            rotate: [-5, 5, -5],
            y: ["-5%", "5%", "-5%"]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute"
          style={{
            width: '120vw',
            height: '50vw',
            maxWidth: '1600px',
            maxHeight: '600px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(51,51,255,0.5) 0%, rgba(17,17,221,0.15) 50%, transparent 100%)',
            filter: 'blur(120px)',
            opacity: 0.6,
            borderRadius: '50%',
            willChange: 'transform'
          }}
        />
      </div>

      {/* ── BACKGROUND AESTHETIC DOODLES ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 dark:opacity-10 mix-blend-overlay">
        {/* Giant wireframe droplet rotated */}
        <svg className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] text-wa-text/10 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
        {/* Tech plus signs */}
        <div className="absolute top-[10%] left-[5%] text-wa-text-muted/30 text-lg font-light tracking-[2em]">+ + +</div>
        <div className="absolute bottom-[20%] right-[10%] text-wa-text-muted/30 text-lg font-light tracking-[2em]">+ + +</div>
        {/* Structural line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wa-border/50 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-5xl md:text-7xl font-black tracking-apple-display text-wa-text uppercase leading-[1.05]">
            THE FLOW
          </h2>
          <div className="hidden md:flex items-center gap-2 text-wa-text-muted/50 text-sm font-bold uppercase tracking-widest">
            <Droplet className="w-4 h-4 animate-bounce" /> Drag tiles to play
          </div>
        </div>

        {/* Playable 2048-style Grid */}
        <div 
          ref={groupRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative"
        >
          {items.map((item, index) => (
            <motion.div 
              key={item}
              layout
              layoutId={item}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              drag
              dragSnapToOrigin
              onDragEnd={(e, info) => {
                 const x = info.offset.x;
                 const y = info.offset.y;
                 const threshold = 100;
                 
                 let targetIndex = index;
                 
                 // Determine primary drag direction (only for desktop 2-column)
                 if (window.innerWidth >= 768) {
                   if (Math.abs(x) > Math.abs(y)) {
                      // Horizontal drag
                      if (x > threshold && index % 2 === 0) targetIndex = index + 1; // Left col to right
                      else if (x < -threshold && index % 2 === 1) targetIndex = index - 1; // Right col to left
                   } else {
                      // Vertical drag
                      if (y > threshold && index < 2) targetIndex = index + 2; // Top row to bottom
                      else if (y < -threshold && index >= 2) targetIndex = index - 2; // Bottom row to top
                   }
                 } else {
                   // Mobile 1-column logic (only vertical swaps make sense)
                   if (y > threshold && index < items.length - 1) targetIndex = index + 1;
                   else if (y < -threshold && index > 0) targetIndex = index - 1;
                 }
                 
                 if (targetIndex !== index) {
                    const newItems = [...items];
                    newItems[index] = newItems[targetIndex];
                    newItems[targetIndex] = item;
                    setItems(newItems);
                 }
              }}
              className="w-full h-[450px] cursor-grab active:cursor-grabbing relative outline-none z-0"
              transition={{ type: "spring", bounce: 0, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              whileDrag={{ scale: 1.05, zIndex: 50, rotate: 2 }}
            >
              {renderCard(item)}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

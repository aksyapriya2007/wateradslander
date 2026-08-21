import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const participants = [
  {
    id: 'brands',
    pill: 'FOR BRANDS',
    title: 'Launch & measure offline campaigns.',
    desc: 'Target hyper-local regions with transparent QR attribution and real-time ROI tracking.',
    span: 'md:col-span-2',
    pillStyle: 'solid'
  },
  {
    id: 'printers',
    pill: 'FOR PRINTERS',
    title: 'Receive nearby print orders.',
    desc: 'Get automated print jobs delivered directly to your press with digital artwork assets.',
    span: 'md:col-span-1',
    pillStyle: 'outline'
  },
  {
    id: 'plants',
    pill: 'FOR PLANTS',
    title: 'Automate label application.',
    desc: 'Receive pre-printed serialized labels to seamlessly apply during your standard bottling runs.',
    span: 'md:col-span-1',
    pillStyle: 'outline'
  },
  {
    id: 'distributors',
    pill: 'FOR DISTRIBUTORS',
    title: 'Deliver with verified routing.',
    desc: 'Execute hyper-local drops with guaranteed GPS verification through our driver application.',
    span: 'md:col-span-2',
    pillStyle: 'outline'
  }
];

// --- MICRO-ANIMATIONS ---

const BrandVisual = ({ isHovered, prefersReducedMotion }: { isHovered: boolean, prefersReducedMotion: boolean | null }) => {
  const shouldAnimate = !prefersReducedMotion && isHovered;
  
  return (
    <div className="absolute right-0 bottom-0 w-64 h-48 flex items-end justify-end p-8 pointer-events-none opacity-70">
       <div className="relative w-full h-24 flex items-center justify-between">
          {/* QR Node */}
          <div className="relative w-16 h-16 rounded-xl border border-wa-border bg-wa-bg-card flex flex-wrap p-2 gap-1 z-10 shadow-sm overflow-hidden">
             {[...Array(9)].map((_, i) => (
               <motion.div key={i} className="w-[28%] h-[28%] bg-wa-text-muted/30 rounded-[2px]" 
                 animate={shouldAnimate ? { opacity: [0.3, 0.8, 0.3] } : { opacity: 0.5 }}
                 transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
               />
             ))}
             {shouldAnimate && (
               <motion.div 
                 className="absolute left-0 right-0 h-[1px] bg-[#3333FF] shadow-[0_0_8px_#3333FF]"
                 initial={{ y: -10 }}
                 animate={{ y: [0, 64, 0] }}
                 transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
               />
             )}
          </div>

          {/* Path */}
          <div className="flex-1 h-[1px] bg-wa-border relative mx-2 overflow-hidden">
             {shouldAnimate && (
               <motion.div 
                 className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-transparent via-[#3333FF] to-transparent"
                 animate={{ x: [-32, 150] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
             )}
          </div>

          {/* Data Node */}
          <div className="relative w-16 h-16 rounded-full border border-[#3333FF]/30 bg-[#3333FF]/5 flex items-center justify-center z-10 overflow-hidden">
             {shouldAnimate && (
               <motion.div 
                 className="absolute inset-0 rounded-full border border-[#3333FF]"
                 animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
               />
             )}
             <div className="flex items-end gap-1 h-6">
               {[4, 8, 6, 10].map((h, i) => (
                 <motion.div key={i} className="w-1 bg-[#3333FF] rounded-t-sm"
                   initial={{ height: h }}
                   animate={{ height: shouldAnimate ? h * 2 : h }}
                   transition={{ duration: 0.5, repeat: Infinity, repeatType: 'mirror', delay: i * 0.1 }}
                 />
               ))}
             </div>
          </div>
       </div>
    </div>
  );
};

const PrinterVisual = ({ isHovered, prefersReducedMotion }: { isHovered: boolean, prefersReducedMotion: boolean | null }) => {
  const shouldAnimate = !prefersReducedMotion && isHovered;
  
  return (
    <div className="absolute right-0 bottom-0 w-64 h-48 flex items-end justify-end p-8 pointer-events-none opacity-70">
       <div className="relative w-full h-24 flex items-center justify-between">
          {/* Incoming File */}
          <motion.div 
            className="w-10 h-14 rounded border border-wa-border bg-wa-bg flex flex-col items-center justify-center gap-1 shadow-sm absolute left-0 z-20"
            animate={shouldAnimate ? { x: [0, 80], opacity: [0, 1, 0] } : { opacity: 1, x: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-5 h-1 bg-wa-text-muted/30 rounded-full" />
            <div className="w-3 h-1 bg-[#3333FF]/50 rounded-full" />
          </motion.div>

          {/* Press Machine */}
          <div className="w-16 h-16 rounded-2xl border border-wa-border bg-wa-bg-card flex items-center justify-center absolute left-[80px] z-10 shadow-sm">
            <motion.div 
               className="w-8 h-8 border-2 border-[#3333FF]/30 rounded-full border-t-[#3333FF]"
               animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Output Document */}
          <motion.div 
            className="w-10 h-14 rounded border border-[#3333FF]/30 bg-[#3333FF]/5 flex flex-col items-center justify-center gap-1 absolute left-[160px] z-20 shadow-sm"
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { x: [0, 40], opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
          >
            <div className="w-4 h-4 rounded-full bg-[#3333FF] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
          </motion.div>
       </div>
    </div>
  );
};

const PlantVisual = ({ isHovered, prefersReducedMotion }: { isHovered: boolean, prefersReducedMotion: boolean | null }) => {
  const shouldAnimate = !prefersReducedMotion && isHovered;

  return (
    <div className="absolute right-0 bottom-0 w-64 h-48 flex items-center justify-end p-8 pointer-events-none opacity-70">
       <div className="relative w-full h-full flex flex-col justify-center items-center">
         {/* Conveyor Line */}
         <div className="absolute top-[70%] w-full h-[1px] bg-wa-border" />
         
         {/* Bottle moving */}
         <motion.div 
           className="absolute top-[20%] left-0 w-8 h-16 border border-wa-border rounded-t-lg rounded-b-sm bg-wa-bg-card shadow-sm z-20 overflow-hidden flex flex-col justify-end"
           animate={shouldAnimate ? { x: [0, 100, 200], opacity: [0, 1, 0] } : { opacity: 1, x: 100 }}
           transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         >
           {/* Label applying */}
           <motion.div 
             className="w-full h-6 bg-[#3333FF]/20 border-y border-[#3333FF]/40 mb-2 flex items-center justify-center origin-left"
             initial={{ scaleX: 0 }}
             animate={shouldAnimate ? { scaleX: [0, 1, 1] } : { scaleX: 1 }}
             transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 1] }}
           >
             <div className="w-1 h-1 rounded-full bg-[#3333FF]" />
           </motion.div>
         </motion.div>

         {/* Labeling Machine mechanism overhead */}
         <div className="absolute top-[5%] left-[96px] w-10 h-12 border border-wa-border bg-wa-bg rounded-b-xl flex flex-col items-center justify-end pb-2 z-10 shadow-sm">
           <motion.div 
             className="w-3 h-3 rounded-full bg-[#3333FF]/20"
             animate={shouldAnimate ? { scale: [1, 1.3, 1] } : { scale: 1 }}
             transition={{ duration: 0.5, repeat: Infinity }}
           />
         </div>
       </div>
    </div>
  );
};

const DistributorVisual = ({ isHovered, prefersReducedMotion }: { isHovered: boolean, prefersReducedMotion: boolean | null }) => {
  const shouldAnimate = !prefersReducedMotion && isHovered;

  return (
    <div className="absolute right-0 bottom-0 w-64 h-48 flex items-center justify-end p-8 pointer-events-none opacity-70">
       <div className="relative w-full h-full pt-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
             <path 
               d="M 20 80 L 80 20 L 140 60 L 180 30" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="1"
               className="text-wa-border"
             />
             {shouldAnimate && (
               <motion.path 
                 d="M 20 80 L 80 20 L 140 60 L 180 30" 
                 fill="none" 
                 stroke="#3333FF" 
                 strokeWidth="2"
                 strokeDasharray="300"
                 initial={{ strokeDashoffset: 300 }}
                 animate={{ strokeDashoffset: [300, 0, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
             )}
             
             {/* Nodes */}
             <circle cx="20" cy="80" r="4" className="fill-wa-bg stroke-wa-border stroke-2" />
             <circle cx="80" cy="20" r="4" className="fill-wa-bg stroke-wa-border stroke-2" />
             <circle cx="140" cy="60" r="4" className="fill-wa-bg stroke-wa-border stroke-2" />
             
             {/* Destination Node */}
             <motion.circle 
               cx="180" cy="30" r="5" 
               className="fill-[#3333FF]"
               animate={shouldAnimate ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : { scale: 1, opacity: 1 }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.8, 1] }}
             />
          </svg>

          {/* Moving Delivery Marker */}
          {shouldAnimate && (
             <motion.div 
               className="absolute w-3 h-3 bg-white border-2 border-[#3333FF] rounded-full shadow-[0_0_10px_#3333FF] z-20"
               style={{ top: 0, left: 0, marginLeft: -6, marginTop: -6 }}
               animate={{
                 x: [20, 80, 140, 180, 180],
                 y: [80, 20, 60, 30, 30]
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />
          )}
       </div>
    </div>
  );
};


// --- CARD COMPONENT ---

const StakeholderCard = ({ item }: { item: typeof participants[0] }) => {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      className={`relative overflow-hidden bg-wa-bg-card border border-wa-border hover:border-[#3333FF]/30 rounded-[32px] p-10 md:p-12 flex flex-col shadow-sm transition-all duration-400 ${item.span} group`}
      whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.005 }}
    >
      {/* Premium Blue Border Trace */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden z-0">
          <motion.div
            className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(51, 51, 255, 0.4) 100%)' }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          />
          <div className="absolute inset-[1px] bg-wa-bg-card rounded-[31px] z-10" />
        </div>
      )}

      {/* Pointer Radial Highlight */}
      {!prefersReducedMotion && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
          style={{
            background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(51,51,255,0.03), transparent)`
          }}
        />
      )}

      {/* Content Container (z-20) */}
      <div className="relative z-20 flex flex-col h-full pointer-events-auto">
         <motion.div variants={contentVariants} className="mb-10 inline-block w-fit">
           <span className={`text-[11px] md:text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest shadow-sm transition-colors duration-300 ${
             item.pillStyle === 'solid' 
               ? 'bg-[#3333FF] text-white border-none group-hover:bg-[#2222EE]' 
               : 'bg-transparent border border-[#3333FF]/20 text-[#3333FF] group-hover:bg-[#3333FF]/10'
           }`}>
             {item.pill}
           </span>
         </motion.div>
         
         <motion.h3 variants={contentVariants} className="text-4xl md:text-[2.75rem] font-black text-wa-text leading-[1.1] mb-6 tracking-tight max-w-xl">
           {item.title}
         </motion.h3>
         
         <motion.p variants={contentVariants} className="text-wa-text-muted text-lg max-w-md">
           {item.desc}
         </motion.p>
      </div>

      {/* Visual Animation Layer (z-10) */}
      <div className="absolute inset-0 z-10 overflow-hidden rounded-[32px] pointer-events-none">
        {item.id === 'brands' && <BrandVisual isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />}
        {item.id === 'printers' && <PrinterVisual isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />}
        {item.id === 'plants' && <PlantVisual isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />}
        {item.id === 'distributors' && <DistributorVisual isHovered={isHovered} prefersReducedMotion={prefersReducedMotion} />}
      </div>
    </motion.div>
  );
};

// --- MAIN SECTION COMPONENT ---

export default function ProcessFlowSection() {
  return (
    <section id="participants" className="relative w-full min-h-screen bg-wa-bg py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 dark:opacity-10 mix-blend-overlay">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3333FF]/5 blur-[120px] rounded-full" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wa-border/50 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row items-start justify-between gap-12">
          <h2 className="text-6xl md:text-8xl font-black tracking-apple-display text-wa-text leading-[1.05] max-w-3xl">
            Built for Every <br/><span className="text-[#3333FF]">Participant.</span>
          </h2>
          <div className="md:w-1/3 flex flex-col pt-4">
            <p className="text-wa-text-muted text-xl leading-relaxed">
              All essential ecosystem functions unified in one tracking and attribution platform.
            </p>
          </div>
        </div>

        {/* Animated Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
              }
            }
          }}
        >
          {participants.map((item) => (
            <StakeholderCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

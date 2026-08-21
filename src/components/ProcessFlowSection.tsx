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

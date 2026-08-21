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



// --- SUBTLE THEME-MATCHED SVG VISUALS ---

const BrandVisual = ({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) => {
  return (
    <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-44 h-32 md:w-60 md:h-40 pointer-events-none select-none flex items-center justify-end opacity-60 group-hover:opacity-95 transition-opacity duration-500">
      <svg viewBox="0 0 240 150" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <filter id="glow-brand" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* QR Matrix Node */}
        <g transform="translate(16, 20)">
          <rect width="60" height="60" rx="14" className="stroke-wa-border dark:stroke-white/15 fill-wa-bg-card/90" strokeWidth="1.5" />
          {/* Corner anchors */}
          <rect x="7" y="7" width="15" height="15" rx="4" className="stroke-[#3333FF]" strokeWidth="1.5" fill="none" />
          <rect x="11" y="11" width="7" height="7" rx="2" fill="#3333FF" />
          
          <rect x="38" y="7" width="15" height="15" rx="4" className="stroke-[#3333FF]" strokeWidth="1.5" fill="none" />
          <rect x="42" y="11" width="7" height="7" rx="2" fill="#3333FF" />
          
          <rect x="7" y="38" width="15" height="15" rx="4" className="stroke-[#3333FF]" strokeWidth="1.5" fill="none" />
          <rect x="11" y="42" width="7" height="7" rx="2" fill="#3333FF" />

          {/* Matrix data dots */}
          <circle cx="34" cy="34" r="2.5" fill="#3333FF" />
          <circle cx="45" cy="45" r="2.5" className="fill-wa-text/40" />
          <rect x="32" y="42" width="5" height="5" rx="1.5" className="fill-wa-text/30" />
          <rect x="42" y="30" width="5" height="5" rx="1.5" className="fill-wa-text/30" />

          {/* Laser scan line */}
          <motion.line
            x1="4" y1="8" x2="56" y2="8"
            stroke="#3333FF"
            strokeWidth="1.5"
            filter="url(#glow-brand)"
            animate={prefersReducedMotion ? {} : { y: [0, 44, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Dynamic Transmission Vector */}
        <path
          d="M 82 50 C 105 50, 110 72, 134 72"
          className="stroke-wa-border dark:stroke-white/20"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M 82 50 C 105 50, 110 72, 134 72"
          stroke="#3333FF"
          strokeWidth="2"
          strokeDasharray="16 100"
          animate={prefersReducedMotion ? {} : { strokeDashoffset: [116, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Analytics Card */}
        <g transform="translate(138, 30)">
          <rect width="86" height="66" rx="14" className="stroke-wa-border dark:stroke-white/15 fill-wa-bg-card/90" strokeWidth="1.5" />
          
          {/* Header Indicator */}
          <circle cx="14" cy="16" r="3" fill="#3333FF" />
          <line x1="22" y1="16" x2="50" y2="16" className="stroke-wa-text/30" strokeWidth="2" strokeLinecap="round" />
          
          {/* Wave chart */}
          <motion.path
            d="M 12 46 Q 28 32, 44 40 T 74 26"
            stroke="#3333FF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            animate={prefersReducedMotion ? {} : {
              d: [
                "M 12 46 Q 28 32, 44 40 T 74 26",
                "M 12 42 Q 28 38, 44 30 T 74 20",
                "M 12 46 Q 28 32, 44 40 T 74 26"
              ]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glowing peak dot */}
          <motion.circle
            cx="74" cy="26" r="3.5"
            fill="#3333FF"
            animate={prefersReducedMotion ? {} : {
              cy: [26, 20, 26],
              scale: [1, 1.25, 1],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </svg>
    </div>
  );
};

const PrinterVisual = ({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) => {
  return (
    <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 w-32 h-24 md:w-40 md:h-32 pointer-events-none select-none flex items-center justify-end opacity-50 group-hover:opacity-90 transition-opacity duration-500">
      <svg viewBox="0 0 150 120" className="w-full h-full overflow-visible" fill="none">
        <g transform="translate(20, 14)">
          {/* Registration target crosshair */}
          <motion.g
            animate={prefersReducedMotion ? {} : { rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "75px 28px" }}
          >
            <circle cx="75" cy="28" r="14" className="stroke-wa-border dark:stroke-white/20" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="75" y1="10" x2="75" y2="46" className="stroke-[#3333FF]/40" strokeWidth="1" />
            <line x1="57" y1="28" x2="93" y2="28" className="stroke-[#3333FF]/40" strokeWidth="1" />
          </motion.g>

          {/* Paper Sheet Feed */}
          <motion.rect
            x="12" y="22" width="52" height="68" rx="8"
            className="stroke-wa-border dark:stroke-white/20 fill-wa-bg-card/90"
            strokeWidth="1.5"
            animate={prefersReducedMotion ? {} : { y: [22, 17, 22] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Print Lines */}
          <motion.line
            x1="22" y1="38" x2="52" y2="38"
            stroke="#3333FF"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0.3 }}
            animate={prefersReducedMotion ? {} : { pathLength: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <line x1="22" y1="48" x2="46" y2="48" className="stroke-wa-text/25" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="58" x2="50" y2="58" className="stroke-wa-text/25" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="68" x2="36" y2="68" className="stroke-wa-text/25" strokeWidth="2" strokeLinecap="round" />

          {/* Printhead Carriage */}
          <motion.g
            animate={prefersReducedMotion ? {} : { x: [0, 28, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="18" y="14" width="14" height="7" rx="2.5" fill="#3333FF" />
            <polygon points="25,21 22,25 28,25" fill="#3333FF" />
          </motion.g>
        </g>
      </svg>
    </div>
  );
};

const PlantVisual = ({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) => {
  return (
    <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6 w-32 h-24 md:w-40 md:h-32 pointer-events-none select-none flex items-center justify-end opacity-50 group-hover:opacity-90 transition-opacity duration-500">
      <svg viewBox="0 0 150 120" className="w-full h-full overflow-visible" fill="none">
        <g transform="translate(38, 8)">
          {/* Stylized Bottle / Canister Container */}
          <rect x="18" y="22" width="38" height="72" rx="10" className="stroke-wa-border dark:stroke-white/20 fill-wa-bg-card/90" strokeWidth="1.5" />
          <path d="M 28 22 L 28 12 Q 28 8 32 8 L 42 8 Q 46 8 46 12 L 46 22" className="stroke-wa-border dark:stroke-white/20 fill-wa-bg-card/90" strokeWidth="1.5" />
          <rect x="31" y="5" width="12" height="5" rx="1.5" className="stroke-[#3333FF] fill-[#3333FF]/20" strokeWidth="1" />

          {/* Water level wave inside bottle */}
          <motion.path
            d="M 20 70 Q 28 66, 37 70 T 54 70 L 54 82 Q 54 88 46 88 L 28 88 Q 20 88 20 82 Z"
            fill="#3333FF"
            fillOpacity="0.1"
            animate={prefersReducedMotion ? {} : {
              d: [
                "M 20 70 Q 28 66, 37 70 T 54 70 L 54 82 Q 54 88 46 88 L 28 88 Q 20 88 20 82 Z",
                "M 20 68 Q 28 72, 37 68 T 54 68 L 54 82 Q 54 88 46 88 L 28 88 Q 20 88 20 82 Z",
                "M 20 70 Q 28 66, 37 70 T 54 70 L 54 82 Q 54 88 46 88 L 28 88 Q 20 88 20 82 Z"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Serialized Advertising Label Band */}
          <rect x="16" y="38" width="42" height="24" rx="3.5" className="stroke-[#3333FF] fill-[#3333FF]/10" strokeWidth="1.5" />
          
          {/* Label Barcode / Serialization Lines */}
          <line x1="22" y1="43" x2="22" y2="57" stroke="#3333FF" strokeWidth="1.5" />
          <line x1="26" y1="43" x2="26" y2="57" stroke="#3333FF" strokeWidth="1" />
          <line x1="30" y1="43" x2="30" y2="57" stroke="#3333FF" strokeWidth="2" />
          <line x1="35" y1="43" x2="35" y2="57" stroke="#3333FF" strokeWidth="1" />
          <line x1="39" y1="43" x2="39" y2="57" stroke="#3333FF" strokeWidth="1.5" />
          <line x1="45" y1="43" x2="45" y2="57" stroke="#3333FF" strokeWidth="2" />
          <line x1="51" y1="43" x2="51" y2="57" stroke="#3333FF" strokeWidth="1" />

          {/* Scanning Ring Beam */}
          <motion.rect
            x="12" y="36" width="50" height="28" rx="5"
            stroke="#3333FF"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            fill="none"
            animate={prefersReducedMotion ? {} : {
              scale: [0.96, 1.06, 0.96],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "37px 50px" }}
          />
        </g>
      </svg>
    </div>
  );
};

const DistributorVisual = ({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) => {
  return (
    <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-44 h-32 md:w-64 md:h-40 pointer-events-none select-none flex items-center justify-end opacity-60 group-hover:opacity-95 transition-opacity duration-500">
      <svg viewBox="0 0 250 140" className="w-full h-full overflow-visible" fill="none">
        {/* Isometric Grid Lines */}
        <path d="M 20 110 L 110 38 L 220 64" className="stroke-wa-border/40 dark:stroke-white/10" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 46 128 L 150 46 L 230 100" className="stroke-wa-border/40 dark:stroke-white/10" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Waypoint Route Curve */}
        <path
          d="M 26 102 C 65 112, 85 55, 132 64 S 190 36, 220 42"
          className="stroke-wa-border dark:stroke-white/20"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Active Route Pulse Line */}
        <motion.path
          d="M 26 102 C 65 112, 85 55, 132 64 S 190 36, 220 42"
          stroke="#3333FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="36 160"
          animate={prefersReducedMotion ? {} : { strokeDashoffset: [196, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />

        {/* Start Point */}
        <g transform="translate(26, 102)">
          <circle r="4.5" className="fill-wa-bg-card stroke-[#3333FF]" strokeWidth="2" />
        </g>

        {/* Midpoint Checkpoint */}
        <g transform="translate(132, 64)">
          <circle r="3.5" className="fill-wa-bg-card stroke-wa-border dark:stroke-white/30" strokeWidth="1.5" />
          <motion.circle
            r="7"
            className="stroke-[#3333FF]/40"
            strokeWidth="1"
            animate={prefersReducedMotion ? {} : { scale: [0.8, 1.4, 0.8], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Destination Verified Ping */}
        <g transform="translate(220, 42)">
          <motion.circle
            r="15"
            className="stroke-[#3333FF]"
            strokeWidth="1"
            animate={prefersReducedMotion ? {} : { scale: [0.5, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.circle
            r="9"
            className="stroke-[#3333FF]"
            strokeWidth="1.2"
            animate={prefersReducedMotion ? {} : { scale: [0.5, 1.3], opacity: [0.9, 0] }}
            transition={{ duration: 2, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
          />
          <circle r="5.5" fill="#3333FF" />
          <path d="M -1.8 0 L -0.5 1.4 L 2.2 -1.4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Traveling GPS Signal Marker */}
        <motion.g
          animate={prefersReducedMotion ? {} : {
            x: [26, 78, 132, 178, 220],
            y: [102, 78, 64, 48, 42]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle r="3" fill="#3333FF" />
          <circle r="6" className="stroke-[#3333FF]/50" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
};

// --- CARD COMPONENT ---

const StakeholderCard = ({ item }: { item: typeof participants[0] }) => {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      className={`relative overflow-hidden bg-wa-bg-card border border-wa-border hover:border-[#3333FF]/30 rounded-[32px] p-10 md:p-12 flex flex-col shadow-sm transition-all duration-400 ${item.span} group`}
      whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.005 }}
    >
      {/* Textured Background Effect (Grain) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Vector Motion Visual Layer */}
      {item.id === 'brands' && <BrandVisual prefersReducedMotion={prefersReducedMotion} />}
      {item.id === 'printers' && <PrinterVisual prefersReducedMotion={prefersReducedMotion} />}
      {item.id === 'plants' && <PlantVisual prefersReducedMotion={prefersReducedMotion} />}
      {item.id === 'distributors' && <DistributorVisual prefersReducedMotion={prefersReducedMotion} />}

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

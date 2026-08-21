import { useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const participants = [
  {
    id: 'brands',
    pill: 'FOR BRANDS',
    title: 'Launch & measure offline campaigns.',
    highlightWords: 'offline campaigns',
    highlightColor: '#00D4E6', // Electric Cyan
    glowColor: 'rgba(0, 212, 230, 0.08)',
    desc: 'Target hyper-local regions with transparent QR attribution and real-time ROI tracking.',
    span: 'md:col-span-2',
    pillStyle: 'solid'
  },
  {
    id: 'printers',
    pill: 'FOR PRINTERS',
    title: 'Receive nearby print orders.',
    highlightWords: 'print orders',
    highlightColor: '#818CF8', // Indigo
    glowColor: 'rgba(129, 140, 248, 0.08)',
    desc: 'Get automated print jobs delivered directly to your press with digital artwork assets.',
    span: 'md:col-span-1',
    pillStyle: 'outline'
  },
  {
    id: 'plants',
    pill: 'FOR PLANTS',
    title: 'Automate label application.',
    highlightWords: 'label application',
    highlightColor: '#3333FF', // Signature Royal Blue
    glowColor: 'rgba(51, 51, 255, 0.08)',
    desc: 'Receive pre-printed serialized labels to seamlessly apply during your standard bottling runs.',
    span: 'md:col-span-1',
    pillStyle: 'outline'
  },
  {
    id: 'distributors',
    pill: 'FOR DISTRIBUTORS',
    title: 'Deliver with verified routing.',
    highlightWords: 'verified routing',
    highlightColor: '#38BDF8', // Sky Blue
    glowColor: 'rgba(56, 189, 248, 0.08)',
    desc: 'Execute hyper-local drops with guaranteed GPS verification through our driver application.',
    span: 'md:col-span-2',
    pillStyle: 'outline'
  }
];

// --- STROKE-TO-FILL WORD COMPONENT ---
const StrokeFillWord = ({
  word,
  isHighlight,
  highlightColor,
  delay
}: {
  word: string;
  isHighlight: boolean;
  highlightColor: string;
  delay: number;
}) => {
  return (
    <span className="inline-block mr-[0.25em] relative overflow-visible">
      {/* 1. Outlined Stroke Layer (Drawn first) */}
      <motion.span
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="inline-block transition-colors duration-500"
        style={{
          WebkitTextStroke: isHighlight
            ? `1.5px ${highlightColor}`
            : '1.2px currentColor',
          color: 'transparent',
        }}
      >
        {word}
      </motion.span>

      {/* 2. Color Fill Layer (Wipes in over the stroke outline) */}
      <motion.span
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: delay + 0.25 }}
        className="absolute inset-0 inline-block pointer-events-none"
        style={{
          color: isHighlight ? highlightColor : 'inherit'
        }}
      >
        {word}
      </motion.span>
    </span>
  );
};

// --- STROKE-TO-FILL HEADING ---
const StrokeFillTitle = ({
  title,
  highlightWords,
  highlightColor,
  className = ""
}: {
  title: string;
  highlightWords?: string;
  highlightColor: string;
  className?: string;
}) => {
  const words = title.split(' ');
  const highlightParts = highlightWords ? highlightWords.toLowerCase().split(' ') : [];

  return (
    <h3 className={`font-black tracking-tight leading-[1.1] ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        const isHighlight = highlightParts.some(hp => cleanWord.includes(hp.replace(/[^a-z0-9]/g, '')));
        return (
          <StrokeFillWord
            key={i}
            word={word}
            isHighlight={isHighlight}
            highlightColor={highlightColor}
            delay={i * 0.06}
          />
        );
      })}
    </h3>
  );
};

// --- CARD COMPONENT ---

const StakeholderCard = ({ item }: { item: typeof participants[0] }) => {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className={`relative overflow-hidden bg-wa-bg-card border border-wa-border hover:border-[#3333FF]/40 rounded-[32px] p-10 md:p-12 flex flex-col shadow-sm transition-all duration-500 ${item.span} group`}
      whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.005 }}
    >
      {/* Ambient Accent Glow on Hover / View */}
      <div 
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: item.glowColor }}
      />

      {/* Textured Background Effect (Grain) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

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
         
         <motion.div variants={contentVariants} className="text-4xl md:text-[2.75rem] text-wa-text mb-6 max-w-xl">
           <StrokeFillTitle 
             title={item.title} 
             highlightWords={item.highlightWords}
             highlightColor={item.highlightColor}
           />
         </motion.div>
         
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


import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

interface HeroSectionProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export default function HeroSection({ isDark, setIsDark }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const blobX = useTransform(springX, [-50, 50], [-30, 30]);
  const blobY = useTransform(springY, [-50, 50], [-30, 30]);



  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 100;
    const y = (clientY / innerHeight - 0.5) * 100;
    mouseX.set(x);
    mouseY.set(y);
  };

  const titleLine1 = ["Advertising"];
  const titleLine2 = ["of", "the", "Future!"];

  const titleVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 20, filter: "blur(12px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        bounce: 0,
        duration: 0.8,
        delay: 0.1 + i * 0.1,
      },
    }),
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-wa-bg flex flex-col overflow-hidden"
    >
      {/* ── SUBTLE GEOMETRIC LINES ── */}
      <motion.div style={{ x: blobX, y: blobY }} className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-20 mix-blend-overlay">
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wa-border to-transparent" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wa-border to-transparent" />
        <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-wa-border to-transparent" />
        <div className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-wa-border to-transparent" />
      </motion.div>

      {/* ── PILL NAV BAR ── */}
      <div className="fixed top-0 left-0 w-full px-6 md:px-12 flex justify-center z-50 pointer-events-none transition-all duration-500" style={{ paddingTop: isScrolled ? '1rem' : '1.5rem' }}>
        <motion.nav
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring" as const, bounce: 0, duration: 0.5, delay: 0.2 }}
          className={`pointer-events-auto w-full flex items-center justify-between rounded-full px-8 transition-all duration-500 max-w-[1200px] py-3 apple-glass-heavy shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.05)] border border-white/30 dark:border-white/10`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <svg className="w-8 h-8 text-[#3333FF] group-hover:text-[#0284c7] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
              <circle cx="12" cy="15" r="3" fill="currentColor" opacity="0.3" />
              <circle cx="12" cy="15" r="1" fill="currentColor" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-wa-text">
                WaterAds
              </span>
              <span className="text-[8px] font-bold text-wa-text-muted opacity-80 uppercase tracking-[0.2em] leading-none mt-0.5">
                Offline Ad Network
              </span>
            </div>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <motion.button 
              whileTap={{ scale: 0.94 }}
              onClick={(e: React.MouseEvent) => {
                const x = e.clientX;
                const y = e.clientY;
                const endRadius = Math.hypot(
                  Math.max(x, window.innerWidth - x),
                  Math.max(y, window.innerHeight - y)
                );
                // @ts-ignore
                if (!document.startViewTransition) {
                  setIsDark(!isDark);
                  return;
                }
                // @ts-ignore
                const transition = document.startViewTransition(() => {
                  setIsDark(!isDark);
                });
                transition.ready.then(() => {
                  const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`
                  ];
                  document.documentElement.animate(
                    { clipPath: clipPath },
                    { duration: 500, easing: 'ease-out', pseudoElement: '::view-transition-new(root)' }
                  );
                });
              }}
              className="p-2.5 rounded-full hover:bg-wa-text/5 transition-colors text-wa-text relative z-50 overflow-hidden group cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              <div className="absolute inset-0 rounded-full bg-wa-text opacity-0 group-hover:opacity-10 transition-opacity scale-0 group-hover:scale-100 duration-300" />
              {isDark ? <Sun className="w-5 h-5 relative z-10" /> : <Moon className="w-5 h-5 relative z-10" />}
            </motion.button>
            
            <a href="#contact" className="text-[12px] font-bold text-white bg-[#3333FF] uppercase tracking-wider px-5 py-2 rounded-full press-scale hover:bg-[#2222EE] transition-colors hidden sm:block">
              Get Started →
            </a>
          </div>
        </motion.nav>
      </div>

      {/* ── HUGE BACKGROUND WORDMARK ── */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center pointer-events-none z-0 select-none overflow-hidden h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: ['-5%', '5%', '-5%'] }}
          transition={{ 
            opacity: { duration: 2 }, 
            x: { duration: 25, repeat: Infinity, ease: "easeInOut" } 
          }}
          className="text-[clamp(10rem,25vw,35rem)] font-black tracking-tighter text-transparent whitespace-nowrap leading-none mt-[-15vh]"
          style={{ WebkitTextStroke: isDark ? '3px rgba(255, 255, 255, 0.1)' : '3px rgba(0, 0, 0, 0.08)' }}
        >
          WATERADS
        </motion.div>
      </div>

      {/* ── HERO CONTENT AREA ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-24 md:pb-32 lg:pb-40">
        
        {/* Big Bold Heading — bottom-left */}
        <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-apple-display leading-[1.05] text-wa-text max-w-4xl flex flex-col">
          <div className="flex flex-wrap gap-x-4">
            {titleLine1.map((word, idx) => (
              <motion.span
                key={`line1-${idx}`}
                custom={idx}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-3 md:gap-x-4 mt-1 md:mt-2">
            {titleLine2.map((word, idx) => (
              <motion.span
                key={`line2-${idx}`}
                custom={titleLine1.length + idx}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl font-medium text-wa-text-muted max-w-xl mt-8 leading-relaxed"
        >
          We connect brands with local water distributors and
          offer trackable, measurable offline campaigns for your business
        </motion.p>

        {/* Interactive Magnetic CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: 0.8 }}
          className="mt-10 flex items-center gap-4"
        >
          <MagneticWrapper>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 btn-shimmer text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg flex press-scale"
            >
              Start Campaign
            </motion.a>
          </MagneticWrapper>
          <MagneticWrapper>
            <motion.a
              href="#process"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 apple-glass border border-white/20 dark:border-white/10 hover:border-white/40 text-wa-text rounded-full font-bold uppercase tracking-wider text-sm flex hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative overflow-hidden group press-scale"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">How It Works</span>
            </motion.a>
          </MagneticWrapper>
        </motion.div>
      </div>

      {/* ── THE ORGANIC FLUID ORB WITH PARALLAX ── */}
      <motion.div style={{ x: blobX, y: blobY }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Deep background glow */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[#3333FF]/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />

        {/* Primary organic blob — slow breathe, no rotation */}
        <motion.div
          animate={{ 
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute"
          style={{
            top: '5%',
            right: '-10%',
            width: '75vw',
            height: '75vw',
            maxWidth: '1000px',
            maxHeight: '1000px',
            background: 'radial-gradient(circle at 40% 40%, #3333FF 0%, #1111DD 50%, transparent 100%)',
            filter: 'blur(80px)',
            opacity: 0.5,
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            willChange: "transform"
          }}
        />
      </motion.div>



      {/* ── SUBTLE MARQUEE BANNER ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex whitespace-nowrap bg-wa-bg/60 border-t border-wa-border/30 py-4 z-10 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 pr-16 items-center"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center text-xs font-bold uppercase tracking-[0.3em] text-wa-text-muted/60">
              <span>WaterAds Network</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3333FF]/50" />
              <span>Measurable Offline Campaigns</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3333FF]/50" />
              <span>Precision Serialization</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3333FF]/50" />
              <span>Real-time Analytics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3333FF]/50" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

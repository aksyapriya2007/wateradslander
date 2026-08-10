import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "CREATE",
    desc: "We define your target network, duration, and can quantity based on brand goals."
  },
  {
    title: "PRINT",
    desc: "We serialize the advertising labels and produce them with extreme precision."
  },
  {
    title: "DISTRIBUTE",
    desc: "Plants apply the labels and dispatch cans to strictly targeted geographic zones."
  },
  {
    title: "MEASURE",
    desc: "Unique QR scans capture real-time engagement and provide robust campaign tracking."
  }
];

const TiltCard = ({ step, index, containerTween }: { step: any, index: number, containerTween: any }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const fillRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!fillRef.current || !containerTween) return;

    // The water fill animation triggered when the card enters horizontally
    gsap.to(fillRef.current, {
      clipPath: "inset(0% 0 0 0)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        containerAnimation: containerTween,
        start: "left center", // when the left side of the card hits the center of the screen
        end: "right center",
        scrub: 1, // Smoothly tie to scroll
      }
    });
  }, { dependencies: [containerTween] });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Very subtle tilt for minimalist feel
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div ref={cardRef} className="w-[100vw] h-full flex flex-col justify-center px-6 md:px-16 flex-shrink-0 z-20">
      <motion.div 
        className="w-full max-w-5xl mx-auto relative group perspective-[1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="w-full bg-white rounded-[40px] p-10 md:p-16 lg:p-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between relative overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Base Empty Number */}
          <div 
            className="absolute -top-10 -right-10 text-[180px] md:text-[300px] font-black text-slate-100 leading-none select-none pointer-events-none"
            style={{ transform: 'translateZ(-20px)' }}
          >
            0{index + 1}
          </div>
          
          {/* Water Fill Overlay Number */}
          <div 
            ref={fillRef}
            className="absolute -top-10 -right-10 text-[180px] md:text-[300px] font-black leading-none select-none pointer-events-none"
            style={{ 
              transform: 'translateZ(-19px)',
              clipPath: "inset(100% 0 0 0)", // Starts fully clipped (empty)
              backgroundImage: "linear-gradient(to top, #38bdf8, #22d3ee)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            0{index + 1}
          </div>
          
          <div className="flex-1 relative z-10" style={{ transform: 'translateZ(40px)' }}>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-[#111] uppercase leading-[0.9] mb-6">
              {step.title}
            </h3>
            <p className="text-lg md:text-2xl font-medium text-slate-500 leading-relaxed max-w-lg">
              {step.desc}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function ProcessFlowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgDropsRef = useRef<HTMLDivElement>(null);
  const [containerTween, setContainerTween] = useState<any>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const moveDistance = -(trackRef.current.scrollWidth - window.innerWidth);

    const tween = gsap.to(trackRef.current, {
      x: moveDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    setContainerTween(tween);

    // Subtle parallax for background cyan drops
    if (bgDropsRef.current) {
      gsap.to(bgDropsRef.current, {
        x: moveDistance * 0.5, // Moves slower than track
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden">
      
      {/* Fixed Header */}
      <div className="absolute top-12 left-6 md:top-24 md:left-24 z-30 pointer-events-none">
        <span className="text-[10px] md:text-xs font-bold text-sky-500 uppercase tracking-widest mb-2 block">
          PROCESS: 4 STEPS
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111] uppercase leading-none">
          THE FLOW
        </h2>
      </div>

      {/* BACKGROUND PARALLAX DROPS (Cyan geometric shapes) */}
      <div ref={bgDropsRef} className="absolute top-0 left-0 h-full w-[400vw] pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div 
            key={`drop-${i}`}
            className={`absolute ${i % 2 === 0 ? 'rounded-full' : 'rounded-3xl'} bg-gradient-to-br from-cyan-400/20 to-sky-400/10 blur-xl`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${(i / 15) * 100 + Math.random() * 10}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* MAIN TRACK (Cards) */}
      <div 
        ref={trackRef} 
        className="absolute top-0 left-0 h-full flex w-fit items-center z-20"
      >
        {steps.map((step, index) => (
          <TiltCard key={index} step={step} index={index} containerTween={containerTween} />
        ))}
      </div>

      {/* Fixed Continuous Liquid Wave at the bottom (Foreground) */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] z-30 pointer-events-none overflow-hidden flex items-end">
        <div className="relative w-full h-full">
          {/* Back Wave (slower, cyan) */}
          <div className="absolute bottom-0 left-0 w-[200%] h-full flex items-end animate-[wave-move_12s_linear_infinite]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-cyan-400 opacity-40">
              <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"></path>
              <path d="M1200,40 C1350,80 1550,0 1800,40 C2050,80 2250,0 2400,40 L2400,120 L1200,120 Z" transform="translate(1200, 0)"></path>
            </svg>
          </div>

          {/* Front Wave (faster, sky blue) */}
          <div className="absolute bottom-0 left-0 w-[200%] h-[80%] flex items-end animate-[wave-move_8s_linear_infinite_reverse]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-sky-500 opacity-60">
              <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"></path>
              <path d="M1200,60 C1400,120 1600,0 1800,60 C2000,120 2200,0 2400,60 L2400,120 L1200,120 Z" transform="translate(1200, 0)"></path>
            </svg>
          </div>
          
          {/* Solid base to prevent gaps at bottom of screen */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-sky-500" />
        </div>
      </div>
      
    </section>
  );
}

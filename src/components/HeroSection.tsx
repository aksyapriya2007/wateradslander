import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const waterSourceRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current || !waterSourceRef.current) return;

    // As user scrolls down the hero section, the massive text "dissolves" or flows downward
    // mimicking a liquid collapsing into the central spine.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5, // High viscosity feeling
      }
    });

    tl.to(textRef.current, {
      y: 150,
      opacity: 0,
      scale: 0.9,
      filter: "blur(20px)", // Liquid dissolve effect
    }, 0);

    tl.to([subRef.current, ctaRef.current], {
      y: -50,
      opacity: 0,
    }, 0);

    // The water source expands as we scroll down
    tl.to(waterSourceRef.current, {
      scaleY: 2,
      opacity: 1,
      y: 100,
    }, 0);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative z-10 pt-32 pb-48 px-6 w-full mx-auto text-center flex flex-col items-center min-h-[90vh] justify-center"
    >
      
      {/* Massive Text with Gradient Clipping */}
      <h1
        ref={textRef}
        className="font-black text-[11vw] sm:text-[12vw] md:text-[13vw] leading-[0.85] tracking-tighter uppercase relative z-20 whitespace-nowrap pr-2 md:pr-4"
        style={{
          backgroundImage: "linear-gradient(110deg, #1e3a8a 0%, #000000 25%, #2563eb 45%, #000000 65%, #60a5fa 90%)",
          backgroundSize: "200% auto",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          animation: "gradientFlow 8s ease infinite"
        }}
      >
        WATERADS
      </h1>

      {/* Supporting Paragraph */}
      <p
        ref={subRef}
        className="text-base sm:text-lg md:text-xl text-black font-semibold leading-relaxed max-w-2xl mt-12 relative z-20"
      >
        A seamless offline advertising network. We connect brands with printing presses, water plants, and distributors to build smart, trackable campaigns that scale.
      </p>

      {/* Primary CTA */}
      <div
        ref={ctaRef}
        className="mt-10 relative z-20"
      >
        <a
          href="#planner"
          className="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-lg transition-all duration-200 cursor-pointer inline-block hover:scale-105"
        >
          Start a Campaign
        </a>
      </div>

      {/* Visual representation of the "Water Source" starting point for the spine */}
      <div 
        ref={waterSourceRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-blue-500/0 to-blue-500/80 rounded-full blur-[2px] opacity-0 pointer-events-none origin-top"
      />

    </section>
  );
}

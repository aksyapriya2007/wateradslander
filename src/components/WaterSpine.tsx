import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WaterSpine() {
 const containerRef = useRef<HTMLDivElement>(null);
 const pathRef = useRef<SVGPathElement>(null);

 useGSAP(() => {
 if (!pathRef.current) return;

 const pathLength = pathRef.current.getTotalLength();
 
 gsap.set(pathRef.current, { 
 strokeDasharray: pathLength, 
 strokeDashoffset: pathLength 
 });

 const tl = gsap.timeline({
 scrollTrigger: {
 trigger: document.body,
 start: "top top",
 end: "bottom bottom",
 scrub: 1, 
 }
 });

 tl.to(pathRef.current, {
 strokeDashoffset: 0,
 ease: "none"
 }, 0);

 }, { scope: containerRef });

 return (
 <div 
 ref={containerRef} 
 className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
 >
 <svg 
 className="w-full h-full opacity-80"
 preserveAspectRatio="none"
 viewBox="0 0 100 100"
 >
 <defs>
 <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
 <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
 <stop offset="20%" stopColor="#3333FF" />
 <stop offset="80%" stopColor="#2563eb" />
 <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
 </linearGradient>
 <filter id="liquidGlow">
 <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
 <feMerge>
 <feMergeNode in="coloredBlur"/>
 <feMergeNode in="SourceGraphic"/>
 </feMerge>
 </filter>
 </defs>
 
 <path
 ref={pathRef}
 d="M 50,0 
 C 70,20 30,40 50,50 
 C 70,60 30,80 50,100"
 fill="none"
 stroke="url(#waterGrad)"
 strokeWidth="3"
 strokeLinecap="round"
 filter="url(#liquidGlow)"
 vectorEffect="non-scaling-stroke"
 />
 </svg>
 </div>
 );
}

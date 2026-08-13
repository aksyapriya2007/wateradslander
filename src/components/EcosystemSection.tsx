import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { Building2, Printer, Factory, Truck, Droplet } from 'lucide-react';

const nodes = [
 { icon: Building2, title: "Brands", desc: "Initiate targeted local campaigns.", left: 20, top: 25 },
 { icon: Printer, title: "Printing Press", desc: "Produces serialized label rolls.", left: 80, top: 25 },
 { icon: Factory, title: "Water Plant", desc: "Bottles and applies labels.", left: 20, top: 75 },
 { icon: Truck, title: "Distributors", desc: "Deliver to target consumer zones.", left: 80, top: 75 },
];

function DraggableHub({ onOffsetChange }: { onOffsetChange: (pos: {x: number, y: number}) => void }) {
 const x = useMotionValue(0);
 const y = useMotionValue(0);
 
 useMotionValueEvent(x, "change", (latest) => onOffsetChange({ x: latest, y: y.get() }));
 useMotionValueEvent(y, "change", (latest) => onOffsetChange({ x: x.get(), y: latest }));

 return (
 <motion.div
 drag
 dragElastic={0.1}
 dragMomentum={false}
 style={{ x, y }}
 initial={{ scale: 0.5, opacity: 0 }}
 whileInView={{ scale: 1, opacity: 1 }}
 viewport={{ once: true }}
 transition={{ type: "spring", stiffness: 100, damping: 20 }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] flex items-center justify-center z-30 cursor-grab active:cursor-grabbing group"
 >
 {/* Outer Orbit */}
 <motion.div 
 animate={{ rotate: 360 }}
 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
 className="absolute inset-0 rounded-[45px] border border-[#3333FF]/20 pointer-events-none" 
 />
 <motion.div 
 animate={{ rotate: -360 }}
 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
 className="absolute inset-2 rounded-[40px] border-2 border-dashed border-[#3333FF]/30 pointer-events-none" 
 />

 {/* Main Glass Body */}
 <div className="absolute inset-4 rounded-[32px] backdrop-blur-2xl bg-wa-card/90 shadow-[0_0_60px_rgba(51,51,255,0.25)] group-hover:border-[#3333FF] group-hover:shadow-[0_0_80px_rgba(51,51,255,0.4)] transition-all duration-500 overflow-hidden pointer-events-none">
 {/* Shimmer Effect */}
 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
 </div>

 {/* Pulsing Core */}
 <motion.div
 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-8 rounded-2xl bg-[#3333FF]/20 blur-xl pointer-events-none"
 />

 {/* Center Icon Platform */}
 <div className="relative z-10 w-20 h-20 bg-wa-bg rounded-[20px] shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300 pointer-events-none">
 <Droplet className="w-9 h-9 text-[#3333FF] drop-shadow-md" strokeWidth={2} />
 </div>
 </motion.div>
 );
}

function DraggableSpoke({ node, delay, onOffsetChange }: { node: any, delay: number, onOffsetChange: (pos: {x: number, y: number}) => void }) {
 const x = useMotionValue(0);
 const y = useMotionValue(0);
 
 useMotionValueEvent(x, "change", (latest) => onOffsetChange({ x: latest, y: y.get() }));
 useMotionValueEvent(y, "change", (latest) => onOffsetChange({ x: x.get(), y: latest }));

 return (
 <div className="absolute z-20" style={{ top: `${node.top}%`, left: `${node.left}%`, transform: 'translate(-50%, -50%)' }}>
 <motion.div
 drag
 dragElastic={0.2}
 dragMomentum={false}
 style={{ x, y }}
 initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
 viewport={{ once: true }}
 transition={{ type: "spring", bounce: 0, duration: 0.8, delay }}
 className="flex flex-col items-center text-center relative group cursor-grab active:cursor-grabbing w-[220px] backdrop-blur-md bg-wa-card/90 rounded-[32px] p-6 shadow-lg transition-colors duration-300 hover:border-[#3333FF] hover:shadow-[0_10px_30px_rgba(51,51,255,0.15)]"
 whileTap={{ scale: 0.97 }}
 whileDrag={{ scale: 1.05, zIndex: 50 }}
 >
 <div className="w-16 h-16 relative z-10 mb-4 pointer-events-none">
 <div className="absolute inset-0 rounded-full bg-wa-bg shadow-inner flex items-center justify-center text-wa-text-muted transition-colors duration-500 group-hover:text-[#3333FF] group-hover:scale-110">
 <node.icon className="w-7 h-7" strokeWidth={1.5} />
 </div>
 </div>
 <h4 className="text-lg font-black text-wa-text mb-2 tracking-tight pointer-events-none">{node.title}</h4>
 <p className="text-xs font-medium text-wa-text-muted leading-relaxed pointer-events-none">{node.desc}</p>
 </motion.div>
 </div>
 );
}

export default function EcosystemSection() {
 const containerRef = useRef<HTMLElement>(null);
 const layoutRef = useRef<HTMLDivElement>(null);
 
 const [dim, setDim] = useState({ w: 1000, h: 600 });
 const [offsets, setOffsets] = useState(nodes.map(() => ({ x: 0, y: 0 })));
 const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });

 useEffect(() => {
 if (!layoutRef.current) return;
 const observer = new ResizeObserver(entries => {
 setDim({
 w: entries[0].contentRect.width,
 h: entries[0].contentRect.height
 });
 });
 observer.observe(layoutRef.current);
 
 // Trigger an initial measure
 if (layoutRef.current.getBoundingClientRect().width > 0) {
 setDim({
 w: layoutRef.current.getBoundingClientRect().width,
 h: layoutRef.current.getBoundingClientRect().height
 });
 }

 return () => observer.disconnect();
 }, []);

 const centerX = dim.w / 2 + centerOffset.x;
 const centerY = dim.h / 2 + centerOffset.y;

 return (
 <section id="ecosystem" ref={containerRef} className="relative bg-wa-bg py-32 md:py-40 overflow-hidden select-none">
  {/* ── THEME LIQUID ORB (CENTERED AURA) ── */}
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
    {/* Deep background ambient glow */}
    <div className="absolute w-[120vw] h-[120vw] max-w-[1500px] max-h-[1500px] bg-[#3333FF]/15 blur-[150px] rounded-full mix-blend-overlay" />
    
    {/* Primary organic pulsing blob behind center node */}
    <motion.div
      animate={{ 
        scale: [1, 1.15, 0.85, 1],
        rotate: [0, 90, 180, 360],
      }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      className="absolute"
      style={{
        width: '60vw',
        height: '60vw',
        maxWidth: '800px',
        maxHeight: '800px',
        background: 'radial-gradient(circle at 50% 50%, rgba(51,51,255,0.7) 0%, rgba(17,17,221,0.2) 60%, transparent 100%)',
        filter: 'blur(100px)',
        opacity: 0.6,
        borderRadius: "50% 50% 20% 80% / 25% 80% 20% 75%",
        willChange: "transform"
      }}
    />
  </div>

  {/* Background Dot Grid */}
 <div 
 className="absolute inset-0 opacity-40 z-0 pointer-events-none"
 style={{
 backgroundImage: 'radial-gradient(circle, var(--wa-border-hover) 1px, transparent 1px)',
 backgroundSize: '32px 32px'
 }}
 />

 {/* ── BACKGROUND AESTHETIC DOODLES ── */}
 <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-10 mix-blend-overlay">
    {/* Giant network structural circles */}
    <div className="absolute -left-[10%] top-[20%] w-[60vw] max-w-[800px] aspect-square border-[0.5px] border-wa-border/60 rounded-full" />
    <div className="absolute -left-[5%] top-[25%] w-[40vw] max-w-[500px] aspect-square border-[0.5px] border-wa-border/60 rounded-full border-dashed animate-[spin_120s_linear_infinite_reverse]" />
    
    {/* Tech plus signs */}
    <div className="absolute top-[30%] right-[15%] text-wa-text-muted/40 text-lg font-light tracking-[2em]">+ +</div>
    <div className="absolute bottom-[15%] left-[20%] text-wa-text-muted/40 text-lg font-light tracking-[2em]">+ +</div>
    
    {/* Structural line */}
    <div className="absolute top-[60%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-wa-border/60 to-transparent" />
  </div>

 <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col">
 
 {/* Header */}
 <div className="text-center mb-16 md:mb-24 pointer-events-none">
 <motion.h3 
 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-sm font-bold text-wa-text-muted opacity-90 uppercase tracking-widest mb-4"
 >
 The Ecosystem
 </motion.h3>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }}
 className="text-4xl md:text-6xl font-black tracking-apple-display text-wa-text leading-[1.05]"
 >
 A perfectly connected<br className="hidden md:block" /> offline network.
 </motion.h2>
 <p className="mt-6 text-wa-text-muted text-sm font-medium tracking-wide uppercase max-w-sm mx-auto animate-pulse">
 ( Drag nodes to interact )
 </p>
 </div>

 {/* Desktop Hub and Spoke Layout */}
 <div ref={layoutRef} className="hidden md:block relative w-full h-[600px] max-w-[1000px] mx-auto z-10">
 
 {/* Animated SVG Lines */}
 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
 <defs>
 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="var(--wa-border-hover)" />
 <stop offset="50%" stopColor="#3333FF" stopOpacity="0.8" />
 <stop offset="100%" stopColor="var(--wa-border-hover)" />
 </linearGradient>
 </defs>
 {nodes.map((node, i) => {
 const nodeX = dim.w * (node.left / 100) + offsets[i].x;
 const nodeY = dim.h * (node.top / 100) + offsets[i].y;
 return (
 <motion.line
 key={`line-${i}`}
 x1={centerX}
 y1={centerY}
 x2={nodeX}
 y2={nodeY}
 stroke="url(#lineGrad)"
 strokeWidth="2.5"
 strokeLinecap="round"
 initial={{ pathLength: 0 }}
 whileInView={{ pathLength: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 1.5, ease: "easeInOut" }}
 />
 );
 })}
 </svg>
 
 {/* Traveling data packets */}
 {nodes.map((node, i) => {
 const nodeX = dim.w * (node.left / 100) + offsets[i].x;
 const nodeY = dim.h * (node.top / 100) + offsets[i].y;
 const radius = 6;
 return (
 <motion.div
 key={`dot-${i}`}
 animate={{ 
 x: [centerX - radius, nodeX - radius], 
 y: [centerY - radius, nodeY - radius], 
 opacity: [0, 1, 1, 0] 
 }}
 transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
 className="absolute w-3 h-3 rounded-full bg-[#3333FF] shadow-[0_0_15px_4px_rgba(51,51,255,0.6)] z-10 pointer-events-none top-0 left-0"
 />
 );
 })}

 {/* Center Hub */}
 <DraggableHub onOffsetChange={setCenterOffset} />

 {/* Spoke Cards */}
 {nodes.map((node, i) => (
 <DraggableSpoke 
 key={`card-${i}`} 
 node={node} 
 delay={0.2 + i * 0.15} 
 onOffsetChange={(pos) => {
 setOffsets(prev => {
 const newOffsets = [...prev];
 newOffsets[i] = pos;
 return newOffsets;
 });
 }}
 />
 ))}
 </div>

 {/* Mobile Grid Layout (Not Draggable due to screen space) */}
 <div className="grid grid-cols-2 gap-4 md:hidden relative z-10 w-full px-2">
 {/* Mobile Hub */}
 <div className="col-span-2 flex justify-center mb-8 relative">
 <motion.div
 initial={{ scale: 0.5, opacity: 0 }}
 whileInView={{ scale: 1, opacity: 1 }}
 viewport={{ once: true }}
 transition={{ type: "spring", stiffness: 100, damping: 20 }}
 className="relative w-[140px] h-[140px] flex items-center justify-center"
 >
 <motion.div 
 animate={{ rotate: 360 }}
 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
 className="absolute inset-0 rounded-[35px] border border-[#3333FF]/20" 
 />
 <motion.div 
 animate={{ rotate: -360 }}
 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
 className="absolute inset-1.5 rounded-[30px] border-2 border-dashed border-[#3333FF]/30" 
 />
 <div className="absolute inset-3 rounded-[24px] backdrop-blur-xl bg-wa-card/90 shadow-[0_0_40px_rgba(51,51,255,0.2)] " />
 <motion.div
 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="absolute inset-6 rounded-xl bg-[#3333FF]/20 blur-lg"
 />
 <div className="relative z-10 w-16 h-16 bg-wa-bg rounded-[16px] shadow-inner flex items-center justify-center ">
 <Droplet className="w-7 h-7 text-[#3333FF] drop-shadow-md" strokeWidth={2} />
 </div>
 </motion.div>
 </div>
 
 {/* Mobile Cards */}
 {nodes.map((node, i) => (
 <motion.div
 key={`mobile-${i}`}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: i * 0.15 }}
 className="flex flex-col items-center text-center w-full backdrop-blur-md bg-wa-card/90 rounded-2xl p-5 shadow-sm"
 >
 <div className="w-12 h-12 relative z-10 mb-3 pointer-events-none">
 <div className="absolute inset-0 rounded-full bg-wa-bg shadow-sm flex items-center justify-center text-[#3333FF]">
 <node.icon className="w-5 h-5" strokeWidth={1.5} />
 </div>
 </div>
 <h4 className="text-sm font-black text-wa-text mb-1 leading-tight">{node.title}</h4>
 <p className="text-[11px] font-medium text-wa-text-muted leading-relaxed">{node.desc}</p>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 );
}

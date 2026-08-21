import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import {
 QrCode,
 Calculator,
 ArrowRight,
 ArrowLeft,
 Plus
} from "lucide-react"

import SplashScreen from "./components/SplashScreen"
import HeroSection from "./components/HeroSection"
import EcosystemSection from "./components/EcosystemSection"
import DeliveryVehicleTransition from "./components/DeliveryVehicleTransition"
// @ts-ignore
import BlurText from "./components/ui/BlurText"
import AnimatedNumber from "./components/ui/AnimatedNumber"
// @ts-ignore
import StrokeText from "./components/ui/StrokeText"
import WaterParticles from "./components/WaterParticles"
// @ts-ignore
import GradientWaves from "./components/GradientWaves"
import FooterSection from "./components/FooterSection"
import ProcessFlowSection from "./components/ProcessFlowSection"

// Simple CountUp Component
function CountUp({ end, suffix = "", prefix = "", decimals = 0 }: { end: number; suffix?: string; prefix?: string; decimals?: number }) {
 const [count, setCount] = useState(0)

 useEffect(() => {
 let start = 0
 const duration = 2000
 const stepTime = 20
 const steps = duration / stepTime
 const increment = end / steps

 const timer = setInterval(() => {
 start += increment
 if (start >= end) {
 setCount(end)
 clearInterval(timer)
 } else {
 setCount(start)
 }
 }, stepTime)

 return () => clearInterval(timer)
 }, [end])

 return (
 <span>
 {prefix}
 {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
 {suffix}
 </span>
 )
}

const faqs = [
 {
 question: "How do you track offline bottles?",
 answer: "Every label printed is serialized with a unique QR code. When scanned by a delivery driver or consumer, it logs real-time geographic and engagement data."
 },
 {
 question: "Can you target specific cities or zip codes?",
 answer: "Yes, our distributors are mapped to specific regions, allowing you to deploy bottles precisely where your target audience is located."
 },
 {
 question: "What is a typical timeline?",
 answer: "From artwork approval to bottles in hands, a typical regional campaign takes about 2-4 weeks."
 },
 {
 question: "Can you work with our existing brand?",
 answer: "Absolutely. You supply the branding and messaging, and our design team optimizes it for the physical bottle label format."
 },
 {
 question: "What happens after I reach out?",
 answer: "We’ll schedule a quick discovery call to understand your target market, volume needs, and campaign goals before building a custom proposal."
 }
];

export default function App() {
 const [showSplash, setShowSplash] = useState(true)
 const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
 
 // Theme state
 const [isDark, setIsDark] = useState(false)

 useEffect(() => {
 if (isDark) {
 document.documentElement.classList.add('dark')
 } else {
 document.documentElement.classList.remove('dark')
 }
 }, [isDark])

 // Scroll progress bar
 const { scrollYProgress } = useScroll()
 const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

 // AI Planner State
 const [targetArea, setTargetArea] = useState("Metropolitan Hubs")
 const [canCount, setCanCount] = useState(50000)
 const [duration, setDuration] = useState(30)

 // Calculations for Planner
 const estBudget = Math.round(canCount * 0.45)
 const estImpressions = Math.round(canCount * 3.8)
 const estScans = Math.round(canCount * 0.082)
 const estCostPerScan = (estBudget / estScans).toFixed(2)

 return (
 <div className="min-h-screen bg-wa-bg text-wa-text font-sans selection:bg-[#3333FF] selection:text-white relative overflow-x-hidden">
 {/* ── SCROLL PROGRESS BAR ── */}
 <motion.div
 style={{ scaleY: scaleX, transformOrigin: 'bottom' }}
 className="fixed top-0 bottom-0 right-0 w-[4px] bg-gradient-to-t from-[#3333FF] via-[#5555FF] to-[#1111DD] z-[9999]"
 />
 
 {/* ── SPLASH SCREEN ── */}
 <AnimatePresence>
 {showSplash && (
 <SplashScreen 
 onComplete={() => {
 setShowSplash(false);
 }} 
 />
 )}
 </AnimatePresence>
 
 {/* Subtle Water Flow Background */}
 <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-20">
 <GradientWaves
 horizonColor="#f8fafc"
 waveColor="#bfdbfe"
 crestColor="#eff6ff"
 speed={0.2}
 amplitude={1.5}
 waveScale={0.8}
 opacity={0.6}
 mouseInteraction={false}
 grain={false}
 />
 </div>

 {/* Ambient particles */}
 <WaterParticles />
 
 {/* ── HERO SECTION (includes integrated nav) ── */}
 <HeroSection isDark={isDark} setIsDark={setIsDark} />



 {/* ── 8. THE ECOSYSTEM GRAPH (CINEMATIC MARQUEE + REFLECTION) ── */}
 <EcosystemSection />

 {/* ── NEW: DELIVERY TRUCK TRANSITION ── */}
 <DeliveryVehicleTransition /> {/* ── 8.5 PROCESS FLOW SECTION ── */}
 <ProcessFlowSection />

 <section className="relative z-10 w-full bg-wa-bg py-32 md:py-40">
 <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
 <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between relative overflow-hidden">
 
 {/* Left Column: Title & Stark Metrics */}
 <motion.div 
 initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.8 }}
 viewport={{ once: true }}
 className="flex flex-col flex-1"
 >
 <motion.div
 initial={{ opacity: 0, y: -10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="flex items-center gap-2 mb-8"
 >
 <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
 <QrCode className="w-4 h-4 text-[#3333FF]" />
 </motion.div>
 <span className="text-[10px] font-bold text-[#3333FF] uppercase tracking-widest">
 QR Traceability
 </span>
 </motion.div>
 
 <h2 className="text-display-large text-wa-text mb-8">
 {['Every Can.', 'Every Scan.'].map((line, i) => (
 <motion.span
 key={i}
 initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
 viewport={{ once: true }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: i * 0.15 }}
 className="block"
 >{line}</motion.span>
 ))}
 <motion.span
 initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
 viewport={{ once: true }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: 0.3 }}
 className="block text-[#3333FF]"
 >Measurable.</motion.span>
 </h2>
 
 <motion.p
 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
 viewport={{ once: true }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: 0.4 }}
 className="text-base md:text-lg font-medium text-wa-text-muted max-w-md leading-relaxed mb-16"
 >
 WaterAds turns standard hydration cans into verifiable customer touchpoints with geographic precision.
 </motion.p>

 {/* Counter Blocks */}
 <div className="grid grid-cols-2 gap-x-12 gap-y-16">
 {[
 { end: 148500, suffix: '+', label: 'Cans Distributed', delay: 0.2, color: 'bg-[#3333FF]' },
 { end: 18920, suffix: '', label: 'QR Scans Recorded', delay: 0.3, color: 'bg-[#3333FF]' },
 { end: 42, suffix: '', label: 'Locations Reached', delay: 0.4, color: 'bg-[#3333FF]' },
 { end: 98.4, suffix: '%', decimals: 1, label: 'Campaign Progress', delay: 0.5, color: 'bg-[#3333FF]' },
 ].map((stat, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
 whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: stat.delay }}
 viewport={{ once: true }}
 className="flex flex-col border-l-2 border-wa-border pl-6 relative"
 >
 <motion.div
 initial={{ height: 0 }}
 whileInView={{ height: 40 }}
 viewport={{ once: true }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.8, delay: stat.delay + 0.1 }}
 className={`absolute -left-[2px] top-0 w-[2px] ${stat.color}`}
 />
 <div className="text-4xl sm:text-5xl font-black tracking-tighter text-wa-text leading-none">
 <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
 </div>
 <div className="text-[10px] font-bold text-wa-text-muted opacity-60 uppercase tracking-widest mt-3">{stat.label}</div>
 </motion.div>
 ))}
 </div>
 </motion.div>

 {/* Right Column: Animated Dashboard Preview */}
 <motion.div 
 initial={{ opacity: 0, scale: 0.93, y: 30 }}
 whileInView={{ opacity: 1, scale: 1, y: 0 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 viewport={{ once: true }}
 className="relative w-full flex-1 aspect-square md:aspect-auto md:h-[600px] rounded-[40px] flex items-center justify-center p-8 overflow-hidden"
 >
 {/* Animated background grid */}
 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--wa-text) 1px, transparent 1px), linear-gradient(to right, var(--wa-text) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
 {/* Glowing accent */}
 <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#3333FF]/10 blur-3xl" />

 <motion.div 
    className="relative w-full max-w-sm p-8 rounded-[32px] flex flex-col space-y-8 apple-glass border border-white/20 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_50px_-15px_rgba(51,51,255,0.1)]"
 >
 
 <div className="flex items-center justify-between pb-6 border-b border-wa-border/50">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 apple-glass-light text-wa-text flex items-center justify-center rounded-lg">
 <QrCode className="w-5 h-5" />
 </div>
 <div>
 <h4 className="text-sm font-bold text-wa-text tracking-tight">BATCH #WA-2026-89</h4>
 <span className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest">METROPOLITAN REGION</span>
 </div>
 </div>
 <motion.span
 animate={{ opacity: [1, 0.4, 1] }}
 transition={{ duration: 2, repeat: Infinity }}
 className="px-2 py-1 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold uppercase tracking-widest rounded-full"
 >
 ● LIVE
 </motion.span>
 </div>

 {/* QR Scan Beam Visual */}
 <div className="relative apple-glass-light p-12 rounded-xl flex flex-col items-center justify-center space-y-8 overflow-hidden">
 <motion.div 
   animate={{ rotateY: [-8, 8, -8], rotateX: [8, -8, 8], scale: [1, 1.05, 1] }}
   transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
   className="w-32 h-32 bg-white p-3 rounded-lg flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(51,51,255,0.15)]"
   style={{ transformStyle: 'preserve-3d' }}
 >
 <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-sm">
 <path d="M10 10 h30 v30 h-30 z M15 15 h20 v20 h-20 z" fill="#000" />
 <path d="M60 10 h30 v30 h-30 z M65 15 h20 v20 h-20 z" fill="#000" />
 <path d="M10 60 h30 v30 h-30 z M15 65 h20 v20 h-20 z" fill="#000" />
 <rect x="45" y="45" width="10" height="10" fill="#000" />
 <rect x="60" y="60" width="15" height="15" fill="#000" />
 <rect x="75" y="75" width="15" height="15" fill="#000" />
 </svg>
 <motion.div 
 animate={{ top: ['-20%', '100%', '-20%'] }}
 transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
 className="absolute inset-x-0 h-[40%] bg-gradient-to-b from-transparent to-[#3333FF]/30 border-b-[3px] border-[#3333FF] shadow-[0_0_20px_#3333FF] z-20" 
 />
 </motion.div>
 <div className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest">
 SCAN TO VIEW ATTRIBUTION
 </div>
 </div>

 </motion.div>
 </motion.div>

 </div>
 </div>
 </section>

 {/* ── 10. AI CAMPAIGN PLANNER WIDGET ── */}
 {false && (
 <section id="planner" className="relative z-10 py-32 px-6 max-w-[1400px] mx-auto">
 <div className="bg-wa-card backdrop-blur-md bg-wa-card/80 text-wa-text p-8 md:p-16 lg:p-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center">
 
 <div className="text-center max-w-2xl w-full mx-auto space-y-4 mb-20">
 <div className="inline-flex items-center gap-2 mb-4">
 <Calculator className="w-4 h-4 text-wa-text" />
 <span className="text-[10px] font-bold text-wa-text uppercase tracking-widest">
 Interactive Calculator
 </span>
 </div>
 <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter leading-[0.9] uppercase text-wa-text">
 PLAN YOUR<br />CAMPAIGN
 </h2>
 <p className="text-sm md:text-base font-semibold text-wa-text-muted opacity-60 mt-6">
 Estimate your reach, cost efficiency, and attribution projection instantly.
 </p>
 </div>

 <div className="w-full max-w-5xl">
 {/* Controls Grid */}
 <div className="grid md:grid-cols-3 gap-12 md:gap-16 border-t py-12 mb-12">
 
 {/* Field 1: Target Area */}
 <div className="flex flex-col gap-4">
 <label className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block">Target Region</label>
 <select 
 value={targetArea} 
 onChange={(e) => setTargetArea(e.target.value)}
 className="w-full bg-transparent pb-3 text-lg md:text-xl font-bold text-wa-text focus:outline-none focus:border-white appearance-none cursor-pointer rounded-none"
 >
 <option value="Metropolitan Hubs" className="text-wa-text">Metropolitan Hubs</option>
 <option value="Tech Parks & IT Hubs" className="text-wa-text">Tech Parks & IT Hubs</option>
 <option value="Universities & Colleges" className="text-wa-text">Universities & Colleges</option>
 <option value="Events & Conferences" className="text-wa-text">Events & Conferences</option>
 </select>
 </div>

 {/* Field 2: Can Quantity */}
 <div className="flex flex-col gap-4">
 <label className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block flex justify-between">
 <span>Number of Cans</span>
 <span className="text-wa-text font-black">{canCount.toLocaleString()}</span>
 </label>
 <div className="relative pt-2">
 <input 
 type="range" 
 min="10000" 
 max="250000" 
 step="5000"
 value={canCount}
 onChange={(e) => setCanCount(Number(e.target.value))}
 className="w-full h-1 bg-wa-card backdrop-blur-md bg-wa-card/80/20 rounded-none appearance-none cursor-pointer accent-white"
 />
 </div>
 </div>

 {/* Field 3: Duration */}
 <div className="flex flex-col gap-4">
 <label className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block flex justify-between">
 <span>Duration</span>
 <span className="text-wa-text font-black">{duration} Days</span>
 </label>
 <div className="relative pt-2">
 <input 
 type="range" 
 min="7" 
 max="90" 
 step="7"
 value={duration}
 onChange={(e) => setDuration(Number(e.target.value))}
 className="w-full h-1 bg-wa-card backdrop-blur-md bg-wa-card/80/20 rounded-none appearance-none cursor-pointer accent-white"
 />
 </div>
 </div>

 </div>

 {/* Results Output Cards */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
 <div className="flex flex-col border-l-2 border-wa-border pl-4">
 <span className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block mb-2">BUDGET</span>
 <span className="text-3xl md:text-4xl font-black text-wa-text tracking-tighter">${estBudget.toLocaleString()}</span>
 </div>

 <div className="flex flex-col border-l-2 border-wa-border pl-4">
 <span className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block mb-2">IMPRESSIONS</span>
 <span className="text-3xl md:text-4xl font-black text-wa-text tracking-tighter">{estImpressions.toLocaleString()}</span>
 </div>

 <div className="flex flex-col border-l-2 border-wa-border pl-4">
 <span className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block mb-2">SCANS</span>
 <span className="text-3xl md:text-4xl font-black text-wa-text tracking-tighter">{estScans.toLocaleString()}</span>
 </div>

 <div className="flex flex-col border-l-2 border-wa-border pl-4">
 <span className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest block mb-2">COST / SCAN</span>
 <span className="text-3xl md:text-4xl font-black text-wa-text tracking-tighter">${estCostPerScan}</span>
 </div>
 </div>

 <div className="text-center">
 <button className="bg-wa-card backdrop-blur-md bg-wa-card/80 text-wa-text font-black uppercase tracking-widest text-[11px] px-12 py-5 hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
 GENERATE ESTIMATE <ArrowRight className="w-3.5 h-3.5" />
 </button>
 </div>
 </div>
 </div>
 </section>
 )}

 {/* ── 12. METRICS SECTION (Minimalist + Geometric Spice) ── */}
 <section className="relative z-10 pt-16 pb-32 overflow-hidden bg-wa-bg">
 
 {/* Background Gradient Orb */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
 <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle at 40% 40%, #5555FF 0%, #3333FF 25%, #1111DD 50%, #0000AA 75%, transparent 100%)', filter: 'blur(80px)' }} />
 </div>

 <div className="max-w-[1400px] mx-auto pt-32 px-6 md:px-12 relative z-10">
 {/* Right Column: Statement & Numbers */}
 <div className="space-y-24">
 <div className="text-4xl sm:text-5xl md:text-[52px] font-medium leading-[1.1] tracking-tight max-w-5xl text-wa-text">
 <BlurText
 text="We connect leading brands with local water plants and distributors, creating trackable offline advertising campaigns that reach millions of consumers daily."
 delay={35}
 animateBy="words"
 direction="top"
 />
 </div>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 viewport={{ once: false, margin: "-100px" }}
 className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4"
 >
 <div className="flex flex-col border-l-2 border-[#DDDEFF] pl-6 relative">
 <div className="absolute -left-[2px] top-0 w-[2px] h-10 bg-[#3333FF]" />
 <AnimatedNumber value={150} suffix="K+" duration={2} className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-wa-text leading-none" />
 <span className="text-[10px] font-bold text-wa-text-muted opacity-60 uppercase tracking-widest mt-4 flex items-center gap-2">
 <span className="w-1 h-1 rounded-full bg-[#3333FF] block" />
 Cans Distributed
 </span>
 </div>
 
 <div className="flex flex-col border-l-2 border-[#DDDEFF] pl-6 relative">
 <div className="absolute -left-[2px] top-0 w-[2px] h-10 bg-[#3333FF]" />
 <AnimatedNumber value={300} suffix="+" duration={2} className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-wa-text leading-none" />
 <span className="text-[10px] font-bold text-wa-text-muted opacity-60 uppercase tracking-widest mt-4 flex items-center gap-2">
 <span className="w-1 h-1 rounded-full bg-[#3333FF] block" />
 Local Plants
 </span>
 </div>

 <div className="flex flex-col border-l-2 border-blue-100 pl-6 relative">
 <div className="absolute -left-[2px] top-0 w-[2px] h-10 bg-[#3333FF]" />
 <AnimatedNumber value={20} suffix="K+" duration={2} className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-wa-text leading-none" />
 <span className="text-[10px] font-bold text-wa-text-muted opacity-60 uppercase tracking-widest mt-4 flex items-center gap-2">
 <span className="w-1 h-1 rounded-full bg-[#3333FF] block" />
 Scans Recorded
 </span>
 </div>
 </motion.div>
 </div>
 </div>
 </section>


 {/* ── 12.5 TESTIMONIALS (TABELA STYLE) ── */}
 <section id="testimonials" className="relative z-10 py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto bg-wa-bg">
 <div className="relative overflow-hidden">
 
 {/* Header Row */}
 <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 md:mb-32 gap-8">
 <div className="space-y-4">
 {/* Clean label */}
 <span className="text-[11px] font-bold text-[#3333FF] uppercase tracking-widest">
 Testimonials
 </span>
 <h2 className="text-display-large text-wa-text">
 What Our Users<br />Say About WaterAds
 </h2>
 </div>
 
 {/* Arrows */}
 <div className="flex gap-3">
 <button className="w-12 h-12 rounded-full bg-wa-card hover:bg-slate-100 flex items-center justify-center text-wa-text -hover transition-colors">
 <ArrowLeft className="w-5 h-5" />
 </button>
 <button className="w-12 h-12 rounded-full bg-wa-card hover:bg-slate-100 flex items-center justify-center text-wa-text -hover transition-colors">
 <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
 
 {[ 
 {
 icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mb-10 text-[#3333FF]"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>,
 quote: '"As a regional distributor, I appreciate the real-time tracking and robust verification measures WaterAds offers. It has not only simplified our day-to-day operations but also given our clients peace of mind regarding placement."',
 name: 'Alastair Frankl', role: 'Regional Distributor', img: 'https://i.pravatar.cc/150?img=11', offset: false
 },
 {
 icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full border-[7px] border-sky-400 mb-10" />,
 quote: '"WaterAds has been a game-changer for our printing press. The automated routing functionality allows us to seamlessly accept nearby orders, and the digital asset delivery ensures we print perfectly every time."',
 name: 'Jason Mueller', role: 'Print Facility Manager', img: 'https://i.pravatar.cc/150?img=12', offset: true
 },
 {
 icon: <div className="grid grid-cols-2 gap-1 w-8 h-8 mb-10">
 {[0,1,2,3].map(j => <motion.div key={j} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }} className="w-3.5 h-3.5 rounded-full bg-[#3333FF]" />)}
 </div>,
 quote: '"Working with WaterAds has transformed the way I approach offline marketing. The targeted hydration campaigns allow me to provide more attentive reach to our customers, and the ROI tracking is unmatched."',
 name: 'Jill Pescosolido', role: 'Brand Director', img: 'https://i.pravatar.cc/150?img=47', offset: false
 }
 ].map((card, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
 whileHover={{ y: -6, transition: { duration: 0.3 } }}
 className={`apple-glass rounded-3xl p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] border border-white/20 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.06)] ${card.offset ? 'md:mt-16' : ''} hover:border-white/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] cursor-default`}
 >
 <div>
 {card.icon}
 <p className="text-sm md:text-[15px] font-medium text-wa-text-muted leading-relaxed">{card.quote}</p>
 </div>
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
 className="flex items-center gap-4 mt-12"
 >
 <img src={card.img} alt={card.name} className="w-12 h-12 rounded-full object-cover" />
 <div>
 <h4 className="text-sm font-bold text-wa-text">{card.name}</h4>
 <p className="text-xs text-[#3333FF] font-semibold mt-1">{card.role}</p>
 </div>
 </motion.div>
 </motion.div>
 ))}

 </div>
 </div>
 </section>

 {/* ── 12.8 FAQ ── */}
 <section className="relative z-10 py-32 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
 <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
 
 {/* Left Column */}
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: false, margin: "-100px" }}
 transition={{ duration: 0.6, ease: "easeOut" }}
 className="lg:w-1/3 flex flex-col items-start"
 >
 <h3 className="text-[10px] font-bold text-wa-text-muted opacity-80 uppercase tracking-widest mb-4">
 FAQ
 </h3>
 <h2 className="text-display-large text-wa-text mb-16">
 Have Some Questions?
 </h2>
 
 <div className="mt-auto hidden lg:block">
 <h4 className="text-2xl font-black tracking-tighter text-wa-text uppercase mb-3">
 NOT FINDING ANSWERS?
 </h4>
 <p className="text-sm font-semibold text-wa-text mb-8 max-w-[250px]">
 Reach out anytime, we are happy to help.
 </p>
 <a
 href="#contact"
 className="bg-[#3333FF] text-white hover:bg-[#2222EE] font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md cursor-pointer inline-flex items-center gap-2 hover:shadow-lg shrink-0 press-scale"
 >
 CONTACT US <ArrowRight className="w-3 h-3" />
 </a>
 </div>
 </motion.div>

 {/* Right Column (Accordion) */}
 <div className="lg:w-2/3 -hover">
 {faqs.map((faq, index) => {
 const isOpen = openFaqIndex === index;
 return (
 <motion.div 
 key={index} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: false, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="-hover"
 >
 <button 
 onClick={() => setOpenFaqIndex(isOpen ? null : index)}
 className="w-full py-8 flex items-center justify-between text-left group"
 >
 <h4 className={`text-display-small transition-colors duration-300 ${isOpen ? 'text-[#3333FF]' : 'text-wa-text group-hover:text-wa-text-muted'}`}>
 {faq.question}
 </h4>
 <motion.div
 animate={{ rotate: isOpen ? 45 : 0 }}
 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="ml-4 shrink-0"
 >
 <Plus className={`w-8 h-8 transition-colors duration-300 ${isOpen ? 'text-[#3333FF]' : 'text-wa-text-muted opacity-60 group-hover:text-wa-text-muted'}`} />
 </motion.div>
 </button>
 <motion.div 
 initial={false}
 animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
 transition={{ type: "spring" as const, bounce: 0, duration: 0.3 }}
 className="overflow-hidden"
 >
 <div className="pb-8">
 <p className="text-base md:text-lg font-bold text-wa-text-muted max-w-2xl leading-relaxed">
 {faq.answer}
 </p>
 </div>
 </motion.div>
 </motion.div>
 );
 })}
 </div>

 {/* Mobile version of bottom left column */}
 <div className="lg:hidden mt-8">
 <h4 className="text-xl font-black tracking-tight text-wa-text uppercase mb-3">
 NOT FINDING ANSWERS?
 </h4>
 <p className="text-sm font-semibold text-wa-text mb-8 max-w-[250px]">
 Reach out anytime, we are happy to help.
 </p>
 <a
 href="#contact"
 className="bg-[#3333FF] text-white hover:bg-[#2222EE] font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md cursor-pointer inline-flex items-center gap-2 hover:shadow-lg w-max press-scale"
 >
 CONTACT US <ArrowRight className="w-3 h-3" />
 </a>
 </div>

 </div>
 </section>

 {/* ── 13. FINAL CLOSING CTA (MINIMALIST) ── */}
 <section className="relative z-10 w-full py-32 md:py-48 px-6 text-center bg-wa-bg flex justify-center items-center overflow-hidden">
 {/* Animated gradient orb */}
 <div className="absolute inset-0 pointer-events-none z-0">
 <motion.div
 animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full"
 style={{ background: 'radial-gradient(circle, #3333FF 0%, #3333FF 30%, #4444FF 60%, transparent 100%)', filter: 'blur(80px)' }}
 />
 {/* Floating micro-circles */}
 {[{ x: '15%', y: '20%', size: 80, delay: 0, color: '#BBBBFF' }, { x: '80%', y: '70%', size: 60, delay: 1, color: '#AAAAFF' }, { x: '70%', y: '15%', size: 50, delay: 2, color: '#BBBBFF' }, { x: '10%', y: '75%', size: 40, delay: 1.5, color: '#DDDEFF' }].map((c, i) => (
 <motion.div
 key={i}
 animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
 transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
 className="absolute rounded-full blur-xl"
 style={{ left: c.x, top: c.y, width: c.size, height: c.size, background: c.color }}
 />
 ))}
 </div>
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
 viewport={{ once: true }}
 className="flex flex-col items-center justify-center max-w-4xl mx-auto relative z-10"
 >
 <span className="text-[10px] md:text-xs font-bold text-wa-text-muted opacity-80 uppercase tracking-[0.2em] mb-6">
 Ready to Start?
 </span>
 
 <div className="w-full flex flex-col items-center justify-center mb-8">
 <StrokeText
 text="CONNECT YOUR"
 strokeColor={isDark ? "#475569" : "#cbd5e1"}
 fillColor={isDark ? "#FFFFFF" : "#111111"}
 strokeWidth={1.5}
 drawDuration={1.2}
 fillDelay={0.1}
 stagger={0.03}
 ease="power2.out"
 trigger="scroll"
 fillMode="wipe"
 fontSize={128}
 fontWeight={900}
 letterSpacing={-4}
 />
 <StrokeText
 text="BRAND OR PLANT"
 strokeColor={isDark ? "#475569" : "#cbd5e1"}
 fillColor={isDark ? "#FFFFFF" : "#111111"}
 strokeWidth={1.5}
 drawDuration={1.2}
 fillDelay={0.1}
 stagger={0.03}
 ease="power2.out"
 trigger="scroll"
 fillMode="wipe"
 fontSize={128}
 fontWeight={900}
 letterSpacing={-4}
 />
 </div>
 
 <p className="text-base md:text-xl font-bold text-wa-text-muted max-w-2xl mx-auto leading-relaxed mb-12">
 Join hundreds of active advertisers and bottling plants<br className="hidden sm:block" /> generating real-time offline scan engagements today.
 </p>

 <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
 <motion.a
 href="#contact"
 whileHover={{ y: -3, scale: 1.02 }}
 whileTap={{ scale: 0.97 }}
 transition={{ duration: 0.2 }}
 className="w-full sm:w-auto bg-[#3333FF] text-white font-bold text-[11px] uppercase tracking-widest px-8 py-5 rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-2 min-w-[240px] hover:shadow-[0_20px_40px_-12px_rgba(51,51,255,0.5)] hover:bg-[#2222EE] press-scale"
 >
 GET STARTED FREE <ArrowRight className="w-4 h-4" />
 </motion.a>
 
 <motion.a
 href="#login"
 whileHover={{ y: -3 }}
 whileTap={{ scale: 0.97 }}
 transition={{ duration: 0.2 }}
 className="w-full sm:w-auto apple-glass border border-white/20 dark:border-white/10 text-wa-text font-bold text-[11px] uppercase tracking-widest px-8 py-5 rounded-full cursor-pointer flex items-center justify-center min-w-[240px] hover:border-white/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] press-scale"
 >
 SIGN IN TO ACCOUNT
 </motion.a>
 </div>
 </motion.div>
 </section>

 {/* ── FOOTER ── */}
 <FooterSection />

 </div>
 )
}

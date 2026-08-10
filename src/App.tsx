import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  QrCode,
  Building2,
  Printer,
  Truck,
  Calculator,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus
} from "lucide-react"

import SplashScreen from "./components/SplashScreen"
import HeroSection from "./components/HeroSection"
import EcosystemSection from "./components/EcosystemSection"
import DeliveryVehicleTransition from "./components/DeliveryVehicleTransition"
import FoldText from "./components/ui/FoldText"
import BlurText from "./components/ui/BlurText"
import AnimatedNumber from "./components/ui/AnimatedNumber"
import StrokeText from "./components/ui/StrokeText"
import WaterParticles from "./components/WaterParticles"
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
  const [isLoaded, setIsLoaded] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

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
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans selection:bg-sky-500 selection:text-white relative overflow-x-hidden">
      
      {/* ── SPLASH SCREEN ── */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen 
            onComplete={() => {
              setShowSplash(false);
              // Trigger header fade in shortly after splash leaves
              setTimeout(() => setIsLoaded(true), 100);
            }} 
          />
        )}
      </AnimatePresence>
      
      {/* Subtle Water Flow Background */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply opacity-40">
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
      
      {/* ── HEADER ── */}
      <header
        className={`fixed top-4 inset-x-4 md:top-6 md:inset-x-8 z-50 transition-all duration-700 flex justify-center pointer-events-none ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <div className="w-full max-w-[1400px] h-16 md:h-20 px-6 md:px-8 flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full pointer-events-auto">
          
          {/* LEFT: Branding */}
          <a href="#" className="flex items-center gap-4 group">
            {/* Tiny Geometric Logo */}
            <div className="flex items-center gap-1.5 shrink-0 transition-transform group-hover:scale-105">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-cyan-400" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-sky-500" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-cyan-400" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter leading-none text-[#111] mt-1">
              waterads
            </span>
          </a>

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-8">
            <a href="#login" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-[#111] transition-colors">
              Sign In
            </a>
            <a href="#contact" className="bg-[#111] hover:bg-sky-500 text-white font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-sky-500/30">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="sm:hidden text-black hover:text-sky-500 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-32 md:h-40" />

      {/* ── NEW GSAP HERO SECTION ── */}
      <HeroSection />



      {/* ── 8. THE ECOSYSTEM GRAPH (CINEMATIC MARQUEE + REFLECTION) ── */}
      <EcosystemSection />

      {/* ── NEW: DELIVERY TRUCK TRANSITION ── */}
      <DeliveryVehicleTransition />      {/* ── 8.5 PROCESS FLOW SECTION ── */}
      <ProcessFlowSection />

      <section className="relative z-10 w-full bg-[#FAFAFA] py-24 md:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="w-full bg-white rounded-[40px] p-10 md:p-16 lg:p-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between relative overflow-hidden">
          
          {/* Left Column: Title & Stark Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
            className="flex flex-col flex-1"
          >
            <div className="flex items-center gap-2 mb-8">
              <QrCode className="w-4 h-4 text-sky-500" />
              <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest">
                QR Traceability
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-[72px] font-black tracking-tighter text-slate-900 leading-[0.9] uppercase mb-8">
              <span className="text-slate-900">EVERY CAN.</span><br />
              <span className="text-slate-900">EVERY SCAN.</span><br />
              <span className="text-blue-600">MEASURABLE.</span>
            </h2>
            
            <p className="text-sm md:text-base font-medium text-slate-600 max-w-md leading-relaxed mb-16">
              WaterAds turns standard hydration cans into verifiable customer touchpoints with geographic precision.
            </p>

            {/* Stark Counter Blocks */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="flex flex-col border-l-2 border-sky-100 pl-6"
              >
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-none">
                  <CountUp end={148500} suffix="+" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Cans Distributed</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="flex flex-col border-l-2 border-sky-100 pl-6"
              >
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-none">
                  <CountUp end={18920} suffix="" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">QR Scans Recorded</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
                className="flex flex-col border-l-2 border-sky-100 pl-6"
              >
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-none">
                  <CountUp end={42} suffix="" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Locations Reached</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
                className="flex flex-col border-l-2 border-sky-100 pl-6"
              >
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-none">
                  <CountUp end={98.4} suffix="%" decimals={1} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Campaign Progress</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Stark Visual Product Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false }}
            className="relative w-full flex-1 aspect-square md:aspect-auto md:h-[600px] bg-slate-900 rounded-3xl flex items-center justify-center p-8 overflow-hidden shadow-2xl shadow-slate-900/20"
          >
            <div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-sm p-8 rounded-2xl shadow-2xl flex flex-col space-y-8">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white text-black flex items-center justify-center">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">BATCH #WA-2026-89</h4>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">METROPOLITAN REGION</span>
                  </div>
                </div>
                <span className="px-2 py-1 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold uppercase tracking-widest">
                  ACTIVE
                </span>
              </div>

              {/* QR Scan Beam Visual */}
              <div className="relative bg-[#111] border border-white/5 p-12 rounded-xl flex flex-col items-center justify-center space-y-8 overflow-hidden">
                <div className="w-32 h-32 bg-white p-3 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                    <path d="M10 10 h30 v30 h-30 z M15 15 h20 v20 h-20 z" fill="#000" />
                    <path d="M60 10 h30 v30 h-30 z M65 15 h20 v20 h-20 z" fill="#000" />
                    <path d="M10 60 h30 v30 h-30 z M15 65 h20 v20 h-20 z" fill="#000" />
                    <rect x="45" y="45" width="10" height="10" fill="#000" />
                    <rect x="60" y="60" width="15" height="15" fill="#000" />
                    <rect x="75" y="75" width="15" height="15" fill="#000" />
                  </svg>
                  
                  {/* High Contrast Laser Beam Animation */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                    className="absolute inset-x-0 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] z-20" 
                  />
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  SCAN TO VIEW ATTRIBUTION
                </div>
              </div>

            </div>
          </motion.div>

          </div>
        </div>
      </section>

      {/* ── 10. AI CAMPAIGN PLANNER WIDGET ── */}
      {false && (
        <section id="planner" className="relative z-10 py-32 px-6 max-w-[1400px] mx-auto">
          <div className="bg-[#0a0a0a] text-white p-8 md:p-16 lg:p-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-[#222] flex flex-col items-center">
            
            <div className="text-center max-w-2xl w-full mx-auto space-y-4 mb-20">
              <div className="inline-flex items-center gap-2 mb-4">
                <Calculator className="w-4 h-4 text-white" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  Interactive Calculator
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter leading-[0.9] uppercase text-white">
                PLAN YOUR<br />CAMPAIGN
              </h2>
              <p className="text-sm md:text-base font-semibold text-gray-400 mt-6">
                Estimate your reach, cost efficiency, and attribution projection instantly.
              </p>
            </div>

            <div className="w-full max-w-5xl">
              {/* Controls Grid */}
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 border-t border-b border-white/10 py-12 mb-12">
                
                {/* Field 1: Target Area */}
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Target Region</label>
                  <select 
                    value={targetArea} 
                    onChange={(e) => setTargetArea(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-lg md:text-xl font-bold text-white focus:outline-none focus:border-white appearance-none cursor-pointer rounded-none"
                  >
                    <option value="Metropolitan Hubs" className="text-black">Metropolitan Hubs</option>
                    <option value="Tech Parks & IT Hubs" className="text-black">Tech Parks & IT Hubs</option>
                    <option value="Universities & Colleges" className="text-black">Universities & Colleges</option>
                    <option value="Events & Conferences" className="text-black">Events & Conferences</option>
                  </select>
                </div>

                {/* Field 2: Can Quantity */}
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block flex justify-between">
                    <span>Number of Cans</span>
                    <span className="text-white font-black">{canCount.toLocaleString()}</span>
                  </label>
                  <div className="relative pt-2">
                    <input 
                      type="range" 
                      min="10000" 
                      max="250000" 
                      step="5000"
                      value={canCount}
                      onChange={(e) => setCanCount(Number(e.target.value))}
                      className="w-full h-1 bg-white/20 rounded-none appearance-none cursor-pointer accent-white"
                    />
                  </div>
                </div>

                {/* Field 3: Duration */}
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block flex justify-between">
                    <span>Duration</span>
                    <span className="text-white font-black">{duration} Days</span>
                  </label>
                  <div className="relative pt-2">
                    <input 
                      type="range" 
                      min="7" 
                      max="90" 
                      step="7"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-full h-1 bg-white/20 rounded-none appearance-none cursor-pointer accent-white"
                    />
                  </div>
                </div>

              </div>

              {/* Results Output Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
                <div className="flex flex-col border-l-2 border-white/20 pl-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">BUDGET</span>
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">${estBudget.toLocaleString()}</span>
                </div>

                <div className="flex flex-col border-l-2 border-white/20 pl-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">IMPRESSIONS</span>
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">{estImpressions.toLocaleString()}</span>
                </div>

                <div className="flex flex-col border-l-2 border-white/20 pl-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">SCANS</span>
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">{estScans.toLocaleString()}</span>
                </div>

                <div className="flex flex-col border-l-2 border-white/20 pl-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">COST / SCAN</span>
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">${estCostPerScan}</span>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-white text-black font-black uppercase tracking-widest text-[11px] px-12 py-5 hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  GENERATE ESTIMATE <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 11. PARTNER SECTION (BENTO BOX) ── */}
      <section id="partners" className="relative z-10 py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="bg-[#f0f0f0] rounded-[40px] p-8 md:p-16 lg:p-24">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 lg:mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter text-[#111] leading-[0.9] uppercase max-w-4xl relative">
              <span className="text-slate-900">BUILT FOR EVERY</span><br />
              <span className="relative z-10 text-blue-600">PARTICIPANT.</span>
              <div className="absolute -inset-4 border-2 border-blue-200 rounded-[50%] -rotate-2 opacity-50 pointer-events-none" />
            </h2>
            
            <div className="max-w-xs mt-4 lg:mt-0 shrink-0">
              <div className="flex gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-black">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-black">
                  <Printer className="w-6 h-6" />
                </div>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm text-black">
                  <Truck className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                All essential ecosystem functions unified in one tracking and attribution platform.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Brands (2 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 bg-white rounded-[32px] p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative min-h-[400px]"
            >
              <div className="relative z-10 space-y-8 max-w-lg">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest border border-sky-200 bg-sky-50 px-5 py-2.5 rounded-full group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-colors duration-300">For Brands</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] leading-[1.1]">
                  Launch & measure offline campaigns.
                </h3>
                <p className="text-base font-medium text-gray-500 leading-relaxed">
                  Target hyper-local regions with transparent QR attribution and real-time ROI tracking.
                </p>
              </div>
              {/* Decorative element */}
              <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-sky-500 translate-x-1/4 translate-y-1/4 group-hover:scale-105 transition-all duration-700">
                <Building2 className="w-[400px] h-[400px]" />
              </div>
            </motion.div>

            {/* Card 2: Printing Presses (1 col, Dark) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 bg-[#222] text-white rounded-[32px] p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]"
            >
              <div className="relative z-10 space-y-8">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 rounded-full group-hover:bg-cyan-400 group-hover:text-[#111] transition-colors duration-300">For Printers</span>
                </div>
                <h3 className="text-4xl font-black tracking-tighter leading-[1.1]">
                  Receive nearby print orders.
                </h3>
                <p className="text-base font-medium text-gray-400 leading-relaxed">
                  Get automated print jobs delivered directly to your press with digital artwork assets.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Water Plants (1 col, Dark) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1 bg-[#222] text-white rounded-[32px] p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]"
            >
              <div className="relative z-10 space-y-8">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">For Plants</span>
                </div>
                <h3 className="text-4xl font-black tracking-tighter leading-[1.1]">
                  Monetize your network.
                </h3>
                <p className="text-base font-medium text-gray-400 leading-relaxed">
                  Earn recurring revenue for every water can dispatched with advertising sleeves.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Distributors (2 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 bg-white rounded-[32px] p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative min-h-[400px]"
            >
              <div className="relative z-10 space-y-8 max-w-lg">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-sky-600 uppercase tracking-widest border border-sky-200 bg-sky-50 px-5 py-2.5 rounded-full group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-colors duration-300">For Distributors</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] leading-[1.1]">
                  Verify real-world distribution.
                </h3>
                <p className="text-base font-medium text-gray-500 leading-relaxed">
                  Simple mobile QR scanning logs GPS delivery timestamps and builds client trust through verifiable physical touchpoints.
                </p>
              </div>
              {/* Decorative element */}
              <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-sky-500 translate-x-1/4 translate-y-1/4 group-hover:scale-105 transition-all duration-700">
                <Truck className="w-[400px] h-[400px]" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 12. METRICS SECTION (Minimalist + Geometric Spice) ── */}
      <section className="relative z-10 pt-16 pb-32 overflow-hidden bg-white">
        
        {/* Background Geometric Spices */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
           {/* Slowly Rotating Huge Wireframe Circle */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
             className="absolute -right-[20%] -top-[20%] w-[1000px] h-[1000px] rounded-full border-[1px] border-cyan-500/10 opacity-70 border-dashed"
           />
           {/* Slowly Rotating Hexagon */}
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
             className="absolute -left-[10%] bottom-[0%] w-[800px] h-[800px] border-[1px] border-sky-500/10 opacity-60"
             style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
           />
           {/* Faint Glowing Central Blob */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-cyan-200/15 blur-[120px] rounded-full mix-blend-multiply" />
        </div>

        <div className="max-w-[1200px] mx-auto border-t border-slate-200/50 pt-32 px-6 relative z-10">
            {/* Right Column: Statement & Numbers */}
            <div className="space-y-24">
              <div className="text-4xl sm:text-5xl md:text-[52px] font-medium leading-[1.1] tracking-tight max-w-5xl text-[#111]">
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
                <div className="flex flex-col border-l-2 border-cyan-100 pl-6 relative">
                  <div className="absolute -left-[2px] top-0 w-[2px] h-10 bg-cyan-400" />
                  <AnimatedNumber value={150} suffix="K+" duration={2} className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-black leading-none" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 block" />
                    Cans Distributed
                  </span>
                </div>
                
                <div className="flex flex-col border-l-2 border-sky-100 pl-6 relative">
                  <div className="absolute -left-[2px] top-0 w-[2px] h-10 bg-sky-400" />
                  <AnimatedNumber value={300} suffix="+" duration={2} className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-black leading-none" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-sky-400 block" />
                    Local Plants
                  </span>
                </div>

                <div className="flex flex-col border-l-2 border-blue-100 pl-6 relative">
                  <div className="absolute -left-[2px] top-0 w-[2px] h-10 bg-blue-500" />
                  <AnimatedNumber value={20} suffix="K+" duration={2} className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-black leading-none" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-500 block" />
                    Scans Recorded
                  </span>
                </div>
              </motion.div>
            </div>
        </div>
      </section>


      {/* ── 12.5 TESTIMONIALS (TABELA STYLE) ── */}
      <section id="testimonials" className="relative z-10 py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="bg-[#F4F4F5] rounded-[40px] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 md:mb-32 gap-8">
            <div className="space-y-8">
              {/* "Testimonials" with hand-drawn circle */}
              <div className="relative inline-block ml-6">
                <span className="relative z-10 text-[#111] font-medium text-lg tracking-wide">
                  Testimonials
                </span>
                {/* Hand-drawn SVG circle approximation (Cyan) */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] text-cyan-400 pointer-events-none -rotate-2" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M10,20 C10,5 90,5 90,20 C90,35 10,35 10,20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M15,20 C15,8 85,8 85,20 C85,32 15,32 15,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M5,20 C5,2 95,2 95,20 C95,38 5,38 5,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-70" />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-[#111] leading-[1.15] tracking-tight">
                What Our Users<br />Say About WaterAds
              </h2>
            </div>
            
            {/* Arrows */}
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center text-black shadow-sm transition-colors">
                <ArrowLeft className="w-5 h-5 opacity-90" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 flex items-center justify-center text-black shadow-sm transition-colors">
                <ArrowRight className="w-5 h-5 opacity-90" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#f0f0f0] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#2F333E" className="mb-10">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                </svg>
                <p className="text-sm md:text-[15px] font-medium text-gray-700 leading-relaxed">
                  "As a regional distributor, I appreciate the real-time tracking and robust verification measures WaterAds offers. It has not only simplified our day-to-day operations but also given our clients peace of mind regarding placement."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <img src="https://i.pravatar.cc/150?img=11" alt="Sarah Thompson" className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Alastair Frankl</h4>
                  <p className="text-xs text-gray-500 mt-1">Regional Distributor</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 (Shifted Down) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="bg-[#f0f0f0] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] md:mt-16 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div>
                <div className="w-8 h-8 rounded-full border-[7px] border-[#2F333E] mb-10"></div>
                <p className="text-sm md:text-[15px] font-medium text-gray-700 leading-relaxed">
                  "WaterAds has been a game-changer for our printing press. The automated routing functionality allows us to seamlessly accept nearby orders, and the digital asset delivery ensures we print perfectly every time."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <img src="https://i.pravatar.cc/150?img=12" alt="James Williams" className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Jason Mueller</h4>
                  <p className="text-xs text-gray-500 mt-1">Print Facility Manager</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="bg-[#f0f0f0] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div>
                <div className="grid grid-cols-2 gap-1 w-8 h-8 mb-10 rotate-45">
                   <div className="w-3.5 h-3.5 rounded-full bg-[#2F333E]"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-[#2F333E]"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-[#2F333E]"></div>
                   <div className="w-3.5 h-3.5 rounded-full bg-[#2F333E]"></div>
                </div>
                <p className="text-sm md:text-[15px] font-medium text-gray-700 leading-relaxed">
                  "Working with WaterAds has transformed the way I approach offline marketing. The targeted hydration campaigns allow me to provide more attentive reach to our customers, and the ROI tracking is unmatched."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <img src="https://i.pravatar.cc/150?img=47" alt="Emily Chen" className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Jill Pescosolido</h4>
                  <p className="text-xs text-gray-500 mt-1">Brand Director</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 12.8 FAQ ── */}
      <section className="relative z-10 py-32 px-6 max-w-[900px] mx-auto bg-white">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
            FAQ
          </h3>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
            HAVE SOME<br />QUESTIONS?
          </h2>
        </motion.div>

        {/* Accordion Block */}
        <div className="w-full bg-[#faf9f6] rounded-[2rem] p-6 md:p-12 mb-16 border border-slate-100 shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-black/5 last:border-0"
              >
                <button 
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                >
                  <h4 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-800 group-hover:text-slate-500'}`}>
                    {faq.question}
                  </h4>
                  <div className="ml-4 shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-slate-900" />
                    ) : (
                      <Plus className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
                    )}
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-8">
                    <p className="text-sm md:text-base font-semibold text-blue-600 max-w-3xl leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center mt-12"
        >
          <h4 className="text-2xl font-black tracking-tight text-slate-900 uppercase mb-3">
            NOT FINDING ANSWERS?
          </h4>
          <p className="text-sm font-medium text-slate-500 mb-8 max-w-sm mx-auto">
            Reach out anytime, we are happy to help.
          </p>
          <a
            href="#contact"
            className="bg-slate-900 hover:bg-black text-white font-bold text-[10px] uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 shrink-0"
          >
            CONTACT US <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </section>

      {/* ── 13. FINAL CLOSING CTA (MINIMALIST) ── */}
      <section className="relative z-10 w-full py-32 md:py-48 px-6 text-center bg-white flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
            Ready to Start?
          </span>
          
          <div className="w-full flex flex-col items-center justify-center mb-8">
            <StrokeText
              text="CONNECT YOUR"
              strokeColor="#cbd5e1"
              fillColor="#111111"
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
              strokeColor="#cbd5e1"
              fillColor="#111111"
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
          
          <p className="text-base md:text-xl font-bold text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Join hundreds of active advertisers and bottling plants<br className="hidden sm:block" /> generating real-time offline scan engagements today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-5 rounded-full shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 min-w-[240px]"
            >
              GET STARTED FREE <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#login"
              className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-[#111] font-bold text-[11px] uppercase tracking-widest px-8 py-5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center hover:shadow-md min-w-[240px]"
            >
              SIGN IN TO ACCOUNT
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <FooterSection />

    </div>
  )
}

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import ParticleText from "./components/ui/ParticleText"
import {
  ArrowRight,
  ArrowLeft,
  Menu,
  QrCode,
  Building2,
  Printer,
  Factory,
  Truck,
  Calculator,
  Droplet,
  Hexagon,
  CircleDashed,
  Triangle,
  CloudRain,
  ShieldCheck,
  Cpu,
  Layers,
  Plus,
  Minus,
  ArrowUpRight,
  Globe
} from "lucide-react"

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
  const [showLoader, setShowLoader] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // -- Removed scroll-based cinematic state for simpler whileInView animations --
  
  // AI Planner State
  const [targetArea, setTargetArea] = useState("Metropolitan Hubs")
  const [canCount, setCanCount] = useState(50000)
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 50)
    const timer2 = setTimeout(() => setShowLoader(false), 3800)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Calculations for Planner
  const estBudget = Math.round(canCount * 0.45)
  const estImpressions = Math.round(canCount * 3.8)
  const estScans = Math.round(canCount * 0.082)
  const estCostPerScan = (estBudget / estScans).toFixed(2)

  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#0F172A] font-sans selection:bg-slate-800 selection:text-white relative overflow-x-hidden">
      
      {/* ── LOADER OVERLAY ── */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090f]"
          >
            <div className="w-full h-full flex items-center justify-center max-w-[90vw]">
              <ParticleText
                text="WATERADS"
                particleSize={2.5}
                density={4}
                color="#2563eb" // Bright blue
                highlightColor="#0f172a" // Dark slate
                scatter={180}
                gatherDuration={1600}
                stagger={420}
                pointerRepel={40}
                repelRadius={120}
                idleDrift={0.7}
                trigger="mount"
                fontSize="clamp(3rem, 15vw, 12rem)"
                fontWeight={900}
                fontFamily="inherit"
                glow={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-2xl transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="w-full px-6 md:px-12 h-24 flex items-center justify-between">
          
          {/* LEFT: Branding */}
          <a href="#" className="flex items-center gap-4">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 8C12 5.79086 13.7909 4 16 4H24C26.2091 4 28 5.79086 28 8V16H12V8ZM12 24H28V32C28 34.2091 26.2091 36 24 36H16C13.7909 36 12 34.2091 12 32V24ZM4 16C4 13.7909 5.79086 12 8 12H10V18C10 19.1046 10.8954 20 12 20H28C29.1046 20 30 19.1046 30 18V12H32C34.2091 12 36 13.7909 36 16V24C36 26.2091 34.2091 28 32 28H30V22C30 20.8954 29.1046 20 28 20H12C10.8954 20 10 20.8954 10 22V28H8C5.79086 28 4 26.2091 4 24V16Z" fill="black"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-[14px] font-black tracking-tighter leading-none">WaterAds</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest leading-none">OFFLINE AD NETWORK</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">Smart QR Hydration Advertising</span>
              </div>
            </div>
          </a>

          {/* MIDDLE: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 text-[10px] font-bold text-black uppercase tracking-widest">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#stats" className="hover:text-blue-600 transition-colors">Metrics</a>
            <a href="#roi" className="hover:text-blue-600 transition-colors">ROI Calculator</a>
            <a href="#ecosystem" className="hover:text-blue-600 transition-colors">Personas</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>

          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-6">
            <a href="#login" className="text-[10px] font-bold text-black uppercase tracking-widest hover:text-blue-600 transition-colors">
              Sign In
            </a>
            <a href="#contact" className="bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-full transition-all">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden text-black">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-32 md:h-40" />

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 pt-12 pb-24 px-6 w-full mx-auto text-center flex flex-col items-center overflow-hidden">
        
        {/* Massive Text with Gradient Clipping */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-black text-[16vw] leading-[0.85] tracking-tighter uppercase"
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
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-black font-semibold leading-relaxed max-w-2xl mt-12"
        >
          A seamless offline advertising network. We connect brands with printing presses, water plants, and distributors to build smart, trackable campaigns that scale.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="#planner"
            className="bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-10 py-4 rounded-full shadow-lg transition-all duration-200 cursor-pointer inline-block hover:scale-105"
          >
            Start a Campaign
          </a>
        </motion.div>

      </section>

      {/* ── 7. TRUST / NETWORK STRIP (PARTNER LOGOS) ── */}
      <section className="relative z-10 py-24 px-6 w-full max-w-[1400px] mx-auto border-b border-slate-200/80">
        <div className="space-y-10">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
            trusted by leading brands, plants, and distributors worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* Logo 1 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-2.5 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <Droplet className="w-6 h-6 fill-black" />
                <span className="font-serif-title text-3xl tracking-tight leading-none mt-1">AquaNations</span>
              </div>
            </div>

            {/* Logo 2 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <Hexagon className="w-5 h-5" strokeWidth={3} />
                <span className="font-sans font-black text-xl tracking-tighter uppercase">MetroPrint</span>
              </div>
            </div>

            {/* Logo 3 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <Layers className="w-6 h-6" />
                <span className="font-sans font-bold text-2xl tracking-tight lowercase">strata.</span>
              </div>
            </div>

            {/* Logo 4 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex flex-col items-center gap-1 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <Triangle className="w-5 h-5 fill-black rotate-180" />
                <span className="font-sans font-semibold text-xs tracking-[0.3em] uppercase">Apex Logistics</span>
              </div>
            </div>

            {/* Logo 5 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <CircleDashed className="w-7 h-7" strokeWidth={2.5} />
                <span className="font-serif-title text-4xl tracking-tighter leading-none mt-1">Cerve</span>
              </div>
            </div>

            {/* Logo 6 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <CloudRain className="w-6 h-6" strokeWidth={2.5} />
                <span className="font-sans font-extrabold text-xl tracking-tight">EcoPure</span>
              </div>
            </div>

            {/* Logo 7 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-1.5 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <ShieldCheck className="w-6 h-6 fill-black text-[#f7f8f9]" />
                <span className="font-sans font-medium text-2xl tracking-normal">bardo</span>
              </div>
            </div>

            {/* Logo 8 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <Cpu className="w-6 h-6" strokeWidth={2} />
                <span className="font-sans font-bold text-xl tracking-tighter uppercase">Synergy Systems</span>
              </div>
            </div>

            {/* Logo 9 */}
            <div className="bg-[#f7f8f9] rounded-2xl h-32 md:h-40 flex items-center justify-center hover:bg-[#f0f2f4] transition-colors cursor-pointer group">
              <div className="flex items-center gap-3 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 bg-black rounded-full" />
                <span className="font-sans font-semibold text-2xl tracking-tight lowercase">onso</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. THE ECOSYSTEM GRAPH (CINEMATIC MARQUEE + REFLECTION) ── */}
      <section id="ecosystem" className="relative z-10 bg-[#f4f4f5] py-32 md:py-48 overflow-hidden flex flex-col items-center justify-center min-h-screen">
        
        {/* Background Marquee Text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] flex z-0 pointer-events-none opacity-[0.03]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            <h2 className="text-[15vw] font-serif tracking-tighter leading-none text-black">
              &nbsp;E C O S Y S T E M &nbsp;&middot;&nbsp; N E T W O R K &nbsp;&middot;&nbsp; E C O S Y S T E M &nbsp;&middot;&nbsp; N E T W O R K
            </h2>
          </motion.div>
        </div>

        {/* Background Mesh Gradient Orbs for Glassmorphism */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] z-10 pointer-events-none opacity-50">
          <motion.div 
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, 30, 0], 
              y: [0, 20, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-10 left-[40%] w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-[80px]" 
          />
        </div>

        {/* Floating Ecosystem Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full max-w-5xl px-6 md:px-12 flex flex-col"
        >
          {/* The Card Itself */}
          <motion.div 
            animate={{ y: [-10, 10] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="w-full bg-white/60 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/80 ring-1 ring-black/[0.03] p-10 md:p-20 relative overflow-hidden z-20"
          >
            {/* Subtle Noise Texture overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            
            {/* Inner top/left highlight for 3D glass effect */}
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] shadow-[inset_0_1px_1px_rgba(255,255,255,1),inset_1px_0_1px_rgba(255,255,255,0.8)] pointer-events-none" />

            {/* Gradient Overlay for lighting */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-white/10 pointer-events-none" />

            {/* Header inside the card */}
            <div className="text-center mb-16 md:mb-24 relative z-20">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                The Ecosystem
              </h3>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight drop-shadow-sm">
                A perfectly connected<br className="hidden md:block" /> offline network.
              </h2>
            </div>

            {/* The Nodes Grid */}
            <div className="relative w-full mx-auto mt-12 md:mt-20 mb-8 md:mb-12">
              
              {/* Animated Progress Line */}
              <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute top-[40px] left-[10%] h-[1px] bg-slate-300 hidden md:block origin-left z-0" 
              />
              <motion.div 
                initial={{ height: "0%" }}
                whileInView={{ height: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1px] bg-slate-300 md:hidden origin-top z-0" 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0 relative z-10 w-full py-8 md:py-0">
                {[
                  { icon: Building2, title: "Brands", desc: "Initiate targeted local campaigns." },
                  { icon: Printer, title: "Printing Press", desc: "Produces serialized label rolls." },
                  { icon: Factory, title: "Water Plant", desc: "Bottles and applies labels." },
                  { icon: Truck, title: "Distributors", desc: "Deliver to target consumer zones." },
                ].map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="w-20 h-20 relative z-10 mb-6">
                      <div className="absolute inset-0 rounded-full bg-white/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] border border-white/60 flex items-center justify-center text-slate-500 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:text-blue-500">
                        <node.icon className="w-6 h-6" strokeWidth={1.25} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-[#111827] mb-2">{node.title}</h4>
                      <p className="text-[13px] font-medium text-[#64748b] px-4 max-w-[200px] mx-auto leading-relaxed">{node.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reflection */}
          <div 
            className="w-full h-[250px] md:h-[350px] mt-2 relative pointer-events-none opacity-30 select-none overflow-hidden z-0"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 80%)"
            }}
          >
            <motion.div 
              animate={{ y: [10, -10] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0"
              style={{ transform: "scaleY(-1)" }}
            >
               {/* Reflection fake card */}
               <div className="w-full bg-white/40 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 blur-[4px] border border-white/50">
                 <div className="text-center mb-16 md:mb-24 relative z-20 opacity-80">
                   <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">The Ecosystem</h3>
                   <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight">
                     A perfectly connected<br className="hidden md:block" /> offline network.
                   </h2>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0 mt-12 md:mt-20 mb-8 md:mb-12 relative opacity-50">
                    <div className="absolute top-[40px] left-[10%] w-[80%] h-[1px] bg-slate-300 hidden md:block" />
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-white/80 border border-white/50 mb-6" />
                        <div className="w-24 h-5 bg-slate-300/50 rounded mb-2" />
                        <div className="w-32 h-3 bg-slate-200/50 rounded" />
                      </div>
                    ))}
                 </div>
               </div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* ── 8.5 PROCESS FLOW SECTION ── */}
      <section className="relative z-10 py-32 px-6 max-w-[1400px] mx-auto bg-white">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-7xl md:text-[140px] font-black tracking-tighter leading-none text-black uppercase"
          >
            FLOW
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-[200px] text-xs md:text-sm font-bold text-black leading-snug md:mb-6"
          >
            How we turn a campaign brief into a highly measurable offline network.
          </motion.p>
        </div>

        {/* Meta Data Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-between items-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest border-t border-slate-200 pt-6 mb-12"
        >
          <span>PROCESS: 4 STEPS</span>
          <span>DURATION: ~ 2-4 WEEKS</span>
        </motion.div>

        {/* 4 Column Diagonal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px] border-t border-slate-200">
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative border-b md:border-b-0 md:border-r border-slate-200 p-8 flex flex-col pt-12 min-h-[300px] md:min-h-0"
          >
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">CREATE</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-16 pr-4">
              We define your target network, duration, and can quantity based on brand goals.
            </p>
            
            {/* Progress Bar (Liquid Animation) */}
            <div className="mt-auto pt-8">
              <span className="text-[10px] font-extrabold text-black mb-2 block">25%</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-black" 
              />
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative border-b md:border-b-0 md:border-r border-slate-200 p-8 flex flex-col pt-12 md:pt-32 min-h-[300px] md:min-h-0"
          >
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">PRINT</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-16 pr-4">
              We serialize the advertising labels and produce them with extreme precision.
            </p>
            
            {/* Progress Bar (Liquid Animation) */}
            <div className="mt-auto pt-8">
              <span className="text-[10px] font-extrabold text-black mb-2 block">50%</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-black" 
              />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative border-b md:border-b-0 md:border-r border-slate-200 p-8 flex flex-col pt-12 md:pt-52 min-h-[300px] md:min-h-0"
          >
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">DISTRIBUTE</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-16 pr-4">
              Plants apply the labels and dispatch cans to strictly targeted geographic zones.
            </p>
            
            {/* Progress Bar (Liquid Animation) */}
            <div className="mt-auto pt-8">
              <span className="text-[10px] font-extrabold text-black mb-2 block">75%</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-black" 
              />
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative p-8 flex flex-col pt-12 md:pt-[280px] min-h-[300px] md:min-h-0"
          >
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-4">MEASURE</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed mb-16 pr-4">
              Unique QR scans capture real-time engagement and provide robust campaign tracking.
            </p>
            
            {/* Progress Bar (Liquid Animation) */}
            <div className="mt-auto pt-8">
              <span className="text-[10px] font-extrabold text-black mb-2 block">100%</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-1.5 bg-black" 
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 9. QR TRACKING SECTION ── */}
      <section className="relative z-10 py-32 px-6 max-w-[1400px] mx-auto border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column: Title & Stark Metrics */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-8">
              <QrCode className="w-4 h-4 text-black" />
              <span className="text-[10px] font-bold text-black uppercase tracking-widest">
                QR Traceability
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter text-[#111] leading-[0.9] uppercase mb-8">
              EVERY CAN.<br />EVERY SCAN.<br />MEASURABLE.
            </h2>
            
            <p className="text-sm md:text-base font-semibold text-slate-800 max-w-md leading-relaxed mb-16">
              WaterAds turns standard hydration cans into verifiable customer touchpoints with geographic precision.
            </p>

            {/* Stark Counter Blocks */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex flex-col border-l-2 border-slate-200 pl-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#111] leading-none">
                  <CountUp end={148500} suffix="+" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Cans Distributed</div>
              </div>

              <div className="flex flex-col border-l-2 border-slate-200 pl-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#111] leading-none">
                  <CountUp end={18920} suffix="" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">QR Scans Recorded</div>
              </div>

              <div className="flex flex-col border-l-2 border-slate-200 pl-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#111] leading-none">
                  <CountUp end={42} suffix="" />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Locations Reached</div>
              </div>

              <div className="flex flex-col border-l-2 border-slate-200 pl-6">
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#111] leading-none">
                  <CountUp end={98.4} suffix="%" decimals={1} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Campaign Progress</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stark Visual Product Preview */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-[#111] flex items-center justify-center p-8 overflow-hidden">
            <div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-sm p-8 shadow-2xl flex flex-col space-y-8">
              
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
              <div className="relative bg-[#111] border border-white/5 p-12 flex flex-col items-center justify-center space-y-8 overflow-hidden">
                <div className="w-32 h-32 bg-white p-3 flex items-center justify-center relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10 10 h30 v30 h-30 z M15 15 h20 v20 h-20 z" fill="#000" />
                    <path d="M60 10 h30 v30 h-30 z M65 15 h20 v20 h-20 z" fill="#000" />
                    <path d="M10 60 h30 v30 h-30 z M15 65 h20 v20 h-20 z" fill="#000" />
                    <rect x="45" y="45" width="10" height="10" fill="#000" />
                    <rect x="60" y="60" width="15" height="15" fill="#000" />
                    <rect x="75" y="75" width="15" height="15" fill="#000" />
                  </svg>
                  
                  {/* High Contrast Laser Beam Animation */}
                  <div className="absolute inset-x-0 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-pulse top-1/2" />
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  SCAN TO VIEW ATTRIBUTION
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 10. AI CAMPAIGN PLANNER WIDGET ── */}
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

      {/* ── 11. PARTNER SECTION (BENTO BOX) ── */}
      <section id="partners" className="relative z-10 py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="bg-[#f0f0f0] rounded-[40px] p-8 md:p-16 lg:p-24">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 lg:mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter text-[#111] leading-[0.9] uppercase max-w-4xl relative">
              BUILT FOR EVERY<br />
              <span className="relative z-10">PARTICIPANT.</span>
              <div className="absolute -inset-4 border-2 border-yellow-300 rounded-[50%] -rotate-2 opacity-50 pointer-events-none" />
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
            <div className="md:col-span-2 bg-white rounded-[32px] p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
              <div className="relative z-10 space-y-8 max-w-lg">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-black uppercase tracking-widest border border-black/10 px-5 py-2.5 rounded-full">For Brands</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] leading-[1.1]">
                  Launch & measure offline campaigns.
                </h3>
                <p className="text-base font-medium text-gray-500 leading-relaxed">
                  Target hyper-local regions with transparent QR attribution and real-time ROI tracking.
                </p>
              </div>
              {/* Decorative element */}
              <div className="absolute right-0 bottom-0 opacity-[0.03] translate-x-1/4 translate-y-1/4 group-hover:scale-105 transition-transform duration-700">
                <Building2 className="w-[400px] h-[400px]" />
              </div>
            </div>

            {/* Card 2: Printing Presses (1 col, Dark) */}
            <div className="md:col-span-1 bg-[#222] text-white rounded-[32px] p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
              <div className="relative z-10 space-y-8">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest border border-white/20 px-5 py-2.5 rounded-full">For Printers</span>
                </div>
                <h3 className="text-4xl font-black tracking-tighter leading-[1.1]">
                  Receive nearby print orders.
                </h3>
                <p className="text-base font-medium text-gray-400 leading-relaxed">
                  Get automated print jobs delivered directly to your press with digital artwork assets.
                </p>
              </div>
            </div>

            {/* Card 3: Water Plants (1 col, Dark) */}
            <div className="md:col-span-1 bg-[#222] text-white rounded-[32px] p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
              <div className="relative z-10 space-y-8">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest border border-white/20 px-5 py-2.5 rounded-full">For Plants</span>
                </div>
                <h3 className="text-4xl font-black tracking-tighter leading-[1.1]">
                  Monetize your network.
                </h3>
                <p className="text-base font-medium text-gray-400 leading-relaxed">
                  Earn recurring revenue for every water can dispatched with advertising sleeves.
                </p>
              </div>
            </div>

            {/* Card 4: Distributors (2 cols) */}
            <div className="md:col-span-2 bg-white rounded-[32px] p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
              <div className="relative z-10 space-y-8 max-w-lg">
                <div className="inline-flex">
                  <span className="text-[11px] font-bold text-black uppercase tracking-widest border border-black/10 px-5 py-2.5 rounded-full">For Distributors</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] leading-[1.1]">
                  Verify real-world distribution.
                </h3>
                <p className="text-base font-medium text-gray-500 leading-relaxed">
                  Simple mobile QR scanning logs GPS delivery timestamps and builds client trust through verifiable physical touchpoints.
                </p>
              </div>
              {/* Decorative element */}
              <div className="absolute right-0 bottom-0 opacity-[0.03] translate-x-1/4 translate-y-1/4 group-hover:scale-105 transition-transform duration-700">
                <Truck className="w-[400px] h-[400px]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 12. METRICS SECTION (Minimalist) ── */}
      <section className="relative z-10 py-32 px-6 max-w-[1200px] mx-auto border-t border-slate-200/50">
        <div className="grid md:grid-cols-[150px_1fr] gap-8 md:gap-16">
          
          {/* Left Column: Label */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-2">
              The Network
            </h3>
          </div>

          {/* Right Column: Statement & Numbers */}
          <div className="space-y-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-[40px] font-medium text-black leading-[1.2] tracking-tight max-w-3xl"
            >
              We connect leading brands with local water plants and distributors, creating trackable offline advertising campaigns that reach millions of consumers daily.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-4"
            >
              <div className="flex flex-col border-l-2 border-slate-100 pl-6">
                <span className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-black leading-none">150K+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Cans Distributed</span>
              </div>
              
              <div className="flex flex-col border-l-2 border-slate-100 pl-6">
                <span className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-black leading-none">300+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Local Plants</span>
              </div>

              <div className="flex flex-col border-l-2 border-slate-100 pl-6">
                <span className="text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tighter text-black leading-none">20K+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Scans Recorded</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>


      {/* ── 12.5 TESTIMONIALS (TABELA STYLE) ── */}
      <section id="testimonials" className="relative z-10 py-32 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="bg-[#444444] rounded-[40px] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 md:mb-32 gap-8">
            <div className="space-y-8">
              {/* "Testimonials" with hand-drawn circle */}
              <div className="relative inline-block ml-6">
                <span className="relative z-10 text-white font-medium text-lg tracking-wide">
                  Testimonials
                </span>
                {/* Hand-drawn SVG circle approximation (Yellow/Green) */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] text-[#d4e157] pointer-events-none -rotate-2" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M10,20 C10,5 90,5 90,20 C90,35 10,35 10,20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M15,20 C15,8 85,8 85,20 C85,32 15,32 15,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M5,20 C5,2 95,2 95,20 C95,38 5,38 5,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-70" />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.15] tracking-tight">
                What Our Users<br />Say About WaterAds
              </h2>
            </div>
            
            {/* Arrows */}
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full bg-[#363636] hover:bg-[#2d2d2d] flex items-center justify-center text-white transition-colors">
                <ArrowLeft className="w-5 h-5 opacity-70" />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#363636] hover:bg-[#2d2d2d] flex items-center justify-center text-white transition-colors">
                <ArrowRight className="w-5 h-5 opacity-70" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Card 1 */}
            <div className="bg-[#f0f0f0] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] shadow-sm">
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
            </div>

            {/* Card 2 (Shifted Down) */}
            <div className="bg-[#f0f0f0] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] md:mt-16 shadow-sm">
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
            </div>

            {/* Card 3 */}
            <div className="bg-[#f0f0f0] rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-auto min-h-[420px] shadow-sm">
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
            </div>

          </div>
        </div>
      </section>

      {/* ── 12.8 FAQ ── */}
      <section className="relative z-10 py-32 px-6 max-w-[1400px] mx-auto bg-white border-t border-slate-100">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              FAQ
            </h3>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black uppercase mb-16">
              HAVE SOME QUESTIONS?
            </h2>
            
            <div className="mt-auto hidden lg:block">
              <h4 className="text-xl font-black tracking-tight text-black uppercase mb-3">
                NOT FINDING ANSWERS?
              </h4>
              <p className="text-sm font-semibold text-slate-800 mb-8 max-w-[250px]">
                Reach out anytime, we are happy to help.
              </p>
              <a
                href="#contact"
                className="bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:shadow-lg shrink-0"
              >
                CONTACT US <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:w-2/3 border-t border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-b border-slate-200">
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <h4 className={`text-xl md:text-3xl font-black tracking-tight transition-colors ${isOpen ? 'text-black' : 'text-slate-900 group-hover:text-slate-500'}`}>
                      {faq.question}
                    </h4>
                    <div className="ml-4 shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-6 h-6 text-black" />
                      ) : (
                        <Plus className="w-6 h-6 text-black group-hover:text-slate-500" />
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
                      <p className="text-sm md:text-base font-semibold text-slate-700 max-w-2xl leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile version of bottom left column */}
          <div className="lg:hidden mt-8">
            <h4 className="text-xl font-black tracking-tight text-black uppercase mb-3">
              NOT FINDING ANSWERS?
            </h4>
            <p className="text-sm font-semibold text-slate-800 mb-8 max-w-[250px]">
              Reach out anytime, we are happy to help.
            </p>
            <a
              href="#contact"
              className="bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2 hover:shadow-lg w-max"
            >
              CONTACT US <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>

      {/* ── 13. FINAL CLOSING CTA (MINIMALIST) ── */}
      <section className="relative z-10 py-32 md:py-48 px-6 max-w-4xl mx-auto text-center bg-white border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Ready to Start?
          </span>
          
          <h2 className="text-5xl sm:text-6xl md:text-[80px] font-black tracking-tighter leading-none text-black uppercase">
            CONNECT YOUR<br />BRAND OR PLANT
          </h2>
          
          <p className="text-sm md:text-base font-semibold text-slate-800 max-w-md mx-auto leading-relaxed">
            Join hundreds of active advertisers and bottling plants generating real-time offline scan engagements today.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-widest px-10 py-4 rounded-full shadow-md transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 min-w-[220px]"
            >
              GET STARTED FREE <ArrowRight className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="#login"
              className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-[10px] uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center justify-center hover:shadow-sm min-w-[220px]"
            >
              SIGN IN TO ACCOUNT
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 w-full bg-white pt-24 pb-8 overflow-hidden">
        
        {/* Giant Logo Mask - Full Bleed */}
        <div className="w-full mb-20 overflow-hidden select-none px-4 md:px-12">
          <h2 
            className="text-[18vw] font-black tracking-tighter leading-[0.8] text-center"
            style={{
              backgroundImage: 'linear-gradient(110deg, #1e3a8a 0%, #000000 25%, #2563eb 45%, #000000 65%, #60a5fa 90%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradientFlow 8s ease infinite'
            }}
          >
            WATERADS
          </h2>
        </div>

        <div className="w-full px-6 md:px-12 max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Left Column: Newsletter + Contact */}
            <div className="flex flex-col justify-between">
              
              <div className="max-w-md">
                <h3 className="text-[26px] md:text-[32px] font-semibold text-[#111] tracking-tight leading-[1.1] mb-12">
                  Subscribe for new projects and insights, once a month.
                </h3>
                <form className="border-b border-gray-300 pb-3 flex items-center justify-between">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-transparent text-sm font-medium text-black placeholder:text-gray-500 outline-none"
                  />
                  <button type="button" className="text-[11px] font-bold text-black uppercase tracking-widest flex items-center gap-1 shrink-0 ml-4 hover:opacity-60 transition-opacity">
                    SUBMIT <ArrowUpRight className="w-3 h-3" />
                  </button>
                </form>
              </div>

              {/* Desktop Contact (hidden on mobile to move it below Nav) */}
              <div className="hidden lg:flex flex-col gap-2 mt-40">
                <a href="mailto:HELLO@WATERADS.ORG" className="text-[11px] font-bold text-[#111] hover:text-blue-600 transition-colors uppercase tracking-widest">HELLO@WATERADS.ORG</a>
                <a href="tel:+15550123456" className="text-[11px] font-bold text-[#111] hover:text-blue-600 transition-colors uppercase tracking-widest">WHATSAPP +1 555 012 3456</a>
              </div>

            </div>

            {/* Right Column: Solutions + Nav Links */}
            <div className="flex flex-col justify-between">
              
              <div className="flex flex-col w-full xl:max-w-xl">
                {[
                  { name: "Brand Advertisers", tag: "Kyzenn", icon: <Building2 className="w-5 h-5 text-white" />, bg: "bg-blue-400" },
                  { name: "Water Bottling Plants", tag: "Cardo Holdings", icon: <Factory className="w-5 h-5 text-white" />, bg: "bg-slate-900" },
                  { name: "Printing Press Partners", tag: "Baladi", icon: <Printer className="w-5 h-5 text-white" />, bg: "bg-emerald-600" }
                ].map((item, i) => (
                  <a key={i} href="#" className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-100 hover:opacity-70 transition-opacity gap-4 sm:gap-0">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shadow-inner shrink-0`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-[#111]">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#111] uppercase tracking-widest shrink-0">
                      VIEW PROJECT <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-16 xl:gap-32 mt-20 lg:mt-40">
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">B2B OFFLINE DESIGN</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">FINANCIAL SERVICES</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">FRAMER WEB DESIGN</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">PROJECTS</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">SOLUTIONS</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">INDUSTRIES</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">SERVICES</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">WORKFLOW</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">ENGAGEMENTS</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">BLOG</a>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">CONTACT</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">PRIVACY POLICY</a>
                  <a href="#" className="text-[11px] font-bold text-[#111] uppercase tracking-widest hover:opacity-60 transition-opacity">TERMS OF USE</a>
                </div>
              </div>

            </div>

            {/* Mobile Contact (Shows under Nav links on small screens) */}
            <div className="flex lg:hidden flex-col gap-2 mt-8">
              <a href="mailto:HELLO@WATERADS.ORG" className="text-[11px] font-bold text-[#111] hover:text-blue-600 transition-colors uppercase tracking-widest">HELLO@WATERADS.ORG</a>
              <a href="tel:+15550123456" className="text-[11px] font-bold text-[#111] hover:text-blue-600 transition-colors uppercase tracking-widest">WHATSAPP +1 555 012 3456</a>
            </div>

          </div>

          {/* Very Bottom Copyright & Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 mt-12 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-[#111] uppercase tracking-widest">
              <span>© 2026 WATERADS</span>
              <a href="#" className="border-b border-[#111] hover:text-blue-600 hover:border-blue-600 transition-all">OFFICIAL NETWORK EXPERT</a>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <a href="#" className="border-b border-[#111] hover:text-blue-600 hover:border-blue-600 transition-all">PLATFORM REVIEWS</a>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <a href="#" className="border-b border-[#111] hover:text-blue-600 hover:border-blue-600 transition-all">API</a>
            </div>

            {/* Social Icons without lucide components to avoid the error */}
            <div className="flex items-center gap-6 text-[11px] font-bold text-[#111] uppercase tracking-widest">
              <a href="#" className="hover:opacity-60 transition-opacity">BE</a>
              <a href="#" className="hover:opacity-60 transition-opacity">IG</a>
              <a href="#" className="hover:opacity-60 transition-opacity">X</a>
              <a href="#" className="hover:opacity-60 transition-opacity">IN</a>
              <Globe className="w-4 h-4 ml-2" />
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  const [isLoaded, setIsLoaded] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // -- Cinematic Scroll State for Ecosystem --
  const ecosystemRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ecosystemRef,
    offset: ["start start", "end end"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.75], ["0%", "75%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 0.75], ["0%", "80%"]);
  
  const n1Opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const n1Scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const t1Opacity = useTransform(scrollYProgress, [0, 0.05], [0.4, 1]);
  
  const n2Opacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const n2Scale = useTransform(scrollYProgress, [0.2, 0.25], [0.8, 1]);
  const t2Opacity = useTransform(scrollYProgress, [0.2, 0.25], [0.4, 1]);
  
  const n3Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const n3Scale = useTransform(scrollYProgress, [0.45, 0.5], [0.8, 1]);
  const t3Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0.4, 1]);
  
  const n4Opacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
  const n4Scale = useTransform(scrollYProgress, [0.7, 0.75], [0.8, 1]);
  const t4Opacity = useTransform(scrollYProgress, [0.7, 0.75], [0.4, 1]);
  
  // AI Planner State
  const [targetArea, setTargetArea] = useState("Metropolitan Hubs")
  const [canCount, setCanCount] = useState(50000)
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // Calculations for Planner
  const estBudget = Math.round(canCount * 0.45)
  const estImpressions = Math.round(canCount * 3.8)
  const estScans = Math.round(canCount * 0.082)
  const estCostPerScan = (estBudget / estScans).toFixed(2)

  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#0F172A] font-sans selection:bg-slate-800 selection:text-white relative overflow-x-hidden">
      
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
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
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

      {/* ── 8. THE ECOSYSTEM GRAPH (CINEMATIC SCROLL) ── */}
      <section ref={ecosystemRef} className="relative z-10 bg-[#fafafa] h-[400vh]">
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-start items-center overflow-hidden pt-32 md:pt-48">
          
          <div className="text-center mb-16 md:mb-32 px-6 relative z-20">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
              The Ecosystem
            </h3>
            <h2 className="text-4xl md:text-[64px] font-medium tracking-tight text-black leading-tight">
              A perfectly connected<br className="hidden md:block" /> offline network.
            </h2>
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12">
            
            {/* Background Line (Horizontal Desktop) */}
            <div className="absolute top-[32px] left-[12.5%] w-[75%] h-[2px] bg-slate-200 hidden md:block z-0" />
            
            {/* Animated Progress Line (Horizontal Desktop) */}
            <motion.div 
              style={{ width: lineWidth }}
              className="absolute top-[32px] left-[12.5%] h-[4px] bg-black hidden md:block origin-left z-0" 
            />

            {/* Background Line (Vertical Mobile) */}
            <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 md:hidden z-0" />
            
            {/* Animated Progress Line (Vertical Mobile) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[4px] bg-black md:hidden origin-top z-0" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 relative z-10 w-full py-8 md:py-0">
              
              {/* Node 1: Brands */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <motion.div style={{ opacity: n1Opacity, scale: n1Scale }} className="absolute inset-0 rounded-full bg-black flex items-center justify-center text-white shadow-xl">
                    <Building2 className="w-6 h-6" />
                  </motion.div>
                </div>
                <motion.div style={{ opacity: t1Opacity }} className="mt-4 md:mt-8 bg-[#fafafa]/90 backdrop-blur-sm p-2 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-1 md:mb-2">Brands</h4>
                  <p className="text-xs font-medium text-slate-500 px-4">Initiate targeted local campaigns.</p>
                </motion.div>
              </div>

              {/* Node 2: Printing Press */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                    <Printer className="w-6 h-6" />
                  </div>
                  <motion.div style={{ opacity: n2Opacity, scale: n2Scale }} className="absolute inset-0 rounded-full bg-black flex items-center justify-center text-white shadow-xl">
                    <Printer className="w-6 h-6" />
                  </motion.div>
                </div>
                <motion.div style={{ opacity: t2Opacity }} className="mt-4 md:mt-8 bg-[#fafafa]/90 backdrop-blur-sm p-2 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-1 md:mb-2">Printing Press</h4>
                  <p className="text-xs font-medium text-slate-500 px-4">Produces serialized label rolls.</p>
                </motion.div>
              </div>

              {/* Node 3: Water Plant */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                    <Factory className="w-6 h-6" />
                  </div>
                  <motion.div style={{ opacity: n3Opacity, scale: n3Scale }} className="absolute inset-0 rounded-full bg-black flex items-center justify-center text-white shadow-xl">
                    <Factory className="w-6 h-6" />
                  </motion.div>
                </div>
                <motion.div style={{ opacity: t3Opacity }} className="mt-4 md:mt-8 bg-[#fafafa]/90 backdrop-blur-sm p-2 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-1 md:mb-2">Water Plant</h4>
                  <p className="text-xs font-medium text-slate-500 px-4">Bottles and applies labels.</p>
                </motion.div>
              </div>

              {/* Node 4: Distributors */}
              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                    <Truck className="w-6 h-6" />
                  </div>
                  <motion.div style={{ opacity: n4Opacity, scale: n4Scale }} className="absolute inset-0 rounded-full bg-black flex items-center justify-center text-white shadow-xl">
                    <Truck className="w-6 h-6" />
                    <motion.div 
                      animate={{ scale: [1, 1.4], opacity: [0.5, 0] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border-2 border-black" 
                    />
                  </motion.div>
                </div>
                <motion.div style={{ opacity: t4Opacity }} className="mt-4 md:mt-8 bg-[#fafafa]/90 backdrop-blur-sm p-2 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-1 md:mb-2">Distributors</h4>
                  <p className="text-xs font-medium text-slate-500 px-4">Deliver to target consumer zones.</p>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
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

      {/* ── 12. PRICING / ENGAGEMENTS (TABELA STYLE) ── */}
      <section id="pricing" className="relative z-10 py-32 px-4 md:px-8 max-w-[1600px] mx-auto bg-white overflow-hidden">
        
        {/* Background Abstract Circles */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-40 translate-x-1/4 -translate-y-1/4">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#d4e157]">
            <circle cx="150" cy="50" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="120" cy="120" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20 150 Q 100 0 180 150" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M100 200 Q 180 100 200 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-24 relative z-10 md:ml-8 mt-12">
          <h2 className="text-5xl sm:text-6xl md:text-[80px] font-medium text-black leading-[1.05] tracking-tight">
            Discover Plans To Cater To Your Unique Needs
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto relative z-10">
          
          {/* Card 1: Starter */}
          <div className="relative bg-[#f4f4f4] rounded-[40px] flex flex-col min-h-[640px] overflow-hidden">
            <div className="p-10 md:p-12 flex-1">
              <h3 className="text-3xl font-medium text-black mb-10">Starter Plan</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#444" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-700 leading-relaxed">Ideal for regional brand testing and pilots</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#444" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-700 leading-relaxed">Up to 25,000 bottles with single-city targeting</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#444" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-700 leading-relaxed">Core QR analytics and automated performance reports</span>
                </li>
              </ul>
            </div>
            
            {/* Cutout Divider */}
            <div className="relative h-px w-full">
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-16 h-16 bg-white rounded-full"></div>
            </div>

            <div className="p-10 md:p-12 pb-16 h-[240px] flex flex-col justify-end">
              <div className="text-5xl md:text-6xl font-medium text-black">$0.15</div>
              <div className="text-xl font-medium text-black mt-3">/Bottle</div>
            </div>
          </div>

          {/* Card 2: Growth */}
          <div className="relative bg-[#444444] rounded-[40px] flex flex-col min-h-[640px] overflow-hidden transform md:-translate-y-6 shadow-2xl">
            <div className="p-10 md:p-12 flex-1">
              <h3 className="text-3xl font-medium text-white mb-10">Growth Plan</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-200 leading-relaxed">Designed for multi-city campaign scaling</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-200 leading-relaxed">Up to 250,000 bottles with advanced geolocation features</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-200 leading-relaxed">Unlock real-time heatmaps to optimize ad placement</span>
                </li>
              </ul>
            </div>
            
            {/* Cutout Divider */}
            <div className="relative h-px w-full">
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-16 h-16 bg-white rounded-full"></div>
            </div>

            <div className="p-10 md:p-12 pb-16 h-[240px] flex flex-col justify-end">
              <div className="relative inline-block self-start mb-3">
                 <div className="absolute -top-10 -right-8 text-[#d4e157] font-medium italic text-lg -rotate-[12deg] whitespace-nowrap">
                    Most popular!
                 </div>
                 <span className="text-5xl md:text-[64px] font-medium text-white relative z-10 block leading-none">$0.10</span>
                 <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[160%] text-[#d4e157] pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M10,20 C10,5 90,5 90,20 C90,35 10,35 10,20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M15,20 C15,8 85,8 85,20 C85,32 15,32 15,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                 </svg>
              </div>
              <div className="text-xl font-medium text-white">/Bottle</div>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="relative bg-[#f4f4f4] rounded-[40px] flex flex-col min-h-[640px] overflow-hidden">
            <div className="p-10 md:p-12 flex-1">
              <h3 className="text-3xl font-medium text-black mb-10">Enterprise Plan</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#444" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-700 leading-relaxed">Tailored for large-scale national operations</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#444" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-700 leading-relaxed">1,000,000+ volume with dedicated account manager</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#444" className="shrink-0 mt-1"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                  <span className="text-[15px] font-medium text-gray-700 leading-relaxed">Comprehensive suite of API and webhook tools for seamless integration</span>
                </li>
              </ul>
            </div>
            
            {/* Cutout Divider */}
            <div className="relative h-px w-full">
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-16 h-16 bg-white rounded-full"></div>
            </div>

            <div className="p-10 md:p-12 pb-16 h-[240px] flex flex-col justify-end">
              <div className="text-[40px] md:text-5xl font-medium text-black mb-8 leading-none">Custom Pricing</div>
              <a href="#contact" className="inline-flex items-center justify-center border border-black rounded-full px-8 py-3 text-[15px] font-medium text-black hover:bg-black hover:text-white transition-colors self-start">
                Contact Us
              </a>
            </div>
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

        <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto">
          
          {/* Top Half */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
            
            {/* Left: Newsletter */}
            <div className="flex-1 max-w-md">
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

            {/* Right: Platform Solutions */}
            <div className="flex-1 max-w-xl flex flex-col">
              {[
                { name: "Brand Advertisers", tag: "Kyzenn", icon: <Building2 className="w-5 h-5 text-white" />, bg: "bg-blue-400" },
                { name: "Water Bottling Plants", tag: "Cardo Holdings", icon: <Factory className="w-5 h-5 text-white" />, bg: "bg-slate-900" },
                { name: "Printing Press Partners", tag: "Baladi", icon: <Printer className="w-5 h-5 text-white" />, bg: "bg-emerald-600" }
              ].map((item, i) => (
                <a key={i} href="#" className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-100 hover:opacity-70 transition-opacity gap-4 sm:gap-0">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shadow-inner`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-[#111]">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#111] uppercase tracking-widest">
                    VIEW PROJECT <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Massive Spacer to mimic the long scroll */}
          <div className="h-40 md:h-64" />

          {/* Bottom Half */}
          <div className="flex flex-col md:flex-row justify-between gap-16">
            
            {/* Contact */}
            <div className="flex flex-col gap-2">
              <a href="mailto:HELLO@WATERADS.ORG" className="text-[11px] font-bold text-[#111] hover:text-blue-600 transition-colors uppercase tracking-widest">HELLO@WATERADS.ORG</a>
              <a href="tel:+15550123456" className="text-[11px] font-bold text-[#111] hover:text-blue-600 transition-colors uppercase tracking-widest">WHATSAPP +1 555 012 3456</a>
            </div>

            {/* Nav Links */}
            <div className="flex gap-16 md:gap-32">
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

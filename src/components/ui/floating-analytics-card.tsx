import { useEffect, useState, useRef } from "react"
import { TrendingUp, QrCode, Droplets, ArrowUpRight, CheckCircle2 } from "lucide-react"

export function FloatingAnalyticsCard() {
  const [isChartDrawn, setIsChartDrawn] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChartDrawn(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="relative w-full max-w-md mx-auto lg:max-w-none">
      
      {/* ── MAIN DASHBOARD CARD ── */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-cyan-100 rounded-3xl p-6 md:p-7 shadow-2xl shadow-cyan-900/10 animate-float-card">
        
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600 font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1B33]">Campaign Performance</h4>
              <p className="text-xs font-medium text-slate-400">Live Analytics Feed</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 text-[11px] font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active
          </span>
        </div>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-1">
            <span className="text-xs font-semibold text-slate-500 block">Campaign Reach</span>
            <div className="text-xl font-extrabold text-[#0B1B33]">1.24M</div>
            <div className="text-[11px] font-medium text-cyan-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> +18.4% this week
            </div>
          </div>

          <div className="bg-cyan-50/50 rounded-2xl p-3.5 border border-cyan-100 space-y-1">
            <span className="text-xs font-semibold text-slate-500 block">QR Scans</span>
            <div className="text-xl font-extrabold text-cyan-700">58.4K</div>
            <div className="text-[11px] font-medium text-cyan-600 flex items-center gap-1">
              <QrCode className="w-3 h-3" /> 4.8% scan rate
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-1">
            <span className="text-xs font-semibold text-slate-500 block">Cans Distributed</span>
            <div className="text-xl font-extrabold text-[#0B1B33]">42,850</div>
            <div className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
              <Droplets className="w-3 h-3 text-cyan-500" /> Premium Venues
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-3.5 border border-blue-100 space-y-1">
            <span className="text-xs font-semibold text-slate-500 block">Est. ROI</span>
            <div className="text-xl font-extrabold text-blue-700">3.4x</div>
            <div className="text-[11px] font-medium text-blue-600">High Conversion</div>
          </div>
        </div>

        {/* Animated Line Chart Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Scan Frequency Trend</span>
            <span className="text-cyan-600">Peak Scan Rate</span>
          </div>

          <div className="relative h-28 w-full bg-gradient-to-b from-cyan-50/60 to-transparent rounded-2xl p-2 border border-cyan-100/60 overflow-hidden flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area Fill */}
              <path
                d="M 0,60 Q 60,10 120,40 T 240,15 L 300,35 L 300,80 L 0,80 Z"
                fill="url(#chartGradient)"
                className={`transition-opacity duration-1000 ${isChartDrawn ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Animated Path Line */}
              <path
                d="M 0,60 Q 60,10 120,40 T 240,15 L 300,35"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="400"
                strokeDashoffset={isChartDrawn ? 0 : 400}
                style={{ transition: "stroke-dashoffset 1.5s ease-in-out" }}
              />

              {/* Data Points appearing sequentially */}
              {isChartDrawn && (
                <>
                  <circle cx="60" cy="24" r="4" fill="#ffffff" stroke="#06b6d4" strokeWidth="2.5" className="animate-ping opacity-75" />
                  <circle cx="60" cy="24" r="4" fill="#ffffff" stroke="#06b6d4" strokeWidth="2.5" />
                  
                  <circle cx="180" cy="27" r="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2.5" />
                  <circle cx="240" cy="15" r="5" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
                </>
              )}
            </svg>
          </div>
        </div>

      </div>

      {/* ── FLOATING BADGE CARD 1: Top Right (+12.8K QR Scans) ── */}
      <div className="absolute -top-5 -right-4 md:-right-6 z-20 bg-white/95 backdrop-blur-md border border-cyan-200/90 rounded-2xl px-4 py-2.5 shadow-xl shadow-cyan-900/10 flex items-center gap-2.5 animate-float-pill-1">
        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">
          <QrCode className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-extrabold text-[#0B1B33]">+12.8K QR Scans</div>
          <div className="text-[10px] font-semibold text-cyan-600">Real-time Verified</div>
        </div>
      </div>

      {/* ── FLOATING BADGE CARD 2: Bottom Left (98.4% Delivered) ── */}
      <div className="absolute -bottom-5 -left-4 md:-left-6 z-20 bg-white/95 backdrop-blur-md border border-sky-200/90 rounded-2xl px-4 py-2.5 shadow-xl shadow-sky-900/10 flex items-center gap-2.5 animate-float-pill-2">
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-extrabold text-[#0B1B33]">98.4% Delivered</div>
          <div className="text-[10px] font-semibold text-emerald-600">Campus & Events</div>
        </div>
      </div>

    </div>
  )
}

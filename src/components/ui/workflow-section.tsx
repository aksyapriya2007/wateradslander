import { Sparkles, Megaphone, Users, Factory, Truck, BarChart2 } from "lucide-react"

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Campaign",
    desc: "Define your audience, geo-location, and goals.",
    icon: Megaphone,
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    step: "02",
    title: "Partner Matching",
    desc: "Match with top venues, colleges, and event partners.",
    icon: Users,
    color: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    step: "03",
    title: "Production",
    desc: "Print eco-friendly QR-wrapped spring water bottles.",
    icon: Factory,
    color: "bg-teal-50 text-teal-600 border-teal-200",
  },
  {
    step: "04",
    title: "Distribution",
    desc: "Hand-to-hand distribution to engaged consumers.",
    icon: Truck,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    step: "05",
    title: "Tracking",
    desc: "Monitor real-time QR scans & campaign analytics.",
    icon: BarChart2,
    color: "bg-cyan-50 text-cyan-700 border-cyan-300",
  },
]

export function WorkflowSection() {
  return (
    <section id="campaigns" className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-300/80 text-cyan-800 text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Seamless End-To-End Execution</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B33] tracking-tight">
          How <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600">WaterAds</span> Works
        </h2>

        <p className="text-base sm:text-lg text-slate-600 font-medium">
          A turnkey physical advertising pipeline engineered for maximum brand engagement.
        </p>
      </div>

      {/* ── DESKTOP HORIZONTAL WORKFLOW (MD+) ── */}
      <div className="hidden md:block relative my-8">
        
        {/* Connecting Thin Cyan Line */}
        <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-300 -translate-y-1/2 pointer-events-none" />

        {/* Animated Traveling Particle Dot (Horizontal) */}
        <div className="absolute top-1/2 left-0 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-white shadow-lg shadow-cyan-500/80 -translate-y-1/2 pointer-events-none animate-travel-particle z-20" />

        {/* 5 Steps Grid */}
        <div className="relative z-10 grid grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-cyan-400/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between min-h-[220px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-400 tracking-wider">
                    {item.step}
                  </span>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-4">
                  <h3 className="text-base font-bold text-[#0B1B33] group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── MOBILE VERTICAL TIMELINE (SM & BELOW) ── */}
      <div className="block md:hidden relative pl-6 my-8 space-y-6">
        
        {/* Connecting Vertical Line */}
        <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-gradient-to-b from-cyan-200 via-sky-300 to-blue-300 pointer-events-none" />

        {/* Animated Traveling Particle Dot (Vertical) */}
        <div className="absolute left-[8px] top-0 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-white shadow-lg shadow-cyan-500/80 pointer-events-none animate-travel-particle-v z-20" />

        {WORKFLOW_STEPS.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 shadow-sm flex items-start gap-4"
            >
              <div className={`w-10 h-10 shrink-0 rounded-xl border flex items-center justify-center ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-600">{item.step}.</span>
                  <h3 className="text-base font-bold text-[#0B1B33]">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

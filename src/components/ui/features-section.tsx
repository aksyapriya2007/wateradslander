import { QrCode, BarChart3, MapPin, Zap, ShieldCheck, RefreshCw } from "lucide-react"

const FEATURES = [
 {
 title: "QR Code Scan Engine",
 desc: "Dynamic QR codes printed on every bottle, driving direct conversions, app downloads, and exclusive offers.",
 iconType: "qr",
 accent: "bg-[#EDEDFF] text-[#3333FF] border-[#BBBBFF]",
 },
 {
 title: "Real-Time Scan Analytics",
 desc: "Track exact scan times, audience demographics, device OS, and venue-level attribution in real time.",
 iconType: "analytics",
 accent: "bg-[#EDEDFF] text-[#3333FF] border-[#BBBBFF]",
 },
 {
 title: "Hyper-Local Geo Targeting",
 desc: "Target high-density tech hubs, university campuses, fitness centers, music festivals, and corporate offices.",
 iconType: "location",
 accent: "bg-teal-50 text-teal-600 border-teal-200",
 },
 {
 title: "Rapid Deployment Pipeline",
 desc: "From artwork approval to physical distribution in under 7 business days with verified proof-of-placement.",
 iconType: "zap",
 accent: "bg-blue-50 text-blue-600 border-blue-200",
 },
 {
 title: "100% Eco-Friendly Media",
 desc: "BPA-free, 100% recyclable spring water bottles certified for environmental sustainability and safety.",
 iconType: "eco",
 accent: "bg-emerald-50 text-emerald-600 border-emerald-200",
 },
 {
 title: "Automated Campaign Re-order",
 desc: "Set threshold-based automated refills to maintain continuous brand exposure across partner venues.",
 iconType: "refresh",
 accent: "bg-[#EDEDFF] text-[#3333FF] border-[#AAAAFF]",
 },
]

export function FeaturesSection() {
 return (
 <section id="features" className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto -hover/70">
 
 <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
 <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
 Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Unmatched Engagement</span>
 </h2>
 <p className="text-base sm:text-lg text-wa-text-muted font-medium">
 Combining the tangible trust of physical media with digital-grade tracking and analytics.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {FEATURES.map((item, idx) => (
 <div
 key={idx}
 className="group relative bg-wa-bg/95 -hover/80 hover:border-[#AAAAFF] rounded-3xl p-7 shadow-xs hover:shadow-xl hover:shadow-[#3333FF]/5 transition-all duration-250 hover:-translate-y-1 hover:bg-wa-bg"
 >
 {/* Animated Icon Container */}
 <div className={`relative w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${item.accent} group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
 {item.iconType === "qr" && (
 <>
 <QrCode className="w-6 h-6" />
 <div className="absolute inset-x-0 h-0.5 bg-[#3333FF] animate-scan-line" />
 </>
 )}

 {item.iconType === "analytics" && (
 <BarChart3 className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
 )}

 {item.iconType === "location" && (
 <MapPin className="w-6 h-6 animate-pulse" />
 )}

 {item.iconType === "zap" && (
 <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
 )}

 {item.iconType === "eco" && (
 <ShieldCheck className="w-6 h-6 group-hover:rotate-12 transition-transform" />
 )}

 {item.iconType === "refresh" && (
 <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
 )}
 </div>

 <h3 className="text-xl font-bold text-[#0B1B33] mb-2 group-hover:text-[#3333FF] transition-colors">
 {item.title}
 </h3>

 <p className="text-sm text-wa-text-muted font-normal leading-relaxed">
 {item.desc}
 </p>
 </div>
 ))}
 </div>

 </section>
 )
}

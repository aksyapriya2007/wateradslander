import { motion } from 'framer-motion';

export default function FooterSection() {
 return (
 <footer className="relative w-full bg-wa-bg text-wa-text pt-16 md:pt-24 pb-8 px-6 md:px-12 flex flex-col justify-between overflow-hidden min-h-[600px] z-10 -hover">
 
 {/* Top Nav Row */}
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-24">
 <motion.a href="#" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="text-4xl md:text-5xl font-black tracking-tighter text-wa-text hover:text-[#3333FF] cursor-pointer transition-colors">Overview</motion.a>
 <motion.a href="#" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black tracking-tighter text-wa-text hover:text-[#3333FF] cursor-pointer transition-colors">Network</motion.a>
 <motion.a href="#" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-black tracking-tighter text-wa-text hover:text-[#3333FF] cursor-pointer transition-colors">Insights</motion.a>
 </div>

 {/* Sub Nav Row */}
 <div className="flex gap-8 mb-16 md:mb-24">
 <motion.a href="#" whileHover={{ x: 4 }} className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">About us</motion.a>
 <motion.a href="#" whileHover={{ x: 4 }} className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">Contact</motion.a>
 </div>

 {/* Info Row */}
 <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16 md:mb-20">
 <div className="flex flex-col gap-2">
 <p className="text-lg md:text-xl font-bold tracking-tight text-wa-text">Offline network, perfectly flowing.</p>
 <p className="text-sm font-medium text-wa-text-muted max-w-md">
 © WaterAds. Building intelligent offline advertising networks along daily consumer hydration routines.
 </p>
 </div>
 <div>
 <a href="#" className="text-sm font-black uppercase tracking-widest text-wa-text hover:text-[#3333FF] transition-colors">INSTAGRAM</a>
 </div>
 </motion.div>

 {/* Giant Text & Shapes Section */}
 <div className="w-full relative mt-auto flex flex-col items-center select-none pt-10">
 
 {/* Geometric Shapes Row */}
 <div className="flex gap-4 md:gap-8 mb-4 items-center justify-start w-full px-2 md:px-8">
 <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-12 h-12 md:w-20 md:h-20 bg-[#3333FF] rounded-full" />
 <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-12 h-12 md:w-20 md:h-20 bg-[#3333FF]" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
 <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-12 h-12 md:w-20 md:h-20 bg-[#3333FF]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
 <motion.div animate={{ rotate: [0, -360] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-12 h-12 md:w-20 md:h-20 bg-[#3333FF] rounded-sm" />
 <motion.div animate={{ scaleX: [0.9, 1.05, 0.9] }} transition={{ duration: 5, repeat: Infinity }} className="h-12 md:h-20 bg-[#3333FF] flex-grow ml-4 md:ml-8 rounded-l-full opacity-60" style={{ transformOrigin: 'left' }} />
 </div>

 {/* Massive Text */}
 <motion.h2 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="text-[12vw] md:text-[14vw] font-black tracking-tighter leading-[0.75] text-wa-text w-full text-left whitespace-nowrap overflow-hidden pr-2 md:pr-4">
 waterads
 </motion.h2>
 </div>

 </footer>
 );
}

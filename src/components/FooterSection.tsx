import { motion } from 'framer-motion';

export default function FooterSection() {
 return (
 <footer className="relative w-full bg-wa-bg text-wa-text pt-16 md:pt-24 pb-8 px-6 md:px-12 flex flex-col justify-between overflow-hidden min-h-[600px] z-10">
 
 {/* Top Nav Row */}
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-24">
 <motion.a href="#" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" as const, bounce: 0, duration: 0.6 }} className="text-display-medium text-wa-text hover:text-[#3333FF] cursor-pointer press-scale">Overview</motion.a>
 <motion.a href="#" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" as const, bounce: 0, duration: 0.6, delay: 0.1 }} className="text-display-medium text-wa-text hover:text-[#3333FF] cursor-pointer press-scale">Network</motion.a>
 <motion.a href="#" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" as const, bounce: 0, duration: 0.6, delay: 0.2 }} className="text-display-medium text-wa-text hover:text-[#3333FF] cursor-pointer press-scale">Insights</motion.a>
 </div>

 {/* Sub Nav Row */}
 <div className="flex gap-8 mb-16 md:mb-24">
 <motion.a href="#" whileHover={{ x: 4 }} className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] press-scale">About us</motion.a>
 <motion.a href="#" whileHover={{ x: 4 }} className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] press-scale">Contact</motion.a>
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
 <a href="#" className="text-sm font-black uppercase tracking-widest text-wa-text hover:text-[#3333FF] press-scale">INSTAGRAM</a>
 </div>
 </motion.div>

 {/* Giant Text Section — clean, no decoration */}
 <div className="w-full relative mt-auto flex flex-col items-center select-none pt-10">
 {/* Massive Text */}
 <motion.h2 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring" as const, bounce: 0, duration: 1 }} viewport={{ once: true }} className="text-[12vw] md:text-[14vw] font-black tracking-tighter leading-[0.75] text-wa-text w-full text-left whitespace-nowrap overflow-hidden pr-2 md:pr-4">
 waterads
 </motion.h2>
 </div>

 </footer>
 );
}

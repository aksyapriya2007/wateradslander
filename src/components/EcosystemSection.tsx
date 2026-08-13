import { motion } from 'framer-motion';
import { Building2, Printer, Factory, Truck, Droplets } from 'lucide-react';

const nodes = [
  {
    id: 'brands',
    title: "Brands",
    icon: Building2,
    x: 20, // percentage
    y: 22,
    path: "M 400 225 C 250 225, 200 100, 160 100",
    delay: 0
  },
  {
    id: 'printing',
    title: "Printing Press",
    icon: Printer,
    x: 80,
    y: 22,
    path: "M 400 225 C 550 225, 600 100, 640 100",
    delay: 0.15
  },
  {
    id: 'plant',
    title: "Water Plant",
    icon: Factory,
    x: 20,
    y: 78,
    path: "M 400 225 C 250 225, 200 350, 160 350",
    delay: 0.3
  },
  {
    id: 'distributors',
    title: "Distributors",
    icon: Truck,
    x: 80,
    y: 78,
    path: "M 400 225 C 550 225, 600 350, 640 350",
    delay: 0.45
  }
];

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-wa-bg overflow-hidden flex flex-col items-center min-h-[100vh]">
      
      {/* TEXT SECTION */}
      <div className="text-center relative z-20 mb-8 md:mb-12 px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs font-bold tracking-[4px] uppercase text-wa-text-muted mb-4 block"
        >
          The Ecosystem
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-wa-text-muted leading-tight"
        >
          A perfectly connected <br className="hidden md:block" />
          <strong className="font-bold text-wa-text block mt-1">OFFLINE NETWORK</strong>
        </motion.h2>
      </div>

      {/* GRAPHIC CONTAINER */}
      <div className="relative w-full max-w-[900px] h-[500px] md:h-[600px] mt-8 flex justify-center items-center">
        
        {/* CONCENTRIC CIRCLES */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full flex justify-center items-center z-0"
          style={{ 
            background: 'rgba(51, 51, 255, 0.02)', 
            boxShadow: 'inset 0 0 20px rgba(51, 51, 255, 0.05)' 
          }}
        >
          <div 
            className="absolute w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-full"
            style={{ 
              background: 'rgba(51, 51, 255, 0.03)', 
              boxShadow: 'inset 0 0 15px rgba(51, 51, 255, 0.05)' 
            }}
          />
          <div 
            className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full"
            style={{ 
              background: 'rgba(51, 51, 255, 0.04)', 
              boxShadow: 'inset 0 0 10px rgba(51, 51, 255, 0.05)' 
            }}
          />
        </motion.div>

        {/* CONNECTING SVG LINES */}
        <svg 
          className="absolute inset-0 w-full h-full z-10 pointer-events-none" 
          viewBox="0 0 800 450" 
          preserveAspectRatio="xMidYMid meet"
        >
          {nodes.map((node) => (
            <g key={`group-${node.id}`}>
              {/* Static Background Track */}
              <motion.path
                d={node.path}
                fill="none"
                stroke="#3333FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="opacity-15 dark:opacity-20"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 + node.delay }}
              />
              {/* Flowing Data Packet */}
              <motion.path
                d={node.path}
                fill="none"
                stroke="#3333FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 4px rgba(51,51,255,0.8))' }}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ pathLength: 0.15, pathOffset: [0, 1] }}
                transition={{ 
                  opacity: { delay: 1.5 },
                  pathOffset: { duration: 2.5, repeat: Infinity, ease: "linear", delay: node.delay },
                  pathLength: { duration: 0 }
                }}
              />
            </g>
          ))}
        </svg>

        {/* CENTRAL NODE (Brain / Droplet) */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0, x: '-50%', y: '-50%' }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1, x: '-50%', y: '-50%' }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 z-30"
        >
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#3333FF] rounded-2xl shadow-[0_10px_25px_rgba(51,51,255,0.4)]"
          >
            <Droplets className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* PERIPHERAL NODES */}
        {nodes.map((node, i) => {
          const Icon = node.icon;
          // Alternate animation directions for organic feel
          const yAnim = i % 2 === 0 ? [-8, 8, -8] : [8, -8, 8];
          const rotAnim = i % 2 === 0 ? [-2, 2, -2] : [2, -2, 2];
          
          return (
            <motion.div
              key={node.id}
              className="absolute z-20"
              style={{ top: `${node.y}%`, left: `${node.x}%` }}
              initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
              whileInView={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 1 + node.delay }}
            >
              {/* The floating wrapper */}
              <motion.div
                animate={{ y: yAnim, rotate: rotAnim }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + i * 0.2, 
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
                className="group flex flex-col items-center relative"
              >
                {/* Minimal Node Box */}
                <motion.div 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#12122A] border border-wa-border shadow-sm rounded-2xl flex justify-center items-center cursor-pointer hover:border-[#3333FF]/30 hover:shadow-md z-10 transition-shadow duration-300"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#3333FF]" />
                </motion.div>
                
                {/* Minimal Label (No background) */}
                <div className="mt-3 text-center absolute top-full w-48 -ml-24 left-1/2 pointer-events-none z-0">
                  <span className="inline-block text-xs md:text-sm font-semibold text-wa-text tracking-wide">
                    {node.title}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

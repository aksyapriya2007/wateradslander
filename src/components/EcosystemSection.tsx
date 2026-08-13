
import { motion } from 'framer-motion';
import { Building2, Printer, Factory, Truck } from 'lucide-react';

const cards = [
  {
    icon: Building2,
    title: "Brands",
    description: "Initiate targeted local campaigns with transparent QR attribution."
  },
  {
    icon: Printer,
    title: "Printing Press",
    description: "Produces serialized label rolls with unique tracking codes."
  },
  {
    icon: Factory,
    title: "Water Plant",
    description: "Bottles and applies branded labels to the distribution network."
  },
  {
    icon: Truck,
    title: "Distributors",
    description: "Deliver to target consumer zones with GPS-verified routing."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0,
      duration: 0.4
    }
  }
};

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-wa-bg overflow-hidden">
      {/* Subtle accent glow behind grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3333FF]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, bounce: 0, duration: 0.4 }}
        >
          <span className="text-sm font-medium tracking-wide uppercase text-wa-text-muted mb-4 block">
            The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-wa-text">
            A perfectly connected offline network.
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Subtle connecting lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" className="text-wa-text" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" className="text-wa-text" />
            </svg>
          </div>

          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring" as const, bounce: 0, duration: 0.4 }}
                className="apple-glass border border-white/20 dark:border-white/10 rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_32px_rgba(0,0,0,0.06)] p-8 md:p-10 relative z-10 flex flex-col items-start bg-white/40 dark:bg-black/20 backdrop-blur-2xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#3333FF]" />
                </div>
                <h3 className="text-xl font-medium text-wa-text mb-3">
                  {card.title}
                </h3>
                <p className="text-wa-text-muted leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

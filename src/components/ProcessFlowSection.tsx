import { motion } from 'framer-motion';
import { Building2, Printer, Factory, Truck, Smartphone } from 'lucide-react';

const participants = [
  {
    id: 'brands',
    pill: 'FOR BRANDS',
    title: 'Launch & measure offline campaigns.',
    desc: 'Target hyper-local regions with transparent QR attribution and real-time ROI tracking.',
    span: 'md:col-span-2',
    icon: Smartphone,
    pillStyle: 'solid'
  },
  {
    id: 'printers',
    pill: 'FOR PRINTERS',
    title: 'Receive nearby print orders.',
    desc: 'Get automated print jobs delivered directly to your press with digital artwork assets.',
    span: 'md:col-span-1',
    icon: Printer,
    pillStyle: 'outline'
  },
  {
    id: 'plants',
    pill: 'FOR PLANTS',
    title: 'Automate label application.',
    desc: 'Receive pre-printed serialized labels to seamlessly apply during your standard bottling runs.',
    span: 'md:col-span-1',
    icon: Factory,
    pillStyle: 'outline'
  },
  {
    id: 'distributors',
    pill: 'FOR DISTRIBUTORS',
    title: 'Deliver with verified routing.',
    desc: 'Execute hyper-local drops with guaranteed GPS verification through our driver application.',
    span: 'md:col-span-2',
    icon: Truck,
    pillStyle: 'outline'
  }
];

export default function ProcessFlowSection() {
  return (
    <section id="participants" className="relative w-full min-h-screen bg-wa-bg py-32 px-6 md:px-12 overflow-hidden">
      
      {/* ── BACKGROUND AESTHETIC DOODLES ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20 dark:opacity-10 mix-blend-overlay">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3333FF]/5 blur-[120px] rounded-full" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-wa-border/50 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row items-start justify-between gap-12">
          <h2 className="text-6xl md:text-8xl font-black tracking-apple-display text-wa-text leading-[1.05] max-w-3xl">
            Built for Every <br/><span className="text-[#3333FF]">Participant.</span>
          </h2>
          <div className="md:w-1/3 flex flex-col pt-4">
            <div className="flex gap-8 mb-8 text-wa-text">
              <Building2 className="w-8 h-8" />
              <Printer className="w-8 h-8" />
              <Truck className="w-8 h-8" />
            </div>
            <p className="text-wa-text-muted text-xl leading-relaxed">
              All essential ecosystem functions unified in one tracking and attribution platform.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">
          {participants.map((item, index) => {
             const Icon = item.icon;

             return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", bounce: 0, duration: 1, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`relative overflow-hidden bg-wa-bg-card border border-wa-border hover:border-[#3333FF]/20 rounded-[32px] p-10 md:p-12 flex flex-col shadow-sm hover:shadow-[0_20px_40px_rgba(51,51,255,0.05)] transition-all duration-300 ${item.span}`}
              >
                <div className="mb-10 inline-block w-fit">
                  <span className={`text-[11px] md:text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest shadow-sm ${
                    item.pillStyle === 'solid' 
                      ? 'bg-[#3333FF] text-white border-none' 
                      : 'bg-transparent border border-[#3333FF]/20 text-[#3333FF]'
                  }`}>
                    {item.pill}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-[2.75rem] font-black text-wa-text leading-[1.1] mb-6 tracking-tight z-10 max-w-xl">
                  {item.title}
                </h3>
                
                <p className="text-wa-text-muted text-lg z-10 max-w-md">
                  {item.desc}
                </p>
                
                {/* Giant Watermark Icon */}
                <Icon className="absolute -bottom-16 -right-16 w-80 h-80 text-black/[0.04] dark:text-white/[0.02] pointer-events-none stroke-[1.5]" />
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
}

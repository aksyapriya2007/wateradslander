import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-wa-bg text-wa-text pt-24 pb-12 px-4 md:px-8 flex flex-col items-center overflow-hidden z-10">
      
      {/* Top Centered Text */}
      <div className="text-center mb-12 max-w-xl mx-auto">
        <p className="text-lg md:text-xl font-medium tracking-tight text-wa-text-muted leading-tight">
          waterads is a labor of love by a laid-back team that takes ideas seriously<br />
          get to know us through our <a href="#" className="text-wa-text font-bold hover:text-[#3333FF] transition-colors underline decoration-2 underline-offset-4">network</a>
        </p>
      </div>

      {/* Main Footer Box */}
      <div className="w-full max-w-[1400px] bg-white dark:bg-wa-card rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 flex flex-col relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-wa-text/5">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 md:mb-24 gap-6">
          {/* Logo / Icon */}
          <div className="flex-1">
            <ArrowDownRight className="w-8 h-8 md:w-10 md:h-10 text-wa-text" strokeWidth={2.5} />
          </div>

          {/* Centered Brand - Premium Apple-like Wordmark */}
          <div className="flex-1 flex justify-start md:justify-center">
            <div className="flex items-baseline select-none">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.05em] text-wa-text leading-none">
                Water<span className="font-light">Ads</span>
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex-1 flex justify-start md:justify-end gap-3">
            <a 
              href="#" 
              className="px-6 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-wa-text font-bold text-sm md:text-base hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors press-scale"
            >
              Login
            </a>
            <a 
              href="#" 
              className="px-6 py-2.5 rounded-full bg-[#3333FF] text-white font-bold text-sm md:text-base hover:bg-[#2222EE] transition-colors shadow-lg shadow-[#3333FF]/20 press-scale"
            >
              Try now
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 mb-24 md:mb-32">
          {/* Empty spacer column for large screens */}
          <div className="hidden lg:block"></div>

          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">iOS app</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">browser extension</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">zines</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">pricing</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">faqs</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">terms</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">manifesto</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">ethos</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">wall of love</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">how I waterads series</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">twitter (x)</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">instagram</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">linkedin</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">slack</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">substack</a>
            <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-wa-text-muted hover:text-[#3333FF] transition-colors">youtube</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex w-full mt-auto text-wa-text-muted/60 text-sm font-medium">
          <p>© WaterAds Internet Inc 2026</p>
        </div>

      </div>
    </footer>
  );
}

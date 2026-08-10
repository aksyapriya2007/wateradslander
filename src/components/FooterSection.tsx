export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#FAFAFA] text-[#111] pt-16 md:pt-24 pb-8 px-6 md:px-12 flex flex-col justify-between overflow-hidden min-h-[600px] z-10 border-t border-slate-200">
      
      {/* Top Nav Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-24">
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] hover:text-sky-500 cursor-pointer transition-colors">Overview</h3>
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] hover:text-sky-500 cursor-pointer transition-colors">Network</h3>
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#111] hover:text-sky-500 cursor-pointer transition-colors">Insights</h3>
      </div>

      {/* Sub Nav Row */}
      <div className="flex gap-8 mb-16 md:mb-24">
        <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-slate-600 hover:text-sky-500 transition-colors">About us</a>
        <a href="#" className="text-lg md:text-xl font-bold tracking-tight text-slate-600 hover:text-sky-500 transition-colors">Contact</a>
      </div>

      {/* Info Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16 md:mb-20">
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-xl font-bold tracking-tight text-[#111]">Offline network, perfectly flowing.</p>
          <p className="text-sm font-medium text-slate-500 max-w-md">
            © WaterAds. Building intelligent offline advertising networks along daily consumer hydration routines.
          </p>
        </div>
        <div>
          <a href="#" className="text-sm font-black uppercase tracking-widest text-[#111] hover:text-sky-500 transition-colors">INSTAGRAM</a>
        </div>
      </div>

      {/* Giant Text & Shapes Section */}
      <div className="w-full relative mt-auto flex flex-col items-center select-none pt-10">
        
        {/* Geometric Shapes Row */}
        <div className="flex gap-4 md:gap-8 mb-4 items-center justify-start w-full px-2 md:px-8">
          <div className="w-12 h-12 md:w-20 md:h-20 bg-cyan-400 rounded-full" />
          <div className="w-12 h-12 md:w-20 md:h-20 bg-sky-500" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
          <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          <div className="w-12 h-12 md:w-20 md:h-20 bg-cyan-400 rounded-sm" />
          <div className="h-12 md:h-20 bg-sky-400 flex-grow ml-4 md:ml-8 rounded-l-full opacity-60" />
        </div>

        {/* Massive Text */}
        <h2 className="text-[12vw] md:text-[14vw] font-black tracking-tighter leading-[0.75] text-[#111] w-full text-left whitespace-nowrap overflow-hidden pr-2 md:pr-4">
          waterads
        </h2>
      </div>

    </footer>
  );
}

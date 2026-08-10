export default function FooterSection() {
  return (
    <footer className="relative w-full text-white z-10 flex flex-col font-sans">
      
      {/* Upper CTA Section */}
      <div className="relative w-full bg-[#0a0a0a] min-h-[450px] md:min-h-[550px] flex items-center px-6 md:px-16 overflow-hidden">
        {/* Background Glowing Effect (Cyan/Blue for WaterAds) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] opacity-30 blur-[120px] bg-gradient-to-tr from-cyan-600/40 via-transparent to-blue-600/40" />
           {/* Streaks / slashes to mimic the abstract lighting */}
           <div className="absolute top-[-20%] right-[10%] w-[150%] h-[40px] bg-cyan-400 rotate-[-20deg] blur-3xl opacity-20" />
           <div className="absolute bottom-[-10%] left-[5%] w-[100%] h-[60px] bg-blue-500 rotate-[-15deg] blur-[80px] opacity-20" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 pt-12 pb-8">
          <h2 className="text-6xl sm:text-7xl md:text-[100px] font-semibold tracking-tight text-white leading-[1.05]">
            Let's build<br />
            the inevitable
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 pb-4">
            <a href="#contact" className="text-xl md:text-2xl font-semibold text-white hover:text-cyan-400 transition-colors border-b-2 border-white/30 hover:border-cyan-400 pb-1">
              Start a project
            </a>
            <a href="#careers" className="text-xl md:text-2xl font-semibold text-white hover:text-cyan-400 transition-colors border-b-2 border-white/30 hover:border-cyan-400 pb-1">
              Join the team
            </a>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="relative w-full bg-[#111111] pt-20 md:pt-28 flex flex-col justify-between overflow-hidden">
        
        {/* Info Rows */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1600px] mx-auto gap-12 mb-20 px-6 md:px-16">
          
          {/* Left: Socials & Copyright */}
          <div className="flex flex-col gap-24 md:gap-32">
            <div className="flex gap-6">
              <a href="#" className="text-base font-bold tracking-widest text-white hover:text-cyan-400 transition-colors">IN</a>
              <a href="#" className="text-base font-bold tracking-widest text-white hover:text-cyan-400 transition-colors">IG</a>
              <a href="#" className="text-base font-bold tracking-widest text-white hover:text-cyan-400 transition-colors">X</a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-neutral-400">
              <p>© 2026 WaterAds</p>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Right: Address */}
          <div className="flex flex-col gap-1.5 text-sm font-medium text-neutral-400 text-left md:text-right mt-12 md:mt-0">
            <p className="text-white font-bold text-base mb-2">WaterAds HQ</p>
            <p>Tambaram Road, Vellarai</p>
            <p>Chennai, TN 602105</p>
          </div>
          
        </div>

        {/* Massive Text (bottom cut off) */}
        <div className="w-full relative flex justify-center items-end mt-auto pointer-events-none">
          <h1 className="text-[22vw] leading-[0.72] font-black tracking-tighter text-white translate-y-[18%] select-none">
            waterads
          </h1>
        </div>

      </div>

    </footer>
  );
}

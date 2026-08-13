export default function FooterSection() {
  return (
    <footer className="relative w-full bg-wa-bg text-wa-text pt-24 pb-12 px-6 md:px-12 flex flex-col items-center overflow-hidden z-10">
      
      {/* Intro Text Above Footer */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-lg md:text-xl text-wa-text-muted font-medium leading-relaxed tracking-tight">
          waterads is a labor of love by a laid-back team that takes offline tracking seriously<br/>
          get to know us through our <a href="#" className="text-wa-text font-bold hover:text-[#3333FF] transition-colors underline decoration-2 underline-offset-4">network</a>
        </p>
      </div>

      {/* Main Footer Squircle Card */}
      <div className="w-full max-w-[1400px] bg-wa-bg-card border border-wa-border rounded-[40px] md:rounded-[48px] p-8 md:p-12 lg:p-16 flex flex-col relative shadow-sm hover:shadow-md transition-shadow duration-500">
        
        {/* Top Row: Logo, Wordmark, Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-0 mb-16 md:mb-24">
          
          {/* Logo Icon (Left) */}
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center text-[#3333FF] hover:text-[#0284c7] transition-colors">
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                <circle cx="12" cy="15" r="3" fill="currentColor" opacity="0.3" />
                <circle cx="12" cy="15" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>

          {/* Wordmark (Center) */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-black tracking-tight leading-none text-wa-text mb-1">
                WaterAds
              </span>
              <span className="text-[10px] md:text-xs font-bold text-wa-text-muted opacity-80 uppercase tracking-[0.2em] leading-none">
                Offline Ad Network
              </span>
            </div>
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex-1 flex justify-end gap-3 md:gap-4">
            <a href="#" className="px-6 py-2.5 rounded-full text-sm font-bold text-wa-text bg-wa-bg hover:bg-wa-border transition-colors shadow-sm">
              login
            </a>
            <a href="#" className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#3333FF] hover:bg-[#3333FF]/90 transition-colors shadow-sm">
              get started
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl mx-auto mb-20 md:mb-32">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">brand platform</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">driver app</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">case studies</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">pricing</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">documentation</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">terms</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">manifesto</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">ethos</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">wall of love</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">how we track</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">why offline?</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">twitter (x)</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">instagram</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">linkedin</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">slack</a>
            <a href="#" className="text-wa-text-muted hover:text-[#3333FF] font-medium transition-colors">substack</a>
          </div>

        </div>

        {/* Copyright */}
        <div className="w-full flex justify-start">
          <p className="text-wa-text-muted text-sm font-medium">
            © WaterAds Inc 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

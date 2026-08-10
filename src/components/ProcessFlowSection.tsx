import React from 'react';
import { Target, Printer, Activity, Truck, BarChart3, Lock, CheckCircle2, Shield, FileText } from 'lucide-react';

export default function ProcessFlowSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center py-24 px-6 md:px-16 font-sans text-white z-10">
      
      {/* Header */}
      <div className="w-full max-w-7xl mb-12">
        <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4 block">Process</span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          The Flow
        </h2>
      </div>

      {/* Bento Grid Container */}
      <div className="w-full max-w-7xl border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-12 bg-[#0a0a0a]">
        
        {/* LEFT COLUMN (4 Cols) */}
        <div className="col-span-1 md:col-span-4 flex flex-col border-r border-white/10">
          
          {/* Top Left: CREATE */}
          <div className="flex-1 border-b border-white/10 p-10 md:p-12 flex flex-col justify-start">
            <Target className="w-6 h-6 text-neutral-500 mb-24" strokeWidth={1.5} />
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">Create</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We define your target network, duration, and can quantity based on brand goals.
              </p>
            </div>
          </div>

          {/* Bottom Left: PRINT */}
          <div className="flex-1 p-10 md:p-12 flex flex-col justify-start">
            <Printer className="w-6 h-6 text-neutral-500 mb-24" strokeWidth={1.5} />
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">Print</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We serialize the advertising labels and produce them with extreme precision and speed.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (8 Cols) */}
        <div className="col-span-1 md:col-span-8 flex flex-col">
          
          {/* Top Right: MASSIVE VALUE PROP */}
          <div className="flex-[2] border-b border-white/10 p-10 md:p-16 flex flex-col justify-start relative overflow-hidden">
            <Activity className="w-6 h-6 text-neutral-500 mb-24" strokeWidth={1.5} />
            
            <div className="relative z-10 mt-auto">
              <h2 className="text-7xl md:text-[120px] font-medium tracking-tighter text-white leading-none mb-4">
                100%
              </h2>
              <h3 className="text-2xl font-semibold mb-6 text-white tracking-tight">Offline-to-Online</h3>
              <p className="text-neutral-400 text-base max-w-lg leading-relaxed">
                WaterAds transforms physical hydration into measurable digital interactions, bridging the gap between real-world consumption and digital engagement with absolute reliability.
              </p>
            </div>

            {/* Subtle background glow to mimic the screenshot's premium feel */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-cyan-900/10 pointer-events-none" />
          </div>

          {/* Bottom Right: SPLIT (DISTRIBUTE & MEASURE) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2">
            
            {/* Split Left: DISTRIBUTE */}
            <div className="p-10 md:p-12 flex flex-col justify-start border-b sm:border-b-0 sm:border-r border-white/10">
              <Truck className="w-6 h-6 text-neutral-500 mb-20" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">Distribute</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Plants apply the labels and dispatch cans to strictly targeted geographic zones.
                </p>
              </div>
            </div>

            {/* Split Right: MEASURE */}
            <div className="p-10 md:p-12 flex flex-col justify-start">
              <BarChart3 className="w-6 h-6 text-neutral-500 mb-20" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">Measure</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Unique QR scans capture real-time engagement and robust campaign tracking.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

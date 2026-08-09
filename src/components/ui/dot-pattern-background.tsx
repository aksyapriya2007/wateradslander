export function DotPatternBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    >
      {/* Base Light Background */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* Ambient Moving Radial Gradient Aura (18s slow drift) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-tr from-cyan-200/35 via-sky-100/40 to-blue-200/25 blur-[140px] rounded-full animate-aura-drift pointer-events-none" />

      {/* Animated Dot Field (Wave animation moving across dot field) */}
      <div className="absolute inset-0 bg-dot-pattern opacity-95" />
    </div>
  )
}

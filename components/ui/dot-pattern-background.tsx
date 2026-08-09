export function DotPatternBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
    >
      {/* Base Light Background */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* Radial soft cyan/blue gradient ambient aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-gradient-to-tr from-cyan-200/35 via-sky-100/45 to-blue-200/25 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-gradient-to-bl from-teal-200/25 via-cyan-100/30 to-transparent blur-[100px] rounded-full pointer-events-none" />

      {/* Animated Dot Field covering entire viewport uniformly */}
      <div className="absolute inset-0 bg-dot-pattern opacity-100" />
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
 end: number
 decimals?: number
 prefix?: string
 suffix?: string
 duration?: number
}

export function useCountUp({ end, decimals = 0, prefix = '', suffix = '', duration = 1200 }: CountUpProps) {
 const [count, setCount] = useState(0)
 const [isVisible, setIsVisible] = useState(false)
 const elementRef = useRef<HTMLDivElement | null>(null)

 useEffect(() => {
 const node = elementRef.current
 if (!node) return

 const observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setIsVisible(true)
 observer.disconnect()
 }
 },
 { threshold: 0.2 }
 )

 observer.observe(node)
 return () => observer.disconnect()
 }, [])

 useEffect(() => {
 if (!isVisible) return

 let startTimestamp: number | null = null
 let animationFrameId: number

 const step = (timestamp: number) => {
 if (!startTimestamp) startTimestamp = timestamp
 const progress = Math.min((timestamp - startTimestamp) / duration, 1)
 
 // Smooth easeOutCubic
 const easeProgress = 1 - Math.pow(1 - progress, 3)
 const currentVal = easeProgress * end

 setCount(currentVal)

 if (progress < 1) {
 animationFrameId = requestAnimationFrame(step)
 }
 }

 animationFrameId = requestAnimationFrame(step)

 return () => cancelAnimationFrame(animationFrameId)
 }, [isVisible, end, duration])

 const formattedValue = `${prefix}${count.toFixed(decimals)}${suffix}`

 return { elementRef, formattedValue, isVisible }
}

export function AnimatedMetric({
 end,
 decimals = 0,
 prefix = '',
 suffix = '',
 label,
 accentColor = 'text-[#0B1B33]',
 delay = 0,
}: {
 end: number
 decimals?: number
 prefix?: string
 suffix?: string
 label: string
 accentColor?: string
 delay?: number
}) {
 const { elementRef, formattedValue } = useCountUp({ end, decimals, prefix, suffix, duration: 1300 })

 return (
 <div ref={elementRef} className="space-y-1 transition-all duration-700" style={{ transitionDelay: `${delay}ms` }}>
 <div className={`text-3xl md:text-4xl font-extrabold ${accentColor} tracking-tight`}>
 {formattedValue}
 </div>
 <div className="text-xs md:text-sm font-semibold text-slate-600">{label}</div>
 </div>
 )
}

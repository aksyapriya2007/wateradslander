import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
 onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
 useEffect(() => {
 const timer = setTimeout(() => {
 onComplete();
 }, 2500); // Shortened duration for better UX
 return () => clearTimeout(timer);
 }, [onComplete]);

 return (
 <motion.div
 className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
 style={{ backgroundColor: 'var(--wa-bg)' }}
 initial={{ opacity: 1 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
 >
 <div className="flex flex-col items-center justify-center w-full px-6">
 
 {/* Animated Shapes */}
 <div className="flex gap-4 md:gap-6 mb-8 items-center justify-center w-full">
 {[
 { clip: 'circle(50% at 50% 50%)', delay: 0 },
 { clip: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', delay: 0.1 },
 { clip: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', delay: 0.2 },
 { clip: 'inset(0% 0% 0% 0% round 4px)', delay: 0.3 }
 ].map((shape, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, y: 30, scale: 0.8 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 transition={{ delay: shape.delay, type: 'spring', stiffness: 200, damping: 15 }}
 className="w-12 h-12 md:w-16 md:h-16 shadow-xl" 
 style={{ backgroundColor: 'var(--wa-text)', clipPath: shape.clip }}
 />
 ))}
 </div>

 {/* Brand Text */}
 <div className="overflow-hidden relative w-full flex flex-col items-center">
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none uppercase"
 style={{ color: 'var(--wa-text)' }}
 >
 WATERADS
 </motion.h1>
 </div>

 </div>
 </motion.div>
 );
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Cinematic Exit: The background fades out, while elements rush towards the camera
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" as any, when: "afterChildren" }
    }
  };

  const contentGroupVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 1.05,
      transition: { duration: 4, ease: "linear" as any } // Slow cinematic zoom
    },
    exit: {
      scale: 3, // Rush to camera
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }
    }
  };

  // Fun bouncy entrance for shapes
  const shapeVariants = {
    hidden: { opacity: 0, y: -100, rotate: -90, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        type: "spring" as const,
        stiffness: 200,
        damping: 12,
        mass: 0.8
      }
    })
  };

  const letters = "WATERADS".split("");

  // Staggered cinematic text reveal
  const textContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.8 // Start after shapes land
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 150
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <motion.div 
        className="flex flex-col items-center justify-center w-full px-6"
        variants={contentGroupVariants}
      >
        
        {/* Fun Bouncy Shapes */}
        <div className="flex gap-4 md:gap-8 mb-8 items-center justify-center w-full">
          <motion.div 
            custom={0} variants={shapeVariants}
            className="w-10 h-10 md:w-16 md:h-16 bg-[#0F172A] rounded-full shadow-xl" 
          />
          <motion.div 
            custom={1} variants={shapeVariants}
            className="w-10 h-10 md:w-16 md:h-16 bg-[#0F172A] shadow-xl" 
            style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} 
          />
          <motion.div 
            custom={2} variants={shapeVariants}
            className="w-10 h-10 md:w-16 md:h-16 bg-[#0F172A] shadow-xl" 
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
          />
          <motion.div 
            custom={3} variants={shapeVariants}
            className="w-10 h-10 md:w-16 md:h-16 bg-[#0F172A] rounded-sm shadow-xl" 
          />
        </div>

        {/* Cinematic Staggered Text */}
        <div className="overflow-hidden relative w-full flex flex-col items-center perspective-1000">
          <motion.h1 
            variants={textContainerVariants}
            className="text-[14vw] md:text-[10vw] font-black tracking-tighter leading-none text-[#0F172A] uppercase flex"
          >
            {letters.map((letter, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="inline-block origin-bottom"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

      </motion.div>

    </motion.div>
  );
}

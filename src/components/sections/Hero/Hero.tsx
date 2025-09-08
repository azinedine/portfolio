"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Plus, Star, Sparkles } from "lucide-react";
import { BackgroundOrbs } from "@/components/common/BackgroundOrbs";
import { FloatingElement } from "@/components/common/FloatingElements";
import { HeroContent } from "./HeroContent";
import { HeroProfile } from "./HeroProfile";

// Memoized decorative elements to prevent re-renders
const DecorativeElements = () => (
  <>
    <FloatingElement
      duration={8}
      yRange={10}
      rotateRange={180}
      className="absolute top-1/4 left-20"
    >
      <Plus className="w-6 h-6 text-primary-400/40" />
    </FloatingElement>

    <FloatingElement
      duration={4}
      delay={1}
      yRange={8}
      className="absolute bottom-1/3 right-32"
    >
      <Star className="w-5 h-5 text-yellow-400/50" />
    </FloatingElement>

    <FloatingElement
      duration={6}
      delay={2}
      yRange={12}
      className="absolute top-40 right-1/3"
    >
      <Sparkles className="w-6 h-6 text-cyan-400/50" />
    </FloatingElement>
  </>
);

// Memoized geometric shapes
const GeometricShapes = () => (
  <>
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute top-32 right-1/4 w-20 h-20 border border-primary-400/30 rounded-lg backdrop-blur-sm"
    />

    <motion.div
      animate={{
        rotate: -360,
        y: [0, -15, 0],
      }}
      transition={{
        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute bottom-40 left-1/3 w-16 h-16 border border-cyan-400/30 rounded-full backdrop-blur-sm"
    />
  </>
);

// Memoized scroll indicator
const ScrollIndicator = ({ onClick }: { onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
    onClick={onClick}
  >
    <motion.p
      className="text-white/60 text-sm mb-3 font-medium"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Scroll to explore
    </motion.p>
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-6 h-10 border border-white/30 rounded-full mx-auto relative backdrop-blur-sm"
    >
      <motion.div
        animate={{ y: [2, 16, 2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-1 h-3 bg-primary-500 rounded-full mx-auto mt-2"
      />
    </motion.div>
    <motion.div
      animate={{ y: [0, 3, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="mt-1"
    >
      <ChevronDown className="w-4 h-4 text-white/40 mx-auto" />
    </motion.div>
  </motion.div>
);

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Optimized mouse move handler with useCallback to prevent re-renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 100,
      y: (e.clientY - window.innerHeight / 2) / 100,
    });
  }, []);

  // Optimized scroll handler
  const handleScrollToNext = useCallback(() => {
    const nextSection =
      document.querySelector('[data-section="why-choose"]') ||
      document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    // Throttled mouse move for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 16); // ~60fps
    };

    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  // Memoized mouse follower style
  const mouseFollowerStyle = useMemo(
    () => ({
      background:
        "radial-gradient(circle, rgba(109, 74, 236, 0.06) 13%, rgba(59, 130, 246, 0.03) 10%, transparent 40%)",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <BackgroundOrbs />
        <GeometricShapes />
        <DecorativeElements />
      </div>

      {/* Optimized Mouse follower gradient */}
      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
        style={mouseFollowerStyle}
      />

      {/* Main Content */}
      <div className="container-responsive  section-padding relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <HeroContent />
          <HeroProfile />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={handleScrollToNext} />
    </section>
  );
}

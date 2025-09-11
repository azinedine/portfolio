"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Plus, Star, Sparkles } from "lucide-react";
import { BackgroundOrbs } from "@/components/common/BackgroundOrbs";
import { FloatingElement } from "@/components/common/FloatingElements";
import { HeroContent } from "./HeroContent";
import { HeroProfile } from "./HeroProfile";

// Memoized decorative elements to prevent re-renders
const DecorativeElements = () => (
  <>
    <FloatingElement
      duration={12}
      yRange={8}
      rotateRange={90}
      className="absolute top-1/4 left-20 hidden xl:block"
    >
      <Plus className="w-4 h-4 text-primary-400/30" />
    </FloatingElement>

    <FloatingElement
      duration={8}
      delay={2}
      yRange={6}
      className="absolute bottom-1/3 right-32 hidden xl:block"
    >
      <Star className="w-4 h-4 text-yellow-400/40" />
    </FloatingElement>
  </>
);

// Memoized geometric shapes - Reduced complexity
const GeometricShapes = () => (
  <>
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.01, 1],
      }}
      transition={{
        rotate: { duration: 60, repeat: Infinity, ease: "linear" },
        scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute top-32 right-1/4 w-16 h-16 border dark:border-gray-800 border-primary-400/20 rounded-lg backdrop-blur-sm hidden lg:block"
    />
  </>
);


export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Optimized mouse move handler with useCallback to prevent re-renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 150, // Reduced sensitivity
      y: (e.clientY - window.innerHeight / 2) / 150, // Reduced sensitivity
    });
  }, []);

  // Optimized scroll handler

  useEffect(() => {
    // Throttled mouse move for better performance - Increased throttle
    let timeoutId: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 50); // Increased from 32ms to 50ms for better performance
    };

    // Only add listener on desktop devices
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    if (mediaQuery.matches) {
      window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    }
    
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
    <section id="hero" className="relative min-h-screen pt-20 sm:pt-24 md:pt-20 pb-12 sm:pb-16 md:pb-20 flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid dark:bg-dark-900 opacity-30 dark:opacity-15" />
        <BackgroundOrbs />
        <GeometricShapes />
        <DecorativeElements />
      </div>

      {/* Optimized Mouse follower gradient - Only on desktop */}
      <motion.div
        className="absolute w-[400px] h-[400px] pointer-events-none hidden lg:block"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "easeOut",
        }}
        style={mouseFollowerStyle}
      />

      {/* Main Content */}
      <div className="container-responsive section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <HeroProfile />
          </div>
        </div>
      </div>

    </section>
  );
}

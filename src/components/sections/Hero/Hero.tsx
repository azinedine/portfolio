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
        scale: [1, 1.02, 1],
      }}
      transition={{
        rotate: { duration: 40, repeat: Infinity, ease: "linear" },
        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute top-32 right-1/4 w-20 h-20 border dark:border-gray-800 border-primary-400/30 rounded-lg backdrop-blur-sm"
    />

    <motion.div
      animate={{
        rotate: -360,
        y: [0, -10, 0],
      }}
      transition={{
        rotate: { duration: 50, repeat: Infinity, ease: "linear" },
        y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute bottom-40 left-1/3 w-16 h-16 border border-cyan-400/30 rounded-full backdrop-blur-sm"
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
    // Throttled mouse move for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 32); // Reduced to ~30fps for smoother performance
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
    <section id="hero" className="relative h-screen min-h-[100vh] flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid dark:bg-dark-900 opacity-30 dark:opacity-15" />
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
          type: "tween",
          duration: 0.3,
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
          <div className="order-1 lg:order-2">
            <HeroProfile />
          </div>
        </div>
      </div>

    </section>
  );
}

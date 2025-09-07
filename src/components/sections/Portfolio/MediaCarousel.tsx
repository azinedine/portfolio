"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type MediaCarouselProps = {
  images: string[];
  alt: string;
  heightClass?: string; // e.g., "h-64 md:h-80 lg:h-96"
  roundedClass?: string; // e.g., "rounded-2xl"
};

export function MediaCarousel({
  images,
  alt,
  heightClass = "h-48 md:h-60 lg:h-66",
  roundedClass = "rounded-2xl",
}: MediaCarouselProps) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  const len = safeImages.length;
  const next = () => setIndex((i) => (i + 1) % len);
  const prev = () => setIndex((i) => (i - 1 + len) % len);

  if (len === 0) {
    return (
      <div className={`relative w-full ${heightClass} ${roundedClass} overflow-hidden bg-white/5`} />
    );
  }

  return (
    <div className={`relative w-full ${heightClass} ${roundedClass} overflow-hidden`}>
      {/* Slide viewport */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeImages[index]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.0, scale: 0.985 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={safeImages[index]}
              alt={alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optional subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* Prev/Next Controls */}
      {len > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {len > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {safeImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 w-4 rounded-full transition ${
                i === index ? "bg-white/90" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MediaCarousel;

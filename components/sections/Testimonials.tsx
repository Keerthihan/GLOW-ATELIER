// components/sections/Testimonials.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  const totalItems = testimonials.length;

  // Auto-scroll logic
  useEffect(() => {
    if (!isPaused) {
      scrollInterval.current = setInterval(() => {
        handleNext();
      }, 3500);
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    // Scroll back
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    // Scroll forward
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper id="testimonials" className="bg-grey-goose overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Client notes
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          What Our Clients Say
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      <div
        className="max-w-7xl mx-auto relative px-4 lg:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Window */}
        <div className="overflow-hidden w-full py-4">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalItems)}%)`,
              width: `${totalItems * 100}%`,
            }}
          >
            {testimonials.map((test) => {
              // Testimonial Card Width calculation
              // On desktop: 1/3 of view, On mobile: 100% of view
              return (
                <div
                  key={test.id}
                  className="px-2 snap-center"
                  style={{ width: `${100 / totalItems}%` }}
                >
                  <div className="bg-white-rock/75 p-8 lg:p-10 rounded-[2rem] h-full flex flex-col justify-between transition-all duration-500 relative min-h-[350px] shadow-[0_18px_55px_rgba(13,27,42,0.07)] backdrop-blur">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blush-clay/10" />
                    <div className="font-display text-7xl text-blush-clay/50 leading-[0.2] text-left select-none mb-8 relative">
                      “
                    </div>

                    <p className="font-body text-base text-deep-sea/78 leading-relaxed text-left italic mb-6 relative">
                      {test.feedback}
                    </p>

                    <div>
                      {/* Star Rating (★ lotus colored) */}
                      <div className="flex items-center gap-1 mb-6 justify-start">
                        {Array.from({ length: 5 }).map((_, starIdx) => {
                          const isFilled = starIdx < test.rating;
                          return (
                            <Star
                              key={starIdx}
                              className={`w-4 h-4 shrink-0 ${
                                isFilled
                                  ? "fill-golden-hour text-golden-hour"
                                  : "text-blush-clay/25"
                              }`}
                            />
                          );
                        })}
                      </div>

                      {/* Customer Info Row */}
                      <div className="flex items-center gap-4 pt-6 border-t border-blush-clay/10 text-left">
                        <div className="w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center shrink-0 overflow-hidden relative">
                          <span className="font-display text-base font-bold text-eucalyptus uppercase select-none">
                            {test.customerName[0]}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-deep-sea leading-snug">
                          {test.customerName}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel controls - desktop hidden, side overlays */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center hidden md:flex pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-pearl hover:bg-blush-clay text-deep-sea hover:text-white-rock flex items-center justify-center shadow-md cursor-pointer pointer-events-auto transition-all hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-pearl hover:bg-blush-clay text-deep-sea hover:text-white-rock flex items-center justify-center shadow-md cursor-pointer pointer-events-auto transition-all hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === dotIdx ? "w-8 bg-eucalyptus" : "w-2 bg-blush-clay/35"
              }`}
              aria-label={`Go to testimonial ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

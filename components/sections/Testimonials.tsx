// components/sections/Testimonials.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
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
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          What Our Clients Say
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
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
                  <Card className="bg-white-rock p-8 rounded-sm h-full flex flex-col justify-between hover:border-lotus transition-all duration-300 relative min-h-[350px]">
                    {/* Visual quote mark in pink-daisy */}
                    <div className="font-display text-6xl text-pink-daisy leading-[0.2] text-left select-none mb-6">
                      “
                    </div>

                    {/* Feedback copy */}
                    <p className="font-body text-base text-thunder/85 leading-relaxed text-left italic mb-6">
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
                                  ? "fill-lotus text-lotus"
                                  : "text-pink-daisy/40"
                              }`}
                            />
                          );
                        })}
                      </div>

                      {/* Customer Info Row */}
                      <div className="flex items-center gap-4 pt-6 border-t border-pink-daisy/10 text-left">
                        {/* Circle Avatar Logo Placeholder */}
                        <div className="w-12 h-12 rounded-full bg-grey-goose flex items-center justify-center border border-pink-daisy/35 shrink-0 overflow-hidden relative">
                          <div className="absolute inset-1 border border-pink-daisy/10 rounded-full" />
                          <span className="font-display text-base font-bold text-thunder/50 uppercase select-none">
                            {test.customerName[0]}
                          </span>
                        </div>
                        {/* H3 Customer Name */}
                        <h3 className="font-display text-lg font-semibold text-lotus leading-snug">
                          {test.customerName}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel controls - desktop hidden, side overlays */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center hidden md:flex pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white-rock hover:bg-pink-daisy text-thunder flex items-center justify-center shadow-md cursor-pointer pointer-events-auto border border-pink-daisy transition-all hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-lotus" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white-rock hover:bg-pink-daisy text-thunder flex items-center justify-center shadow-md cursor-pointer pointer-events-auto border border-pink-daisy transition-all hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-lotus" />
          </button>
        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === dotIdx ? "w-8 bg-lotus" : "w-2 bg-pink-daisy/60"
              }`}
              aria-label={`Go to testimonial ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

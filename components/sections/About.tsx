// components/sections/About.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const animLeft = shouldReduceMotion ? {} : slideInLeft;
  const animRight = shouldReduceMotion ? {} : slideInRight;

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "12K+", label: "Happy Clients" },
    { number: "35+", label: "Premium Services" },
    { number: "8", label: "National Awards" },
  ];

  return (
    <SectionWrapper id="about" className="bg-grey-goose">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image Placeholder (5 cols) */}
        <motion.div
          className="lg:col-span-5 w-full h-[350px] lg:h-[450px]"
          variants={animLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full h-full bg-white-rock border-2 border-pink-daisy rounded-sm relative p-8 flex items-center justify-center text-center">
            <div className="w-full h-full border border-pink-daisy/40 rounded-sm relative flex flex-col justify-center items-center">
              <div className="absolute inset-4 bg-thunder/5 flex flex-col items-center justify-center p-4">
                <span className="font-display text-3xl font-bold text-thunder opacity-60 mb-2">
                  Est. 2011
                </span>
                <span className="font-body text-xs uppercase tracking-widest text-lotus font-bold">
                  Colombo Elite Living
                </span>
              </div>
              <div className="absolute -top-3 -right-3 bg-lotus text-white-rock text-[10px] uppercase tracking-widest px-3 py-1 font-bold rounded-sm border border-pink-daisy">
                Authentic
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text Story and Badges (7 cols) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center items-start text-left"
          variants={animRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Heading */}
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
            Our Story
          </h2>

          {/* Accent Line */}
          <div className="w-16 h-1 bg-pink-daisy mb-6" />

          {/* Body Narrative */}
          <p className="font-body text-base text-thunder/90 leading-relaxed mb-6">
            Glow Atelier was founded on Galle Road, Colombo, with a single, uncompromising vision: to marry elite international standards with holistic botanical therapy. For over a decade and a half, we have catered to Colombo’s most discerning tastemakers, offering a sanctuary where luxury is intimate, ethical, and tailored.
          </p>
          <p className="font-body text-base text-thunder/80 leading-relaxed mb-8">
            Every master stylist, therapist, and artist in our team is globally trained to deliver meticulous, biology-aware transformations. Whether preparing you for the red carpet or your special bridal day, we ensure you emerge with effortless, long-lasting radiance.
          </p>

          {/* Four Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-4 border-t-2 border-pink-daisy/25">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start p-2 border-r border-pink-daisy/20 last:border-0">
                <span className="font-display text-4xl font-bold text-lotus mb-1">
                  {stat.number}
                </span>
                <span className="font-body text-xs tracking-wider uppercase text-thunder/70 font-semibold leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

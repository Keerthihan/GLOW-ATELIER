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
    <SectionWrapper id="about" className="bg-white-rock">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image Placeholder (5 cols) */}
        <motion.div
          className="lg:col-span-5 w-full h-[350px] lg:h-[450px]"
          variants={animLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full h-full rounded-[2.5rem] bg-grey-goose p-3 shadow-[0_24px_70px_rgba(13,27,42,0.12)] relative">
            <div className="h-full overflow-hidden rounded-[2rem] relative">
              <img
                src="/images/inteor1.jpg"
                alt="Glow Atelier modern salon interior"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/55 via-transparent to-transparent" />
              <div className="absolute -top-3 -right-3 bg-eucalyptus text-white-rock text-[10px] uppercase tracking-widest px-4 py-2 font-bold rounded-full border border-white-rock">
                Authentic
              </div>
              <div className="absolute bottom-5 left-5 rounded-[1.25rem] bg-pearl/90 px-5 py-4 shadow-lg backdrop-blur">
                <span className="font-display text-3xl font-bold text-deep-sea block leading-none mb-1">
                  Est. 2011
                </span>
                <span className="font-body text-xs uppercase tracking-widest text-eucalyptus font-bold">
                  Colombo Elite Living
                </span>
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
          <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
            Our Story
          </h2>

          {/* Accent Line */}
          <div className="w-16 h-1 bg-blush-clay rounded-full mb-6" />

          {/* Body Narrative */}
          <p className="font-body text-base text-deep-sea/82 leading-relaxed mb-6">
            Glow Atelier was founded on Galle Road, Colombo, with a single, uncompromising vision: to marry elite international standards with holistic botanical therapy. For over a decade and a half, we have catered to Colombo’s most discerning tastemakers, offering a sanctuary where luxury is intimate, ethical, and tailored.
          </p>
          <p className="font-body text-base text-deep-sea/70 leading-relaxed mb-8">
            Every master stylist, therapist, and artist in our team is globally trained to deliver meticulous, biology-aware transformations. Whether preparing you for the red carpet or your special bridal day, we ensure you emerge with effortless, long-lasting radiance.
          </p>

          {/* Four Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 border-t border-blush-clay/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start rounded-[1.25rem] bg-pearl p-4 shadow-sm">
                <span className="font-display text-4xl font-bold text-eucalyptus mb-1">
                  {stat.number}
                </span>
                <span className="font-body text-xs tracking-wider uppercase text-deep-sea/65 font-semibold leading-tight">
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

// components/sections/BeforeAfter.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { beforeAfterPairs } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const BeforeAfter = () => {
  const shouldReduceMotion = useReducedMotion();

  const animLeft = shouldReduceMotion ? {} : slideInLeft;
  const animRight = shouldReduceMotion ? {} : slideInRight;

  return (
    <SectionWrapper id="beforeafter" className="bg-white-rock">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Transformations
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* Grid: 2-column desktop, 1-column mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {beforeAfterPairs.map((pair) => (
          <Card key={pair.id} className="p-8 flex flex-col justify-between">
            {/* Split layout inside one card: Before / After Column */}
            <div className="grid grid-cols-2 gap-6 items-center mb-8">
              {/* Before Column */}
              <motion.div
                className="flex flex-col items-center"
                variants={animLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-thunder/60 mb-2.5">
                  Before
                </span>
                <div
                  className={`w-full aspect-[4/3] rounded-sm ${pair.beforeColor} flex flex-col items-center justify-center p-4 border-2 border-pink-daisy/40`}
                >
                  <span className="font-display text-xs italic font-semibold text-thunder/50 text-center uppercase tracking-wider">
                    {pair.beforeAlt}
                  </span>
                </div>
              </motion.div>

              {/* After Column */}
              <motion.div
                className="flex flex-col items-center"
                variants={animRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="font-body text-xs font-bold uppercase tracking-widest text-lotus mb-2.5">
                  After
                </span>
                <div
                  className={`w-full aspect-[4/3] rounded-sm ${pair.afterColor} flex flex-col items-center justify-center p-4 border-2 border-lotus/40 shadow-sm relative`}
                >
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-lotus animate-pulse" />
                  <span className="font-display text-xs italic font-semibold text-thunder/70 text-center uppercase tracking-wider">
                    {pair.afterAlt}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Service category badge (pink-daisy bg) + description below */}
            <div className="pt-6 border-t border-pink-daisy/15 text-left w-full mt-auto">
              <span className="inline-block bg-pink-daisy text-thunder font-body text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-3">
                {pair.serviceCategory}
              </span>
              <p className="font-body text-base text-thunder/85 leading-relaxed">
                {pair.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

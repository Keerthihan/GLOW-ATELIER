// components/sections/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = staggerContainer;
  const itemVariants = shouldReduceMotion ? {} : fadeUp;

  return (
    <section
      id="home"
      className="min-h-screen bg-white-rock flex items-center pt-24 px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-10 gap-12 items-center py-12">
        {/* Left column (60% on desktop) */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center items-start text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative pink-daisy line */}
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-pink-daisy mb-8"
          />

          {/* H1 Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl lg:text-7xl font-bold text-thunder leading-tight mb-6"
          >
            Best Beauty <br />
            <span className="italic font-light">Parlour</span> in Colombo
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base text-thunder/80 max-w-lg mb-8 leading-relaxed"
          >
            Welcome to Glow Atelier, Colombo's premier boutique destination for exquisite hair couture, cellular facial rejuvenation, and timeless bridal artistry. We sculpt confidence and elevate organic beauty with botanical precision in a serene seaside sanctuary.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Link href="#services" className="w-full sm:w-auto text-center">
              <Button variant="primary" className="w-full">
                Explore Services
              </Button>
            </Link>
            <Link href="#gallery" className="w-full sm:w-auto text-center">
              <Button variant="outline" className="w-full">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right column (40% on desktop) */}
        <div className="lg:col-span-4 w-full h-[350px] lg:h-[500px] relative lg:pl-4">
          <div className="w-full h-full bg-grey-goose border-2 border-pink-daisy rounded-sm relative p-8 lg:p-12 flex items-center justify-center">
            <div className="w-full h-full border border-pink-daisy/40 rounded-sm relative flex items-center justify-center">
              <div className="absolute inset-4 bg-thunder/5 flex flex-col items-center justify-center p-4">
                <span className="text-lotus font-display text-xl lg:text-2xl italic tracking-wider text-center mb-2">
                  Premium Treatment Showcase
                </span>
                <span className="font-body text-xs text-thunder/65 uppercase tracking-widest">
                  Exclusive Galle Road Vista
                </span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white-rock p-5 shadow-xl border-2 border-pink-daisy max-w-[180px]">
                <div className="text-lotus text-4xl font-display font-bold leading-none mb-1">
                  15+
                </div>
                <div className="text-[10px] font-body uppercase tracking-wider text-thunder font-bold leading-tight">
                  Years Exquisite Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

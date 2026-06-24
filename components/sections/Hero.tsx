// components/sections/Hero.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
      className="min-h-screen spa-shell flex items-center pt-24 px-6 lg:px-16 overflow-hidden relative"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white-rock/80 to-transparent" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blush-clay/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-12 left-6 h-52 w-52 rounded-full bg-eucalyptus/15 blur-3xl animate-float-soft" />
      <div className="absolute right-[18%] top-[22%] hidden h-28 w-28 rounded-full border border-golden-hour/30 lg:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 relative">
        {/* Left column (60% on desktop) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center items-start text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 rounded-full border border-eucalyptus/20 bg-white-rock/75 px-4 py-2 mb-8 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-golden-hour" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.22em] text-eucalyptus">
              Modern beauty atelier in Colombo
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold text-deep-sea leading-[0.92] mb-6 text-balance"
          >
            Sculpted beauty for your brightest moments.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-base lg:text-lg text-deep-sea/72 max-w-xl mb-8 leading-relaxed"
          >
            Bridal makeup, skin rituals, and hair artistry shaped with calm precision. Glow Atelier gives every detail a soft, polished finish that photographs beautifully and feels effortless.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button href="#services" variant="primary" className="w-full sm:w-auto">
              Book Your Glow
            </Button>
            <Button href="#gallery" variant="outline" className="w-full sm:w-auto">
              View Portfolio
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid w-full max-w-2xl grid-cols-3 overflow-hidden rounded-[1.5rem] border border-blush-clay/10 bg-white-rock/65 shadow-[0_18px_45px_rgba(13,27,42,0.06)] backdrop-blur"
          >
            {[
              ["12K+", "Clients"],
              ["15+", "Years"],
              ["35+", "Services"],
            ].map(([value, label]) => (
              <div key={label} className="px-4 py-5 text-center first:text-left last:text-right">
                <span className="block font-display text-2xl lg:text-3xl font-bold text-eucalyptus leading-none">
                  {value}
                </span>
                <span className="mt-2 block font-body text-[10px] font-bold uppercase tracking-[0.18em] text-deep-sea/50">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 w-full h-[500px] lg:h-[660px] relative"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute -left-5 top-10 z-10 hidden rounded-[1.5rem] bg-deep-sea px-5 py-4 text-white-rock shadow-2xl lg:block">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-golden-hour">
              Bridal finish
            </p>
            <p className="font-display text-2xl font-semibold leading-none mt-1">
              camera ready
            </p>
          </div>
          <div className="absolute -bottom-4 right-2 z-10 rounded-full bg-blush-clay px-5 py-3 font-body text-xs font-bold uppercase tracking-[0.18em] text-white-rock shadow-xl">
            Soft glam studio
          </div>
          <div className="absolute -top-6 right-8 h-28 w-28 rounded-full bg-lavender-dusk/20" />
          <div className="absolute -bottom-8 left-10 h-32 w-32 rounded-full bg-golden-hour/20" />
          <div className="relative h-full rounded-[3rem] bg-white-rock/80 p-3 shadow-[0_30px_90px_rgba(13,27,42,0.18)] backdrop-blur">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-grey-goose">
              <img
                src="/images/3.jpg"
                alt="Glow Atelier bridal makeup closeup with soft modern finish"
                className="h-full w-full object-cover object-center"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/65 via-deep-sea/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-pearl/92 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-eucalyptus">
                      Featured Look
                    </p>
                    <p className="font-display text-2xl font-semibold text-deep-sea">
                      luminous bridal glam
                    </p>
                  </div>
                  <span className="rounded-full bg-golden-hour/18 px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-deep-sea">
                    4:5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

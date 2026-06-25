// components/sections/Hero.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, Heart, ShieldCheck, Sparkles } from "lucide-react";
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
      className="min-h-screen spa-shell flex items-center pt-24 pb-10 px-6 lg:px-16 lg:pb-24 overflow-hidden relative"
    >
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_18%_12%,rgba(193,122,122,0.22),transparent_30rem),radial-gradient(circle_at_78%_8%,rgba(111,139,122,0.16),transparent_28rem),linear-gradient(180deg,rgba(247,243,239,0.92),rgba(247,243,239,0)_86%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(116deg,rgba(255,255,255,0.52)_0%,rgba(255,255,255,0.52)_18%,transparent_18%,transparent_52%,rgba(193,122,122,0.08)_52%,rgba(193,122,122,0.08)_68%,transparent_68%),linear-gradient(152deg,transparent_0%,transparent_58%,rgba(111,139,122,0.09)_58%,rgba(111,139,122,0.09)_74%,transparent_74%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_16%_34%,rgba(212,160,23,0.18)_0_2px,transparent_3px),radial-gradient(circle_at_41%_18%,rgba(193,122,122,0.16)_0_2px,transparent_3px),radial-gradient(circle_at_72%_28%,rgba(111,139,122,0.16)_0_2px,transparent_3px),radial-gradient(circle_at_88%_46%,rgba(212,160,23,0.16)_0_2px,transparent_3px)]" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blush-clay/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-12 left-6 h-52 w-52 rounded-full bg-eucalyptus/15 blur-3xl animate-float-soft" />
      <div className="absolute right-[18%] top-[22%] hidden h-28 w-28 rounded-full border border-golden-hour/30 lg:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10 relative">
        {/* Left column (60% on desktop) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center items-start text-left"
          variants={containerVariants}
          initial={false}
          animate="visible"
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
            Sculpted beauty for your{" "}
            <span className="relative inline-block text-blush-clay">
              brightest
              <span className="absolute -bottom-2 left-1 h-3 w-[92%] rounded-full bg-golden-hour/25 -z-10" />
            </span>{" "}
            moments.
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
            <Button href="#contact" variant="primary" className="w-full sm:w-auto inline-flex items-center justify-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Book Your Glow
            </Button>
            <Button href="#gallery" variant="outline" className="w-full sm:w-auto inline-flex items-center justify-center">
              View Portfolio
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Bridal glam", "Skin rituals", "Hair couture"].map((label) => (
              <span
                key={label}
                className="rounded-full bg-white-rock/70 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-deep-sea/70 shadow-sm backdrop-blur"
              >
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid w-full max-w-2xl grid-cols-3 overflow-hidden rounded-[1.75rem] border border-blush-clay/10 bg-white-rock/75 shadow-[0_18px_45px_rgba(13,27,42,0.08)] backdrop-blur"
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
          initial={false}
          animate="visible"
        >
          <div className="absolute -left-7 top-10 z-20 hidden w-44 rounded-[1.75rem] bg-deep-sea px-5 py-5 text-white-rock shadow-2xl lg:block">
            <Heart className="mb-4 h-5 w-5 fill-blush-clay text-blush-clay" />
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-golden-hour">
              Loved by
            </p>
            <p className="font-display text-3xl font-bold leading-none mt-1">
              12K+
            </p>
            <p className="mt-2 font-body text-xs text-white-rock/65">
              Colombo clients
            </p>
          </div>
          <div className="absolute -bottom-5 right-2 z-20 hidden rounded-[1.75rem] bg-white-rock px-5 py-4 shadow-[0_22px_55px_rgba(13,27,42,0.16)] lg:flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-eucalyptus/12 text-eucalyptus">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-deep-sea/45">
                Studio care
              </p>
              <p className="font-display text-xl font-bold text-deep-sea leading-none">
                calm & precise
              </p>
            </div>
          </div>
          <div className="absolute -top-6 right-8 h-28 w-28 rounded-full bg-lavender-dusk/20" />
          <div className="absolute -bottom-8 left-10 h-32 w-32 rounded-full bg-golden-hour/20" />
          <div className="absolute -right-5 top-24 z-20 hidden h-28 w-24 overflow-hidden rounded-[1.5rem] border-[6px] border-white-rock bg-grey-goose shadow-xl lg:block">
            <img
              src="/images/2.jpg"
              alt="Glow Atelier facial treatment detail"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -left-4 bottom-28 z-20 hidden h-24 w-28 overflow-hidden rounded-[1.5rem] border-[6px] border-white-rock bg-grey-goose shadow-xl lg:block">
            <img
              src="/images/1.jpg"
              alt="Glow Atelier bridal styling detail"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative h-full rounded-[3rem] bg-white-rock/80 p-3 shadow-[0_30px_90px_rgba(13,27,42,0.18)] backdrop-blur">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-grey-goose">
              <img
                src="/images/3.jpg"
                alt="Glow Atelier bridal makeup closeup with soft modern finish"
                className="h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] bg-deep-sea px-8 py-6 shadow-[0_22px_55px_rgba(13,27,42,0.34)]">
                <p className="font-body text-xs font-bold uppercase tracking-[0.32em] text-golden-hour mb-3">
                  Signature Glow
                </p>
                <p className="font-display text-4xl lg:text-5xl font-bold text-white-rock leading-none">
                  softly radiant
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hidden bg-pearl/55 px-6 py-5 backdrop-blur-xl lg:block lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-5">
          {[
            ["01", "Consultation-led beauty"],
            ["02", "Photo-ready artistry"],
            ["03", "Skin-first rituals"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="group flex items-center gap-4 rounded-full border border-white-rock/80 bg-white-rock/72 px-5 py-3.5 shadow-[0_14px_36px_rgba(13,27,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blush-clay/25 hover:bg-white-rock"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-clay/12 font-display text-xl font-bold text-blush-clay transition-colors duration-300 group-hover:bg-blush-clay group-hover:text-white-rock">
                {number}
              </span>
              <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-deep-sea/60 transition-colors duration-300 group-hover:text-deep-sea">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

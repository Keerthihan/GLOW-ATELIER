// components/sections/About.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type CountUpNumberProps = {
  value: number;
  suffix?: string;
  shouldReduceMotion: boolean | null;
};

const CountUpNumber = ({ value, suffix = "", shouldReduceMotion }: CountUpNumberProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    if (!isInView) return;

    let frame = 0;
    const totalFrames = 52;
    const timeout = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress === 1) {
        window.clearInterval(timeout);
      }
    }, 28);

    return () => window.clearInterval(timeout);
  }, [isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-deep-sea mb-1">
      {count}
      {suffix}
    </span>
  );
};

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const animLeft = shouldReduceMotion ? {} : slideInLeft;
  const animRight = shouldReduceMotion ? {} : slideInRight;

  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 12, suffix: "K+", label: "Happy Clients" },
    { value: 35, suffix: "+", label: "Premium Services" },
    { value: 8, suffix: "", label: "National Awards" },
  ];

  return (
    <SectionWrapper id="about" className="bg-white-rock overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-5 w-full"
          variants={animLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative min-h-[460px] lg:min-h-[560px]">
            <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-golden-hour/16" />
            <div className="absolute -bottom-8 right-8 h-52 w-52 rounded-full bg-eucalyptus/14" />

            <div className="absolute left-0 top-0 h-[76%] w-[82%] overflow-hidden rounded-[2.5rem] bg-grey-goose shadow-[0_28px_80px_rgba(13,27,42,0.16)]">
              <img
                src="/images/inteor1.jpg"
                alt="Glow Atelier modern salon interior"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/45 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 right-0 h-[48%] w-[58%] overflow-hidden rounded-[2rem] border-[10px] border-white-rock bg-grey-goose shadow-[0_24px_70px_rgba(13,27,42,0.14)]">
              <img
                src="/images/inteor2.jpg"
                alt="Glow Atelier private treatment room"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute left-6 bottom-16 rounded-[1.5rem] bg-deep-sea px-6 py-5 text-white-rock shadow-[0_18px_50px_rgba(13,27,42,0.24)]">
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.24em] text-golden-hour mb-2">
                Est. 2011
              </p>
              <p className="font-display text-2xl font-bold leading-none">
                Colombo care house
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7 flex flex-col justify-center items-start text-left"
          variants={animRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-eucalyptus/10 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.22em] text-eucalyptus mb-6">
            <Sparkles className="h-4 w-4 text-golden-hour" />
            About Glow Atelier
          </p>

          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-deep-sea mb-5 leading-tight text-balance">
            A softer kind of luxury, shaped around real confidence.
          </h2>

          <div className="w-16 h-1 bg-blush-clay rounded-full mb-6" />

          <p className="font-body text-lg text-deep-sea/82 leading-relaxed mb-5">
            Glow Atelier was founded on Galle Road, Colombo, with a single, uncompromising vision: to marry elite international standards with holistic botanical therapy. For over a decade and a half, we have catered to Colombo’s most discerning tastemakers, offering a sanctuary where luxury is intimate, ethical, and tailored.
          </p>
          <p className="font-body text-base text-deep-sea/70 leading-relaxed mb-8">
            Every master stylist, therapist, and artist in our team is globally trained to deliver meticulous, biology-aware transformations. Whether preparing you for the red carpet or your special bridal day, we ensure you emerge with effortless, long-lasting radiance.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex min-h-32 flex-col justify-between rounded-[1.5rem] bg-pearl p-5 shadow-[0_14px_40px_rgba(13,27,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-white-rock"
              >
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  shouldReduceMotion={shouldReduceMotion}
                />
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

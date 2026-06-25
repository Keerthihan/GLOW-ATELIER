// components/sections/Services.tsx
"use client";

import React from "react";
import * as Lucide from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/mock-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? {} : staggerContainer;
  const itemVariants = shouldReduceMotion ? {} : fadeUp;

  // Safe helper to resolve string icon name to a Lucide React component
  const getIcon = (name: string) => {
    switch (name) {
      case "Scissors":
        return <Lucide.Scissors className="w-8 h-8 text-eucalyptus" />;
      case "Sparkles":
        return <Lucide.Sparkles className="w-8 h-8 text-eucalyptus" />;
      case "Brush":
        return <Lucide.Paintbrush className="w-8 h-8 text-eucalyptus" />;
      case "Hand":
        return <Lucide.Hand className="w-8 h-8 text-eucalyptus" />;
      case "Leaf":
        return <Lucide.Leaf className="w-8 h-8 text-eucalyptus" />;
      case "Crown":
        return <Lucide.Crown className="w-8 h-8 text-eucalyptus" />;
      default:
        return <Lucide.Sparkles className="w-8 h-8 text-eucalyptus" />;
    }
  };

  return (
    <SectionWrapper id="services" className="bg-grey-goose">
      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
            Signature rituals
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-deep-sea mb-4 leading-tight text-balance">
            Beauty services designed for polished, lasting glow.
          </h2>
          <div className="w-16 h-1 bg-blush-clay rounded-full" />
        </div>
        <p className="lg:col-span-5 font-body text-base text-deep-sea/68 leading-relaxed lg:text-right">
          Choose from refined hair, skin, makeup, and bridal services crafted for Colombo’s climate, light, and modern beauty routines.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <article className="group relative h-full overflow-hidden rounded-[2rem] bg-white-rock/80 p-6 shadow-[0_18px_55px_rgba(13,27,42,0.07)] transition-all duration-500 hover:bg-pearl hover:shadow-[0_26px_75px_rgba(13,27,42,0.12)]">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-blush-clay/10 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-eucalyptus/12 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                    {getIcon(service.icon)}
                  </div>
                  <span className="rounded-full bg-blush-clay/12 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-deep-sea">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-deep-sea mb-4 leading-tight">
                  {service.name}
                </h3>

                <p className="font-body text-base text-deep-sea/70 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mt-auto rounded-[1.25rem] bg-pearl px-4 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="block font-body text-[10px] font-bold uppercase tracking-[0.2em] text-eucalyptus mb-1">
                        From
                      </span>
                      <span className="font-display text-2xl font-bold text-deep-sea">
                        {service.price}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white-rock px-3 py-2 font-body text-xs font-bold uppercase tracking-wider text-deep-sea/65">
                      <Lucide.Clock className="w-4 h-4 text-blush-clay" />
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

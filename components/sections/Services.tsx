// components/sections/Services.tsx
"use client";

import React from "react";
import * as Lucide from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
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
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Our Services
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      {/* Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <Card className="p-8 flex flex-col justify-between items-start h-full">
              <div className="w-full">
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-eucalyptus/10 rounded-2xl transition-transform duration-300 group-hover:rotate-3">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-body text-sm italic text-blush-clay font-semibold">
                    {service.category}
                  </span>
                </div>

                {/* H3 Title */}
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-deep-sea mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="font-body text-base text-deep-sea/72 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Footer: Price Badge, Duration */}
              <div className="w-full flex items-center justify-between pt-6 border-t border-blush-clay/10 mt-auto">
                <span className="bg-blush-clay/12 text-deep-sea font-body text-sm font-bold px-3 py-1 rounded-full">
                  {service.price}
                </span>
                <span className="font-body text-sm text-deep-sea/65 flex items-center gap-1">
                  <Lucide.Clock className="w-4 h-4 text-blush-clay" />
                  {service.duration}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

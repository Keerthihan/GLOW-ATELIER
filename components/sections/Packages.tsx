// components/sections/Packages.tsx
"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { packages } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type PackageItem = {
  _id?: string;
  id?: string;
  name: string;
  subtitle?: string;
  includedServices: string[];
  originalPrice: string;
  discountPrice: string;
  featured: boolean;
};

export const Packages = ({ items }: { items?: PackageItem[] }) => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? {} : staggerContainer;
  const itemVariants = shouldReduceMotion ? {} : fadeUp;
  const displayPackages: PackageItem[] = items && items.length > 0 ? items : packages;

  return (
    <SectionWrapper id="packages" className="bg-pearl">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Curated care
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Premium Packages
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch pt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {displayPackages.map((pkg) => {
          return (
            <motion.div
              key={pkg._id ?? pkg.id}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -10, scale: pkg.featured ? 1.04 : 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={pkg.featured ? "lg:scale-105 z-10" : ""}
            >
              <Card
                className={`p-8 lg:p-10 flex flex-col justify-between relative h-full transform transition-all duration-300 ${
                  pkg.featured ? "ring-1 ring-blush-clay/30" : ""
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blush-clay text-white-rock text-[10px] font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-deep-sea mb-2">
                    {pkg.name}
                  </h3>

                  <p className="font-body text-xs italic text-deep-sea/55 uppercase tracking-widest mb-8">
                    {pkg.subtitle ?? "Complete Wellness Ritual"}
                  </p>

                  <ul className="space-y-4 mb-8 text-left">
                    {pkg.includedServices.map((service, serviceIdx) => (
                      <li
                        key={serviceIdx}
                        className="flex items-start gap-3 font-body text-base text-deep-sea/82 font-medium"
                      >
                        <Check className="w-5 h-5 text-eucalyptus shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="mt-auto pt-8 border-t border-blush-clay/10 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    {/* Original Price struck through */}
                    <span className="font-body text-sm text-deep-sea/45 line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="font-display text-3xl font-bold text-eucalyptus">
                      {pkg.discountPrice}
                    </span>
                  </div>

                  <Button href="#contact" variant="primary" className="block w-full">
                    Reserve Package
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

// components/sections/Packages.tsx
"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { packages } from "@/lib/mock-data";
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
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch pt-4"
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
              whileHover={shouldReduceMotion ? undefined : { y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full"
            >
              <article
                className={`relative h-full overflow-hidden rounded-[2rem] p-6 lg:p-7 shadow-[0_22px_70px_rgba(13,27,42,0.08)] transition-all duration-500 ${
                  pkg.featured
                    ? "bg-deep-sea text-white-rock lg:-mt-5 lg:mb-5"
                    : "bg-white-rock/85 text-deep-sea"
                }`}
              >
                <div
                  className={`absolute -right-16 -top-16 h-44 w-44 rounded-full ${
                    pkg.featured ? "bg-blush-clay/25" : "bg-eucalyptus/10"
                  }`}
                />
                <div
                  className={`absolute -bottom-20 left-8 h-48 w-48 rounded-full ${
                    pkg.featured ? "bg-golden-hour/15" : "bg-blush-clay/10"
                  }`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] ${
                          pkg.featured
                            ? "bg-golden-hour text-deep-sea"
                            : "bg-eucalyptus/12 text-eucalyptus"
                        }`}
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        {pkg.featured ? "Best Value" : "Package"}
                      </span>
                      <h3
                        className={`mt-5 font-display text-3xl lg:text-4xl font-semibold leading-tight ${
                          pkg.featured ? "text-white-rock" : "text-deep-sea"
                        }`}
                      >
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`font-body text-xs font-bold uppercase tracking-[0.22em] mb-8 ${
                      pkg.featured ? "text-white-rock/55" : "text-deep-sea/50"
                    }`}
                  >
                    {pkg.subtitle ?? "Complete Wellness Ritual"}
                  </p>

                  <div
                    className={`mb-8 rounded-[1.5rem] px-5 py-5 ${
                      pkg.featured ? "bg-white-rock/8" : "bg-pearl"
                    }`}
                  >
                    <div className="flex items-end gap-3">
                      <span
                        className={`font-body text-sm line-through ${
                          pkg.featured ? "text-white-rock/38" : "text-deep-sea/40"
                        }`}
                      >
                        {pkg.originalPrice}
                      </span>
                      <span
                        className={`font-display text-4xl font-bold leading-none ${
                          pkg.featured ? "text-golden-hour" : "text-eucalyptus"
                        }`}
                      >
                        {pkg.discountPrice}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.includedServices.map((service, serviceIdx) => (
                      <li
                        key={serviceIdx}
                        className={`flex items-start gap-3 rounded-2xl px-4 py-3 font-body text-sm font-semibold ${
                          pkg.featured
                            ? "bg-white-rock/8 text-white-rock/82"
                            : "bg-pearl/75 text-deep-sea/78"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            pkg.featured ? "bg-golden-hour text-deep-sea" : "bg-eucalyptus text-white-rock"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      href="#contact"
                      variant={pkg.featured ? "primary" : "outline"}
                      className="block w-full"
                    >
                      Reserve Package
                    </Button>
                  </div>
                </div>
              </article>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

// components/sections/Offers.tsx
"use client";

import React from "react";
import { Calendar, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { offers } from "@/lib/mock-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type OfferItem = {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
};

export const Offers = ({ items }: { items?: OfferItem[] }) => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? {} : staggerContainer;
  const itemVariants = shouldReduceMotion ? {} : fadeUp;
  const displayOffers: OfferItem[] = items && items.length > 0 ? items : offers;
  const offerPalettes = [
    {
      panel: "bg-lavender-dusk/14",
      text: "text-lavender-dusk",
      badge: "bg-lavender-dusk text-white-rock",
      glow: "bg-lavender-dusk/12",
    },
    {
      panel: "bg-eucalyptus/14",
      text: "text-eucalyptus",
      badge: "bg-eucalyptus text-white-rock",
      glow: "bg-eucalyptus/12",
    },
    {
      panel: "bg-golden-hour/16",
      text: "text-deep-sea",
      badge: "bg-golden-hour text-deep-sea",
      glow: "bg-golden-hour/14",
    },
  ];

  return (
    <SectionWrapper id="offers" className="bg-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Seasonal rituals
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Special Offers
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        {displayOffers.map((offer, index) => {
          const palette = offerPalettes[index % offerPalettes.length];

          return (
            <motion.div
              key={offer._id ?? offer.id}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 6, y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2rem] bg-white-rock/70 px-6 py-6 lg:px-8 lg:py-7 shadow-[0_16px_45px_rgba(13,27,42,0.06)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(13,27,42,0.1)]"
            >
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${palette.glow} transition-transform duration-500 group-hover:scale-125`} />
              <div className="relative grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-eucalyptus/10 text-eucalyptus">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-blush-clay">
                      Offer {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-deep-sea leading-tight">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                <div className={`rounded-[1.5rem] ${palette.panel} px-5 py-4`}>
                  <p className="font-body text-sm lg:text-base text-deep-sea/78 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-3">
                  <span className={`rounded-full px-4 py-2 font-body text-sm font-bold uppercase tracking-wider shadow-[0_12px_30px_rgba(13,27,42,0.14)] ${palette.badge}`}>
                    {offer.discount}
                  </span>
                  <span className={`inline-flex items-center gap-2 rounded-full bg-pearl/80 px-3 py-2 font-body text-xs tracking-wider uppercase font-semibold ${palette.text}`}>
                    <Calendar className="w-4 h-4 shrink-0" />
                    Valid Until: {offer.validUntil}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

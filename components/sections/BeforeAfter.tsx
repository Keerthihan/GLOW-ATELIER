// components/sections/BeforeAfter.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { beforeAfterPairs } from "@/lib/mock-data";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type BeforeAfterItem = {
  _id?: string;
  id?: string;
  serviceCategory: string;
  description: string;
  beforeAlt: string;
  afterAlt: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  beforeColor?: string;
  afterColor?: string;
};

export const BeforeAfter = ({ items }: { items?: BeforeAfterItem[] }) => {
  const shouldReduceMotion = useReducedMotion();
  const displayPairs: BeforeAfterItem[] =
    items && items.length > 0 ? items : beforeAfterPairs;

  const animLeft = shouldReduceMotion ? {} : slideInLeft;
  const animRight = shouldReduceMotion ? {} : slideInRight;

  return (
    <SectionWrapper id="beforeafter" className="bg-grey-goose !pt-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Visible change
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Transformations
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {displayPairs.map((pair) => (
          <article
            key={pair._id ?? pair.id}
            className="group relative overflow-hidden rounded-[2rem] bg-pearl/80 p-5 lg:p-6 shadow-[0_22px_70px_rgba(13,27,42,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(13,27,42,0.14)]"
          >
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-blush-clay/10 transition-transform duration-500 group-hover:scale-125" />
            <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-eucalyptus/10" />

            <div className="relative mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit rounded-full bg-blush-clay/12 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-deep-sea">
                {pair.serviceCategory}
              </span>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-eucalyptus">
                Before to after
              </span>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
              <motion.div
                className="relative rounded-[1.5rem] bg-white-rock/85 p-3 shadow-inner"
                variants={animLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-deep-sea/60">
                    Before
                  </span>
                  <span className="h-2 w-2 rounded-full bg-blush-clay/50" />
                </div>
                <div
                  className={`w-full aspect-[4/5] rounded-[1.15rem] ${pair.beforeColor ?? "bg-grey-goose"} flex flex-col items-center justify-center overflow-hidden`}
                >
                  {pair.beforeImageUrl ? (
                    <img
                      src={pair.beforeImageUrl}
                      alt={pair.beforeAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-display text-xs italic font-semibold text-deep-sea/50 text-center uppercase tracking-wider p-4">
                      {pair.beforeAlt}
                    </span>
                  )}
                </div>
              </motion.div>

              <div className="hidden sm:flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-sea text-white-rock shadow-[0_12px_30px_rgba(13,27,42,0.18)] transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              <motion.div
                className="relative rounded-[1.5rem] bg-white-rock/85 p-3 shadow-inner ring-1 ring-eucalyptus/10"
                variants={animRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-body text-xs font-bold uppercase tracking-[0.18em] text-eucalyptus">
                    After
                  </span>
                  <span className="h-2 w-2 rounded-full bg-golden-hour" />
                </div>
                <div
                  className={`w-full aspect-[4/5] rounded-[1.15rem] ${pair.afterColor ?? "bg-blush-clay"} flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  {pair.afterImageUrl ? (
                    <img
                      src={pair.afterImageUrl}
                      alt={pair.afterAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-display text-xs italic font-semibold text-deep-sea/70 text-center uppercase tracking-wider p-4">
                      {pair.afterAlt}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="relative mt-5 rounded-[1.5rem] bg-white-rock/80 px-5 py-5 text-left shadow-sm">
              <p className="font-body text-base text-deep-sea/75 leading-relaxed">
                {pair.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

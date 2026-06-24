// components/sections/BeforeAfter.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { beforeAfterPairs } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
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
    <SectionWrapper id="beforeafter" className="bg-grey-goose">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Visible change
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Transformations
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {displayPairs.map((pair) => (
          <Card key={pair._id ?? pair.id} className="p-6 lg:p-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6 items-center mb-8">
              <motion.div
                className="flex flex-col items-center"
                variants={animLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-deep-sea/55 mb-2.5">
                  Before
                </span>
                <div
                  className={`w-full aspect-[4/5] rounded-[1.5rem] ${pair.beforeColor ?? "bg-grey-goose"} flex flex-col items-center justify-center overflow-hidden shadow-inner`}
                >
                  {pair.beforeImageUrl ? (
                    <img
                      src={pair.beforeImageUrl}
                      alt={pair.beforeAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-xs italic font-semibold text-deep-sea/50 text-center uppercase tracking-wider p-4">
                      {pair.beforeAlt}
                    </span>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                variants={animRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="font-body text-xs font-bold uppercase tracking-widest text-eucalyptus mb-2.5">
                  After
                </span>
                <div
                  className={`w-full aspect-[4/5] rounded-[1.5rem] ${pair.afterColor ?? "bg-blush-clay"} flex flex-col items-center justify-center shadow-sm relative overflow-hidden`}
                >
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-golden-hour animate-pulse" />
                  {pair.afterImageUrl ? (
                    <img
                      src={pair.afterImageUrl}
                      alt={pair.afterAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-xs italic font-semibold text-deep-sea/70 text-center uppercase tracking-wider p-4">
                      {pair.afterAlt}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="pt-6 border-t border-blush-clay/15 text-left w-full mt-auto">
              <span className="inline-block bg-blush-clay/12 text-deep-sea font-body text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                {pair.serviceCategory}
              </span>
              <p className="font-body text-base text-deep-sea/75 leading-relaxed">
                {pair.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

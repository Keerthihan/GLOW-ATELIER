// components/sections/FAQ.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { faqs } from "@/lib/mock-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? {} : staggerContainer;
  const itemVariants = shouldReduceMotion ? {} : fadeUp;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" className="bg-grey-goose">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Helpful details
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              className="rounded-[1.5rem] bg-white-rock/65 shadow-[0_12px_40px_rgba(13,27,42,0.05)] transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer ${
                  isOpen ? "px-6 bg-white-rock/80" : "px-6"
                }`}
                aria-expanded={isOpen}
              >
                <h3 className="font-display text-lg lg:text-xl font-medium text-deep-sea group-hover:text-eucalyptus transition-colors pr-6">
                  {faq.question}
                </h3>

                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-eucalyptus shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-eucalyptus shrink-0" />
                )}
              </button>

              {/* Accordion Content with AnimatePresence */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-pearl/80 p-6">
                      <p className="font-body text-base text-deep-sea/75 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

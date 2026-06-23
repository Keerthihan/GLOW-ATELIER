// components/sections/FAQ.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/mock-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper id="faq" className="bg-white-rock">
      {/* Headings */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* Accordion container max-w-3xl centered */}
      <div className="max-w-3xl mx-auto flex flex-col">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border-b border-grey-goose transition-all duration-300"
            >
              {/* Accordion Header Action */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className={`w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer ${
                  isOpen ? "px-4 bg-grey-goose/30 rounded-t-sm" : "px-0"
                }`}
                aria-expanded={isOpen}
              >
                {/* Question H3 in thunder color */}
                <h3 className="font-display text-lg lg:text-xl font-medium text-thunder group-hover:text-lotus transition-colors pr-6">
                  {faq.question}
                </h3>

                {/* Icons in lotus color */}
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-lotus shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-lotus shrink-0" />
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
                    {/* Open layout: bg-grey-goose, border-l-4 border-lotus */}
                    <div className="bg-grey-goose p-6 border-l-4 border-lotus rounded-b-sm">
                      <p className="font-body text-base text-thunder leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

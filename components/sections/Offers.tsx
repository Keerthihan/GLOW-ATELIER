// components/sections/Offers.tsx
import React from "react";
import { Gift, Calendar } from "lucide-react";
import { offers } from "@/lib/mock-data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Offers = () => {
  return (
    <SectionWrapper id="offers" className="bg-lotus text-white-rock overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading with custom text color */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white-rock mb-3">
          Special Offers
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* Grid: Horizontal scroll row on mobile, 3-column grid on desktop */}
      <div className="max-w-7xl mx-auto flex overflow-x-auto pb-4 gap-6 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-x-visible lg:pb-0 lg:gap-8 justify-center">
        {offers.map((offer) => {
          return (
            <div
              key={offer.id}
              className="flex-shrink-0 w-[290px] sm:w-[340px] lg:w-auto snap-center bg-thunder text-white-rock rounded-sm p-8 border border-pink-daisy/10 hover:border-pink-daisy/40 transition-colors duration-300 flex flex-col justify-between align-middle h-full min-h-[320px]"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-white-rock/10 rounded-sm">
                    <Gift className="w-6 h-6 text-pink-daisy" />
                  </div>
                  {/* High contrast discount badge */}
                  <span className="bg-pink-daisy text-thunder font-body text-lg font-bold px-3 py-1 rounded-sm shadow-sm uppercase tracking-wider">
                    {offer.discount}
                  </span>
                </div>

                {/* H3 Title */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white-rock leading-snug mb-3">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-white-rock/80 leading-relaxed mb-6">
                  {offer.description}
                </p>
              </div>

              {/* Card Footer: Valid until label in grey-goose style */}
              <div className="flex items-center gap-2 pt-5 border-t border-white-rock/10 mt-auto text-grey-goose">
                <Calendar className="w-4 h-4 text-pink-daisy shrink-0" />
                <span className="font-body text-xs tracking-wider uppercase font-semibold">
                  Valid Until: {offer.validUntil}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

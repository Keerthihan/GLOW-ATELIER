// components/sections/Packages.tsx
import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { packages } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Packages = () => {
  return (
    <SectionWrapper id="packages" className="bg-grey-goose">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Premium Packages
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* 3-column grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch pt-6">
        {packages.map((pkg) => {
          return (
            <Card
              key={pkg.id}
              className={`p-8 lg:p-10 flex flex-col justify-between relative transform transition-all duration-300 ${
                pkg.featured
                  ? "border-2 border-lotus lg:scale-105 shadow-xl z-10"
                  : ""
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-lotus text-white-rock text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm shadow-md border border-pink-daisy">
                  Most Popular
                </span>
              )}

              <div>
                {/* H3 Package Title */}
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-lotus mb-2">
                  {pkg.name}
                </h3>

                {/* Subtitle */}
                <p className="font-body text-xs italic text-thunder/60 uppercase tracking-widest mb-8">
                  Complete Wellness Ritual
                </p>

                {/* Checklist (✓ in lotus) */}
                <ul className="space-y-4 mb-8 text-left">
                  {pkg.includedServices.map((service, serviceIdx) => (
                    <li
                      key={serviceIdx}
                      className="flex items-start gap-3 font-body text-base text-thunder/90 font-medium"
                    >
                      <Check className="w-5 h-5 text-lotus shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="mt-auto pt-8 border-t border-pink-daisy/10 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  {/* Original Price struck through */}
                  <span className="font-body text-sm text-thunder/50 line-through">
                    {pkg.originalPrice}
                  </span>
                  {/* Discount Price large lotus */}
                  <span className="font-display text-3xl font-bold text-lotus">
                    {pkg.discountPrice}
                  </span>
                </div>

                <Link href="#contact" className="block w-full">
                  <Button variant="primary" className="w-full">
                    Reserve Package
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

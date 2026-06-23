// components/sections/Gallery.tsx
import React from "react";
import Link from "next/link";
import { Camera } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Gallery = () => {
  // Homepage shows the first 6 images
  const featuredImages = galleryImages.slice(0, 6);

  return (
    <SectionWrapper id="gallery" className="bg-grey-goose">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Our Work
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* 3-column × 2-row grid of placeholders on desktop/tablet, responsive on mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredImages.map((image) => (
          <div
            key={image.id}
            className="aspect-square bg-white-rock border-2 border-pink-daisy/60 rounded-sm p-8 flex flex-col justify-center items-center text-center group hover:border-lotus hover:shadow-[4px_4px_0px_0px_rgba(146,51,60,0.2)] transition-all duration-300 relative overflow-hidden"
          >
            {/* Elegant internal border overlay */}
            <div className="absolute inset-4 border border-pink-daisy/10 pointer-events-none rounded-sm transition-all group-hover:border-lotus/25" />

            {/* Inner hover zoom visual decoration */}
            <Camera className="w-8 h-8 text-lotus/40 mb-4 group-hover:scale-110 group-hover:text-lotus transition-all duration-300" />

            {/* Centered Alt label in Lotus text */}
            <span className="font-display text-base font-semibold text-lotus uppercase tracking-widest px-4 leading-relaxed">
              {image.alt}
            </span>

            {/* Subtle client label */}
            <span className="font-body text-xs italic text-thunder/40 mt-3">
              Glow Atelier Portfolio
            </span>
          </div>
        ))}
      </div>

      {/* Primary Link Button to /gallery */}
      <div className="text-center">
        <Link href="/gallery" className="inline-block">
          <Button variant="primary">See More Portfolio</Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

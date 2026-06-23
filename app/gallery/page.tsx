// app/gallery/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Exquisite Client creations Portfolio",
  description: "Explore 24 hand-picked premium beauty modifications, including custom nails art, hair couture, and skin therapies by Glow Atelier artists in Colombo.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main page content on bg-grey-goose */}
      <main className="flex-grow bg-grey-goose py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header row with Title and Back button */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-pink-daisy/15">
            <div className="text-left">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-thunder mb-3">
                Complete Portfolio
              </h1>
              <p className="font-body text-base text-thunder/75 leading-relaxed max-w-xl">
                A thorough catalogue of our 24 master transformations curated by the elite stylists and therapists at Glow Atelier Colombo.
              </p>
            </div>

            <Link href="/" className="self-start">
              <Button variant="outline" className="flex items-center gap-2 group py-3 px-5 text-sm">
                <ArrowLeft className="w-4 h-4 text-lotus group-hover:-translate-x-1 transition-transform" />
                <span>Return to Sanctuary</span>
              </Button>
            </Link>
          </div>

          {/* Grid layout: 24 image placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square bg-white-rock border-2 border-pink-daisy/60 rounded-sm p-6 flex flex-col justify-center items-center text-center group hover:border-lotus hover:shadow-[4px_4px_0px_0px_rgba(146,51,60,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Elegant internal frame overlay */}
                <div className="absolute inset-4 border border-pink-daisy/10 pointer-events-none rounded-sm transition-all group-hover:border-lotus/25" />

                {/* Camera icon decorator */}
                <Camera className="w-6 h-6 text-lotus/40 mb-4 group-hover:scale-110 group-hover:text-lotus transition-all duration-300" />

                {/* Centered Alt label in Lotus text */}
                <span className="font-display text-sm font-semibold text-lotus uppercase tracking-wider px-2 leading-relaxed">
                  {image.alt}
                </span>

                {/* Subtle client label */}
                <span className="font-body text-[10px] uppercase tracking-widest text-thunder/35 mt-4">
                  Selection {image.id.replace("gal-", "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

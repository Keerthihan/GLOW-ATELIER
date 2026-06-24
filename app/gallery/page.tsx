// app/gallery/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import { galleryImages } from "@/lib/mock-data";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { GALLERY_PAGE_QUERY } from "@/sanity/lib/queries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Exquisite Client creations Portfolio",
  description: "Explore 24 hand-picked premium beauty modifications, including custom nails art, hair couture, and skin therapies by Glow Atelier artists in Colombo.",
};

type GalleryPageImage = {
  _id: string;
  title?: string;
  caption?: string;
  alt?: string;
  imageUrl?: string;
};

type GalleryPageResult = {
  gallery: GalleryPageImage[];
  postGallery?: GalleryPageImage[];
};

export default async function GalleryPage() {
  const { data } = await sanityFetch<GalleryPageResult>({
    query: GALLERY_PAGE_QUERY,
  });
  const sanityImages =
    data?.gallery && data.gallery.length > 0
      ? data.gallery
      : data?.postGallery ?? [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-grow spa-shell py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div className="text-left">
              <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-4">
                Portfolio
              </p>
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-deep-sea mb-4 text-balance">
                Complete Portfolio
              </h1>
              <p className="font-body text-base text-deep-sea/70 leading-relaxed max-w-xl">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sanityImages.length > 0
              ? sanityImages.map((image, index) => (
                  <div
                    key={image._id}
                    className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-pearl shadow-[0_18px_55px_rgba(13,27,42,0.08)] group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,27,42,0.14)]"
                  >
                    {image.imageUrl ? (
                      <>
                        <img
                          src={image.imageUrl}
                          alt={image.alt ?? image.caption ?? image.title ?? "Glow Atelier gallery image"}
                          loading={index < 3 ? "eager" : "lazy"}
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/82 via-deep-sea/10 to-transparent" />
                        <div className="absolute left-5 right-5 bottom-5 text-left">
                          <span className="inline-flex rounded-full bg-pearl/90 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-deep-sea shadow-sm backdrop-blur">
                            {image.caption ?? image.title}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blush-clay/12" />
                        <Camera className="w-6 h-6 text-eucalyptus/50 mb-4 group-hover:scale-110 transition-all duration-300" />
                        <span className="font-display text-sm font-semibold text-deep-sea uppercase tracking-wider px-2 leading-relaxed">
                          {image.alt ?? image.title ?? "Gallery image"}
                        </span>
                      </>
                    )}
                    <span className="absolute right-4 top-4 bg-pearl/90 text-deep-sea font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm backdrop-blur">
                      Selection {index + 1}
                    </span>
                  </div>
                ))
              : galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pearl to-grey-goose p-6 flex flex-col justify-center items-center text-center group shadow-[0_18px_55px_rgba(13,27,42,0.06)] transition-all duration-300"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blush-clay/12" />
                    <Camera className="w-6 h-6 text-eucalyptus/50 mb-4 group-hover:scale-110 transition-all duration-300" />
                    <span className="font-display text-sm font-semibold text-deep-sea uppercase tracking-wider px-2 leading-relaxed">
                      {image.alt}
                    </span>
                    <span className="font-body text-[10px] uppercase tracking-widest text-deep-sea/40 mt-4">
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

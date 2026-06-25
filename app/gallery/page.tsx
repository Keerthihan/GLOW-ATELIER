// app/gallery/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Camera, Images, Sparkles } from "lucide-react";
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

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

      <main className="relative flex-grow overflow-hidden bg-pearl px-6 py-24 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_18%_10%,rgba(193,122,122,0.22),transparent_30rem),radial-gradient(circle_at_82%_4%,rgba(111,139,122,0.18),transparent_28rem),linear-gradient(180deg,rgba(247,243,239,0.96),rgba(238,230,221,0.48)_62%,rgba(247,243,239,0)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.58)_16%,transparent_16%,transparent_54%,rgba(193,122,122,0.08)_54%,rgba(193,122,122,0.08)_68%,transparent_68%),linear-gradient(154deg,transparent_0%,transparent_56%,rgba(111,139,122,0.09)_56%,rgba(111,139,122,0.09)_72%,transparent_72%)]" />
        <div className="pointer-events-none absolute left-10 top-40 h-72 w-72 rounded-full bg-blush-clay/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-40 right-0 h-80 w-80 rounded-full bg-eucalyptus/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="text-left lg:col-span-7">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-eucalyptus/20 bg-white-rock/80 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-golden-hour" />
                Portfolio
              </p>
              <h1 className="mb-5 font-display text-5xl font-bold leading-[0.95] text-deep-sea text-balance lg:text-7xl">
                Complete beauty portfolio.
              </h1>
              <p className="max-w-2xl font-body text-base leading-relaxed text-deep-sea/70">
                Explore polished bridal glam, hair couture, skin rituals, and client-ready beauty details curated by Glow Atelier Colombo.
              </p>
            </div>

            <div className="rounded-[2rem] border border-deep-sea/10 bg-deep-sea px-6 py-6 text-white-rock shadow-[0_24px_70px_rgba(13,27,42,0.16)] lg:col-span-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white-rock/10 text-golden-hour">
                  <Images className="h-5 w-5" />
                </span>
                <Link href="/" className="shrink-0">
                  <Button variant="secondary" className="flex items-center gap-2 px-4 py-3 text-xs">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Home
                  </Button>
                </Link>
              </div>
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.24em] text-golden-hour">
                Studio archive
              </p>
              <p className="font-body text-sm leading-relaxed text-white-rock/70">
                Fresh work appears here automatically after publishing gallery images in Sanity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sanityImages.length > 0
              ? sanityImages.map((image, index) => (
                  <figure
                    key={image._id}
                    className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-deep-sea bg-deep-sea shadow-[0_18px_55px_rgba(13,27,42,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,27,42,0.16)]"
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
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/58 via-deep-sea/6 to-transparent" />
                        <figcaption className="absolute bottom-5 left-5 right-5 text-left">
                          <span className="inline-flex max-w-full rounded-full bg-white-rock px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-deep-sea shadow-[0_10px_24px_rgba(13,27,42,0.22)]">
                            {image.caption ?? image.title ?? "Glow Atelier Portfolio"}
                          </span>
                        </figcaption>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pearl to-grey-goose p-8 text-center">
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blush-clay/12" />
                        <Camera className="mb-4 h-7 w-7 text-eucalyptus/50 transition-all duration-300 group-hover:scale-110" />
                        <span className="px-2 font-display text-sm font-semibold uppercase leading-relaxed tracking-wider text-deep-sea">
                          {image.alt ?? image.title ?? "Gallery image"}
                        </span>
                      </div>
                    )}
                    <span className="absolute right-4 top-4 rounded-full bg-white-rock px-3 py-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-deep-sea shadow-sm">
                      Selection {index + 1}
                    </span>
                  </figure>
                ))
              : galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-deep-sea bg-gradient-to-br from-pearl to-grey-goose p-8 text-center shadow-[0_18px_55px_rgba(13,27,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,27,42,0.14)]"
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blush-clay/12" />
                    <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-eucalyptus/12" />
                    <Camera className="mb-4 h-7 w-7 text-eucalyptus/50 transition-all duration-300 group-hover:scale-110" />
                    <span className="px-2 font-display text-sm font-semibold uppercase leading-relaxed tracking-wider text-deep-sea">
                      {image.alt}
                    </span>
                    <span className="mt-4 rounded-full bg-white-rock px-3 py-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-deep-sea/50 shadow-sm">
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

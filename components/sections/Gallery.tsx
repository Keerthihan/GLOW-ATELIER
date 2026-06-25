"use client";

import React from "react";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type GalleryImage = {
  _id?: string;
  _key?: string;
  title?: string;
  caption?: string;
  alt?: string;
  imageUrl?: string;
  image?: {
    asset?: {
      url: string;
    };
  };
};

export const Gallery = ({ images }: { images: GalleryImage[] }) => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? {} : staggerContainer;
  const itemVariants = shouldReduceMotion ? {} : fadeUp;
  // Show first 6 images on the homepage preview
  const featuredImages = (images ?? []).slice(0, 6);
  const hasImages = featuredImages.length > 0;
  const emptySlots = Array.from({ length: 6 });
  const galleryRatio = "aspect-[4/5]";

  return (
    <SectionWrapper id="gallery" className="relative overflow-hidden bg-grey-goose !pb-10">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-clay/12 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-eucalyptus/12 blur-3xl" />

      <div className="relative max-w-7xl mx-auto mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-eucalyptus/10 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.22em] text-eucalyptus mb-5">
            <Sparkles className="h-4 w-4 text-golden-hour" />
            Portfolio preview
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-deep-sea mb-4 leading-tight text-balance">
            Beauty work with a camera-ready finish.
          </h2>
          <div className="w-16 h-1 bg-blush-clay rounded-full" />
        </div>

        <div className="lg:col-span-5 rounded-[2rem] bg-deep-sea px-6 py-6 text-white-rock shadow-[0_22px_70px_rgba(13,27,42,0.14)]">
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-golden-hour mb-3">
            Latest selections
          </p>
          <p className="font-body text-sm leading-relaxed text-white-rock/72">
            A curated glimpse of bridal glam, skin rituals, hair couture, and detailed beauty work from Glow Atelier.
          </p>
        </div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {hasImages ? (
          featuredImages.map((image, index) => {
            const imgUrl = image.imageUrl ?? image.image?.asset?.url;
            return (
              <motion.div
                key={image._id ?? image._key ?? index}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.015 }}
                className={`relative group overflow-hidden rounded-[2rem] border border-deep-sea bg-deep-sea shadow-[0_18px_55px_rgba(13,27,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,27,42,0.18)] ${galleryRatio}`}
              >
                {imgUrl ? (
                  <>
                    <div className="absolute inset-0 overflow-hidden rounded-[1.9rem]">
                    <img
                      src={imgUrl}
                      alt={image.alt ?? image.caption ?? image.title ?? "Glow Atelier gallery image"}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/72 via-deep-sea/8 to-transparent opacity-90" />
                    </div>
                    <div className="absolute left-6 right-6 bottom-6">
                      <span className="inline-flex max-w-full rounded-full bg-white-rock px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-deep-sea shadow-[0_10px_24px_rgba(13,27,42,0.22)]">
                        {image.caption ?? image.title ?? image.alt ?? "Glow Atelier Portfolio"}
                      </span>
                    </div>
                    <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-deep-sea/86 text-golden-hour shadow-sm backdrop-blur">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </>
                ) : (
                  /* Placeholder card when no image is uploaded yet */
                  <div className="absolute inset-0 bg-gradient-to-br from-pearl to-grey-goose flex flex-col justify-center items-center text-center p-8">
                    <Camera className="w-8 h-8 text-eucalyptus/50 mb-4 relative z-10" />
                    <span className="font-display text-sm font-semibold text-deep-sea uppercase tracking-widest px-4 leading-relaxed relative z-10">
                      {image.caption ?? image.title ?? "Coming soon"}
                    </span>
                    <span className="font-body text-xs italic text-deep-sea/45 mt-3 relative z-10">
                      Glow Atelier Portfolio
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })
        ) : (
          emptySlots.map((_, index) => (
            <motion.div
              key={`gallery-empty-${index}`}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.015 }}
              className={`relative overflow-hidden rounded-[2rem] border border-deep-sea bg-gradient-to-br from-pearl to-grey-goose flex flex-col justify-center items-center text-center p-8 shadow-[0_18px_55px_rgba(13,27,42,0.1)] ${galleryRatio}`}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blush-clay/12" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-eucalyptus/12" />
              <Camera className="w-8 h-8 text-eucalyptus/50 mb-4 relative z-10" />
              <span className="font-display text-sm font-semibold text-deep-sea uppercase tracking-widest px-4 leading-relaxed relative z-10">
                Update soon
              </span>
              <span className="font-body text-xs italic text-deep-sea/45 mt-3 relative z-10">
                Glow Atelier Portfolio
              </span>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Button href="/gallery" variant="primary" className="inline-flex items-center gap-2">
          See More Portfolio
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

"use client";

import React from "react";
import { Camera } from "lucide-react";
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
    <SectionWrapper id="gallery" className="bg-grey-goose">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Our Work
        </h2>
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-12"
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
                className={`relative group overflow-hidden rounded-[2rem] bg-pearl shadow-[0_18px_55px_rgba(13,27,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,27,42,0.14)] ${galleryRatio}`}
              >
                {imgUrl ? (
                  <>
                    <img
                      src={imgUrl}
                      alt={image.alt ?? image.caption ?? image.title ?? "Glow Atelier gallery image"}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/80 via-deep-sea/15 to-transparent opacity-90" />
                    <div className="absolute left-5 right-5 bottom-5">
                      <span className="inline-flex rounded-full bg-pearl/90 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-deep-sea shadow-sm backdrop-blur">
                        {image.caption ?? image.title ?? image.alt ?? "Glow Atelier Portfolio"}
                      </span>
                    </div>
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
              className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pearl to-grey-goose flex flex-col justify-center items-center text-center p-8 shadow-[0_18px_55px_rgba(13,27,42,0.06)] ${galleryRatio}`}
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
        <Button href="/gallery" variant="primary" className="inline-block">
          See More Portfolio
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

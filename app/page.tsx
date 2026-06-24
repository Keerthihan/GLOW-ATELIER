// app/page.tsx
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Offers } from "@/components/sections/Offers";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { HOME_SECTIONS_QUERY } from "@/sanity/lib/queries";

type GalleryImage = {
  _id: string;
  title?: string;
  caption?: string;
  alt?: string;
  imageUrl?: string;
};

type OfferItem = {
  _id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
};

type PackageItem = {
  _id: string;
  name: string;
  subtitle?: string;
  includedServices: string[];
  originalPrice: string;
  discountPrice: string;
  featured: boolean;
};

type BeforeAfterItem = {
  _id: string;
  serviceCategory: string;
  description: string;
  beforeAlt: string;
  afterAlt: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
};

type HomeQueryResult = {
  gallery: GalleryImage[];
  postGallery?: GalleryImage[];
  offers: OfferItem[];
  packages: PackageItem[];
  beforeAfter: BeforeAfterItem[];
};

export default async function Home() {
  const { data } = await sanityFetch<HomeQueryResult>({
    query: HOME_SECTIONS_QUERY,
  });

  const gallery =
    data?.gallery && data.gallery.length > 0
      ? data.gallery
      : data?.postGallery ?? [];
  const offers = data?.offers ?? [];
  const packages = data?.packages ?? [];
  const beforeAfter = data?.beforeAfter ?? [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Packages items={packages} />
        <Team />

        <Gallery images={gallery} />

        <BeforeAfter items={beforeAfter} />
        <Offers items={offers} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

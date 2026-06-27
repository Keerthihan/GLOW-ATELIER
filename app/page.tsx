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
import { SectionCurve } from "@/components/ui/SectionCurve";

import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { HOME_SECTIONS_QUERY } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

type ArtistItem = {
  _id: string;
  name: string;
  slug: string;
  role: string;
  experience?: string;
  skills?: string[];
  bio?: string;
  instagram?: string;
  imageUrl?: string;
};

type HomeQueryResult = {
  gallery: GalleryImage[];
  postGallery?: GalleryImage[];
  offers: OfferItem[];
  packages: PackageItem[];
  beforeAfter: BeforeAfterItem[];
  artists: ArtistItem[];
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
  const artists = data?.artists ?? [];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <SectionCurve fromClass="bg-pearl" toClass="bg-white-rock" />
        <About />
        <SectionCurve fromClass="bg-white-rock" toClass="bg-grey-goose" direction="up" />
        <Services />
        <SectionCurve fromClass="bg-grey-goose" toClass="bg-pearl" />
        <Packages items={packages} />
        <Team items={artists} />
        <SectionCurve fromClass="bg-pearl" toClass="bg-grey-goose" direction="up" />
        <Gallery images={gallery} />
        <BeforeAfter items={beforeAfter} />
        <SectionCurve fromClass="bg-grey-goose" toClass="bg-pearl" direction="up" />
        <Offers items={offers} />
        <SectionCurve fromClass="bg-pearl" toClass="bg-grey-goose" />
        <Testimonials />
        <SectionCurve fromClass="bg-grey-goose" toClass="bg-grey-goose" direction="up" />
        <FAQ />
        <SectionCurve fromClass="bg-grey-goose" toClass="bg-pearl" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

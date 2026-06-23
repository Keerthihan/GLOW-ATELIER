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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Sections Body */}
      <main className="flex-grow">
        {/* bg-white-rock */}
        <Hero />

        {/* bg-grey-goose */}
        <About />

        {/* bg-white-rock */}
        <Services />

        {/* bg-grey-goose */}
        <Packages />

        {/* bg-white-rock */}
        <Team />

        {/* bg-grey-goose */}
        <Gallery />

        {/* bg-white-rock */}
        <BeforeAfter />

        {/* bg-lotus (inverted) */}
        <Offers />

        {/* bg-grey-goose */}
        <Testimonials />

        {/* bg-white-rock */}
        <FAQ />

        {/* bg-grey-goose */}
        <Contact />
      </main>

      {/* bg-thunder */}
      <Footer />
    </div>
  );
}

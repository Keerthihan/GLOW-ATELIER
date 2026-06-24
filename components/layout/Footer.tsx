// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import { Heart, Instagram, Facebook, Leaf } from "lucide-react";
import { branch } from "@/lib/mock-data";

export const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "About Our Story", href: "/#about" },
    { label: "Exquisite Services", href: "/#services" },
    { label: "Premium Packages", href: "/#packages" },
    { label: "Meet Artists", href: "/#team" },
    { label: "Client Creations", href: "/#gallery" },
    { label: "Special Offers", href: "/#offers" },
    { label: "FAQ Helpdesk", href: "/#faq" },
    { label: "Schedule Contact", href: "/#contact" }
  ];

  return (
    <footer className="bg-deep-sea text-white-rock">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Column 1: Logo + Tagline + Social (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <Link href="/#home" className="flex items-center gap-2 group">
              <Leaf className="w-6 h-6 text-blush-clay group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display text-lg tracking-[0.2em] font-bold text-white-rock uppercase">
                GLOW ATELIER
              </span>
            </Link>
            <p className="font-body text-sm text-white-rock/70 leading-relaxed max-w-sm">
              Established in Colombo, Sri Lanka, Glow Atelier is an award-winning sea-facing sanctuary. We unite botanical skin rejuvenation with progressive styling for modern, exquisite finishes.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-rock/80 hover:text-blush-clay transition-colors p-2 bg-white-rock/5 rounded-full hover:bg-white-rock/10 border border-white-rock/10 shadow-sm cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-rock/80 hover:text-blush-clay transition-colors p-2 bg-white-rock/5 rounded-full hover:bg-white-rock/10 border border-white-rock/10 shadow-sm cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links list (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-6">
            <h4 className="font-display text-base font-semibold text-blush-clay uppercase tracking-wider">
              Navigation links
            </h4>
            <div className="grid grid-cols-1 gap-3.5 w-full">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="font-body text-sm text-white-rock/80 hover:text-blush-clay transition-colors text-left"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Branch info from mock data (4 cols on desktop) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <h4 className="font-display text-base font-semibold text-blush-clay uppercase tracking-wider">
              Reserve At Colombo
            </h4>
            <div className="flex flex-col items-start gap-4">
              <p className="font-body text-sm text-white-rock/85 leading-relaxed text-left">
                <span className="font-bold uppercase text-[10px] tracking-widest text-blush-clay block mb-1">
                  Salon Suite Location
                </span>
                {branch.address}
              </p>
              <p className="font-body text-sm text-white-rock/85 leading-relaxed text-left">
                <span className="font-bold uppercase text-[10px] tracking-widest text-blush-clay block mb-1">
                  Telephone Reservation Line
                </span>
                {branch.phone}
              </p>
              <p className="font-body text-sm text-white-rock/85 leading-relaxed text-left">
                <span className="font-bold uppercase text-[10px] tracking-widest text-blush-clay block mb-1">
                  Secure Electronic Mail
                </span>
                {branch.email}
              </p>
            </div>
          </div>
        </div>

        {/* Divider: border-t border-pink-daisy opacity-30 */}
        <div className="border-t border-blush-clay/30 opacity-30 my-12" />

        {/* Bottom bar: copyright left | "Privacy Policy" right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-body text-xs text-white-rock/60 flex items-center gap-1.5">
            © 2011 - 2026 Glow Atelier. Timeless Radiance. All Rights Reserved. Crafted with{" "}
            <Heart className="w-3 h-3 text-blush-clay fill-blush-clay inline" /> in Colombo, LK.
          </p>
          <Link
            href="/privacy-policy"
            className="font-body text-xs text-white-rock/60 hover:text-blush-clay transition-colors font-medium cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

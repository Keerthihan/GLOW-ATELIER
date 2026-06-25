// components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CalendarDays, Leaf, Menu, Sparkles, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isGalleryPage = pathname === "/gallery";

  useEffect(() => {
    if (isGalleryPage) {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for nav height
      setIsScrolled(window.scrollY > 12);

      for (const item of navItems) {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isGalleryPage]);

  // Handle navigating or scrolling
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (isGalleryPage) {
      // Allow next Link navigation to homepage with hash
      return;
    }

    // Smooth scroll on the same page
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const logoText = "GLOW ATELIER";

  return (
    <nav className="sticky top-0 z-50 px-4 py-3 lg:px-8 bg-[radial-gradient(circle_at_50%_-140%,rgba(13,27,42,0.18),rgba(247,243,239,0.62)_45%,rgba(247,243,239,0)_78%)]">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 ring-1 ring-white-rock/45 backdrop-blur-2xl transition-all duration-300 lg:px-5 ${
          isScrolled
            ? "h-14 border-white-rock/70 bg-pearl/82 shadow-[0_16px_45px_rgba(13,27,42,0.14)]"
            : "h-16 border-white-rock/65 bg-pearl/68 shadow-[0_18px_55px_rgba(13,27,42,0.12)]"
        }`}
      >
        <Link
          href={isGalleryPage ? "/#home" : "#home"}
          onClick={() => handleLinkClick("#home")}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <span
            className={`flex items-center justify-center rounded-full bg-deep-sea text-golden-hour shadow-sm transition-all duration-300 ${
              isScrolled ? "h-9 w-9" : "h-11 w-11"
            }`}
          >
            <Leaf className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base tracking-[0.16em] font-bold text-deep-sea uppercase">
              {logoText}
            </span>
            <span className="mt-1 hidden font-body text-[9px] font-bold uppercase tracking-[0.22em] text-eucalyptus sm:block">
              Beauty Atelier
            </span>
          </span>
        </Link>

        <div className="hidden items-center rounded-full bg-white-rock/60 p-1 shadow-inner lg:flex xl:p-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            const finalHref = isGalleryPage ? `/${item.href}` : item.href;

            return (
              <Link
                key={item.label}
                href={finalHref}
                onClick={() => handleLinkClick(item.href)}
                className={`relative rounded-full px-2.5 py-2 font-body text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-200 xl:px-3.5 xl:tracking-[0.16em] ${
                  isActive
                    ? "bg-deep-sea text-white-rock shadow-sm"
                    : "text-deep-sea/62 hover:bg-pearl hover:text-blush-clay"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="hidden items-center gap-2 rounded-full bg-eucalyptus/10 px-4 py-2 font-body text-[10px] font-bold uppercase tracking-[0.18em] text-eucalyptus xl:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-golden-hour" />
            Open Today
          </span>
          <Link
            href={isGalleryPage ? "/#contact" : "#contact"}
            onClick={() => handleLinkClick("#contact")}
            className="group inline-flex items-center gap-2 rounded-full border border-deep-sea/10 bg-deep-sea px-2 py-2 text-white-rock shadow-[0_16px_36px_rgba(13,27,42,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush-clay hover:shadow-[0_20px_46px_rgba(193,122,122,0.28)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-golden-hour text-deep-sea transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <CalendarDays className="h-4 w-4" />
            </span>
            <span className="pr-1 font-body text-xs font-bold uppercase tracking-[0.16em]">
              Reserve Glow
            </span>
            <ArrowRight className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-deep-sea text-white-rock shadow-sm transition-colors hover:bg-blush-clay lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-x-4 top-24 z-40 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[2rem] border border-white-rock/80 bg-pearl/96 p-6 shadow-[0_24px_80px_rgba(13,27,42,0.16)] backdrop-blur-xl lg:hidden animate-fade-in">
          <div className="mb-6 flex items-center gap-3 rounded-[1.5rem] bg-deep-sea p-4 text-white-rock">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-golden-hour/15 text-golden-hour">
              <Leaf className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold leading-none">Glow Atelier</p>
              <p className="mt-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white-rock/55">
                Modern beauty menu
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              const finalHref = isGalleryPage ? `/${item.href}` : item.href;

              return (
                <Link
                  key={item.label}
                  href={finalHref}
                  onClick={() => handleLinkClick(item.href)}
                  className={`rounded-2xl px-4 py-3 font-body text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? "bg-deep-sea text-white-rock"
                      : "bg-white-rock/70 text-deep-sea/75 hover:bg-blush-clay hover:text-white-rock"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Link
            href={isGalleryPage ? "/#contact" : "#contact"}
            onClick={() => handleLinkClick("#contact")}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-deep-sea px-5 py-4 font-body text-xs font-bold uppercase tracking-[0.18em] text-white-rock shadow-[0_18px_40px_rgba(13,27,42,0.2)] transition-all duration-300 hover:bg-blush-clay"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-golden-hour text-deep-sea">
              <CalendarDays className="h-4 w-4" />
            </span>
            Reserve Your Glow
          </Link>
        </div>
      )}
    </nav>
  );
};

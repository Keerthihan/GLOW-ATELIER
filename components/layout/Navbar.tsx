// components/layout/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    <nav className="sticky top-0 z-50 bg-thunder text-white-rock border-b border-pink-daisy/10 h-20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-16 flex items-center justify-between">
        {/* Logo Left */}
        <Link
          href={isGalleryPage ? "/#home" : "#home"}
          onClick={() => handleLinkClick("#home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Crown className="w-6 h-6 text-pink-daisy group-hover:scale-110 transition-transform duration-300" />
          <span className="font-display text-lg tracking-[0.2em] font-bold text-white-rock uppercase">
            {logoText}
          </span>
        </Link>

        {/* Desktop Nav Links Center */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            const finalHref = isGalleryPage ? `/${item.href}` : item.href;

            return (
              <Link
                key={item.label}
                href={finalHref}
                onClick={() => handleLinkClick(item.href)}
                className={`font-body text-sm font-medium tracking-wider hover:text-pink-daisy transition-colors duration-200 relative py-2 uppercase ${
                  isActive ? "text-pink-daisy" : "text-white-rock/80"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-daisy" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white-rock hover:text-pink-daisy transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-thunder flex flex-col justify-center items-center gap-8 lg:hidden animate-fade-in px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              const finalHref = isGalleryPage ? `/${item.href}` : item.href;

              return (
                <Link
                  key={item.label}
                  href={finalHref}
                  onClick={() => handleLinkClick(item.href)}
                  className={`font-display text-2xl tracking-wider hover:text-pink-daisy transition-colors duration-200 uppercase ${
                    isActive ? "text-pink-daisy font-semibold" : "text-white-rock/90"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}
            {/* Mobile navigation links only */}
          </div>
        </div>
      )}
    </nav>
  );
};

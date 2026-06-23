// app/not-found.tsx
import React from "react";
import Link from "next/link";
import { Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white-rock flex flex-col justify-center items-center px-6 text-center">
      {/* Decorative Brand Emblem */}
      <div className="p-4 bg-grey-goose/35 rounded-full mb-8 border border-pink-daisy/30">
        <Crown className="w-12 h-12 text-lotus" />
      </div>

      {/* Heading scale matches our specifications */}
      <h2 className="font-display text-4xl lg:text-5xl font-semibold text-thunder mb-4">
        Destinations Unreclaimed
      </h2>

      {/* Divider */}
      <div className="w-16 h-1 bg-pink-daisy mb-8" />

      {/* Body text in thunder color */}
      <p className="font-body text-base text-thunder/85 max-w-md leading-relaxed mb-8">
        This particular sanctuary corridor is currently offline or did not match any of our premium suites. Let us guide you back to self-restoration.
      </p>

      {/* CTA back to Home */}
      <Link href="/" className="inline-block">
        <Button variant="primary" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Sanctuary</span>
        </Button>
      </Link>
    </div>
  );
}

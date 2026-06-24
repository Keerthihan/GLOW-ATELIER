import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333";

export const metadata = {
  title: "Sanity Studio",
  description: "Open the standalone Sanity Studio for Glow Atelier.",
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-white-rock flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-lotus mb-4">
          Content Management
        </p>
        <h1 className="font-display text-4xl lg:text-5xl font-semibold text-thunder mb-5">
          Sanity Studio
        </h1>
        <p className="font-body text-base text-thunder/75 leading-relaxed mb-8">
          This project uses a standalone Sanity Studio. Start it from the
          <span className="font-semibold"> studio</span> folder, then open it
          from here.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={studioUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-body text-base font-semibold focus:outline-none focus:ring-2 focus:ring-pink-daisy focus:ring-offset-2 tracking-wide cursor-pointer text-center bg-lotus text-white-rock hover:opacity-90 transition-opacity"
          >
            <span>Open Studio</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Button href="/" variant="outline" className="inline-flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Website</span>
          </Button>
        </div>

        <p className="font-body text-xs text-thunder/45 mt-8">
          Local Studio URL: {studioUrl}
        </p>
      </div>
    </main>
  );
}

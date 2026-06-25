// app/loading.tsx
import React from "react";
import { Crown } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white-rock flex flex-col justify-center items-center">
      {/* Centered pulsing emblem */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 border-2 border-pink-daisy/40 rounded-full animate-ping" />
        <Crown className="w-10 h-10 text-lotus animate-pulse shrink-0" />
      </div>

      {/* Brand caption in thunder color */}
      <p className="font-display text-lg italic text-thunder font-semibold tracking-widest mt-8 uppercase select-none">
        Glow Atelier Colombo
      </p>
    </div>
  );
}

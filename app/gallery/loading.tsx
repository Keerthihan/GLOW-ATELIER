// app/gallery/loading.tsx
import React from "react";
import { Camera } from "lucide-react";

export default function GalleryLoading() {
  return (
    <div className="fixed inset-0 bg-grey-goose flex flex-col justify-center items-center z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 border-2 border-pink-daisy/40 rounded-full animate-ping" />
        <Camera className="w-8 h-8 text-lotus animate-pulse shrink-0" />
      </div>
      <p className="font-display text-sm italic text-thunder font-semibold tracking-widest mt-6 uppercase select-none">
        Loading Portfolio Showcase...
      </p>
    </div>
  );
}

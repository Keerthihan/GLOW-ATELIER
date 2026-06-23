// components/sections/Team.tsx
import React from "react";
import { artists } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Team = () => {
  return (
    <SectionWrapper id="team" className="bg-white-rock">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Meet Our Artists
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* Grid: 4-col desktop, 2-col tablet, 1-col mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {artists.map((artist) => {
          return (
            <Card
              key={artist.id}
              className="p-8 flex flex-col items-center text-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Square avatar placeholder with border-2 */}
                <div className="w-24 h-24 bg-grey-goose border-2 border-pink-daisy/60 rounded-sm flex items-center justify-center mb-6 relative group overflow-hidden">
                  <div className="absolute inset-1 border border-pink-daisy/30 rounded-sm" />
                  <span className="font-display text-2xl font-bold text-thunder/60 select-none uppercase">
                    {artist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Name H3 */}
                <h3 className="font-display text-xl font-semibold text-lotus mb-1">
                  {artist.name
                }</h3>

                {/* Role label */}
                <span className="font-body text-sm font-medium text-thunder/70 mb-3">
                  {artist.role}
                </span>

                {/* Experience badge with pink-daisy background */}
                <span className="bg-pink-daisy text-thunder font-body text-xs italic font-bold px-3 py-1 rounded-sm mb-6 pointer-events-none">
                  {artist.experience} Experience
                </span>

                {/* Bio text */}
                <p className="font-body text-xs text-thunder/75 leading-relaxed mb-6 italic">
                  "{artist.bio}"
                </p>
              </div>

              {/* Skills as chips */}
              <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-pink-daisy/10 w-full mt-auto">
                {artist.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-grey-goose text-thunder text-xs font-semibold px-2.5 py-1 rounded-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

import React from "react";
import { artists as mockArtists } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Instagram } from "lucide-react";

type ArtistItem = {
  _id?: string;
  id?: string;
  name: string;
  role: string;
  experience?: string;
  skills?: string[];
  bio?: string;
  instagram?: string;
  imageUrl?: string;
};

export const Team = ({ items }: { items?: ArtistItem[] }) => {
  const displayArtists = (items && items.length > 0 ? items : mockArtists) as ArtistItem[];

  return (
    <SectionWrapper id="team" className="bg-pearl">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-eucalyptus mb-3">
          Expert hands
        </p>
        <h2 className="font-display text-3xl lg:text-5xl font-semibold text-deep-sea mb-3">
          Meet Our Artists
        </h2>
        <div className="w-16 h-1 bg-blush-clay rounded-full mx-auto mt-2" />
      </div>

      {/* Grid: 4-col desktop, 2-col tablet, 1-col mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayArtists.map((artist) => {
          const initials = artist.name
            ? artist.name
                .split(" ")
                .map((n) => n[0])
                .join("")
            : "";

          return (
            <Card
              key={artist._id ?? artist.id}
              className="p-8 flex flex-col items-center text-center justify-between group/card"
            >
              <div className="w-full flex flex-col items-center">
                <div className="w-24 h-24 bg-eucalyptus/10 rounded-full flex items-center justify-center mb-6 relative overflow-hidden shadow-inner ring-4 ring-pearl transition-all duration-300 group-hover/card:ring-eucalyptus/20">
                  {artist.imageUrl ? (
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  ) : (
                    <span className="font-display text-2xl font-bold text-eucalyptus select-none uppercase">
                      {initials}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="font-display text-xl font-semibold text-deep-sea">
                    {artist.name}
                  </h3>
                  {artist.instagram && (
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-deep-sea/40 hover:text-eucalyptus transition-colors duration-200"
                      title={`${artist.name}'s Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <span className="font-body text-sm font-medium text-deep-sea/65 mb-3">
                  {artist.role}
                </span>

                {artist.experience && (
                  <span className="bg-blush-clay/12 text-deep-sea font-body text-xs italic font-bold px-4 py-1.5 rounded-full mb-6 pointer-events-none">
                    {artist.experience} Experience
                  </span>
                )}

                {artist.bio && (
                  <p className="font-body text-xs text-deep-sea/68 leading-relaxed mb-6 italic">
                    "{artist.bio}"
                  </p>
                )}
              </div>

              {artist.skills && artist.skills.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-blush-clay/10 w-full mt-auto">
                  {artist.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-grey-goose text-deep-sea text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

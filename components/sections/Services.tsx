// components/sections/Services.tsx
import React from "react";
import * as Lucide from "lucide-react";
import { services } from "@/lib/mock-data";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const Services = () => {
  // Safe helper to resolve string icon name to a Lucide React component
  const getIcon = (name: string) => {
    switch (name) {
      case "Scissors":
        return <Lucide.Scissors className="w-8 h-8 text-lotus" />;
      case "Sparkles":
        return <Lucide.Sparkles className="w-8 h-8 text-lotus" />;
      case "Brush":
        return <Lucide.Paintbrush className="w-8 h-8 text-lotus" />;
      case "Hand":
        return <Lucide.Hand className="w-8 h-8 text-lotus" />;
      case "Leaf":
        return <Lucide.Leaf className="w-8 h-8 text-lotus" />;
      case "Crown":
        return <Lucide.Crown className="w-8 h-8 text-lotus" />;
      default:
        return <Lucide.Sparkles className="w-8 h-8 text-lotus" />;
    }
  };

  return (
    <SectionWrapper id="services" className="bg-white-rock">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Section Heading */}
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-thunder mb-3">
          Our Services
        </h2>
        {/* Pink Daisy Accent Line */}
        <div className="w-16 h-1 bg-pink-daisy mx-auto mt-2" />
      </div>

      {/* Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            className="p-8 flex flex-col justify-between items-start"
          >
            <div className="w-full">
              {/* Header: Icon & Category */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-grey-goose/35 rounded-sm">
                  {getIcon(service.icon)}
                </div>
                <span className="font-body text-sm italic text-lotus font-semibold">
                  {service.category}
                </span>
              </div>

              {/* H3 Title */}
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-lotus mb-3">
                {service.name}
              </h3>

              {/* Description */}
              <p className="font-body text-base text-thunder/80 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Footer: Price Badge, Duration */}
            <div className="w-full flex items-center justify-between pt-6 border-t border-pink-daisy/10 mt-auto">
              <span className="bg-pink-daisy text-thunder font-body text-sm font-bold px-3 py-1 rounded-sm">
                {service.price}
              </span>
              <span className="font-body text-sm text-thunder/65 flex items-center gap-1">
                <Lucide.Clock className="w-4 h-4 text-pink-daisy" />
                {service.duration}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

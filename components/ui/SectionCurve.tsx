import React from "react";

type SectionCurveProps = {
  fromClass: string;
  toClass: string;
  direction?: "down" | "up";
};

export const SectionCurve = ({
  fromClass,
  toClass,
  direction = "down",
}: SectionCurveProps) => {
  const curveShape =
    direction === "down"
      ? "-top-14 rounded-b-[100%]"
      : "-bottom-14 rounded-t-[100%]";

  return (
    <div
      aria-hidden="true"
      className={`relative h-16 overflow-hidden sm:h-20 ${toClass}`}
    >
      <div
        className={`absolute left-1/2 h-28 w-[130%] -translate-x-1/2 sm:h-32 ${curveShape} ${fromClass}`}
      />
    </div>
  );
};

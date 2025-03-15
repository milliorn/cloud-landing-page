import React from "react";
import { HeroGetStarted } from "./HeroGetStarted";

/* container to hold text and button for hero */
export function HeroHeading() {
  return (
    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
      <p className="text-2xl mt-2 sm:mt-0">Unique Sequencing & Production</p>
      <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
      <p className="text-2xl">This is our Tech brand.</p>
      <HeroGetStarted />
    </div>
  );
}

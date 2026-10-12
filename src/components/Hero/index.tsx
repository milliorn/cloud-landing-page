import React from "react";
import { HeroDataServices } from "./HeroDataServices";
import { HeroHeading } from "./HeroHeading";
import { HeroImage } from "./HeroImage";

/* hero component */
export default function Hero() {
  return (
    <div
      id="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
        <HeroHeading />
        <HeroImage />
        <HeroDataServices />
      </div>
    </div>
  );
}

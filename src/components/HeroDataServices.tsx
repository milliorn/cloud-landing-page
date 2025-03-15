import React from "react";
import { mappedData } from "./Hero";

/**
 * create card with data services in hero
 */
export function HeroDataServices() {
  return (
    <div
      className="absolute flex flex-col sm:py-8 md:min-w-[768px] bottom-[5%]
    mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
    border border-slate-300 rounded-xl text-center shadow-xl -my-8 sm:my-0"
    >
      <p>Data Services</p>
      <div className="flex justify-between flex-wrap px-4">{mappedData}</div>
    </div>
  );
}

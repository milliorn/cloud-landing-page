import React from "react";
import { CheckMark } from "../CheckMark";
import { PricingCards } from "./PricingCards";
import { PricingText } from "./PricingText";

const dataCheckmark = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing.",
  "Lorem ipsum dolor sit, amet consectetur.",
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit.",
  "Lorem, ipsum dolor.",
] as const;

export const mappeddataCheckmark = dataCheckmark.map((e) => (
  <div key={e} className="text-2xl">
    <CheckMark text={e} />
  </div>
));

/* pricing component */
export default function Pricing() {
  return (
    <div id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay" />
      <div className="max-w-[1280px] mx-auto py-12">
        <PricingText />
        <PricingCards />
      </div>
    </div>
  );
}

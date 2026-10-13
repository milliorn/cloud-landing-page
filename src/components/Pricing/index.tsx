import React from "react";
import { PricingCards } from "./PricingCards";
import { PricingText } from "./PricingText";

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

import React from "react";
import { PricingCardLeft } from "./PricingCardLeft";
import { PricingCardRight } from "./PricingCardRight";
import { PricingMonth } from "./PricingMonth";

function PricingTier({
  label,
  price,
  children,
}: {
  label: string;
  price: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
        {label}
      </span>
      <p className="text-6xl font-bold py-4 flex">
        {price}
        <PricingMonth />
      </p>
      {children}
    </div>
  );
}

/* container for pricing cards */
export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2">
      <PricingTier label="Standard" price="$49">
        <PricingCardLeft />
      </PricingTier>
      <PricingTier label="Premium" price="$99">
        <PricingCardRight />
      </PricingTier>
    </div>
  );
}

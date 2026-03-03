import React from "react";
import { mappeddataCheckmark } from ".";
import { GetStarted } from "../GetStarted";

/**
 * create pricing card on the right/bottom side (based on viewpoint)
 */
export function PricingCardRight() {
  return (
    <div>
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
        adipisci? Sapiente.?
      </p>
      {[...mappeddataCheckmark].reverse()}
      <GetStarted />
    </div>
  );
}

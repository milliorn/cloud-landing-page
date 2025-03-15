import React from "react";
import { mappeddataCheckmark } from ".";
import { GetStarted } from "../GetStarted";

/**
 * create pricing card on the top/left side (based on viewpoint)
 */
export function PricingCardLeft() {
  return (
    <div className="text-2xl">
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        eligendi?
      </p>
      {mappeddataCheckmark}
      <GetStarted />
    </div>
  );
}

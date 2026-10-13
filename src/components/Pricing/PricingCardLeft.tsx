import React from "react";
import { CheckMark } from "../CheckMark";
import { GetStarted } from "../GetStarted";
import { dataCheckmark } from "./pricingData";

/**
 * create pricing card on the top/left side (based on viewpoint)
 */
export function PricingCardLeft() {
  return (
    <div>
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        eligendi?
      </p>
      {dataCheckmark.map((e) => (
        <div key={e} className="text-2xl">
          <CheckMark text={e} />
        </div>
      ))}
      <GetStarted />
    </div>
  );
}

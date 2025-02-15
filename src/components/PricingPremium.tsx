import { PricingCardRight } from "./PricingCardRight";
import { PricingPremiumMonth } from "./PricingPremiumMonth";

/* create pricing element */
export function PricingPremium() {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
        Premium
      </span>
      <PricingPremiumMonth />
      <PricingCardRight />
    </div>
  );
}

import { PricingCardLeft } from "./PricingCardLeft";
import { PricingStandardMonth } from "./PricingStandardMonth";

/* create pricing element */
export function PricingStandard() {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
        Standard
      </span>
      <PricingStandardMonth />
      <PricingCardLeft />
    </div>
  );
}

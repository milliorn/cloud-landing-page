import { PricingCardLeft } from "./PricingCardLeft";
import { PricingMonth } from "./PricingMonth";

/* create pricing element */
export function PricingStandard(): JSX.Element {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
        Standard
      </span>
      <div>
        <p className="text-6xl font-bold py-4 flex">
          $49
          <PricingMonth />
        </p>
      </div>
      <PricingCardLeft />
    </div>
  );
}

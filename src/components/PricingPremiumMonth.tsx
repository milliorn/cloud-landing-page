import { PricingMonth } from "./PricingMonth";

/* monthly price */
export function PricingPremiumMonth(): JSX.Element {
  return (
    <div>
      <p className="text-6xl font-bold py-4 flex">
        $99
        <PricingMonth />
      </p>
    </div>
  );
}

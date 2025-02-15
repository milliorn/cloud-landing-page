import { PricingPremium } from "./PricingPremium";
import { PricingStandard } from "./PricingStandard";

/* container for pricing cards */
export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2">
      <PricingStandard />
      <PricingPremium />
    </div>
  );
}

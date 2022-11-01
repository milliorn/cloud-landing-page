import { PricingMonth } from "./PricingMonth";

export function PricingStandardMonth(): JSX.Element {
  return (
    <div>
      <p className="text-6xl font-bold py-4 flex">
        $49
        <PricingMonth />
      </p>
    </div>
  );
}

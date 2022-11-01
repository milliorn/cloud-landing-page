import { GetStarted } from "./GetStarted";
import { mappeddataCheckmark } from "./Pricing";

/**
 * create pricing card on the right/bottom side (based on viewpoint)
 */
export function PricingCardRight(): JSX.Element {
  return (
    <div className="text-2xl">
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
        adipisci? Sapiente.?
      </p>{" "}
      {mappeddataCheckmark.map(
        (_: any, idx: number) =>
          mappeddataCheckmark[mappeddataCheckmark.length - 1 - idx]
      )}
      <GetStarted />
    </div>
  );
}

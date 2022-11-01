import uuid from "react-uuid";
import { CheckMark } from "./CheckMark";
import { PricingCards } from "./PricingCards";

/* create lorem text */
export function paraLorem({ text }: { text: string }): void {
  <p className="text-2xl py-8 text-slate-500">{text}</p>;
}

const dataCheckmark = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing.",
  "Lorem ipsum dolor sit, amet consectetur.",
  "Lorem ipsum dolor sit amet.",
  "Lorem ipsum dolor sit.",
  "Lorem, ipsum dolor.",
] as const;

export const mappeddataCheckmark = dataCheckmark.map((e) => (
  <div key={uuid()} className="text-2xl">
    {CheckMark({ text: e })}
    <CheckMark text={e} />
  </div>
));

/* pricing component */
export default function Pricing(): JSX.Element {
  return (
    <div id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay" />

      <div className="max-w-[1280px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-2xl sm:text-5xl font-bold text-white py-8">
            The right price for your research.
          </h3>
          <p className="sm:text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            eveniet provident ut. Possimus tempore quasi dolore maiores fuga
            explicabo dolorum, facilis nisi doloribus? Maxime quis quia fugiat
            libero sed quibusdam.
          </p>
        </div>
        <PricingCards />
      </div>
    </div>
  );
}

import uuid from "react-uuid";
import { FooterEmail } from "./FooterEmail";
import { FooterSocialMedia } from "./FooterSocialMedia";

/* footer component */
export default function Footer(): JSX.Element {
  const data = [
    {
      heading: "Solutions",
      l1: "Marketing",
      l2: "Analytics",
      l3: "Commerce",
      l4: "Cloud",
      l5: "Data",
    },
    {
      heading: "Company",
      l1: "About",
      l2: "Blog",
      l3: "Jobs",
      l4: "Press",
      l5: "Partners",
    },
    {
      heading: "Legal",
      l1: "Privacy",
      l2: "Terms",
      l3: "Policies",
      l4: "Conditions",
      l5: null,
    },
    {
      heading: "Support",
      l1: "Documentation",
      l2: "Guides",
      l3: "API Status",
      l4: "Pricing",
      l5: null,
    },
  ] as const;
  const mappedData = data.map((e) => (
    <div key={uuid()}>
      {/* Enhancing contrast with white text on dark background */}
      <h4 className="font-bold uppercase p-4 sm:pt-2 text-white">{e.heading}</h4>
      <ul>
        {/* Ensuring list items are also white for better readability */}
        <li className="py-1 text-white">{e.l1}</li>
        <li className="py-1 text-white">{e.l2}</li>
        <li className="py-1 text-white">{e.l3}</li>
        <li className="py-1 text-white">{e.l4}</li>
        {e.l5 && <li className="py-1 text-white">{e.l5}</li>}
      </ul>
    </div>
  ));

  return (
    <div className="w-full mt-24 bg-slate-900 py-y px-2">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {mappedData}
        {FooterEmail()}
      </div>

      <div className="flex flex-col max-w-[1280px] px-2 py-4 mx-auto justify-between sm:flex-row text-center">
        {/* Improved contrast with white text */}
        <p className="py-4 text-white">
          © {new Date().getFullYear()} Lorem, ipsum. All rights reserved
        </p>
        <FooterSocialMedia />
      </div>
    </div>
  );
}
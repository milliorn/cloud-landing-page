import uuid from "react-uuid";
import { AboutMappedData } from "./AboutMappedData";
import { AboutText } from "./AboutText";

/* about component */
function About(): JSX.Element {
  const data = [
    {
      pText1: "100%",
      pText2: "Completion",
    },
    {
      pText1: "24/7",
      pText2: "Delivery",
    },
    {
      pText1: "100%",
      pText2: "Transactions",
    },
  ] as const;

  const mappedData = data.map((e) => (
    <div className="border py-8 rounded-xl shadow-xl" key={uuid()}>
      <p className="text-6xl font-bold text-indigo-600">{e.pText1}</p>
      <p className="text-gray-900 mt-2">{e.pText2}</p>
    </div>
  ));

  return (
    <div id="about" className="w-full my-12 sm:my-32">
      <div className="max-w-[1280px] mx-auto">
        <AboutText />
        <AboutMappedData mappedData={mappedData} />
      </div>
    </div>
  );
}

export default About;

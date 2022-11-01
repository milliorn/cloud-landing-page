import { CloudUpload, Database, PaperAirplane, Server } from "heroicons-react";
import uuid from "react-uuid";
import { HeroDataServices } from "./HeroDataServices";
import { HeroHeading } from "./HeroHeading";
import { HeroImage } from "./HeroImage";

const data = [
  { component: <CloudUpload />, p: "App Security" },
  { component: <Database />, p: "Dashboard Design" },
  { component: <Server />, p: "Cloud Data" },
  { component: <PaperAirplane />, p: "API" },
] as const;

export const mappedData = data.map((e) => (
  <div className="flex px-4 py-2 text-slate-500" key={uuid()}>
    <div className="h-6 text-indigo-600">{e.component}</div>
    <p>{e.p}</p>
  </div>
));

/* hero component */
export default function Hero(): JSX.Element {
  return (
    <div
      id="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1280px] m-auto">
        <HeroHeading />
        <HeroImage />
        <HeroDataServices />
      </div>
    </div>
  );
}

import { CloudUpload, Database, PaperAirplane, Server } from "heroicons-react";
import uuid from "react-uuid";
import bgImg from "../assets/cyber-bg.png";
import { HeroDataServices } from "./HeroDataServices";
import { HeroGetStarted } from "./HeroGetStarted";

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
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl mt-2 sm:mt-0">
            Unique Sequencing & Production
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <HeroGetStarted />
        </div>
        <div>
          <img className="w-full invisible sm:visible" src={bgImg} alt="/" />
        </div>
        <HeroDataServices />
      </div>
    </div>
  );
}

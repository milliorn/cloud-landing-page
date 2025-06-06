import { CloudUpload, Database, PaperAirplane, Server } from "heroicons-react";
import uuid from "react-uuid";
import { HeroDataServices } from "./HeroDataServices";
import { HeroHeading } from "./HeroHeading";
import { HeroImage } from "./HeroImage";
import React from "react";

const data = [
  {
    component: (
      <CloudUpload
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    p: "App Security",
  },
  {
    component: (
      <Database
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    p: "Dashboard Design",
  },
  {
    component: (
      <Server
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    p: "Cloud Data",
  },
  {
    component: (
      <PaperAirplane
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    p: "API",
  },
] as const;

export const mappedData = data.map((e) => (
  <div className="flex px-4 py-2 text-gray-900" key={uuid()}>
    <div className="h-6 text-indigo-600">{e.component}</div>
    <p className="text-gray-900">{e.p}</p>
  </div>
));

/* hero component */
export default function Hero() {
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

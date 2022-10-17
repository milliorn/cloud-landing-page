import { CloudUpload, Database, Server, PaperAirplane } from "heroicons-react";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
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
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full invisible sm:visible" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col sm:py-8 md:min-w-[768px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl -my-8 sm:my-0"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUpload className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <Database className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <Server className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplane className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

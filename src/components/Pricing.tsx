import { Check } from "heroicons-react";

/* pricing component */
function Pricing(): JSX.Element {
  return (
    <div id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

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

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, eligendi?
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-4 my-4">
                Get Started
              </button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, hic.
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <Check className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-4 my-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

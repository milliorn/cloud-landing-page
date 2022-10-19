import { Check } from "heroicons-react";

/* pricing component */
function Pricing(): JSX.Element {
  /* create lorem text */
  const paraLorem = ({ text }: { text: string }): JSX.Element => (
    <p className="text-2xl py-8 text-slate-500">{text}</p>
  );

  /* create checkmark icons */
  const checkMark = (text: string): JSX.Element => (
    <div className="flex py-4">
      <div className="w-8 mr-5 text-green-600">
        <Check />
      </div>
      {text}
    </div>
  );

  /* get started text on button */
  const getStarted = (
    <button type="button" className="w-full py-4 -my-1 bottom-0 bg-indigo-700">
      Get Started
    </button>
  );

  const dataCheckmark = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    "Lorem ipsum dolor sit, amet consectetur.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit.",
    "Lorem, ipsum dolor.",
  ] as const;

  const mappeddataCheckmark = dataCheckmark.map((e) => (
    <div className="text-2xl">{checkMark(e)}</div>
  ));

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

            {paraLorem({
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, eligendi?",
            })}

            <div className="text-2xl">
              {mappeddataCheckmark}
              {getStarted}
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

            <div className="text-2xl">
              {paraLorem({
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, adipisci? Sapiente.?",
              })}
              {mappeddataCheckmark.map(
                (_, idx) =>
                  mappeddataCheckmark[mappeddataCheckmark.length - 1 - idx]
              )}
              {getStarted}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

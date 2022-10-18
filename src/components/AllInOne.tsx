import { Check } from "heroicons-react";

function AllInOne(): JSX.Element {
  const data = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate consequuntur, soluta assumenda laboriosam iusto eius? Hic voluptates in laudantium, cum magni quis, veritatis quasi iusto ipsa, facilis nisi! Fuga, asperiores.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi odio ipsam architecto, sequi nostrum recusandae quibusdam qui, assumenda temporibus quod! Laudantium modi id sed, corrupti hic ex error voluptatibus!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Eligendi corporis architecto tenetur quam molestias, incidunt enim sapiente voluptatem odio reiciendis, dicta itaque dignissimos. Repudiandae magnam voluptas fugit quae numquam suscipit.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adquae, accusamus, deserunt facilis ipsa qui quisquam facere vel,perspiciatis fugiat odit! Facilis, illo quod dolorem magnam assumenda voluptatibus mollitia rerum.",
  ] as string[];

  const mappedData = data.map((e, i) => (
    <div className="flex" key={i}>
      <div>
        <Check className="w-7 mr-4 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-lg">Notifications</h3>
        <p className="text-lg pt-2 pb-4">{e}</p>
      </div>
    </div>
  ));

  return (
    <div id="platforms" className="w-full my-32">
      <div className="max-w-[1280px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="sm:text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {mappedData}
        </div>
      </div>
    </div>
  );
}

export default AllInOne;

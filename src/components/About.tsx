const About = () => {
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
  ];

  const mappedData = data.map((e, i) => (
    <div className="border py-8 rounded-xl shadow-xl" key={i}>
      <p className="text-6xl font-bold text-indigo-600">{e.pText1}</p>
      <p className="text-gray-400 mt-2">{e.pText2}</p>
    </div>
  ));

  return (
    <div id="about" className="w-full my-12 sm:my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="sm:text-5xl text-2xl font-bold mx-1">
            Trusted by developers across the world
          </h2>
          <p className="sm:text-3xl py-6 text-gray-500 px-5 sm:px-4 md:px-3 lg:px-2 xl:px-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            perspiciatis qui, provident a hic nesciunt harum illum quae dolores.
            Inventore esse error ipsam illo repellat. Repellat libero
            perferendis neque laborum!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          {mappedData}
        </div>
      </div>
    </div>
  );
};

export default About;

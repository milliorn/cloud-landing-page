const About = () => {
  return (
    <div id="about" className="w-full my-12 sm:my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="sm:text-5xl text-2xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="sm:text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            perspiciatis qui, provident a hic nesciunt harum illum quae dolores.
            Inventore esse error ipsam illo repellat. Repellat libero
            perferendis neque laborum!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

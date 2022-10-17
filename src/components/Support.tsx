import { Phone, ArrowSmRight } from "heroicons-react";
import { Chip, SupportOutline } from "heroicons-react";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div id="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="sm:text-5xl font-bold py-6 text-center capitalize">
            Finding the right team
          </h3>
          <p className="py-4 sm:text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quaerat quas expedita consequuntur tenetur dolorum dolore aliquid
            deserunt. Excepturi molestias voluptatem praesentium aut deserunt
            iusto illo neque tenetur alias voluptate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
                <Phone />
              </div>

              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam odio culpa maxime, commodi est totam atque dicta
                facere, beatae neque debitis assumenda optio sint rerum
                molestias dolorum nisi ad architecto?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
                <SupportOutline />
              </div>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                commodi assumenda architecto adipisci a eaque eum sequi tenetur
                voluptate doloremque dolor possimus, consectetur molestiae
                laborum neque sed corporis ad aut!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
                <Chip />
              </div>
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                porro laudantium perspiciatis sunt, reprehenderit earum, nihil
                minima quas aperiam commodi cum assumenda aspernatur hic
                veritatis id tempora itaque, consequuntur beatae!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

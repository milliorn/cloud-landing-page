import uuid from "react-uuid";
import { ArrowSmRight, Chip, Phone, SupportOutline } from "heroicons-react";
import { SupportText } from "./SupportText";
import React from "react";

/* support component */
function Support() {
  const data = [
    {
      component: <Phone onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      span: "Sales",
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Provident quisquam, deserunt molestias neque iusto quos quo? Rerum accusamus facere totam iste doloremque, nisi eum, cupiditate architecto in quam perspiciatis minima.",
    },
    {
      component: <SupportOutline onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      span: "Technical Support",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime commodi assumenda architecto adipisci a eaque eum sequi tenetur voluptate doloremque dolor possimus, consectetur molestiae laborum neque sed corporis ad aut!",
    },
    {
      component: <Chip onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      span: "Inquiries",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro laudantium perspiciatis sunt, reprehenderit earum, nihil minima quas aperiam commodi cum assumenda aspernatur hic veritatis id tempora itaque, consequuntur beatae!",
    },
  ] as const;

  const columns = data.map((e) => (
    <div className="bg-white rounded-xl shadow-2xl relative" key={uuid()}>
      <div className="p-8">
        <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
          {e.component}
        </div>
        <span className="font-bold text-2xl my-6">{e.span}</span>
        <p className="text-gray-600 text-xl  mb-12">{e.p}</p>
      </div>

      <span className="bg-slate-100 pl-8 py-4 absolute bottom-0 w-full flex items-center text-indigo-600">
        Contact Us <ArrowSmRight onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </span>
    </div>
  ));

  return (
    <div id="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src="/cloud-landing-page/support.webp"
          alt="Support"
        />
      </div>

      <div className="max-w-[1280px] mx-auto text-white relative">
        <SupportText />
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {columns}
        </div>
      </div>
    </div>
  );
}

export default Support;

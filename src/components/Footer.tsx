import {
  FaFacebook,
  FaGithub,
  FaInstagram, FaTwitch, FaTwitter
} from "react-icons/fa";
import uuid from "react-uuid";

/* footer component */
function Footer(): JSX.Element {
  const data = [
    {
      heading: "Solutions",
      l1: "Marketing",
      l2: "Analytics",
      l3: "Commerce",
      l4: "Cloud",
      l5: "Data",
    },
    {
      heading: "Company",
      l1: "About",
      l2: "Blog",
      l3: "Jobs",
      l4: "Press",
      l5: "Partners",
    },
    {
      heading: "Legal",
      l1: "Privacy",
      l2: "Terms",
      l3: "Policies",
      l4: "Conditions",
      l5: null,
    },
    {
      heading: "Support",
      l1: "Documentation",
      l2: "Guides",
      l3: "API Status",
      l4: "Pricing",
      l5: null,
    },
  ] as const;

  const mappedData = data.map((e) => (
    <div key={uuid()}>
      <h6 className="font-bold uppercase p-4 sm:pt-2">{e.heading}</h6>
      <ul>
        <li className="py-1">{e.l1}</li>
        <li className="py-1">{e.l2}</li>
        <li className="py-1">{e.l3}</li>
        <li className="py-1">{e.l4}</li>
        <li className="py-1">{e.l5}</li>
      </ul>
    </div>
  ));

  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {mappedData}
        <div className="col-span-2 pt-8 md p-4:sm:pt-2">
          <p className="font-bold uppercase text-center">
            Subscribe to our newsletter
          </p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1280px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          © {new Date().getTime()} Lorem, ipsum. All rights reserved
        </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;

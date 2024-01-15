import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

/* create social media buttons in footer */
export function FooterSocialMedia(): JSX.Element {
  return (
    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl cursor-pointer">
      <FaFacebook />
      <FaInstagram />
      <FaTwitter />
      <FaTwitch />
      <FaGithub />
    </div>
  );
}

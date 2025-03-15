import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

/* create social media buttons in footer */
export function FooterSocialMedia() {
  return (
    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl cursor-pointer">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
        <FaTwitch />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
  );
}

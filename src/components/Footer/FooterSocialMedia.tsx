import React from "react";
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
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-blue-600 transition duration-200"
      >
        <FaFacebook />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition duration-200"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-blue-400 transition duration-200"
      >
        <FaTwitter />
      </a>
      <a
        href="https://twitch.tv"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitch"
        className="hover:text-purple-600 transition duration-200"
      >
        <FaTwitch />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-800 transition duration-200"
      >
        <FaGithub />
      </a>
    </div>
  );
}

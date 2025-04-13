import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

// react-icons@5.4.0 is likely not ready for React 19.
const FacebookIcon = FaFacebook as unknown as React.FC;
const GitHubIcon = FaGithub as unknown as React.FC;
const InstagramIcon = FaInstagram as unknown as React.FC;
const TwitchIcon = FaTwitch as unknown as React.FC;
const TwitterIcon = FaTwitter as unknown as React.FC;

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
        <FacebookIcon />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition duration-200"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-blue-400 transition duration-200"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://twitch.tv"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitch"
        className="hover:text-purple-600 transition duration-200"
      >
        <TwitchIcon />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-800 transition duration-200"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

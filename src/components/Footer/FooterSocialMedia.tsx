import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { Icon } from "../Icon";

const links: { href: string; label: string; icon: IconType; hover: string }[] =
  [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: FaFacebook,
      hover: "hover:text-blue-600",
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: FaInstagram,
      hover: "hover:text-pink-500",
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: FaTwitter,
      hover: "hover:text-blue-400",
    },
    {
      href: "https://twitch.tv",
      label: "Twitch",
      icon: FaTwitch,
      hover: "hover:text-purple-600",
    },
    {
      href: "https://github.com",
      label: "GitHub",
      icon: FaGithub,
      hover: "hover:text-gray-800",
    },
  ];

/* create social media buttons in footer */
export function FooterSocialMedia() {
  return (
    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
      {links.map(({ href, label, icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${hover} transition duration-200`}
        >
          <Icon icon={icon} />
        </a>
      ))}
    </div>
  );
}

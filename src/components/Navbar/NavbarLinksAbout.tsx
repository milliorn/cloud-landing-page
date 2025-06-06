import React from "react";
import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksAbout() {
  return (
    <Link
      to="about"
      smooth
      offset={-200}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="About"
      aria-label="About"
    >
      About
    </Link>
  );
}

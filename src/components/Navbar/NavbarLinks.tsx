import React from "react";
import { Link } from "react-scroll";

export const navLinks = [
  { to: "home", label: "Home", offset: 0 },
  { to: "about", label: "About", offset: -200 },
  { to: "support", label: "Support", offset: -50 },
  { to: "platforms", label: "Platforms", offset: -100 },
  { to: "pricing", label: "Pricing", offset: -50 },
] as const;

/**
 * create links found in leftside of navbar when expanded
 */
export function NavbarLinks() {
  return (
    <div className="flex items-center">
      <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">
        Lorem ipsum
      </h1>
      <ul className="hidden md:flex cursor-pointer">
        {navLinks.map(({ to, label, offset }) => (
          <li key={to}>
            <Link
              to={to}
              smooth
              offset={offset}
              duration={500}
              rel="noopener noreferrer"
              role="link"
              title={label}
              aria-label={label}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

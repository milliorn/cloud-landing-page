import React from "react";
import { Link } from "react-scroll";
import { navLinks } from "./NavbarLinks";

/**
 * handlers and links for buttons in navbar
 */
export function NavHandlers({
  nav,
  handleClose,
}: {
  nav: boolean;
  handleClose: () => void;
}) {
  return (
    <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      {navLinks.map(({ to, label, offset }) => (
        <li key={to} className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to={to}
            smooth
            offset={offset}
            duration={500}
            title={label}
            aria-label={label}
          >
            {label}
          </Link>
        </li>
      ))}

      <div className="flex flex-col my-4">
        <button
          type="button"
          className="bg-transparent text-indigo-700 px-8 py-3 mb-4"
        >
          Sign In
        </button>
        <button type="button" className="px-8 py-3 bg-indigo-700">
          Sign Up
        </button>
      </div>
    </ul>
  );
}

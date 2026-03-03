import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Login } from "../Login";
import { NavHandlers } from "./NavHandlers";
import { NavbarLinks } from "./NavbarLinks";

/* navbar component */
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  return (
    <div className="w-full sm:h-20 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavbarLinks />
        <Login />
        <button
          className="md:hidden mr-4"
          onClick={handleClick}
          type="button"
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={nav}
        >
          <div className="w-5">{nav ? <HiX /> : <HiMenu />}</div>
        </button>
      </div>
      <NavHandlers nav={nav} handleClose={handleClose} />
    </div>
  );
}

export default Navbar;

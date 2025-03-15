import { Menu, X } from "heroicons-react";
import { useState } from "react";
import { Login } from "./Login";
import { NavbarLinks } from "./NavbarLinks";
import { NavHandlers } from "./NavHandlers";
import React from "react";

/* navbar component */
function Navbar() {
  const [nav, setNav] = useState(false);

  /*event handler */
  const handleClick = () => setNav(!nav);
  /*event handler */
  const handleClose = () => setNav(!nav);

  const hamburgerMenu = !nav ? (
    <Menu onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
  ) : (
    <X onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
  );
  const hamburger = <div className="w-5">{hamburgerMenu}</div>;

  return (
    <div className="w-screen sm:h-20 z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavbarLinks />
        <Login />
        <div className="md:hidden mr-4" onClick={handleClick}>
          {hamburger}
        </div>
      </div>
      <NavHandlers nav={nav} handleClose={handleClose} />
    </div>
  );
}

export default Navbar;

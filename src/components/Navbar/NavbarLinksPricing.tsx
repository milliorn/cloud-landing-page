import React from "react";
import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksPricing() {
  return (
    <Link
      to="pricing"
      smooth
      offset={-50}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="Pricing"
      aria-label="Pricing"
    >
      Pricing
    </Link>
  );
}

import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksPricing(): JSX.Element {
  return <Link to="pricing" smooth offset={-50} duration={500}>
    Pricing
  </Link>;
}

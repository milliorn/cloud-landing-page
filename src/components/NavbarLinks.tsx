import { Link } from "react-scroll";

/**
 * create links found in leftside of navbar when expanded
 */
export function NavbarLinks(): JSX.Element {
  return (
    <ul className="hidden md:flex">
      <li>
        <Link to="home" smooth duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth offset={-200} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="support" smooth offset={-50} duration={500}>
          Support
        </Link>
      </li>
      <li>
        <Link to="platforms" smooth offset={-100} duration={500}>
          Platforms
        </Link>
      </li>
      <li>
        <Link to="pricing" smooth offset={-50} duration={500}>
          Pricing
        </Link>
      </li>
    </ul>
  );
}

import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksAbout(): JSX.Element {
  return (
    <Link to="about" smooth offset={-200} duration={500}>
      About
    </Link>
  );
}

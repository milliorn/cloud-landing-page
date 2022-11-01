import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksPlatforms(): JSX.Element {
  return (
    <Link to="platforms" smooth offset={-100} duration={500}>
      Platforms
    </Link>
  );
}

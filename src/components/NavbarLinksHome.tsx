import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksHome() {
  return (
    <Link
      to="home"
      smooth
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="Home"
      aria-label="Home"
    >
      Home
    </Link>
  );
}

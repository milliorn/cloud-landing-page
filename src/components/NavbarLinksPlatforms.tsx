import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksPlatforms() {
  return (
    <Link
      to="platforms"
      smooth
      offset={-100}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="Platforms"
      aria-label="Platforms"
    >
      Platforms
    </Link>
  );
}

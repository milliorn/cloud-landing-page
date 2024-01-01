import { Link } from "react-scroll";

/* button in navbar */
export function NavbarLinksSupport(): JSX.Element {
  return (
    <Link
      to="support"
      smooth
      offset={-50}
      duration={500}
      rel="noopener noreferrer"
      role="link"
      title="Support"
      aria-label="Support"
    >
      Support
    </Link>
  );
}

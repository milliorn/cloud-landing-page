import { Link } from "react-scroll";

/**
 * handlers and links for buttons in navbar
 */
export function NavHandlers({
  nav,
  handleClose,
}: {
  nav: boolean;
  handleClose: () => void;
}) {
  return (
    <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
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
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
          to="about"
          smooth
          offset={-200}
          duration={500}
          rel="noopener noreferrer"
          role="link"
          title="About"
          aria-label="About"
        >
          About
        </Link>
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
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
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
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
      </li>
      <li className="border-b-2 border-zinc-300 w-full">
        <Link
          onClick={handleClose}
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
      </li>

      <div className="flex flex-col my-4">
        <button
          type="button"
          className="bg-transparent text-indigo-700 px-8 py-3 mb-4"
        >
          Sign In
        </button>
        <button type="button" className="px-8 py-3 bg-indigo-700">
          Sign Up
        </button>
      </div>
    </ul>
  );
}

import { NavbarLinksAbout } from "./NavbarLinksAbout";
import { NavbarLinksHome } from "./NavbarLinksHome";
import { NavbarLinksPlatforms } from "./NavbarLinksPlatforms";
import { NavbarLinksPricing } from "./NavbarLinksPricing";
import { NavbarLinksSupport } from "./NavbarLinksSupport";

/**
 * create links found in leftside of navbar when expanded
 */
export function NavbarLinks(): JSX.Element {
  return (
    <div className="flex items-center">
      <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Lorem ipsum</h1>
      <ul className="hidden md:flex">
        <li>{NavbarLinksHome()}</li>
        <li>{NavbarLinksAbout()}</li>
        <li>{NavbarLinksSupport()}</li>
        <li>{NavbarLinksPlatforms()}</li>
        <li>{NavbarLinksPricing()}</li>
      </ul>
    </div>
  );
}

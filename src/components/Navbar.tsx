import { Link } from "react-scroll";
import useNavbar from "../hooks/useNavbar";
import { navLinks } from "../constants";
import { useRef, useState } from "react";
import Button from "./ui/Button";
import useClickOutside from "../hooks/useClickOutside";

function Navbar() {
  const [active, setActive] = useState<string>("");
  const { isOpen, toggleMenu, closeMenu, isScrolled } = useNavbar();
  const navlinksToggle = useRef<HTMLDivElement>(null);
  const buttonToggleRef = useRef<HTMLButtonElement>(null);

  useClickOutside(navlinksToggle, closeMenu, buttonToggleRef);
  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="top"
          smooth={true}
          duration={600}
          offset={-80}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => {
            setActive("");
          }}
        >
          {/* <Image
            imageUrl="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          /> */}
          <span className="text-xl font-semibold">Maryam</span>
        </Link>

        {/* Toggle Button */}
        <Button
          ref={buttonToggleRef}
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-base md:hidden"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </Button>

        {/* Menu */}
        <div
          ref={navlinksToggle}
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-md bg-tertiary md:flex-row md:space-x-8 md:mt-0 md:bg-transparent">
            {navLinks.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className={`block py-2 px-3 cursor-pointer hover:text-fg-brand ${
                    active === title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    toggleMenu();
                    setActive(title);
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

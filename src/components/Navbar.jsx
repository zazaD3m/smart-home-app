import images from "../assets/images";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="mx-auto p-4 bg-amber-400">
      <div className="container mx-auto flex items-center justify-between">
        <a
          className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity"
          href=""
          aria-label="Go to homepage"
        >
          <img
            className="w-48 md:w-64 lg:w-72"
            src={images.logo}
            alt="Home Smart Logo"
          />
        </a>
        <button
          onClick={() => setMobileNav(!mobileNav)}
          id="menu"
          className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          role="menubar"
          className={`${
            mobileNav ? "flex" : "hidden"
          } flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center p-6 text-lg items-center
          lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full z-50
          `}
        >
          <a
            role="menuitem"
            className="py-1 px-6 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 hover:text-neutral-600 transition-colors"
            href="/"
          >
            Home
          </a>
          <a
            role="menuitem"
            className="py-1 px-6 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400  hover:text-neutral-600 transition-colors lg:mr-auto"
            href="/"
          >
            Contact
          </a>
          <a
            role="menuitem"
            className="py-1 px-6 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400  hover:text-neutral-600 transition-colors"
            href="/"
          >
            Login
          </a>
          <a
            role="menuitem"
            className="py-2 px-6 bg-teal-900 text-white shadow-xl hover:shadow-none transition-shadow  focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400"
            href="/"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

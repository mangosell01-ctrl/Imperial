import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import Cart from "./cart";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-yellow-50 shadow-md border-b border-yellow-100">

      {/* MAIN CONTAINER */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-2xl font-bold text-yellow-400">
            Imperial Mango
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gray-700">

          <li className="hover:text-yellow-600 cursor-pointer transition
          text-sm sm:text-base lg:text-lg font-medium">
            Home
          </li>

          <li className="hover:text-yellow-600 cursor-pointer transition
          text-sm sm:text-base lg:text-lg font-medium">
            About
          </li>

          <li className="hover:text-yellow-600 cursor-pointer transition
          text-sm sm:text-base lg:text-lg font-medium">
            Contact
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CART */}
          <Cart className="hidden md:block" />

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-yellow-700"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-yellow-100 px-6 py-4">

          <ul className="flex flex-col gap-4 font-bold text-gray-900">

            <li className="hover:text-yellow-600 cursor-pointer transition
            text-base font-medium">
              Home
            </li>

            <li className="hover:text-yellow-600 cursor-pointer transition
            text-base font-medium">
              About
            </li>

            <li className="hover:text-yellow-600 cursor-pointer transition
            text-base font-medium">
              Contact
            </li>

          </ul>

          {/* MOBILE CART */}
          <div className="mt-4">
            <Cart />
          </div>

        </div>
      )}

    </nav>
  );
};

export default NavBar;
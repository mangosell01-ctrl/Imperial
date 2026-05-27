import React from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 border-t border-yellow-100 mt-10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 
          Mobile:
          - Brand full width on top
          - Quick Links & Contact side by side

          Desktop:
          - 3 columns
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start mb-4">
              <Logo />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">
              We deliver fresh, juicy and premium Pakistani mangoes directly
              from farms to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-yellow-600 cursor-pointer transition duration-300">
                Home
              </li>

              <li className="hover:text-yellow-600 cursor-pointer transition duration-300">
                About
              </li>

              <li className="hover:text-yellow-600 cursor-pointer transition duration-300">
                Contact
              </li>

              <li className="hover:text-yellow-600 cursor-pointer transition duration-300">
                Mango Varieties
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-gray-600 text-sm">
              <p className="break-all">
                📞 +92 337 1483106
              </p>

              <p className="break-all">
                📧 mangosell.01@gmail.com
              </p>

              <p>
                📍 Pakistan
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Imperial Mango. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
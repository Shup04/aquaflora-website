import { Link } from "gatsby"
import React from "react"

import logo from "../images/3D-liquid-abstract-5.webp"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gray-900 p-10 mt-10 rounded-xl text-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-bold mt-5">
                &copy; {new Date().getFullYear()} AquaFlora. All Rights Reserved.
              </p>
              <p className="mt-2">
                Created by <a href="https://github.com/Shup04" target="_blank" rel="noopener noreferrer" className="text-blue-400">BS</a>
              </p>
              <a href="https://github.com/Shup04" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5 mt-1" src="/img/Github-Logo.png" alt="GitHub" />
              </a>
            </div>
            <div className="flex justify-end items-center lg:justify-end">
              <ul className="text-lg font-medium space-y-2 lg:space-y-0 lg:space-x-4">
                <li>
                  <Link to="/" className="hover:text-white">Home</Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-white">Features</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


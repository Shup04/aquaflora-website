import { Link } from "gatsby"
import React from "react"

import logo from "../images/3D-liquid-abstract-5.webp"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-darkH1 p-10 mt-10 rounded-xl text-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
<<<<<<< HEAD

              {/* Logo can be added here */}
              <p className="text-lg  font-bold mt-5">
                &copy; {new Date().getFullYear()} AquaFlora. All Rights Reserved.
              </p>
              <p className="mt-2">
                Created by <a href="https://github.com/Shup04" target="_blank" rel="noopener noreferrer" className="text-blue-400">BS</a>
              </p>
              <a href="https://github.com/Shup04" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5 mt-1" src="/img/Github-Logo.png" alt="GitHub" />
              </a>

=======
              {/* <img className="max-h-28 max-w-xs" src={logo} alt="Holo"></img> */}
              <p className="text-primaryText opacity-70 text-sm mt-5 ">
                
              </p>
              <p className="text-white text-lg font-bold mt-20">
                <span className="text-primaryText font-montserrat font-semibold mt-20">
                  &copy; {new Date().getFullYear()}. All Rights Reserved.
                </span>
              </p>
              <div className="text-primaryText font-bold block-inline">
                <p>
                  <a className="text-primaryText font-bold block-inline" href="/">
                    Aquaflora
                  </a>

                  <a
                    className="text-primaryText font-semibold ml-1"
                    target="_blank"
                    href="https://github.com/Shup04"
                  >
                    By BS
                  </a>
                  <a
                    href="https://github.com/Shup04"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5 mt-1"
                      src="/img/Github-Logo.png"
                      alt="GitHub"
                    ></img>
                  </a>
                </p>
              </div>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
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


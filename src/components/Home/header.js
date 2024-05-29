import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/tankscreenPortrait.png"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-6xl mx-auto lg:px-6 md:px-3">
        <div className="my-5 mx-auto max-w-6xl px-4  sm:px-6  lg:mt-0 lg:px-0 flex gap-10 lg:flex-justify lg:flex justify-between flex-row lg:flex-row flex-col-reverse">
          <div className="w-auto sm:mt-10 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-4xl font-semibold opacity-70">
              WELCOME TO AQUAFLORA
            </h1>
            <h2 className="text-gradient bg-gradient-to-r from-pink to-purple text-6xl font-bold">
              Hi there!
            </h2>

            <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 opacity-70">
              Aquaflora is an aquarium managment mobile application that helps fish keepers manage notifications, water parameters, and more.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/features"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                >
                  See Features
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Get To Know Me
                </a>
              </div>
            </div>
          </div>

          <div className="justify-self-end lg:inset-y-0 lg:right-0 lg:w-1/3 my-0 flex justify-center lg:flex hidden lg:block">
            <img
              className="rounded-xl w-full lg:h-full h-auto object-cover"
              src={hero}
              alt=""
            ></img>
          </div>


        </div>
      </div>
    </Fade>
  )
}

export default Header

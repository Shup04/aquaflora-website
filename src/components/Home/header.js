import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/AppImages/tanksScreen.png"

const Header = () => {
  return (
    <Fade duration={2200}>
<<<<<<< HEAD
      <div className="max-w-6xl mx-auto">
        <div className="sm:mt-0 max-w-6xl mx-auto lg:px-6 md:px-3">
          <div className="mb-25 justify-between mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
=======
      <div className="max-w-6xl mx-auto lg:px-6 md:px-3 lg:py-0 py-0 sm:py-50">
        <div className="my-5 mx-auto max-w-6xl px-4  sm:px-6  lg:mt-0 lg:px-0 flex gap-10 lg:flex-justify lg:flex justify-between flex-row lg:flex-row flex-col-reverse">
          <div className="w-2/3 sm:mt-10 text-center lg:text-left flex flex-col justify-center">
            
            <h1 className="text-primaryText text-4xl font-semibold">
              Welcome to Aquaflora
            </h1>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd

            <div className="w-2/3 sm:text-center lg:text-left flex flex-col justify-center">

<<<<<<< HEAD
              <div>
                <h2 style={{marginBottom:0}} className="text-primaryText text-4xl font-semibold ">
                  Welcome to Aquaflora
                </h2>
                <h3 style={{lineHeight:1.2}} className="text-primaryText text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
                Aquarium Managment Mobile App
                </h3>
                <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  That helps fish keepers manage notifications, water parameters, and more.
                </p>
              </div>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="/features"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-primaryText border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                  >
                    Features
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
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-primaryText hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                  >
                    Get to know me
                  </a>
                </div>
=======

            <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            That helps fish keepers manage notifications, water parameters, and more.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/features"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-primaryText border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                >
                  Features
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
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-primaryText hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Get to know me
                </a>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 lg:w-1/3 my-0 flex justify-center lg:flex hidden lg-block">
              <img
                className="rounded-xl w-full lg:h-full h-auto object-cover"
                src={hero}
                alt=""
              ></img>
            </div>


          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header

import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
//import { EmailForm } from "../Atoms/emailForm.js"
import MailerLiteForm from "../Atoms/MailerLiteForm"
import hero from "../../images/AppImages/tanksScreen.png"

const Header = () => {
  useEffect(() => {
    if (!document.querySelector("script[data-mailerlite]")) {
      const script = document.createElement("script")
      script.src = "https://assets.mailerlite.com/js/universal.js"
      script.async = true
      script.setAttribute("data-mailerlite", "true")
      script.onload = () => {
        if (window.ml) {
          window.ml("account", "771019")
        }
      }
      document.body.appendChild(script)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto">
        <div className="sm:mt-0 max-w-7xl mx-auto lg:px-6 md:px-3">
          <div className="mb-25 justify-between items-center mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-0 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col-reverse sm:flex-row gap-3 lg:flex-justify">
            <div className="xl:w-2/3 sm:w-3/5 w-full text-center sm:text-left flex flex-col justify-center">
              <div className="w-full">
                <h2
                  style={{ marginBottom: 0 }}
                  className="text-primaryText md:text-3xl text-2xl font-semibold"
                >
                  Welcome to Aquaflora
                </h2>
                <h3
                  style={{ lineHeight: 1.2 }}
                  className="text-primaryText lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-gradient bg-gradient-to-r from-pink to-purple"
                >
                  Aquarium Management Mobile App
                </h3>
                <p className="mt-3 font-montserrat text-base text-primaryText sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  That helps fish keepers manage notifications, water
                  parameters, and more.
                </p>
              </div>

              <MailerLiteForm />

              <div className="mt-5 sm:mt-8 sm:flex lg:w-1/2 w-full justify-center sm:justify-start">
                <div className="rounded-md w-full">
                  <a
                    href="/features"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-primaryText border border-purple hover:bg-transparent md:text-lg md:px-10"
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
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full">
                  <a
                    href="/about"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-primaryText hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:inset-y-0 lg:right-0 xl:w-1/3 sm:w-2/5 my-0 flex justify-center lg:flex">
              <img
                className="rounded-xl sm:w-full w-1/2 lg:h-full h-auto object-contain"
                src={hero}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header

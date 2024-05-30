import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/fishPortrait.png"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"

const FeatureSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
{/* 
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Performance</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade>
*/}
      <div className="max-w-6xl mx-auto lg:px-6 md:px-3">
        <div className="justify-between mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/3 my-0 flex justify-center lg:flex hidden lg-block">
            <img
              className="rounded-xl w-full lg:h-full h-auto object-cover"
              src={HeroImage}
              alt=""
            ></img>
          </div>

          <div className="w-auto sm:text-center lg:text-right flex flex-col justify-center">
            <h2 style={{marginBottom:0}} className="text-black text-4xl font-semibold opacity-70">EFFICIENCY</h2>
            <h3 style={{lineHeight:1.2}} className=" text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Amplify your time
            </h3>

            <p className="text-black font-normal mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0 opacity-70">
              One of the main goals is to help fishkeepers save time on the boring stuff, by supplying a 'hub' for water parameters, reminders, tank stocking, & more.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="/contact/"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div style={{marginTop:100, marginBottom:100}} className="w-full lg:w-4/5 mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          PARAMETER TRACKING
        </h2>
        <h3 style={{lineHeight:1.2}} className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Graph your water parameters
        </h3>
        <p className="text-black font-normal opacity-70 mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          The current water parameter chart allows for adding nitrate, nitrite, 
          ammonia and pH levels to a graph for future reference. This allows 
          you to check back to see if there was a recent parameter spike if you are 
          experiencing issues with your tank. You will automatically be notified 
          if any of these parameters are out of the safe range for your fish.
        </p>
      </div>

      <div className="w-4/5 mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          FISH LIST
        </h2>
        <h3 style={{lineHeight:1.2}} className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Data on 600+ species
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
        There is an integrated fish list section that displays basic 
        information, along with a short description and image of 
        over 600 commonly kept freshwater species. Every one of these 
        fish can easily be added to any one of your current tanks, 
        where the stocking will be automatically calculated.
        </p>
        <div style={{marginBottom:100}} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>


      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">React Native 18+</p>
                <p className="text-black opacity-50 text-sm">Create powerful mobile apps.</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Expo SDK 45+</p>
                <p className="text-black opacity-50 text-sm">Streamlined development & deployment.</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Firebase</p>
                <p className="text-black opacity-50 text-sm">
                  Seamless authentication, storage, & more.
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
            Built to be smooth and reliable.
            </h2>
            <p className="mt-10 text-white opacity-70">
            Aquaflora leverages the best tools in order to provide as smooth and reliable of an 
            experience as possible. The use of React native, paired with expo, firebase, and many other technologies
            allows for an experience that can only get better and better as feedback is recieved. The usage of firebase means
            the user doesnt have to worry about data security, as all authentication is handles on their servers, not within the app.
            </p>
          </div>
        </div>
      </Fade>


{/* 
      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">v1.0.0</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Released</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fork</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              PR's welcome
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Stars</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Give support
            </h4>
          </div>
        </div>
      </Fade>
      
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection

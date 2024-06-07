import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/AppImages/tankScreen1.png"
import fishScreen from "../../images/AppImages/fishScreen.png"


const FeatureSection = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" sm:mt-0 max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="mb-25 justify-between mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col sm:flex-row gap-3 lg:flex-justify">
          
          <div className="lg:inset-y-0 lg:right-0 xl:w-1/3 w-2/5 my-0 flex justify-center lg:flex">
            <img
              className="rounded-xl w-full lg:h-full h-auto object-contain"
              src={HeroImage}
              alt=""
            ></img>
          </div>

          <div className="xl:w-2/3 sm:w-3/5 w-full sm:text-center sm:text-right flex flex-col justify-center">
            <div className="mb-10">
              <h2 style={{marginBottom:0}} className="text-primaryText md:text-3xl text-2xl font-semibold ">Effortless Organization</h2>
              <h3 style={{lineHeight:1.2}} className="text-primaryText lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
                Tank Profiles
              </h3>
              <p className="text-primaryText font-montserrat font-normal mt-3 text-xxs md:text-sm lg:text-lg">
                Say goodbye to scattered notes and spreadsheets. With AquaFlora, you can effortlessly manage your tanks' stocking, maintenance, parameters, all in one place, saving you time and effort so you can focus more on enjoying your hobby.
              </p>
            </div>

            <div className="">
            <h2 style={{marginBottom:0}} className="text-primaryText md:text-3xl text-2xl font-semibold ">Peace of Mind</h2>
              <h3 style={{lineHeight:1.2}} className="text-primaryText lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
                Automatic Alerts
              </h3>
              <p className="text-primaryText font-montserrat font-normal mt-3 text-xxs md:text-sm lg:text-lg">
              Simplify your tank maintenance routines with detailed profiles and reminders. AquaFlora helps you keep track of essential tasks, ensuring nothing is overlooked.
              </p>
            </div>
            

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="/contact/"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-primaryText border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Contact
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className=" sm:mt-0 max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="mb-25 justify-between mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col sm:flex-row gap-3 lg:flex-justify">
      
          <div className="xl:w-2/3 sm:w-3/5 w-full sm:text-center md:text-left flex flex-col justify-center">
            <div className="lg:inset-y-0 lg:right-0 xl:w-1/3 w-full my-0 flex justify-center lg:flex sm:hidden block">
              <img
                className="rounded-xl w-3/5 lg:h-full h-full sm:hidden block object-contain"
                src={fishScreen}
                alt=""
              ></img>
            </div>
            <div className="mb-10">
              <h2 className="text-primaryText md:text-3xl text-2xl font-semibold ">
                Parameter Tracking
              </h2>
              <h3 style={{lineHeight:1.2}} className="text-primaryText lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
                Graph Your Parameters
              </h3>
              <p className="text-primaryText font-montserrat font-normal mt-3 text-xxs md:text-sm lg:text-lg">
                The current water parameter chart allows for adding nitrate, nitrite, 
                ammonia and pH levels to a graph for future reference. This allows 
                you to check back to see if there was a recent parameter spike if you are 
                experiencing issues with your tank. You will automatically be notified 
                if any of these parameters are out of the safe range for your fish.
              </p>
            </div>

            <div className="">
              <h2 className="text-primaryText md:text-3xl text-2xl font-semibold ">
                Fish List
              </h2>
              <h3 style={{lineHeight:1.2}} className="text-primaryText lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
                Data on 600+ species
              </h3>
              <p className="text-primaryText font-montserrat font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
                There is an integrated fish list section that displays basic 
                information, along with a short description and image of 
                over 600 commonly kept freshwater species. Every one of these 
                fish can easily be added to any one of your current tanks, 
                where the stocking will be automatically calculated.
              </p>
            </div>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/features"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-primaryText border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Features
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 xl:w-1/3 sm:w-2/5 my-0 flex justify-center lg:flex sm:block hidden">
            <img
              className="rounded-xl w-full lg:h-full h-full object-contain"
              src={fishScreen}
              alt=""
            ></img>
          </div>

        </div>
      </div>
          
        

{/* 

      <Fade bottom cascade>
        <div className="mt-10 flex flex-col justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-auto bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-primaryText font-semibold font-montserrat text-4xl">
            <span className="text-primaryText font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-primaryText font-montserrat text-2xl">React Native 18+</p>
                <p className="text-primaryText font-montserrat opacity-50 text-sm">Create powerful mobile apps.</p>
                <p className="text-primaryText font-montserrat text-2xl">React Native 18+</p>
                <p className="text-primaryText font-montserrat opacity-50 text-sm">Create powerful mobile apps.</p>
              </div>
              <div className="mt-5">
                <p className="text-primaryText font-montserrat text-2xl">Expo SDK 45+</p>
                <p className="text-primaryText font-montserrat opacity-50 text-sm">Streamlined development & deployment.</p>
                <p className="text-primaryText font-montserrat text-2xl">Expo SDK 45+</p>
                <p className="text-primaryText font-montserrat opacity-50 text-sm">Streamlined development & deployment.</p>
              </div>
              <div className="mt-5">
                <p className="text-primaryText font-montserrat text-2xl">Firebase</p>
                <p className="text-primaryText font-montserrat opacity-50 text-sm">
                <p className="text-primaryText font-montserrat text-2xl">Firebase</p>
                <p className="text-primaryText font-montserrat opacity-50 text-sm">
                  Seamless authentication, storage, & more.
                </p>
              </div>
            </div>
          </div>

          <div className="w-auto bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
            Built to be smooth and reliable.
            </h2>
            <p className="mt-10 font-montserrat text-white ">
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
            <h3 className="text-primaryText text-2xl">v1.0.0</h3>
<<<<<<< HEAD
            <h4 className="mt-10 text-primaryText  text-xl">Released</h4>
=======
            <h4 className="mt-10 text-primaryText opacity-70 text-xl">Released</h4>
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fork</h3>
            <h4 className="mt-10 text-white  text-xl">
              PR's welcome
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Stars</h3>
            <h4 className="mt-10 text-white  text-xl">
              Give support
            </h4>
          </div>
        </div>
      </Fade>
      
      <div className="mt-10 px-8">
        <h2 className="text-primaryText text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
        <h2 className="text-primaryText text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-primaryText mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        <h3 className="text-primaryText mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
<<<<<<< HEAD
        <p className="text-primaryText  font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
=======
        <p className="text-primaryText opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
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

import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/holographic-background-1.webp"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto pt-15">
        {/* 
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img src={Image3}></img>
        </div>
        */}
        <div style={{marginTop: 150}} className="mt-10 px-8">
          <h1 className="font-bold text-xl text-primaryText text-gradient bg-gradient-to-r from-pink to-purple">
            What is Aquaflora?
          </h1>
<<<<<<< HEAD
          <h2 className="text-primaryText text-3xl font-semibold leading-snug sm:text-3xl lg:text-6xl ">
=======
          <h2 className="text-primaryText text-3xl font-semibold leading-snug sm:text-3xl lg:text-6xl opacity-70">
>>>>>>> c16f1a462ef8f09de6cc206e3c93a645e7b03bcd
            The ultimate aquarium managment companion app.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader

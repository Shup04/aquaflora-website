import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div style={{marginBottom: 200}} className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
        <h3 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          About Aquaflora
        </h3>

        <p className="text-primaryText font-montserrat font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          The goal was initially to create a mobile app for managing tank reminders, 
          but it has since grown into a larger project. Now it is able to track water parameters as 
          you test, aswell as a list of more than 600 commonly kept aquarium fish species. There is alot 
          of repeat questions in this hobby, so there is a custom made AI chatbot to help answer 
          generic questions.

          Once the app is released, I will continue to work on adding more features, increasing user 
          experience, and making current features more reliable and robust.
        </p>
      </div>
      <div className="mt-10 px-8">
        <h3 style={{lineHeight:1.2}} className="text-primaryText text-3xl lg:text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          About The Developer
        </h3>

        <p className="text-primaryText font-montserrat font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Most importantly, I am a hobbiest aquarist and have been for over 5 years. I 
          have kept a a variety of tanks with animals ranging from shrimp, snails, and fish, to frogs. 
          I am 20 years old, taking my bachelor in software engineering, and have been programming 
          for a long time. I was getting frustrated with the lack of good apps for managing my tanks, and 
          frequently forgetting maintenance tasks. Because of this, I decided to make my own app to 
          take care of that. I hope this app can help as many people with the same issue as possible.
        </p>
      </div>
    </div>
  )
}

export default WorkPage

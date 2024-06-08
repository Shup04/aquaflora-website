import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"
import Seo from "../components/seo"

import image from "../images/holographic-background.webp"

const Contact = () => {
  return (
    <div className="bg-darkBG min-h-screen w-full flex flex-col">
      <Layout>
        <Seo
          title="Contact - Aquaflora"
          description="Aquaflora is an aquarium managment mobile app, that helps manage maintenance reminders, water parameters, tank stocking, and much more!"
        ></Seo>

        <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
          <Fade duration={1200}>
            <div className="bg-dp  p-10 rounded-xl w-3/4 m-5 w-auto">
              <h1 className="text-3xl text-white">CONTACT AQUAFLORA</h1>
              <h2 className=" text-primaryText text-gradient bg-gradient-to-r from-pink to-purple text-4xl font-bold mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
                Contact Me
              </h2>
              <p className="text-lg mt-2  w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
                Feel free to ask any questions or share your thoughts. 
                I will try to reply as soon as possible. I would love to hear from you.
              </p>

              <form className="mt-5" name="contact" method="POST" netlify>
                <div className="flex xxs:flex-col sm:flex-row">
                  <div className="sm:mr-5 xxs:mr-0">
                    <label>
                      <Input
                        placeholder="Your Name"
                        type="text"
                        name="name"
                      ></Input>
                    </label>
                  </div>
                  <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                    <label>
                      <Input
                        placeholder="* Your Email"
                        type="email"
                        name="email"
                      ></Input>
                    </label>
                  </div>
                </div>

                <div className="flex mt-5 xxs:flex-col sm:flex-row">
                  <div className="sm:mr-5 xxs:mr-0">
                    <label>
                      <Input
                        placeholder="Your Company"
                        type="company"
                        name="company"
                      ></Input>
                    </label>
                  </div>
                  <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                    <label>
                      <Input
                        placeholder="Your Phone"
                        type="phone"
                        name="phone"
                      ></Input>
                    </label>
                  </div>
                </div>
                
                <label>
                  <textarea
                    className="mt-5 w-full bg-bg bg-opacity-20 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    rows="5"
                    placeholder="How can we help you?"
                    type="text"
                    name="Message"
                  ></textarea>
                </label>
                <div>
                  <label>
                    <Button
                      type="submit"
                      title="Send Message"
                      colorClass="bg-gradient-to-r from-pink to-purple font-montserrat"
                      marginClass="mt-5"
                    ></Button>
                  </label>
                </div>
              </form>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
              <img
                className="object-cover h-full w-full"
                src={image}
                alt="HeroImage"
              ></img>
            </div>
          </Fade>
        </div>
      </Layout>
    </div>
  )
}

export default Contact

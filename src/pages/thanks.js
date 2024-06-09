import React from "react"
import AboutPage from "../components/about/aboutPage"
import Button from "../components/Atoms/button"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <div className="bg-darkBG min-h-screen w-full flex flex-col">
      <Layout>
        <Seo
          title="Thanks - Aquaflora"
          description="Aquaflora is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
        ></Seo>
        <div className="404-p">
        <h3 style={{lineHeight:1.2}} className="text-primaryText text-2xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
          Submission Recieved!
        </h3>
          <p className="text-white font-montserrat">Thank-you for supporting Aquaflora</p>
          <a href="/">
        <Button
          title="Return Home"
          colorClass="text-white bg-gradient-to-r from-pink to-purple"
          marginClass="mt-5"
        ></Button></a>
      </div>
      </Layout>
    </div>
  )
}

export default About

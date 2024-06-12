import React from "react"
import AboutPage from "../components/about/aboutPage"
import Button from "../components/Atoms/button"

import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const Privacy = () => {
  return (
    <div className="bg-darkBG min-h-screen w-full flex flex-col">
      <Layout>
        <Seo
          title="Thanks - Aquaflora"
          description="Aquaflora is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
        ></Seo>
        <div className="404-p max-w-6xl gap-10">

        <h3 style={{lineHeight:1.2}} className="text-primaryText text-2xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
          AquaFlora Privacy Policy
        </h3>
        <p className="text-white font-montserrat">
          Welcome to AquaFlora, a mobile application designed to assist hobbyist aquarists with managing their 
          aquariums. This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you use our mobile application ("App"). Please read this privacy policy carefully. 
          If you do not agree with the terms of this privacy policy, please do not access the App.
        </p>

        <h3 style={{lineHeight:1.2}} className="text-primaryText text-2xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
            Camera Access
        </h3>
        <p className="text-white font-montserrat">
        Our App requests access to your device’s camera solely for the purpose of allowing you to upload images of your fish tank. This access is entirely optional and only used when you choose to upload an image. We do not store or share any images taken with your camera unless you explicitly upload them to our servers.
        </p>

        <h3 style={{lineHeight:1.2}} className="text-primaryText text-2xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
        Use of Your Information
        </h3>
        <p className="text-white font-montserrat">
        The images you upload are used to personalize your experience within the App. We do not share your images with third parties.
        </p>

        <h3 style={{lineHeight:1.2}} className="text-primaryText text-2xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
        Security of Your Information
        </h3>
        <p className="text-white font-montserrat">
        We take reasonable steps to protect the images you upload, but please note that no security measures are perfect.
        </p>

        <h3 style={{lineHeight:1.2}} className="text-primaryText text-2xl lg:text-4xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
        Changes to This Privacy Policy
        </h3>
        <p className="text-white font-montserrat">
        We may update this policy occasionally. Changes will be posted on this page with an updated effective date.
        </p>

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

export default Privacy
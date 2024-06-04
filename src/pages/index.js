import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="bg-darkBG min-h-screen w-full flex flex-col">
    <Layout>
      <Seo
        title="AquaFlora - Home"
        description="Aquaflora is an aquarium managment mobile app, that helps manage maintenance reminders, water parameters, tank stocking, and much more!"
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      {/* <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial> */}
    </Layout>
  </div>
)

export default IndexPage

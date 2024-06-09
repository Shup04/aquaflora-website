import * as React from "react"
import Button from "../components/Atoms/button"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <div className="bg-darkBG min-h-screen w-full flex flex-col">
  <Layout>
    <Seo title="404: Not found"
         description="404: Not found"
    />
    <div className="404-p">
    <h1 className="text-white">404: Not Found</h1>
      <p className="text-white">You just hit a route that doesn&#39;t exist...</p>
      <a href="/"><Button
                title="Return Home"
                colorClass="text-white bg-gradient-to-r from-pink to-purple"
                marginClass="mt-5"
              ></Button></a>
      </div>
  </Layout>
  </div>
)

export default NotFoundPage

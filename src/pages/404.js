import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Error = () => {
  return (
    <Layout>
      <SEO title="Error 404" />
      <div>
        <h3>Oops! Page not found</h3>
        <h2>sorry, but the page you requested was not found</h2>
      </div>
    </Layout>
  )
}

export default Error

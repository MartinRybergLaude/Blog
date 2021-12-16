import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} tag="404">
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>This page doesn't exist!</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

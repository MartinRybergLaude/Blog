import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

function NotFoundPage() {
  return (
    <Layout title="404: Not Found" tag="404">
      <Seo title="404: Not Found" />
      <p>This page doesn't exist!</p>
    </Layout>
  )
}

export default NotFoundPage

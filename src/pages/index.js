import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import Title from "../components/atoms/title"
import Image from "../components/image"
import SEO from "../layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hi people</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

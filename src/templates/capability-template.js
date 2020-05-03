import React from "react"
import { graphql } from "gatsby"
import Homepage from "../pages/index"
import SEO from "../layout/seo"
import CapabilityButtonModal from "../components/molecules/capability-button/modal"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const [modalIsOpen, setIsOpen] = React.useState(true)

  function closeModal() {
    window.location.href = "/"
  }

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <CapabilityButtonModal
        title={frontmatter.title}
        html={html}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

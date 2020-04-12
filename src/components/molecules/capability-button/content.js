import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ModalContent = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { path: { eq: "/ultraljud-hjarta" } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
        }
      }
    }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <h3>{frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default ModalContent

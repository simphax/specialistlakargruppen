import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ModalLink from "../../molecules/modal-link"

const PricesLink = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1
        filter: {frontmatter: {path: {eq: "/privatpriser"}}}
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              order
              shortTitle
              title
              date(formatString: "MMMM DD, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges // data.markdownRemark holds your post data

  return (
    <>
      {posts.map(({node}) => (
        <ModalLink
          key={node.frontmatter.path}
          title={node.frontmatter.shortTitle}
          fullTitle={node.frontmatter.title}
          path={node.frontmatter.path}
          html={node.html}
        />
      ))}
    </>
  )
}

export default PricesLink

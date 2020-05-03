import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CapabilityButton from "../../molecules/capability-button"

const CapabilityButtons = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 2000
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
      {posts.map(post => (
        <CapabilityButton
          key={post.node.frontmatter.path}
          title={post.node.frontmatter.shortTitle}
          path={post.node.frontmatter.path}
          html={post.node.html}
        />
      ))}
    </>
  )
}

export default CapabilityButtons

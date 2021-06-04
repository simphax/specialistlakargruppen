import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CapabilityButton from "../../molecules/capability-button"

const CapabilityButtons = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 2000
        filter: {frontmatter: {type: {eq: "service"}}}
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
        <CapabilityButton
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

export default CapabilityButtons

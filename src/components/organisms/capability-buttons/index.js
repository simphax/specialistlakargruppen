import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CapabilityButtons = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        edges {
          node {
            frontmatter {
              path
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
        <li key={post.node.frontmatter.path}>
          <span>{post.node.frontmatter.date}</span>
          {post.node.frontmatter.path}
          {post.node.frontmatter.title}
          <p>{post.node.excerpt}</p>
        </li>
      ))}
    </>
  )
}

export default CapabilityButtons

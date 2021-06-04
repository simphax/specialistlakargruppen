import React from "react"
import PropTypes from "prop-types"
import Modal from "../modal"
import { useStaticQuery, graphql } from "gatsby"

const CookieConsentInfo = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1
        filter: {frontmatter: {type: {eq: "cookie-policy"}}}
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
    }`)
    const content = data.allMarkdownRemark.edges[0];

    const [modalIsOpen, setIsOpen] = React.useState(false)
    function openModal(e) {
        e.preventDefault()
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            Vi använder cookies för att erbjuda vissa funktioner på sidan, samt för att analysera vår trafik. Läs mer i vår
            <a href={content.node.frontmatter.path} onClick={openModal}>
                &nbsp;cookie policy
            </a>.
            <Modal
                title={content.node.frontmatter.title}
                html={content.node.html}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </>
    )
}
export default CookieConsentInfo

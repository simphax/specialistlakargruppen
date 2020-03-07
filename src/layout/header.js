import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import BackgroundImage from "gatsby-background-image"

import styles from "./header.module.css";


const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "bg-big-heart-baloon.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={styles.background}
            fluid={imageData}
            backgroundColor={`#4E7AAE`}
          >
            <div className={styles.content}>
              <span className={styles.preSiteTitle}>Välkommen till</span>
              <h1 className={styles.siteTitle}>
                Specialistläkargruppen
                <br />
                Uppsala
              </h1>
            </div>
          </BackgroundImage>
        )
      }}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

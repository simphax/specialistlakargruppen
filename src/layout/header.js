import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import SiteWidth from "./site-width"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <SiteWidth>
      <Container fluid="true">
        <div className={styles.content}>
          <span className={styles.preSiteTitle}>Välkommen till</span>
          <h1 className={styles.siteTitle}>
            Specialistläkargruppen
            <span className={styles.siteTitleUppsala}>Uppsala</span>
          </h1>
        </div>
      </Container>
    </SiteWidth>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

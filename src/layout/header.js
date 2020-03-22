import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Container fluid="xl">
      <div className={styles.content}>
        <span className={styles.preSiteTitle}>Välkommen till</span>
        <h1 className={styles.siteTitle}>
          Specialistläkargruppen
          <span className={styles.siteTitleUppsala}>Uppsala</span>
        </h1>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

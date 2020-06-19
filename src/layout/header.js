import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import SiteWidth from "./site-width"

import Helmet from "react-helmet"

import styles from "./header.module.css"


const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Helmet>
      <meta
        name="google-translate-customization"
        content="a970ccd2ee22213f-7f6ec6b01ddf13d8-g1480cae39c7668bb-19"
      ></meta>
      <script type="text/javascript">
        {`
          function googleTranslateElementInit() {
            setTimeout(function() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: "sv",
                  layout:
                    google.translate.TranslateElement.InlineLayout.SIMPLE,
                  gaTrack: true,
                  gaId: "UA-44043247-1",
                },
                "google_translate_element"
              )
            }, 500);
          }
          `}
      </script>
    </Helmet>
    <SiteWidth>
      <Container fluid="true">
        <div
          id="google_translate_element"
          className={styles.translateDropdown}
        ></div>
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></script>
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

import React from "react"
import Container from "react-bootstrap/Container"
import SiteWidth from "./site-width"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Obfuscate from "react-obfuscate"
import styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <SiteWidth>
      <Container fluid="true">
        <div className={styles.contentPadding}>
          <Row>
            <Col>
              <h2 className={styles.title}>Specialistläkargruppen</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p className={styles.leftContent}>
                Samariterhemmet, Dragarbrunnsgatan 70, Uppsala
                <br />
                Telefontid mån–tor 9–11
                <br />
                <Obfuscate tel="018 611 72 60" />
                <br />
                <Obfuscate email="info@specialistläkargruppen.se" />
                <br />
                Landstingsavtal, frikort gäller
              </p>
            </Col>
            <Col lg={6}>
              <div className="d-block d-lg-none">&nbsp;</div>
              Specialistläkargruppen drivs i samarbete med Uppsala och
              Stockholms landsting. Till oss kan du ringa själv och beställa tid
              eller få remiss från din läkare. Vi finns på Samariterhemmets
              Vårdcentrum plan 1 med ingång via huvudingången, hiss finns. Vi
              har avtal med landstinget och taxan är 260 kr oavsett om du kommer
              på remiss eller ej. Frikort gäller.
            </Col>
          </Row>
        </div>
      </Container>
    </SiteWidth>
  </footer>
)

export default Footer

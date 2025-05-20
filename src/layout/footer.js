import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import SiteWidth from "./site-width"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Obfuscate from "react-obfuscate"
import * as styles from "./footer.module.css"
import Context from "../context"

const Footer = () => {
  const [context, setContext] = useContext(Context)

  return (
    <>
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
                    Telefontid mån–tor 9–11:30
                    <br />
                    <Obfuscate tel="018 611 72 60" />
                    <br />
                    <Obfuscate email="info@specialistlakargruppen.se" />
                    <br />
                    <br />
                    ★ 4.7 av 5 - <a href="https://www.varden.se/vardgivare/39412-internmedicin-specialistlakargruppen-hjartdiagnostik-uppsala" target="_blank">Besök oss på Vården.se</a>
                  </p>
                </Col>
                <Col lg={6}>
                  <div className="d-block d-lg-none">&nbsp;</div>
                  Specialistläkargruppen drivs i samarbete med Uppsala och
                  Stockholms landsting. Till oss kan du ringa själv och beställa
                  tid eller få remiss från din läkare. Vi finns på
                  Samariterhemmets Vårdcentrum plan 1 med ingång via
                  huvudingången, hiss finns.
                </Col>
              </Row>
            </div>
          </Container>
        </SiteWidth>
      </footer>
      <div className={styles.cookieLink}>
        <SiteWidth>
          <div className={styles.contentPadding}>
            <div className="d-block d-lg-none">&nbsp;</div>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                setContext({
                  ...context,
                  openCookieBar: true,
                })
              }}
            >
              Cookieinställningar
            </a>
          </div>
        </SiteWidth>
      </div>
    </>
  )
}

export default Footer

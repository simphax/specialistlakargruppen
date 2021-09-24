import React, { useContext } from "react"
import Context from "../context"
import styles from "./map.module.css"
import SiteWidth from "../layout/site-width"
import Container from "react-bootstrap/Container"

const Map2 = () => {
  const [context, setContext] = useContext(Context)
  return (
    <div>
      {!context.cookieConsent ? (
        <SiteWidth>
          <Container fluid="true">
            <div className={styles.content}>
              <span>
                <h2>Vår adress</h2>
                Specialistläkargruppen Uppsala AB
                <br />
                Dragarbrunnsgatan 70
                <br />
                753 20 Uppsala
                <br />
                <small>Tillåt cookies för karta och vägbeskrivning</small>
              </span>
            </div>
          </Container>
        </SiteWidth>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Map2

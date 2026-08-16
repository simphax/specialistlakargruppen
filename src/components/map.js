import React, { useContext } from "react"
import Context from "../context"
import SiteWidth from "../layout/site-width"
import Container from "react-bootstrap/Container"

import * as styles from "./map.module.css"

var count = 0

const Map = () => {
  const [context, setContext] = useContext(Context)
  console.log(context)
  return (
    <div>
      {context.cookieConsent ? (
        <>
          <SiteWidth>
            <Container fluid="true">
              <div className={styles.content}>
                Vi har tillfälligt flyttat till <strong>Vretgränd 16, 753 22
                  Uppsala</strong>. Kartan nedan visar vår tillfälliga adress.
              </div>
            </Container>
          </SiteWidth>
          <div className={styles.mapContainer}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sVretgr%C3%A4nd+16,+753+22+Uppsala!6i16"
              width="600"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Map

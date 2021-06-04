/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "react-modal"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"
import CookieConsentInfo from "../components/molecules/cookie-consent-info"
import Context from "../context"

import Header from "./header"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.variables.css"
import "./layout.css"
import "./base.css"

import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import SiteWidth from "./site-width"

Modal.setAppElement(`#___gatsby`)

const defaultContextState = {
  cookieConsent: getCookieConsentValue() == "true",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [context, setContext] = useState(defaultContextState)

  const location = useLocation()
  return (
    <Context.Provider value={[context, setContext]}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      {context.openCookieBar ? (
        <div>
          <CookieConsent
            debug={true}
            buttonText="Tillåt alla cookies"
            declineButtonText="Neka cookies"
            onAccept={() => {
              window.location.reload()
            }}
            enableDeclineButton
            onDecline={() => {
              window.location.reload()
            }}
            declineButtonStyle={{
              background: "none",
              color: "#fff",
              padding: "5px 10px",
              margin: "15px 0 15px 15px",
            }}
            buttonStyle={{
              background: "#e56343",
              color: "#fff",
            }}
            style={{
              background: "#2f2f2f",
              zIndex: "0",
            }}
          >
            <CookieConsentInfo />
          </CookieConsent>
        </div>
      ) : (
        <CookieConsent
          buttonText="Tillåt alla cookies"
          onAccept={() => {
            setContext({
              ...context,
              cookieConsent: getCookieConsentValue() == "true",
            })
            initializeAndTrack(location)
          }}
          declineButtonText="Neka cookies"
          enableDeclineButton
          declineButtonStyle={{
            background: "none",
            color: "#fff",
            padding: "5px 10px",
            margin: "15px 0 15px 15px",
          }}
          buttonStyle={{
            background: "#e56343",
            color: "#fff",
          }}
          style={{
            background: "#2f2f2f",
            zIndex: "0",
          }}
        >
          <CookieConsentInfo />
        </CookieConsent>
      )}
    </Context.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

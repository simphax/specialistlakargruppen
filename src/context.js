import React, { createContext } from "react"
import { getCookieConsentValue } from "react-cookie-consent"

const Context = createContext([
  {
    cookieConsent: true,
  },
  () => {},
])

export default Context

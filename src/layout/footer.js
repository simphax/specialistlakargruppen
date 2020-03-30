import React from "react"
import Container from "react-bootstrap/Container"
import SiteWidth from "./site-width"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Obfuscate from "react-obfuscate"

import styled from "styled-components"

const StyledFooter = styled.footer`
  background: var(--color-dark-grey);
  color: #fff;
  padding: 2rem 0;
  font-size: 0.8rem;
`
const ContentPadding = styled.div`
  padding: 0 var(--mobile-site-padding);
`

const Title = styled.h2`
  font-size: 1.6em;
`

const Footer = () => (
  <StyledFooter>
    <SiteWidth>
      <Container fluid="true">
        <ContentPadding>
          <Row>
            <Col>
              <Title>Specialistläkargruppen</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              Samariterhemmet, Dragarbrunnsgatan 70, Uppsala
              <br />
              Telefontid mån–tor 9–11
              <br />
              <Obfuscate tel="018 611 72 60" />
              <br />
              <Obfuscate email="info@specialistläkargruppen.se" />
              <br />
              Landstingsavtal, frikort gäller
            </Col>{" "}
            <Col>
              Specialistläkargruppen drivs i samarbete med Uppsala och
              Stockholms landsting. Till oss kan du ringa själv och beställa tid
              eller få remiss från din läkare. Vi finns på Samariterhemmets
              Vårdcentrum plan 1 med ingång via huvudingången, hiss finns. Vi
              har avtal med landstinget och taxan är 260 kr oavsett om du kommer
              på remiss eller ej. Frikort gäller.
            </Col>
          </Row>
        </ContentPadding>
      </Container>
    </SiteWidth>
  </StyledFooter>
)

export default Footer

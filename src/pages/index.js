import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"

import Layout from "../layout/layout"
import Title from "../components/atoms/title"
import Image from "../components/image"
import AppleImage from "../components/apple-image"
import TeamItem from "../components/molecules/team-item"
import SEO from "../layout/seo"
import Obfuscate from "react-obfuscate"

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

import styles from "./index.module.css"

import SiteWidth from "../layout/site-width"

import Map from "../components/map"
import CapabilityButtons from "../components/organisms/capability-buttons"

const TeamItemLayout = styled.div`
  & > * {
    margin: 0 0 1rem;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.5rem;
    align-items: stretch;

    & > * {
      box-sizing: border-box;
      width: calc(33% - 1rem);
      margin: 0 0.5rem 1rem;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <SiteWidth>
      <Container fluid="true">
        <div className={styles.introSection}>
          <Row>
            <Col lg={8}>
              <Row>
                <Col>
                  <p
                    style={{
                      margin:
                        "var(--mobile-content-padding) 0 var(--mobile-content-padding) 0",
                    }}
                  >
                    Vi bedriver öppen hjärtsjukvård på specialistnivå med
                    erfarna kardiologer med modern utrustning i ändamålsenliga
                    lokaler. Ring eller maila oss gärna för att boka ett besök.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xl={6}>
                  <div
                    className={styles.numberBox + " " + styles.numberBoxPadding}
                  >
                    <span className={styles.numberBoxIcon}>
                      <AiOutlinePhone />
                    </span>
                    <span className={styles.numberBoxText}>
                      <Obfuscate tel="018 611 72 60" /> (Mån-tor 9-16)
                    </span>
                  </div>
                </Col>
                <Col xl={6}>
                  <div
                    className={
                      styles.numberBox + " " + styles.numberBoxPadding2
                    }
                  >
                    <span
                      className={styles.numberBoxIcon}
                      style={{ fontSize: "1.25em" }}
                    >
                      <AiOutlineMail />
                    </span>
                    <span className={styles.numberBoxText}>
                      <Obfuscate email="info@specialistläkargruppen.se" />
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Image src="hearts.jpg" />
            </Col>
          </Row>
        </div>
        <div className={styles.content}>
          <Title>Vårt team</Title>
          <TeamItemLayout>
            <TeamItem
              title="Christina Holmkvist"
              description="Specialist i kardiologi och internmedicin"
            />

            <TeamItem
              title="Hamid Bastani"
              description="Specialist i kardiologi och internmedicin
          samt arytmologi"
            />

            <TeamItem
              title="Kjell Karlström"
              description="Biomedicinsk analytiker, forskat på Uas inom 
          klinisk fysiologi "
            />

            <TeamItem
              title="Gunilla Grotte"
              description="Mottagningssköterska"
            />

            <TeamItem
              title="Ann-Charlotte Karlsson"
              description="Vikarierande administratör"
            />
          </TeamItemLayout>

          <Title>Vi utför</Title>
          <CapabilityButtons />
          <Title>Välkommen på ett besök</Title>
          <Row>
            <Col lg={6}>
              <p>
                Till oss kommer man som patient med misstänkt hjärtsjukdom såsom
                andfåddhet, oregelbunden hjärtrytm eller bröstsmärta av oklar
                genes för att utesluita eller bekräfta hjärtsjukdom. Ofta med
                hjälp av arbetsprov, ultraljud hjärta (ekokardiografi) eller
                lungfunktionsundersökning (spirometri).
              </p>

              <p>
                Vi har även möjlighet att remittera till labb för relevanta
                prover efter besöket såsom t.ex. blodstatus, njurprov,
                cholesterol, blodsocker mm. Detta genom avtal med medielabb på
                läkarhuset samt kompletterande rtg på medicinsk rtg mitt emot
                med ofta tid direkt efter läkarbesöket. Vid behov skriver vi
                även ut recept som skickas elektroniskt till Ditt Apotek.
              </p>
            </Col>
            <Col lg={6}>
              <AppleImage />
            </Col>
          </Row>

          <Title>Hitta hit</Title>
        </div>
      </Container>
    </SiteWidth>
    <Map />
  </Layout>
)

export default IndexPage

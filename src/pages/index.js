import React, { createContext, useContext, useState } from "react"
import Context from "../context"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"

import Layout from "../layout/layout"
import Title from "../components/atoms/title"
import Image from "../components/image"
import AppleImage from "../components/apple-image"
import TeamItem from "../components/molecules/team-item"
import ModalLink from "../components/molecules/modal-link"
import SEO from "../layout/seo"
import Obfuscate from "react-obfuscate"
import { Collapse } from "react-collapse"
import Map from "../components/map"
import Map2 from "../components/map2"

import { AiOutlineDown, AiOutlineMail } from "react-icons/ai"
import { GiHealthNormal } from "react-icons/gi"

import * as styles from "./index.module.css"

import SiteWidth from "../layout/site-width"

import CapabilityButtons from "../components/organisms/capability-buttons"
import PricesLink from "../components/organisms/prices-link"


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

const IndexPage = () => {
  const [teamIsOpen, setTeamIsOpen] = useState(false)

  return (
    <Layout>
      <SEO />
      <SiteWidth>
        <Container fluid="true">
          <div className={styles.introSection}>
            <Row>
              <Col lg={7}>
                <Row>
                  <Col xl={12}>
                    <div
                      className={
                        styles.numberBox + " " + styles.numberBoxPadding
                      }
                    >
                      <span className={styles.numberBoxIcon}>
                        <GiHealthNormal />
                      </span>
                      <span className={styles.numberBoxText}>
                        Vi bedriver <strong>öppen hjärtsjukvård</strong> på{" "}
                        <strong>specialistnivå</strong> med erfarna kardiologer
                        med modern utrustning i ändamålsenliga lokaler.
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div
                      className={
                        styles.numberBox + " " + styles.numberBoxPadding2
                      }
                    >
                      <span className={styles.numberBoxIcon}>
                        <AiOutlineMail />
                      </span>
                      <span className={styles.numberBoxText}>
                        Ring oss gärna på telefon{" "}
                        <Obfuscate tel="018 611 72 60" /> (Mån-tor 9-11.30) eller
                        skicka ett mail till{" "}
                        <Obfuscate email="info@specialistlakargruppen.se" />.
                        Avbokning och ombokning sker via telefon.
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={5}>
                <Image src="hearts.jpg" />
              </Col>
            </Row>
          </div>
          <div className={styles.content}>
            <Title>Vi utför</Title>
            <CapabilityButtons />
            <Title>Boka tid för hjärtsjukvård på specialistnivå i Uppsala</Title>
            <Row>
              <Col lg={6}>
                <p>
                  Välkommen till oss om du misstänker hjärtsjukdom. Du kan boka tid
                  genom att kontakta oss direkt eller via remiss från din läkare.
                  Vi finns på Samariterhemmets Vårdcentrum plan 1 med ingång via huvudingången, hiss finns. Vi samarbetar med flera hälsocentraler i Uppsala län.
                </p>

                <Title>Misstänkt hjärtsjukdom – symtom och utredning</Title>
                <p>
                  Upplever du andfåddhet, oregelbunden hjärtrytm eller bröstsmärta utan
                  klar orsak? Boka en tid för en grundlig utredning hos oss. Vi använder
                  bland annat arbetsprov, hjärtultraljud&nbsp;(ekokardiografi) och
                  lungfunktionsmätning&nbsp;(spirometri) för att bekräfta eller utesluta
                  hjärtsjukdom.
                </p>
                <p>
                  Vid behov kan vi även remittera dig för laboratorieprover, exempelvis
                  blodstatus, njurfunktion, kolesterol och blodsocker.
                </p>

                <Title>Priser</Title>
                <p>
                  Vi har avtal med utvalda hälsocentraler i Uppsala län.
                  Det går också bra att boka privat vård.
                  <br />
                  <PricesLink />
                </p>
              </Col>

              <Col lg={6}>
                <AppleImage />
              </Col>
            </Row>
            <button
              className={
                styles.collapseButton +
                (teamIsOpen ? " " + styles.collapseButtonOpen : "")
              }
              onClick={() => setTeamIsOpen(!teamIsOpen)}
            >
              Vårt team <AiOutlineDown />
            </button>
            <Collapse
              isOpened={teamIsOpen}
              theme={{
                collapse: styles.collapser,
                content:
                  styles.collapserContent +
                  (teamIsOpen ? " " + styles.collapserContentOpen : ""),
              }}
            >
              <TeamItemLayout>
                <TeamItem
                  title="Christina Holmquist"
                  description="Specialist i kardiologi och internmedicin"
                />

                <TeamItem
                  title="Abdullah Baroudi"
                  description="Kardiolog, specialistläkare"
                />

                <TeamItem
                  title="Kjell Karlström"
                  description="Biomedicinsk analytiker, forskat på UAS inom klinisk fysiologi"
                />

                <TeamItem
                  title="Zenaida Silayan‑Lidström"
                  description="Biomedicinsk analytiker, forskat bl.a. i Saudiarabien"
                />


                <TeamItem
                  title="Monica Olli King"
                  description="Vikarierande administratör"
                />

                <TeamItem title="Vikarierande kardiolog" description="" />

                <TeamItem
                  title="Gunilla Grotte"
                  description="Mottagningssköterska"
                />
              </TeamItemLayout>
            </Collapse>
            <Title>Hitta hit</Title>
          </div>
        </Container>
      </SiteWidth>
      <Map></Map>
      <Map2></Map2>
    </Layout>
  )
}
export default IndexPage

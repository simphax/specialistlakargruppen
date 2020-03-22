import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Layout from "../layout/layout"
import Title from "../components/atoms/title"
import Image from "../components/image"
import SEO from "../layout/seo"

import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid="xl">
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
                  Vi bedriver öppen hjärtsjukvård på specialistnivå med erfarna
                  kardiologer med modern utrustning i ändamålsenliga lokaler.
                  Ring eller maila oss gärna för att boka ett besök.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <div className={styles.numberBox}>07077</div>
              </Col>
              <Col lg={6}>
                <div className={styles.numberBox}>sim.n@specia</div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Image />
          </Col>
        </Row>
      </div>
      <div className={styles.content}>
        <Title>Hi peopless</Title>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Container>
  </Layout>
)

export default IndexPage

import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Img from 'gatsby-image'
import {
  Row,
  Col,
  Container,
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const IndexPage = ({ data, location }) => {
  const { logo } = data
  const logoImage = get(logo, 'childImageSharp.fixed')
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta site={get(data, 'site.meta')} />
      <Container fluid>
        <Container>
          <div className="d-block d-md-none text-center">
            <Img fixed={logoImage} />
          </div>
          <p>
            Vítejte na webu veterinární ordinace Galen. Sídlíme v Brně -
            Medlánkách a zaměřujeme se na medicínu psů, koček a drobných savců.
            Našim cílem je, aby byli spokojeni naši klienti i jejich čtyřnozí
            přátelé!
          </p>
        </Container>
        <Container fluid>
          <Row>
            <Col
              xs={{ order: 2 }}
              sm={{ order: 2, size: 8 }}
              md={{ offset: 2, order: 1, size: 6 }}>
              Tady je text
            </Col>
            <Col
              xs={{ order: 1 }}
              sm={{ order: 1, size: 8 }}
              md={{ order: 2, size: 4 }}>
              <Card>
                <CardHeader>Novinky</CardHeader>
                <CardBody>
                  <CardText>text</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    logo: file(name: { eq: "vetgalen-logo" }) {
      childImageSharp {
        fixed(width: 246, height: 119) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    icon: file(name: { eq: "icon" }) {
      childImageSharp {
        fixed(width: 80, height: 30) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

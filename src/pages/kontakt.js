import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Timetable from 'components/Timetable'
import Icon from 'components/Icon'

const ContactPage = ({ data, location }) => {
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta site={get(data, 'site.meta')} />
      <Container>
        <h3>Kde nás najdete?</h3>
        <Container>
          <Row>
            <Col xs={{ order: 1 }} sm={{ order: 1, size: 4 }}>
              <address>
                <strong>
                  <Icon name="map-marker" />
                  &nbsp;Veterinární ordinace Galen
                </strong>
                <br />
                Podpěrova 439/2
                <br />
                621 00 Brno-Medlánky
                <br />
                <strong>
                  <Icon name="envelope" />
                  &nbsp;
                  <a href="mailto:ordinace@vetgalen.cz">ordinace@vetgalen.cz</a>
                </strong>
                <br />
              </address>
            </Col>
            <Col xs={{ order: 2 }} sm={{ order: 2, size: 8 }}>
            </Col>
          </Row>
        </Container>
        <Timetable />
      </Container>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
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
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    icon: file(name: { eq: "icon" }) {
      childImageSharp {
        fixed(width: 80, height: 30) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`

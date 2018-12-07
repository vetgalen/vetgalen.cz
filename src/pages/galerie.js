import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const GalleryPage = ({ data, location }) => {
  const cekarna = get(data, 'cekarna.childImageSharp.resolutions')
  const vchod = get(data, 'vchod.childImageSharp.resolutions')
  const ordinace = get(data, 'ordinace.childImageSharp.resolutions')
  const sal = get(data, 'sal.childImageSharp.resolutions')
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta site={get(data, 'site.meta')} />
      <Container>
        <Row className="align-items-center">
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 8 }}
            className="text-right">
            <Img imgStyle={{ 'border-radius': '5%' }} resolutions={vchod} />
          </Col>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2, size: 4 }}
            className="text-left">
            <h3>Vchod</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr width="50%" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            xs={{ order: 1 }}
            sm={{ order: 1, size: 4 }}
            className="text-right d-table-cell align-middle">
            <h3>Čekárna</h3>
          </Col>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2, size: 8 }}
            className="text-left">
            <Img imgStyle={{ 'border-radius': '5%' }} resolutions={cekarna} />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr width="50%" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 8 }}
            className="text-right">
            <Img imgStyle={{ 'border-radius': '5%' }} resolutions={ordinace} />
          </Col>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2, size: 4 }}
            className="text-left d-table-cell align-middle">
            <h3>Ordinace</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr width="50%" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            xs={{ order: 1 }}
            sm={{ order: 1, size: 4 }}
            className="text-right d-table-cell align-middle">
            <h3>Operační sál</h3>
          </Col>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2, size: 8 }}
            className="text-left">
            <Img imgStyle={{ 'border-radius': '5%' }} resolutions={sal} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPageQuery {
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
    vchod: file(name: { eq: "foto-vchod" }) {
      childImageSharp {
        resolutions(quality: 100, width: 315, height: 210) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
        }
      }
    }
    cekarna: file(name: { eq: "foto-cekarna" }) {
      childImageSharp {
        resolutions(quality: 100, width: 315, height: 210) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
        }
      }
    }
    ordinace: file(name: { eq: "foto-ordinace" }) {
      childImageSharp {
        resolutions(quality: 100, width: 315, height: 210) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
        }
      }
    }
    sal: file(name: { eq: "foto-sal" }) {
      childImageSharp {
        resolutions(quality: 100, width: 315, height: 210) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
        }
      }
    }
  }
`

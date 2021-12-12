import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const GalleryPage = ({ data, location }) => {
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta
        site={get(data, 'site.meta')}
        title="Galerie"
        path="/galerie/"
        description="Veterinární ordinace Galen, Brno-Medlánky - fotky vstupu, čekárny, ordinace a operačního sálu"
      />
      <Container>
        <Row className="align-items-center">
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 8 }}
            className="text-right">
            <GatsbyImage image={getImage(data.vchod)} alt="vchod" imgStyle={{ 'border-radius': '5%' }} />
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
            <GatsbyImage image={getImage(data.cekarna)} alt="cekarna" imgStyle={{ 'border-radius': '5%' }} />
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
            <GatsbyImage image={getImage(data.ordinace)} alt="data" imgStyle={{ 'border-radius': '5%' }} />
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
            <GatsbyImage image={getImage(data.sal)} alt="operační sál" imgStyle={{ 'border-radius': '5%' }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default GalleryPage

export const pageQuery = graphql`query GalleryPageQuery {
  site {
    meta: siteMetadata {
      title
      description
      url: siteUrl
      author
    }
  }
  logo: file(name: {eq: "vetgalen-logo"}) {
    childImageSharp {
      gatsbyImageData(width: 246, height: 119, placeholder: NONE, layout: FIXED)
    }
  }
  icon: file(name: {eq: "icon"}) {
    childImageSharp {
      gatsbyImageData(width: 80, height: 30, placeholder: NONE, layout: FIXED)
    }
  }
  vchod: file(name: {eq: "foto-vchod"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 315
        height: 210
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
  cekarna: file(name: {eq: "foto-cekarna"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 315
        height: 210
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
  ordinace: file(name: {eq: "foto-ordinace"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 315
        height: 210
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
  sal: file(name: {eq: "foto-sal"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 315
        height: 210
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
}
`

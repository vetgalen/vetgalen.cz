import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'

import Layout from 'components/Layout'
import { siteMetadata } from '../../gatsby-config'

const NotFoundPage = ({ data, location }) => {
  const { logo } = data

  return (
    <Layout location={location}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-4">
              <GatsbyImage
                image={getImage(logo)}
                alt="Veterinární ordinace Galen logo"
              />
            </div>
            <Card className="border-primary">
              <CardHeader className="text-center">
                <h1>404 - Stránka nenalezena</h1>
              </CardHeader>
              <CardBody className="text-center">
                <p className="lead">
                  Omlouváme se, ale stránka, kterou hledáte, nebyla nalezena.
                </p>
                <p>
                  Možná jste zadali špatnou adresu nebo byla stránka přesunuta.
                </p>
                <p>
                  <a href="/" className="btn btn-primary">
                    Zpět na hlavní stránku
                  </a>
                </p>
                <hr />
                <h5>Můžete navštívit:</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Domovská stránka</a>
                  </li>
                  <li>
                    <a href="/sluzby/">Naše služby</a>
                  </li>
                  <li>
                    <a href="/kontakt/">Kontakt a ordinační hodiny</a>
                  </li>
                  <li>
                    <a href="/galerie/">Galerie</a>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <title>Stránka nenalezena - {siteMetadata.title}</title>
    <meta
      name="description"
      content="Stránka, kterou hledáte, nebyla nalezena. Veterinární ordinace Galen, Brno-Medlánky."
    />
    <meta name="keywords" content="veterina, veterinární ordinace, Medlánky" />
  </>
)

export const pageQuery = graphql`
  query NotFoundPageQuery {
    logo: file(name: { eq: "vetgalen-logo" }) {
      childImageSharp {
        gatsbyImageData(
          width: 246
          height: 119
          placeholder: NONE
          layout: FIXED
        )
      }
    }
  }
`

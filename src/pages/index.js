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
  CardFooter,
} from 'reactstrap'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import News from 'components/News'

const IndexPage = ({ data, location }) => {
  const { logo, news } = data
  const logoImage = get(logo, 'childImageSharp.fixed')

  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta site={get(data, 'site.meta')} />
      <Container>
        <div className="clear-fix">
          <div className="d-block d-md-none text-center">
            <Img fixed={logoImage} />
          </div>
          <p>
            Vítejte na webu veterinární ordinace Galen. Sídlíme v Brně -
            Medlánkách a zaměřujeme se na medicínu psů, koček a drobných savců.
            Našim cílem je, aby byli spokojeni naši klienti i jejich čtyřnozí
            přátelé!
          </p>
        </div>
        <hr />
        <News news={news} />
        <hr />
        <h1>Kdo jsme?</h1>
        <Container>
          <Row>
            <Col md={{ order: 1 }} lg={{ order: 1, size: 6 }}>
              <Card className="border-primary h-100">
                <CardHeader>
                  <h5>MVDr. Pavla Alexandrová</h5>
                </CardHeader>
                <CardBody>
                  <CardText>
                    Do praxe jsem nastoupila po ukončení studií na VFU v roce
                    2004. Zaměřuji se na medicínu psů, koček a drobných savců.
                    Ráda se účastním zajímavých odborných seminářů. Nejvíce mě
                    baví interna, měkkotkáňová chirurgie, kardiologie,
                    ultrasonografie a dermatologie.
                  </CardText>
                </CardBody>
                <CardFooter>
                  Do mojí čtyřnohé bandy patří boxeři Gan a Argana, a dva
                  kocouři.
                </CardFooter>
              </Card>
            </Col>
            {/* Spacer column only */}
            <Col md={{ order: 2 }} className="d-block d-lg-none">
              &nbsp;
            </Col>
            <Col md={{ order: 3 }} lg={{ order: 3, size: 6 }}>
              <Card className="border-primary h-100">
                <CardHeader>
                  <h5>MVDr. Zuzana Piwková</h5>
                </CardHeader>
                <CardBody>
                  <CardText>
                    V praxi jsem od r. 2013, kdy jsem ukončila studium na
                    Fakultě veterinárního lékařství VFU. Věnuji se medicíně psů
                    a koček, okrajově i drobných savců. Účastním se různých
                    odborných seminářů, z lékařských oborů mě baví hlavně
                    interna, oftalmologie a psychické „neduhy“ psů a koček.
                  </CardText>
                </CardBody>
                <CardFooter>
                  Mým zvířecím parťákem je borderteriér Lenny.
                </CardFooter>
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
    # order news file desc, novinky-{number}.md
    news: allMarkdownRemark(sort: { order: DESC, fields: fileAbsolutePath }) {
      edges {
        node {
          html
        }
      }
    }
  }
`

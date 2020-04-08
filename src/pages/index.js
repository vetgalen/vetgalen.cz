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
      <Meta
        site={get(data, 'site.meta')}
        path="/"
        description="Veterinární ordinace v Brně-Medlánkách, péče o malá zvířata a bezproblémové parkování"
      />
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
        <News
          news={news}
          vanoce={get(data, 'vanoce')}
          novinky={get(data, 'novinky')}
          spici_pes={get(data, 'spici_pes')}
          baset={get(data, 'baset')}
          cipovani={get(data, 'cipovani')}
          rtg_pes={get(data, 'rtg_pes')}
          cupcake={get(data, 'cupcake')}
          krabice={get(data, 'krabice')}
          od_peti={get(data, 'od_peti')}
          alert={get(data, 'alert')}
          mask={get(data, 'mask')}
          zajicek={get(data, 'zajicek')}
        />
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
          frontmatter {
            image
          }
          id
        }
      }
    }
    novinky: file(name: { eq: "novinky" }) {
      childImageSharp {
        fixed(width: 112, height: 193) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    vanoce: file(name: { eq: "vanoce" }) {
      childImageSharp {
        fixed(width: 135, height: 134) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    spici_pes: file(name: { eq: "spici_pes" }) {
      childImageSharp {
        fixed(width: 133, height: 97) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    baset: file(name: { eq: "baset_zavreno" }) {
      childImageSharp {
        fixed(width: 110, height: 138) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    cipovani: file(name: { eq: "cipovani" }) {
      childImageSharp {
        fixed(width: 131, height: 137) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    rtg_pes: file(name: { eq: "rtg_pes" }) {
      childImageSharp {
        fixed(width: 133, height: 108) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    cupcake: file(name: { eq: "cupcake" }) {
      childImageSharp {
        fixed(width: 115, height: 175) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    krabice: file(name: { eq: "krabice" }) {
      childImageSharp {
        fixed(width: 162, height: 120) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    od_peti: file(name: { eq: "od_peti" }) {
      childImageSharp {
        fixed(width: 140, height: 202) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    alert: file(name: { eq: "alert" }) {
      childImageSharp {
        fixed(width: 119, height: 247) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    mask: file(name: { eq: "mask" }) {
      childImageSharp {
        fixed(width: 210, height: 150) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    zajicek: file(name: { eq: "zajicek" }) {
      childImageSharp {
        fixed(width: 115, height: 181) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`

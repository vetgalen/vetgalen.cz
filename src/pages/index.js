import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'
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
            <GatsbyImage image={logoImage} />
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
          pes_stanuje={get(data, 'pes_stanuje')}
          vanoce_2020={get(data, 'vanoce_2020')}
          velikonoce_mops={get(data, 'velikonoce_mops')}
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
  );
}

export default IndexPage

export const pageQuery = graphql`query IndexPageQuery {
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
  news: allMarkdownRemark(sort: {order: DESC, fields: fileAbsolutePath}) {
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
  novinky: file(name: {eq: "novinky"}) {
    childImageSharp {
      gatsbyImageData(width: 112, height: 193, placeholder: NONE, layout: FIXED)
    }
  }
  vanoce: file(name: {eq: "vanoce"}) {
    childImageSharp {
      gatsbyImageData(width: 135, height: 134, placeholder: NONE, layout: FIXED)
    }
  }
  spici_pes: file(name: {eq: "spici_pes"}) {
    childImageSharp {
      gatsbyImageData(width: 133, height: 97, placeholder: NONE, layout: FIXED)
    }
  }
  baset: file(name: {eq: "baset_zavreno"}) {
    childImageSharp {
      gatsbyImageData(width: 110, height: 138, placeholder: NONE, layout: FIXED)
    }
  }
  cipovani: file(name: {eq: "cipovani"}) {
    childImageSharp {
      gatsbyImageData(width: 131, height: 137, placeholder: NONE, layout: FIXED)
    }
  }
  rtg_pes: file(name: {eq: "rtg_pes"}) {
    childImageSharp {
      gatsbyImageData(width: 133, height: 108, placeholder: NONE, layout: FIXED)
    }
  }
  cupcake: file(name: {eq: "cupcake"}) {
    childImageSharp {
      gatsbyImageData(width: 115, height: 175, placeholder: NONE, layout: FIXED)
    }
  }
  krabice: file(name: {eq: "krabice"}) {
    childImageSharp {
      gatsbyImageData(width: 162, height: 120, placeholder: NONE, layout: FIXED)
    }
  }
  od_peti: file(name: {eq: "od_peti"}) {
    childImageSharp {
      gatsbyImageData(width: 140, height: 202, placeholder: NONE, layout: FIXED)
    }
  }
  alert: file(name: {eq: "alert"}) {
    childImageSharp {
      gatsbyImageData(width: 119, height: 247, placeholder: NONE, layout: FIXED)
    }
  }
  mask: file(name: {eq: "mask"}) {
    childImageSharp {
      gatsbyImageData(width: 210, height: 150, placeholder: NONE, layout: FIXED)
    }
  }
  zajicek: file(name: {eq: "zajicek"}) {
    childImageSharp {
      gatsbyImageData(width: 115, height: 181, placeholder: NONE, layout: FIXED)
    }
  }
  pes_stanuje: file(name: {eq: "pes_stanuje"}) {
    childImageSharp {
      gatsbyImageData(width: 166, height: 101, placeholder: NONE, layout: FIXED)
    }
  }
  vanoce_2020: file(name: {eq: "vanoce_2020"}) {
    childImageSharp {
      gatsbyImageData(width: 174, height: 128, placeholder: NONE, layout: FIXED)
    }
  }
  velikonoce_mops: file(name: {eq: "velikonoce_mops"}) {
    childImageSharp {
      gatsbyImageData(width: 142, height: 157, placeholder: NONE, layout: FIXED)
    }
  }
}
`

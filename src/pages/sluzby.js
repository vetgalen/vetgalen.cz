import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const OfferPage = ({ data, location }) => {
  const derma = get(data, 'derma.childImageSharp.fixed')
  const chirda = get(data, 'chirda.childImageSharp.fixed')
  const infuze = get(data, 'infuze.childImageSharp.fixed')
  const lahvicka = get(data, 'lahvicka.childImageSharp.fixed')
  const mikroskop = get(data, 'mikroskop.childImageSharp.fixed')
  const miska = get(data, 'miska.childImageSharp.fixed')
  const otoskop = get(data, 'otoskop.childImageSharp.fixed')
  const packa = get(data, 'packa.childImageSharp.fixed')
  const prevence = get(data, 'prevence.childImageSharp.fixed')
  const psik = get(data, 'psik.childImageSharp.fixed')
  const usg = get(data, 'usg.childImageSharp.fixed')
  const zkumavka = get(data, 'zkumavka.childImageSharp.fixed')
  const zub = get(data, 'zub.childImageSharp.fixed')
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta
        site={get(data, 'site.meta')}
        title="Služby"
        path="/sluzby/"
        description="Galen - péče o malá zvířata - prevence, odběry, diagnostika, dermatologie, stomatologie, ortopedie, oftalmologie, gynekologie, sono, konzultace a další"
      />
      <Container>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <h3>Preventivní péče</h3>
            <ul>
              <li>vakcinace psů, koček, fretek a králíků</li>
              <li>antiparazitární program</li>
              <li>péče o drápy, uši, anální žlázy</li>
              <li>
                čipování a vystavení Petpasu, vyšetření zvířete před cestou do
                zahraničí
              </li>
              <li>preventivní klinické vyšetření</li>
              <li>geriatrický program</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <Img fixed={prevence} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <h3>Odběry krve</h3>
            <ul>
              <li>
                zajištění biochemického, hematologického a endokrinologického
                vyšetření ve specializované veterinární laboratoři
              </li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <Img fixed={zkumavka} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <h3>Laboratorní diagnostika</h3>
            <ul>
              <li>mikroskopické vyšetření kožních seškrabů</li>
              <li>koprologické vyšetření trusu</li>
              <li>vyšetření moči a močového sedimentu</li>
              <li>cytologie</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <Img fixed={mikroskop} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <h3>Dermatologie</h3>
            <ul>
              <li>vyšetření</li>
              <li>odběr vzorků pro další diagnostiku</li>
              <li>kultivace na dermatofyta</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <Img fixed={derma} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <h3>Stomatologie</h3>
            <ul>
              <li>odstranění zubního kamene</li>
              <li>extrakce mléčných zubů</li>
              <li>terapeutické ošetření dutiny ústní</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <Img fixed={zub} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <h3>Otologie a oftalmologie</h3>
            <ul>
              <li>vyšetření uší, terapie ušních zánětů, prevence</li>
              <li>diagnostika defektů víček, rohovky</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <Img fixed={otoskop} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <h3>Ultrasonografické vyšetření</h3>
            <ul>
              <li>vyšetření přístrojem vybaveným Doppler zobrazením</li>
              <li>echokardiografické vyšetření</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <div className="d-none d-sm-block mt-3">&nbsp;</div>
            <Img fixed={usg} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <h3>Chirurgické zákroky</h3>
            <ul>
              <li>preventivní a terapeutické</li>
              <li>odeslání vzorků na vyšetření</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-2">&nbsp;</div>
            <Img fixed={chirda} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <h3>Ortopedie</h3>
            <ul>
              <li>klinické vyšetření</li>
              <li>management pacientů s ortopedickým onemocněním</li>
              <li>případně zajištění ošetření na specializovaném pracovišti</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <div className="d-none d-sm-block mt-4">&nbsp;</div>
            <Img fixed={packa} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <div className="d-none d-sm-block mt-1">&nbsp;</div>
            <h3>Gynekologie a porodnictví</h3>
            <ul>
              <li>stanovení hladiny progesteronu a vhodné doby ke krytí</li>
              <li>vaginální cytologie</li>
              <li>diagnostika březosti</li>
              <li>vedení porodu a péče o novorozence</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-4">&nbsp;</div>
            <Img fixed={lahvicka} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <h3>Výživa</h3>
            <ul>
              <li>konzultace výživy</li>
              <li>prodej krmiv, doplňků výživy a veterinárních diet</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <div className="d-none d-sm-block mt-3">&nbsp;</div>
            <Img fixed={miska} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <h3>Konzultace v oblasti nežádoucího chování psů a koček</h3>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-1">&nbsp;</div>
            <Img fixed={psik} />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-3">&nbsp;</div>
            <h3>
              Krátkodobá hospitalizace pacientů, infúzní terapie, pooperační
              péče
            </h3>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <Img fixed={infuze} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default OfferPage

export const pageQuery = graphql`
  query OfferPageQuery {
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
    derma: file(name: { eq: "derma" }) {
      childImageSharp {
        fixed(height: 268, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    chirda: file(name: { eq: "chirda" }) {
      childImageSharp {
        fixed(height: 147, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    infuze: file(name: { eq: "infuze" }) {
      childImageSharp {
        fixed(height: 262, width: 180) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    lahvicka: file(name: { eq: "lahvicka" }) {
      childImageSharp {
        fixed(height: 214, width: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mikroskop: file(name: { eq: "mikroskop" }) {
      childImageSharp {
        fixed(height: 232, width: 150) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    miska: file(name: { eq: "miska" }) {
      childImageSharp {
        fixed(height: 117, width: 180) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    otoskop: file(name: { eq: "otoskop" }) {
      childImageSharp {
        fixed(height: 171, width: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    packa: file(name: { eq: "packa" }) {
      childImageSharp {
        fixed(height: 126, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    prevence: file(name: { eq: "prevence" }) {
      childImageSharp {
        fixed(height: 243, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    psik: file(name: { eq: "psik" }) {
      childImageSharp {
        fixed(height: 130, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    usg: file(name: { eq: "usg" }) {
      childImageSharp {
        fixed(height: 130, width: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    zkumavka: file(name: { eq: "zkumavka" }) {
      childImageSharp {
        fixed(height: 212, width: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    zub: file(name: { eq: "zub" }) {
      childImageSharp {
        fixed(height: 148, width: 110) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

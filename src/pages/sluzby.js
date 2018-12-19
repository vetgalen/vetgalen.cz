import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const OfferPage = ({ data, location }) => {
  const derma = get(data, 'derma.childImageSharp.resolutions')
  const chirda = get(data, 'chirda.childImageSharp.resolutions')
  const infuze = get(data, 'infuze.childImageSharp.resolutions')
  const lahvicka = get(data, 'lahvicka.childImageSharp.resolutions')
  const mikroskop = get(data, 'mikroskop.childImageSharp.resolutions')
  const miska = get(data, 'miska.childImageSharp.resolutions')
  const otoskop = get(data, 'otoskop.childImageSharp.resolutions')
  const packa = get(data, 'packa.childImageSharp.resolutions')
  const prevence = get(data, 'prevence.childImageSharp.resolutions')
  const psik = get(data, 'psik.childImageSharp.resolutions')
  const usg = get(data, 'usg.childImageSharp.resolutions')
  const zkumavka = get(data, 'zkumavka.childImageSharp.resolutions')
  const zub = get(data, 'zub.childImageSharp.resolutions')
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta
        site={get(data, 'site.meta')}
        title="Služby"
        path="/sluzby/"
        description="Galen - péče o malá zvířata - prevence, odběry, diagnostika, dermatologie, stomatologie, ortopedie, oftalmologie, gynekologie, sono a konzultace"
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
            <Img resolutions={prevence} />
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
            <Img resolutions={zkumavka} />
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
            <Img resolutions={mikroskop} />
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
            <Img resolutions={derma} />
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
            <Img resolutions={zub} />
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
            <Img resolutions={otoskop} />
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
            <Img resolutions={usg} />
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
            <Img resolutions={chirda} />
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
            <Img resolutions={packa} />
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
            <Img resolutions={lahvicka} />
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
            <Img resolutions={miska} />
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
            <Img resolutions={psik} />
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
            <Img resolutions={infuze} />
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
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    chirda: file(name: { eq: "chirda" }) {
      childImageSharp {
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    infuze: file(name: { eq: "infuze" }) {
      childImageSharp {
        resolutions(quality: 100, width: 180) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    lahvicka: file(name: { eq: "lahvicka" }) {
      childImageSharp {
        resolutions(quality: 100, width: 100) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    mikroskop: file(name: { eq: "mikroskop" }) {
      childImageSharp {
        resolutions(quality: 100, width: 150) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    miska: file(name: { eq: "miska" }) {
      childImageSharp {
        resolutions(quality: 100, width: 180) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    otoskop: file(name: { eq: "otoskop" }) {
      childImageSharp {
        resolutions(quality: 100, width: 100) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    packa: file(name: { eq: "packa" }) {
      childImageSharp {
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    prevence: file(name: { eq: "prevence" }) {
      childImageSharp {
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    psik: file(name: { eq: "psik" }) {
      childImageSharp {
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    usg: file(name: { eq: "usg" }) {
      childImageSharp {
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    zkumavka: file(name: { eq: "zkumavka" }) {
      childImageSharp {
        resolutions(quality: 100, width: 100) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    zub: file(name: { eq: "zub" }) {
      childImageSharp {
        resolutions(quality: 100, width: 110) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
  }
`

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
      <Meta site={get(data, 'site.meta')} />
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
              <li>
                vyšetření, odběr vzorků pro další diagnostiku, kultivace na
                dermatofyta
              </li>
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
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            Papkes
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-4">&nbsp;</div>
            <Img resolutions={miska} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            Packa
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <div className="d-none d-sm-block mt-3">&nbsp;</div>
            <Img resolutions={packa} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            Prevence
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <Img resolutions={prevence} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            Psik
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <div className="d-none d-sm-block mt-4">&nbsp;</div>
            <Img resolutions={psik} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            USG
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-4">&nbsp;</div>
            <Img resolutions={usg} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2, size: 6 }}
            md={{ order: 2, size: 6 }}>
            Zkumavka
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <Img resolutions={zkumavka} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            Zub
            <p>
              Lorem ipsum dolor sit amet, est brute errem invidunt et, accumsan
              efficiendi sadipscing est ea, at quo novum epicurei. Nam in quod
              deleniti, quo cibo insolens an, agam dicit ex eum.
            </p>
            <p>
              Has ex probo mazim nemore, ex sed adipisci suavitate, purto habeo
              appetere vis ex. Id ubique expetenda liberavisse vix, vim an solum
              verear. Sea at euismod deleniti appareat.
            </p>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-3">&nbsp;</div>
            <Img resolutions={zub} />
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

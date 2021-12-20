import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from 'components/Layout'

const OfferPage = ({ data, location }) => {
  
  return (
    <Layout
      location={location}
      description="Galen - péče o malá zvířata - prevence, odběry, diagnostika, dermatologie, stomatologie, ortopedie, oftalmologie, gynekologie, sono, konzultace a další"
      >
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
            <GatsbyImage image={getImage(data.prevence)} alt="prevence" />
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
            <GatsbyImage image={getImage(data.zkumavka)} alt="zkumavka" />
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
            <GatsbyImage image={getImage(data.mikroskop)} alt="mikroskop" />
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
            <GatsbyImage image={getImage(data.derma)} alt="dermatologie"/>
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
            <GatsbyImage image={getImage(data.zub)} alt="zub"/>
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
            <GatsbyImage image={getImage(data.otoskop)} alt="otoskop" />
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
            <GatsbyImage image={getImage(data.usg)} alt="ultrasonografie" />
          </Col>
        </Row>
        <Row className="row-offer">
          <Col
            className="offer"
            xs={{ order: 2 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 1, size: 6 }}>
            <h3>Rentgenologické vyšetření</h3>
            <ul>
              <li>vyšetření při akutních stavech</li>
              <li>preventivní a kontrolní vyšetření pohybového aparátu</li>
            </ul>
          </Col>
          <Col
            className="text-center"
            xs={{ order: 1 }}
            sm={{ order: 1, size: 6 }}
            md={{ order: 2, size: 6 }}>
            <div className="d-none d-sm-block mt-1">&nbsp;</div>
            <GatsbyImage image={getImage(data.rtg)} alt="rentgen" />
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
            <GatsbyImage image={getImage(data.packa)} alt="packa" />
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
            <GatsbyImage image={getImage(data.chirda)} alt="chirurgie" />
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
            <GatsbyImage image={getImage(data.lahvicka)} alt="lahvička" />
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
            <GatsbyImage image={getImage(data.miska)} alt="miska" />
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
            <GatsbyImage image={getImage(data.psik)} alt="zlobivý pes" />
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
            <GatsbyImage image={getImage(data.infuze)} alt="infuze" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default OfferPage

export const pageQuery = graphql`query OfferPageQuery {
  derma: file(name: {eq: "derma"}) {
    childImageSharp {
      gatsbyImageData(height: 268, width: 200, placeholder: BLURRED, layout: FIXED)
    }
  }
  chirda: file(name: {eq: "chirda"}) {
    childImageSharp {
      gatsbyImageData(height: 147, width: 200, layout: FIXED)
    }
  }
  infuze: file(name: {eq: "infuze"}) {
    childImageSharp {
      gatsbyImageData(height: 262, width: 180, layout: FIXED)
    }
  }
  lahvicka: file(name: {eq: "lahvicka"}) {
    childImageSharp {
      gatsbyImageData(height: 214, width: 100, layout: FIXED)
    }
  }
  mikroskop: file(name: {eq: "mikroskop"}) {
    childImageSharp {
      gatsbyImageData(height: 232, width: 150, layout: FIXED)
    }
  }
  miska: file(name: {eq: "miska"}) {
    childImageSharp {
      gatsbyImageData(height: 117, width: 180, layout: FIXED)
    }
  }
  otoskop: file(name: {eq: "otoskop"}) {
    childImageSharp {
      gatsbyImageData(height: 171, width: 100, layout: FIXED)
    }
  }
  packa: file(name: {eq: "packa"}) {
    childImageSharp {
      gatsbyImageData(height: 126, width: 200, layout: FIXED)
    }
  }
  prevence: file(name: {eq: "prevence"}) {
    childImageSharp {
      gatsbyImageData(height: 243, width: 200, layout: FIXED)
    }
  }
  psik: file(name: {eq: "psik"}) {
    childImageSharp {
      gatsbyImageData(height: 130, width: 200, layout: FIXED)
    }
  }
  rtg: file(name: {eq: "rtg_pes"}) {
    childImageSharp {
      gatsbyImageData(width: 200, height: 161, placeholder: BLURRED, layout: FIXED)
    }
  }
  usg: file(name: {eq: "usg"}) {
    childImageSharp {
      gatsbyImageData(height: 130, width: 200, layout: FIXED)
    }
  }
  zkumavka: file(name: {eq: "zkumavka"}) {
    childImageSharp {
      gatsbyImageData(height: 212, width: 100, layout: FIXED)
    }
  }
  zub: file(name: {eq: "zub"}) {
    childImageSharp {
      gatsbyImageData(height: 148, width: 110, layout: FIXED)
    }
  }
}
`

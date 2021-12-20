import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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

import Layout from 'components/Layout'
import News from 'components/News'

const IndexPage = ({ data, location }) => {
  const { logo } = data

  return (
    <Layout
      location={location}>
      <Container>
        <div className="clear-fix">
          <div className="d-block d-md-none text-center">
            <GatsbyImage image={getImage(logo)} alt="logo" />
          </div>
          <p>
            Vítejte na webu veterinární ordinace Galen. Sídlíme v Brně -
            Medlánkách a zaměřujeme se na medicínu psů, koček a drobných savců.
            Našim cílem je, aby byli spokojeni naši klienti i jejich čtyřnozí
            přátelé!
          </p>
        </div>
        <hr />
        <News />
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
                  Do mojí čtyřnohé bandy patří boxerka Argana, a dva
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
  logo: file(name: {eq: "vetgalen-logo"}) {
    childImageSharp {
      gatsbyImageData(width: 246, height: 119, placeholder: NONE, layout: FIXED)
    }
  }
}
`
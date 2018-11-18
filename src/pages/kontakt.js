import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Timetable from 'components/Timetable'
import Icon from 'components/Icon'

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.data
    this.location = this.props.location
  }

  renderMap() {
    const galenGPS = SMap.Coords.fromWGS84(16.5828108, 49.23841)
    const map = new SMap(document.getElementById('map'), galenGPS, 16)
    map.addDefaultLayer(SMap.DEF_BASE).enable()
    map.addDefaultControls()

    //const sync = new SMap.Control.Sync({ bottomSpace: 30 })
    //map.addControl(sync)

    const layer = new SMap.Layer.Marker(undefined, { poiTooltip: true })
    map.addLayer(layer)
    layer.enable()

    const dataProvider = map.createDefaultDataProvider()
    dataProvider.setOwner(map)
    dataProvider.addLayer(layer)
    dataProvider.setMapSet(SMap.MAPSET_BASE)
    dataProvider.enable()

    const card = new SMap.Card()
    card.setSize(300, 150)
    card.getBody().innerHTML = `
        <address>
          <strong>Veterinární ordinace Galen</strong>
          <br />
          Podpěrova 439/2
          <br />
          621 00 Brno-Medlánky
          <br />
        </address>
      `

    const layer2 = new SMap.Layer.Marker()
    map.addLayer(layer2)
    layer2.enable()

    const marker = new SMap.Marker(galenGPS, 'galenGPS', {})
    marker.decorate(SMap.Marker.Feature.Card, card)
    layer2.addMarker(marker)

    const pathLayer = new SMap.Layer.Geometry()
    map.addLayer(pathLayer)
    pathLayer.enable()

    const path1 = [
      SMap.Coords.fromWGS84(16.5828108, 49.23841),
      SMap.Coords.fromWGS84(16.5824842, 49.2385353),
      SMap.Coords.fromWGS84(16.5826861, 49.2382228),
      SMap.Coords.fromWGS84(16.5833083, 49.2379775),
      SMap.Coords.fromWGS84(16.5838983, 49.2374172),
      SMap.Coords.fromWGS84(16.5845636, 49.2361142),
      SMap.Coords.fromWGS84(16.5845206, 49.2359322),
      SMap.Coords.fromWGS84(16.5872564, 49.2354417),
    ]

    const path2 = [
      SMap.Coords.fromWGS84(16.5833083, 49.2379775),
      SMap.Coords.fromWGS84(16.5835136, 49.2381911),
      SMap.Coords.fromWGS84(16.5852033, 49.2384433),
    ]

    const howToGetToUs1 = new SMap.Geometry(
      SMap.GEOMETRY_POLYLINE,
      null,
      path1,
      {
        color: '#4eb3ed',
        width: 4,
      }
    )
    const howToGetToUs2 = new SMap.Geometry(
      SMap.GEOMETRY_POLYLINE,
      null,
      path2,
      {
        color: '#ff0000',
        width: 4,
      }
    )
    pathLayer.addGeometry(howToGetToUs1)
    pathLayer.addGeometry(howToGetToUs2)
  }

  onScriptLoaded(renderer) {
    Loader.async = true
    Loader.load(null, { poi: true }, () => {
      if (typeof SMap === 'undefined') {
        return
      }
      renderer()
    })
  }

  loadScript() {
    const scriptElement = document.createElement('script')
    scriptElement.setAttribute('src', 'https://api.mapy.cz/loader.js')
    scriptElement.addEventListener(
      'load',
      this.onScriptLoaded.bind(this, this.renderMap)
    )
    document.head.appendChild(scriptElement)
  }

  componentDidMount() {
    if (typeof SMap === 'undefined') {
      this.loadScript()
    } else {
      this.renderMap()
    }
  }

  render() {
    const adresa = get(this.data, 'adresa.childImageSharp.resolutions')

    return (
      <Layout
        location={this.location}
        logo={get(this.data, 'logo')}
        icon={get(this.data, 'icon')}>
        <Meta site={get(this.data, 'site.meta')} />
        <Container>
          <h3>Kde nás najdete?</h3>
          <Container>
            <Row>
              <Col xs={{ order: 2 }} sm={{ order: 1, size: 6 }}>
                <address>
                  <span className="nowrap font-weight-bold">
                    <Icon name="map-marker" /> Veterinární ordinace Galen
                  </span>
                  <br />
                  Podpěrova 439/2
                  <br />
                  621 00 Brno-Medlánky
                  <br />
                  <span className="nowrap font-weight-bold">
                    <Icon name="envelope" />
                    &nbsp;
                    <a href="mailto:ordinace@vetgalen.cz">
                      ordinace@vetgalen.cz
                    </a>
                  </span>
                  <br />
                  <span className="nowrap font-weight-bold">
                    <Icon name="phone-square" /> 721 022 265‬
                  </span>
                </address>
              </Col>
              <Col
                xs={{ order: 1 }}
                sm={{ order: 2, size: 6 }}
                className="text-left">
                <Img resolutions={adresa} />
              </Col>
            </Row>
          </Container>
          <Container>
            <p>
              Odkazy:&nbsp;
              <a href="https://goo.gl/maps/TtFt2ZCFAeM2">Mapy Google</a>
              &nbsp;|&nbsp;
              <a href="https://mapy.cz/s/3dAHc">Mapy.cz</a>
            </p>
            <p>
              GPS souřadnice: <strong>49.23841N</strong>
              ,&nbsp;
              <strong>16.5828108E</strong>
            </p>
          </Container>
          <Container id="map" />
          <Timetable />
        </Container>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
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
    adresa: file(name: { eq: "adresa" }) {
      childImageSharp {
        resolutions(quality: 100, width: 150) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
  }
`

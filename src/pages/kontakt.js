import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState, useCallback, useMemo } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Map, { Marker, Popup, Source, Layer, NavigationControl } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'

import Layout from 'components/Layout'
import Timetable from 'components/Timetable'
import Icon from 'components/Icon'
import { siteMetadata } from '../../gatsby-config'

// Veterinary clinic coordinates
const CLINIC_COORDS = [16.5828108, 49.23841]

// Create manual paths data
const createRoutingPaths = () => {
  const path1 = [
    [16.5828108, 49.23841],
    [16.5824842, 49.2385353],
    [16.5826861, 49.2382228],
    [16.5833083, 49.2379775],
    [16.5838983, 49.2374172],
    [16.5845636, 49.2361142],
    [16.5845206, 49.2359322],
    [16.5872564, 49.2354417],
  ]

  const path2 = [
    [16.5833083, 49.2379775],
    [16.5835136, 49.2381911],
    [16.5852033, 49.2384433],
  ]

  return { path1, path2 }
}

const ContactPage = ({ data, location }) => {
  const [showPopup, setShowPopup] = useState(false)

  // Use OpenStreetMap tiles only
  const mapStyle = useMemo(() => ({
    version: 8,
    sources: {
      'osm-tiles': {
        type: 'raster',
        tiles: [
          'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        attribution: '© OpenStreetMap contributors'
      }
    },
    layers: [
      {
        id: 'osm-layer',
        type: 'raster',
        source: 'osm-tiles'
      }
    ]
  }), [])

  // Create routing paths data
  const routingData = useMemo(() => {
    const { path1, path2 } = createRoutingPaths()
    
    return {
      route1: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: path1
        }
      },
      route2: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: path2
        }
      }
    }
  }, [])

  // Layer styles
  const route1LayerStyle = {
    id: 'route-1',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#4eb3ed',
      'line-width': 4
    }
  }

  const route2LayerStyle = {
    id: 'route-2',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#ff0000',
      'line-width': 4
    }
  }

  const onMarkerClick = useCallback(() => {
    setShowPopup(true)
  }, [])

  return (
    <Layout location={location}>
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
                  <Icon name="phone-square" /> 721 022 265
                </span>
              </address>
            </Col>
            <Col
              xs={{ order: 1 }}
              sm={{ order: 2, size: 6 }}
              className="text-left">
              <GatsbyImage image={getImage(data.adresa)} alt="adresa" />
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
        <Container 
          style={{
            height: '400px',
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}
        >
          <Map
            mapStyle={mapStyle}
            style={{ width: '100%', height: '100%' }}
            initialViewState={{
              longitude: CLINIC_COORDS[0],
              latitude: CLINIC_COORDS[1],
              zoom: 15
            }}
            attributionControl={true}
          >
            {/* Navigation Controls */}
            <NavigationControl position="top-right" />
            
            {/* Routing paths */}
            <Source id="route-1" type="geojson" data={routingData.route1}>
              <Layer {...route1LayerStyle} />
            </Source>
            
            <Source id="route-2" type="geojson" data={routingData.route2}>
              <Layer {...route2LayerStyle} />
            </Source>
            
            {/* Clinic marker */}
            <Marker
              longitude={CLINIC_COORDS[0]}
              latitude={CLINIC_COORDS[1]}
              color="#4eb3ed"
              onClick={onMarkerClick}
            />
            
            {/* Popup */}
            {showPopup && (
              <Popup
                longitude={CLINIC_COORDS[0]}
                latitude={CLINIC_COORDS[1]}
                anchor="bottom"
                offset={25}
                onClose={() => setShowPopup(false)}
              >
                <div style={{ padding: '10px' }}>
                  <strong>Veterinární ordinace Galen</strong><br/>
                  Podpěrova 439/2<br/>
                  621 00 Brno-Medlánky
                </div>
              </Popup>
            )}
          </Map>
        </Container>
        <Timetable />
      </Container>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <>
    <title>Kontakt - {siteMetadata.title}</title>
    <meta name="description" content="Veterinární ordinace v Brně-Medlánkách/Řečkovicích, Podpěrova 439/2, ordinace@vetgalen.cz, +420 721 022 265." />
    <meta name="keywords" content="veterina, veterinární ordinace, Medlánky" />
  </>
)

export const pageQuery = graphql`query ContactPageQuery {
  adresa: file(name: {eq: "adresa"}) {
    childImageSharp {
      gatsbyImageData(height: 115, width: 150, layout: FIXED)
    }
  }
}
`

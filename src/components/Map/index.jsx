import React, { useState, useCallback, useMemo } from 'react'
import Map, { Marker, Popup, Source, Layer, NavigationControl } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'

const CLINIC_COORDS = [16.5828108, 49.23841]

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

const route1LayerStyle = {
  id: 'route-1',
  type: 'line',
  layout: { 'line-join': 'round', 'line-cap': 'round' },
  paint: { 'line-color': '#4eb3ed', 'line-width': 4 },
}

const route2LayerStyle = {
  id: 'route-2',
  type: 'line',
  layout: { 'line-join': 'round', 'line-cap': 'round' },
  paint: { 'line-color': '#ff0000', 'line-width': 4 },
}

const ClinicMap = () => {
  const [showPopup, setShowPopup] = useState(false)

  const mapStyle = useMemo(
    () => ({
      version: 8,
      sources: {
        'osm-tiles': {
          type: 'raster',
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '© OpenStreetMap contributors',
        },
      },
      layers: [{ id: 'osm-layer', type: 'raster', source: 'osm-tiles' }],
    }),
    []
  )

  const routingData = useMemo(
    () => ({
      route1: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: path1 } },
      route2: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: path2 } },
    }),
    []
  )

  const onMarkerClick = useCallback(() => setShowPopup(true), [])

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
      <Map
        mapStyle={mapStyle}
        style={{ width: '100%', height: '100%' }}
        initialViewState={{ longitude: CLINIC_COORDS[0], latitude: CLINIC_COORDS[1], zoom: 15 }}
        attributionControl={true}
      >
        <NavigationControl position="top-right" />
        <Source id="route-1" type="geojson" data={routingData.route1}>
          <Layer {...route1LayerStyle} />
        </Source>
        <Source id="route-2" type="geojson" data={routingData.route2}>
          <Layer {...route2LayerStyle} />
        </Source>
        <Marker
          longitude={CLINIC_COORDS[0]}
          latitude={CLINIC_COORDS[1]}
          color="#4eb3ed"
          onClick={onMarkerClick}
        />
        {showPopup && (
          <Popup
            longitude={CLINIC_COORDS[0]}
            latitude={CLINIC_COORDS[1]}
            anchor="bottom"
            offset={25}
            onClose={() => setShowPopup(false)}
          >
            <div style={{ padding: '10px' }}>
              <strong>Veterinární ordinace Galen</strong>
              <br />
              Podpěrova 439/2
              <br />
              621 00 Brno-Medlánky
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}

export default ClinicMap

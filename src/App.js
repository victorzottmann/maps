import React, { useState } from "react"
import ReactMapGl, { Marker } from "react-map-gl"

import cityData from "./data/chicago-parks.json"

function App() {
  const mapboxToken = process.env.REACT_APP_MAPBOX_KEY
  const mapStyle = "mapbox://styles/vzottmann/ckrdffg052fde18o24frcr99x"

  let coordinates = {
    chicago: {
      latitude: 41.893748,
      longitude: -87.661557,
    },
    sydney: {
      latitude: -33.855369,
      longitude: 151.208774,
    },
  }

  const [viewport, setviewport] = useState({
    latitude: coordinates.chicago.latitude,
    longitude: coordinates.chicago.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  })

  return (
    <>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={mapboxToken}
        onViewportChange={(viewport) => {
          setviewport(viewport)
        }}
        mapStyle={mapStyle}
      >
        {cityData.features.map((feature) => (
          <Marker
            key={feature.properties.title}
            latitude={feature.geometry.coordinates[1]}
            longitude={feature.geometry.coordinates[0]}
          >
            <div>🙂</div>
          </Marker>
        ))}
      </ReactMapGl>
    </>
  )
}

export default App

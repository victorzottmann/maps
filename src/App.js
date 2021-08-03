import React, { useState } from "react"
import ReactMapGl, { Marker } from "react-map-gl"

import cityData from "./data/chicago-parks.json"
import cityData2 from "./data/messing-around.json"

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
    latitude: coordinates.sydney.latitude,
    longitude: coordinates.sydney.longitude,
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
        {cityData2.features.map((feature) => (
          <Marker
            key={feature.properties.title}
            latitude={feature.geometry.coordinates[1]}
            longitude={feature.geometry.coordinates[0]}
          >
            {/* <div>🙂</div> */}
            <button>🙂</button>
          </Marker>
        ))}
      </ReactMapGl>
    </>
  )
}

export default App

import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGl from "react-map-gl"

import "./App.css"

function App() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  let coordinates = {
    // latitude: -87.661557,
    // longitude: 41.893748,
    chicago: {
      latitude: 41.893748,
      longitude: -87.661557,
    },
    sydney: {
      latitude: -33.855369,
      longitude: 151.208774,
    },
  }

  const [lat, setLat] = useState(coordinates.sydney.latitude)
  const [lng, setLng] = useState(coordinates.sydney.longitude)
  const [zoom, setZoom] = useState(12.2)

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/vzottmann/ckrdffg052fde18o24frcr99x",
      center: [lng, lat],
      zoom: zoom,
    })

    if (!map.current) return // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  // console.log(e)
  // let features = map.queryRenderedFeatures(e.point, {
  //   layers: ["paranormal-locations"],
  // })
  // if (!features.length) {
  //   return
  // }
  // let feature = features[0]
  // let popup = new mapboxgl.Popup({ offset: [0, -15] })
  //   .setLngLat(feature.geometry.coordinates)
  //   .setHTML(
  //     "<h3>" +
  //       feature.properties.title +
  //       "</h3>" +
  //       "<p>" +
  //       feature.properties.description +
  //       "</p>"
  //   )
  //   .addTo(map)

  console.log(map.current.on())

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default App

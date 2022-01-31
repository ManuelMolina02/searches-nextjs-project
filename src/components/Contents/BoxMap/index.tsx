import { memo, useEffect, useState } from "react"
import { Circle, MapContainer } from "react-leaflet"
import { CustomTileLayer } from "./customTileLayer"
import styles from './styles.module.scss'

const BoxMap = ({ location, defaultPosition }) => {

  let [map, setMap] = useState(null)

  function handleSetView() {
    if (map && location) {
      map.flyTo(location, 4, {
        duration: 3
      })
    }
  }
  useEffect(() => handleSetView, [location])


  return (
    <div className={styles.MapContainer}>
      <MapContainer
        center={location}
        whenCreated={map => setMap(map)}
        style={{ width: 610, height: 450 }}

        zoom={4}
        minZoom={2}
        maxZoom={7}

        dragging={false}
        trackResize={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <CustomTileLayer />

        <Circle center={location} pathOptions={{ fillColor: '#0285ff81' }} radius={400000} />

      </MapContainer>
    </div>
  )
}

export default memo(BoxMap)
import { memo, useEffect, useState } from "react"
import { Circle, MapContainer } from "react-leaflet"
import { CustomTileLayer } from "./customTileLayer"
import styles from './styles.module.scss'

const BoxMap = ({ location }) => {

  const [map, setMap] = useState(null)

  function handleSetView() {
    if (map && location) {
      map.flyTo(location, 4, {
        duration: 3
      })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleSetView, [location])

  const fillBlueOptions = { fillColor: 'blue' }

  return (
    <div className={styles.MapContainer}>
      <MapContainer
        center={location}
        whenCreated={map => setMap(map)}
        style={{ width: 610, height: 460 }}

        zoom={6}
        minZoom={2}
        maxZoom={7}

        dragging={false}
        trackResize={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        zoomControl={false}
      >

        <CustomTileLayer />
        <Circle center={location} pathOptions={fillBlueOptions} radius={200000} />

      </MapContainer>
    </div>
  )
}

export default memo(BoxMap)
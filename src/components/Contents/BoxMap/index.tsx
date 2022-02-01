import { MapContainer, GeoJSON } from "react-leaflet"
import { CustomTileLayer } from "./customTileLayer"
import styles from './styles.module.scss'

const BoxMap = ({ id, geoJSON }) => {

  const dataCountrie = geoJSON.filter(data => data.id === id)

  return (
    <div className={styles.MapContainer}>
      <MapContainer
        center={[-26.2612563, -60.466212]}
        style={{ width: 620, height: 460 }}

        zoom={3}
        minZoom={2}
        maxZoom={7}

        dragging={false}
        trackResize={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <CustomTileLayer />

        <GeoJSON
          key={id}
          data={dataCountrie as any}

          style={{
            weight: 1.6,
            fillOpacity: .3,
          }}
        />

      </MapContainer>
    </div>
  )
}

export default BoxMap
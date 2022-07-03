import { MapContainer, GeoJSON, TileLayer } from "react-leaflet"
import { geoJsonProps } from "../../../services/types"
import styles from './boxMap.module.scss'

interface boxMapProps {
  id: string,
  bg: string,
  mapBoxData: {
    mapUrl: string,
    dataGeoJson: geoJsonProps[]
  }
}

const BoxMap = ({ id, bg, mapBoxData }: boxMapProps) => {

  const { mapUrl, dataGeoJson } = mapBoxData
  const dataCountrie = dataGeoJson.filter(data => data.id === id)

  return (
    <div className={styles.MapContainer} style={{ backgroundColor: bg }}>
      <MapContainer
        center={[-26.2612563, -60.466212]}
        style={{ width: 620, height: 460, }}
        zoom={3}
        minZoom={2}
        maxZoom={7}

        dragging={false}
        trackResize={true}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          url={mapUrl}
        />

        <div className={styles.animation} key={id}>
          <GeoJSON
            data={dataCountrie as any}

            style={{
              weight: 1.6,
              fillOpacity: .3,
              interactive: true,

            }}
          />
        </div>

      </MapContainer>
    </div>
  )
}

export default BoxMap
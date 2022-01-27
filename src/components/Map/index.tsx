import ReactMapGL, { Marker } from 'react-map-gl';

import styles from './styles.module.scss'

interface MapProps {
  mapCoordinates: {
    latitude: number,
    longitude: number,
    zoom: number,
    marker_position: {
      setTop: number,
      setLeft: number
    }
  }
}

export function Map({ mapCoordinates }: MapProps) {

  const accessToken = 'pk.eyJ1IjoibWFudWVsbW9saW5hMiIsImEiOiJja2djbGc1cmMwMnJvMnJwNzJhMXVyaTE5In0.Yp3bxi5Yl5zfiGUQok193g'
  const style = 'mapbox://styles/manuelmolina2/ckyx0c39b001l14o84tkdahzp'

  const viewport = {
    width: "96%",
    height: "96%",
    latitude: mapCoordinates.latitude, // eixo Y
    longitude: mapCoordinates.longitude, // eixo X
    zoom: mapCoordinates.zoom,

  }


  return (
    <div className={styles.MapContainer}>

      <ReactMapGL
        {...viewport}
        mapStyle={style}
        mapboxApiAccessToken={accessToken}
        className={styles.MapConfigs}
      >
        <Marker
          className={styles.mapMarker}


          latitude={mapCoordinates.latitude}
          longitude={mapCoordinates.longitude}

          offsetTop={mapCoordinates.marker_position.setTop}
          offsetLeft={mapCoordinates.marker_position.setLeft}



        >
          {/* <img src="/images/map-marker.svg" style={{ width: '26px' }} /> */}


        </Marker>

      </ReactMapGL>

    </div>
  );
}
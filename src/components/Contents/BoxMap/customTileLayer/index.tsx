import { TileLayer } from "react-leaflet"

export function CustomTileLayer() {

  const apiKey = 'pk.eyJ1IjoibWFudWVsbW9saW5hMiIsImEiOiJja2djbGc1cmMwMnJvMnJwNzJhMXVyaTE5In0.Yp3bxi5Yl5zfiGUQok193g'
  const userId = 'manuelmolina2'
  const styledMap = 'ckz3iba2b001a15nl5e8afl24'

  return apiKey ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${userId}/${styledMap}/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
    />

  ) : (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

  )
}
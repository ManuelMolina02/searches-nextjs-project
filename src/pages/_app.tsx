import { AppProps } from 'next/app'
import '../styles/globals.scss'
import 'mapbox-gl/dist/mapbox-gl';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

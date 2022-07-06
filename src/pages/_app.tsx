import { AppProps } from 'next/app'
import { DefineThemeProvider } from '../contexts/useTheme'
import '../styles/globals.scss'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <DefineThemeProvider>
        <Component {...pageProps} />

      </DefineThemeProvider>

    </>
  )
}

export default MyApp

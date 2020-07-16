import Header from 'components/Header'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme'
import { ThemeProvider } from 'emotion-theming'
import getConfig from 'next/config'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Header/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
  }

  const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/resources`)
    const resource = await res.json()

    return { resource }
}


  
  export default MyApp
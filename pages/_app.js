import Header from 'components/Header'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme'
import { ThemeProvider } from 'emotion-theming'



function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Header isDark />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
  }


  
  export default MyApp
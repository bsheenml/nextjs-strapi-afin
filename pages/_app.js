import Header from 'components/Header'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'

import { ThemeProvider } from 'emotion-theming'

const theme = {
    colors: {
        primary: '#ff0000'
    }
}

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
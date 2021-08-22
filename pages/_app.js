import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from '../store'
import theme from '../styles/theme'
import "../styles/scss/app.scss";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp

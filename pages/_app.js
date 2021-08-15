import { Provider } from 'react-redux'
import store from '../store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

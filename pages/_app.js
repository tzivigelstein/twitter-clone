import { AppContainer } from 'components/Globals'
import AppState from 'context/app/appState'
import AuthState from 'context/auth/authState'
import Head from 'next/head'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <AppContainer>
          <Head>
            <link rel="icon" href="/resources/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </AppContainer>
      </AppState>
    </AuthState>
  )
}

export default MyApp

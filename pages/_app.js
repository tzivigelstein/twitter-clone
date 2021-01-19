import AppState from '../context/app/appState'
import AuthState from '../context/auth/AuthState'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Head>
          <title>Twitter</title>
          <link rel="icon" href="/resources/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
}

export default MyApp

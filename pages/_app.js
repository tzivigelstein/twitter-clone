import AppState from 'context/app/appState'
import AuthState from 'context/auth/authState'
import Head from 'next/head'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Head>
          <link rel="icon" href="/resources/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
}

export default MyApp

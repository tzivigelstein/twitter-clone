import { useContext, useEffect } from 'react'
import Spinner from 'components/Spinner/Spinner'
import authContext from 'context/auth/authContext'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
import Head from 'next/head'

const SplashContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: 6rem;
  }
`

const Index = () => {
  const { loading } = useContext(authContext)

  const router = useRouter()

  const user = useUser()

  useEffect(() => {
    user ? router.replace('/home') : router.replace('/login')
  }, [])

  return (
    <>
      <Head>
        <title>Twitter</title>
      </Head>
      {loading ? (
        <SplashContainer>
          <Spinner />
        </SplashContainer>
      ) : (
        <SplashContainer>
          <img src="/resources/favicon.png" alt="" />
        </SplashContainer>
      )}
    </>
  )
}

export default Index

import React, { useContext, useEffect } from 'react'
import Spinner from 'components/Spinner/Spinner'
import authContext from 'context/auth/authContext'
import styled from '@emotion/styled'
import { ExternalContainer, Mobile } from 'components/Globals'
import { onAuthStateChanged } from 'firebase/client'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'

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
      {loading ? (
        <ExternalContainer>
          <Mobile>
            <SplashContainer>
              <Spinner />
            </SplashContainer>
          </Mobile>
        </ExternalContainer>
      ) : (
        <ExternalContainer>
          <Mobile>
            <SplashContainer>
              <img src="/resources/favicon.png" alt="" />
            </SplashContainer>
          </Mobile>
        </ExternalContainer>
      )}
    </>
  )
}

export default Index

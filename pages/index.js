import React, { useContext, useEffect } from 'react'
import Spinner from '../components/Spinner/Spinner'
import authContext from '../context/auth/authContext'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

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
  const { auth,token, loading, authUser } = useContext(authContext)
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authUser()
    }
    if (!auth && !loading) {
      router.push('/login')
    } else if (auth && !loading) {
      router.push('/home')
    }
  }, [])

  return (
    <>
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

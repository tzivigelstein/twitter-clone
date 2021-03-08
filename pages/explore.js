import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
import { Container } from 'components/Globals'
import { SearchIcon } from 'components/Icons'
import styled from '@emotion/styled'

const Explore = () => {
  const router = useRouter()

  const user = useUser()
  useEffect(() => {
    user === null && router.replace('/login')
  }, [user])
  const layoutConfig = {
    title: 'Explore',
    home: false,
    explore: true,
    notifications: false,
    directs: false,
  }

  const InputContainer = styled.div`
    display: flex;
    background-color: rgb(37, 51, 65);
    margin: 0 auto;
    width: 60%;
    border-radius: 9999px;
    padding: 0.35rem;
    justify-content: space-around;
    align-items: center;
  `

  const IconContainer = styled.div`
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 15px;

    &::placeholder {
      color: #8899a6;
    }
  `
  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
      </Head>
      <Layout layoutConfig={layoutConfig}>
        <Container>
          <InputContainer>
            <IconContainer>
              <SearchIcon width={18.75} />
            </IconContainer>
            <Input placeholder="Search Twitter" type="text" />
          </InputContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Explore

import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
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

  return (
    <>
      <Head>
        <title>Explore / Twitter</title>
      </Head>
      <Layout layoutConfig={layoutConfig}></Layout>
    </>
  )
}

export default Explore

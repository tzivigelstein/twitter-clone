import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const ConnectionLost = () => {
  const Container = styled.div`
    margin: 0 1rem;
  `

  const CloudContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.5rem;
  `

  const Helper = styled.p`
    font-size: 14px;
    color: #8899a6;
    text-align: center;
    line-height: 1.3;
  `

  const Refresh = styled.div`
    border-radius: 60px;
    background: #1da0f2;
    width: 118px;
    padding: 0.5rem 0;
    margin: 0 auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const RefreshText = styled.span`
    color: #fff;
    font-size: 14px;
    margin-left: 0.6rem;
    font-weight: bold;
  `

  return (
    <Container>
      <CloudContainer>
        <svg
          viewBox="0 0 24 24"
          width="35"
          height="35"
          stroke="#8899a6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </CloudContainer>
      <Helper>Looks like you lost your connection. Please check it and try again.</Helper>
      <Link href="/">
        <Refresh href="/">
          <svg
            viewBox="0 0 24 24"
            width="21"
            height="21"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          <RefreshText>Try again</RefreshText>
        </Refresh>
      </Link>
    </Container>
  )
}

export default ConnectionLost

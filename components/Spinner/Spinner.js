import React from 'react'
import styled from '@emotion/styled'

const SpinnerExternalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`

const SpinnerContainer = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  margin: 2rem auto;
`

const Spinner1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.3rem solid #1da0f2;
  border-right: 0.3rem solid transparent;
  animation: 1.5s infinite linear spin-1;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

  @keyframes spin-1 {
    to {
      transform: rotate(360deg);
    }
  }
`

const Spinner2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid #8899a6;
  border-left: 0.3rem solid #8899a6;
  border-top: 0.3rem solid #8899a6;
  animation: 0.7s infinite linear spin-2;
  position: absolute;
  top: 0;
  left: 0;

  @keyframes spin-2 {
    to {
      transform: rotate(-360deg);
    }
  }
`

const Spinner = () => {
  return (
    <SpinnerExternalContainer>
      <SpinnerContainer>
        <Spinner1></Spinner1>
        <Spinner2></Spinner2>
      </SpinnerContainer>
    </SpinnerExternalContainer>
  )
}

export default Spinner

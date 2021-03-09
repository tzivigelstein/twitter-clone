import styled from '@emotion/styled'

const Spinner1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0.3rem solid #1da1f2;
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

const Spinner = ({ width }) => {
  const SpinnerContainer = styled.div`
    width: ${width};
    height: ${width};
    position: relative;
    margin: 0 auto;
  `
  return (
    <SpinnerContainer>
      <Spinner1></Spinner1>
      <Spinner2></Spinner2>
    </SpinnerContainer>
  )
}

export default Spinner

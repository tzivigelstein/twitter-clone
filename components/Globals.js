import styled from '@emotion/styled'

export const ExternalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Mobile = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 414px;
  max-height: 851px;
  position: relative;
  background-color: #15202b;
  overflow-y: hidden;
  border-radius: 8px;
`

export const Container = styled.main`
  margin: 50px 0;
  overflow-y: auto;
  max-height: calc(100% - 103px);
`

export const Title = styled.h1`
  text-align: center;
  font-size: 23px;
  margin: 28px 0 9px 0;
`

export const FormContainer = styled.div``

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const InputHelper = styled.div`
  span {
    padding: 5px 5px 0 5px;
    color: #8899a6;
    font-size: 13px;
    margin: 0;
  }
`

export const InputContainer = styled.div`
  padding: 10px 15px;
  width: 100%;
`

export const Border = styled.div`
  border: 1px solid #3d5466;
  border-radius: 4px;
  min-height: 59px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 2px 5px 5px 5px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`

export const Button = styled.button`
  width: 95%;
  margin: 10px;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 1rem 0;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background-color: #1da0f2;

  &:disabled {
    opacity: 0.5;
    background-color: #1da1f2;
  }
`

export const ExternalLogin = styled.div`
  width: 70%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`

export const LoginGoogle = styled.button`
  width: 100%;
  outline: none;
  border: none;
  background-color: #eee;
  border-radius: 4px;
  color: #222;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  img {
    width: 1.3rem;
    margin-right: 1.5rem;
  }
`
export const LoginGithub = styled.button`
  width: 100%;
  outline: none;
  border: none;
  background-color: #222;
  color: #eee;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(230, 230, 230, 0.3);
  cursor: pointer;

  img {
    width: 1.3rem;
    filter: invert(100%);
    margin-right: 1.5rem;
  }
`

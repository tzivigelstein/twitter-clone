import { useState, useContext, useEffect } from 'react'
import {
  FormContainer,
  Form,
  InputContainer,
  Border,
  InputHelper,
  Input,
  Button,
  ExternalLogin,
  LoginGoogle,
} from 'components/Globals'
import authContext from 'context/auth/authContext'
import FormHelper from 'components/FormHelper'
import { loginWithGoogle } from 'firebase/client'
import { useRouter } from 'next/router'

const LoginForm = () => {
  const router = useRouter()

  const { user } = useContext(authContext)

  const [data, setData] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    user && router.push('/home')
  }, [])

  const handleClick = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle()
      router.push('/home')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <Border>
            <InputHelper>
              <span>Phone, email, or username</span>
            </InputHelper>
            <Input
              onChange={handleChange}
              name="username"
              id="username"
              type="text"
              value={data.username}
            />
          </Border>
        </InputContainer>
        <InputContainer>
          <Border>
            <InputHelper>
              <span>Password</span>
            </InputHelper>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
              value={data.password}
            />
          </Border>
        </InputContainer>
        <Button
          disabled={data.username === null || data.username === '' || data.password === null || data.password === ''}
          onClick={handleClick}
        >
          Log in
        </Button>
      </Form>
      <FormHelper helper="Sign up for Twitter" redirect="/signup/flow" />
      <ExternalLogin>
        <LoginGoogle onClick={handleLoginGoogle}>
          <img src="/resources/google.png" alt="" /> <span>Login with Google</span>
        </LoginGoogle>
      </ExternalLogin>
    </FormContainer>
  )
}

export default LoginForm

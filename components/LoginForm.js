import React, { useState, useContext, useEffect } from 'react'
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
  LoginGithub,
  ExternalContainer,
} from './Globals'
import styles from './form.module.css'
import authContext from '../context/auth/authContext'
import FormHelper from './FormHelper'
import { loginWithGoogle, loginWithGithub } from '../firebase/client'
import { useRouter } from 'next/router'

const LoginForm = () => {
  const router = useRouter()

  const { user, setUser } = useContext(authContext)
  const [focus, setFocus] = useState({
    username: false,
    password: false,
  })

  const [data, setData] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    user && router.push('/home')
  }, [])

  const handleClick = e => {
    e.preventDefault()
    console.log(data)
  }

  const handleFocus = e => {
    setFocus({
      ...focus,
      [e.target.name]: true,
    })
  }

  const handleBlur = () => {
    setFocus({
      username: false,
      password: false,
    })
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleLoginGoogle = async () => {
    try {
      const user = await loginWithGoogle()
      setUser(user)
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <Border className={focus.username ? `${styles.active_border}` : ''}>
            <InputHelper className={focus.username ? `${styles.active_text}` : ''}>
              <span>Phone, email, or username</span>
            </InputHelper>
            <Input
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="username"
              id="username"
              type="text"
              value={data.username}
            />
          </Border>
        </InputContainer>
        <InputContainer>
          <Border className={focus.password ? `${styles.active_border}` : ''}>
            <InputHelper className={focus.password ? `${styles.active_text}` : ''}>
              <span>Password</span>
            </InputHelper>
            <Input
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
        <LoginGithub>
          <img src="/resources/github.png" alt="" /> <span>Login with Github</span>
        </LoginGithub>
      </ExternalLogin>
    </FormContainer>
  )
}

export default LoginForm

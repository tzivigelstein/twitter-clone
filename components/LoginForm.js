import React, { useState, useContext } from 'react'
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

const LoginForm = () => {
  const {} = useContext(authContext)
  const [focus, setFocus] = useState({
    username: false,
    password: false,
  })

  const [data, setData] = useState({
    username: '',
    password: '',
  })

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
        <LoginGoogle>
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

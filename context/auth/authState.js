import React, { useReducer } from 'react'
import authReducer from './authReducer'
import authContext from './authContext'
import axiosClient from '../../config/axiosClient'
import authToken from '../../config/authToken'

const AppState = ({ children }) => {
  const initialState = {
    auth: false,
    user: null,
    token: typeof window != 'undefined' ? localStorage.getItem('token') : '',
    msg: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const authUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      authToken(token)
    }

    try {
      const q = await axiosClient.get('/api/auth')
      if (q.data.user) {
        dispatch({
          type: AUTH_USER,
          payload: q.data.user,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signIn = async () => {
    try {
      const q = axiosClient.post('/api/users', data)
      console.log(q.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logIn = async () => {
    try {
      const q = axiosClient.post('/api/users', data)
      console.log(q.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {}

  return (
    <authContext.Provider
      value={{
        auth: state.auth,
        user: state.user,
        token: state.token,
        msg: state.msg,
        loading: state.loading,
        authUser,
        signIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AppState

import { useReducer } from 'react'
import authReducer from 'context/auth/authReducer'
import authContext from 'context/auth/authContext'
import { SET_USER, SET_USER_ERROR } from 'types'

const AppState = ({ children }) => {
  const initialState = {
    user: undefined,
    msg: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const setUser = user => {
    try {
      dispatch({
        type: SET_USER,
        payload: user,
      })
    } catch (error) {
      dispatch({
        type: SET_USER_ERROR,
      })
    }
  }

  const logOut = () => {}

  return (
    <authContext.Provider
      value={{
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        setUser,
        logOut,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AppState

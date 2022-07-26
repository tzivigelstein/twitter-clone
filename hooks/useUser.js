import { useContext, useEffect } from 'react'
import authContext from 'context/auth/authContext'
import { onAuthStateChanged } from 'firebase/client'

const useUser = () => {
  const { user, setUser } = useContext(authContext)
  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])
  return user
}

export default useUser

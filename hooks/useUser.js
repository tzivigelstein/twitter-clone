import { useContext, useEffect } from 'react'
import authContext from 'context/auth/authContext'
import { onAuthStateChanged } from 'firebase/client'

const useUser = () => {
  const { user, setUser } = useContext(authContext)
  useEffect(() => {
    onAuthStateChanged(user => setUser(user))
  }, [])
  return user
}

export default useUser

import firebase from 'firebase'
import cookie from 'js-cookie'

const firebaseConfig = {
  apiKey: 'AIzaSyD1V9b6HQ20zdS94Gn0gd9CdGxUm5T4bgo',
  authDomain: 'twitter-66625.firebaseapp.com',
  projectId: 'twitter-66625',
  storageBucket: 'twitter-66625.appspot.com',
  messagingSenderId: '799819393422',
  appId: '1:799819393422:web:c7021c8d0eb2355fb31cdf',
  measurementId: 'G-G11TZ82KHV',
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const mapUserFromFirebaseAuth = data => {
  const { displayName, email, photoURL, uid, username } = data
  return {
    displayName,
    email,
    photoURL,
    uid,
    username,
  }
}

export const onAuthStateChanged = onChange => {
  return firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const username = (
        await firebase.firestore().collection('users').where('email', '==', user.email).get('username')
      ).docs[0].data().username

      const token = await user.getIdToken()
      cookie.set('token', token, { expires: 14 })
      const normalizedUser = user ? mapUserFromFirebaseAuth({ ...user, username }) : null
      onChange(normalizedUser)
    }
  })
}

export const loginWithGithub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  const res = await firebase.auth().signInWithPopup(githubProvider)
  return res
}

export const loginWithGoogle = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const data = await firebase.auth().signInWithPopup(googleProvider)

  return data
}

export const uploadImage = file => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  return ref.put(file)
}

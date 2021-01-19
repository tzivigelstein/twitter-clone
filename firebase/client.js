import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD1V9b6HQ20zdS94Gn0gd9CdGxUm5T4bgo',
  authDomain: 'twitter-66625.firebaseapp.com',
  projectId: 'twitter-66625',
  storageBucket: 'twitter-66625.appspot.com',
  messagingSenderId: '799819393422',
  appId: '1:799819393422:web:c7021c8d0eb2355fb31cdf',
  measurementId: 'G-G11TZ82KHV',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const loginWithGithub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  const res = await firebase.auth().signInWithPopup(githubProvider)
  return res
}

export const loginWithGoogle = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const res = await firebase.auth().signInWithPopup(googleProvider)

  const { additionalUserInfo } = res
  const { username, profile } = additionalUserInfo
  const { avatar_url } = profile
  return {
    avatar: avatar_url,
    username,
  }
}

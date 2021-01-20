import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1V9b6HQ20zdS94Gn0gd9CdGxUm5T4bgo",
  authDomain: "twitter-66625.firebaseapp.com",
  projectId: "twitter-66625",
  storageBucket: "twitter-66625.appspot.com",
  messagingSenderId: "799819393422",
  appId: "1:799819393422:web:c7021c8d0eb2355fb31cdf",
  measurementId: "G-G11TZ82KHV",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (data) => {
  const { displayName, email, photoURL } = data;
  return {
    displayName,
    email,
    photoURL,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuth(user);
    onChange(normalizedUser);
  });
};

export const loginWithGithub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  const res = await firebase.auth().signInWithPopup(githubProvider);
  return res;
};

export const loginWithGoogle = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const data = await firebase.auth().signInWithPopup(googleProvider);

  return data;
};

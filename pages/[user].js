import Nav from 'components/Nav'
import ProfileHeader from 'components/ProfileHeader'
import admin from 'firebase/admin'
import { mapUserFromFirebaseToken } from 'firebase/client'
import nookies from 'nookies'
import styles from '../styles/profile.module.css'

export default function profile({ user }) {
  return (
    <>
      <ProfileHeader user={user} />
      <div>
        <div className={styles.cover}></div>
        <img src={user.photoURL} alt={`${user.displayName}'s profile picture`} />
        <span>{user.displayName}</span>
        <span>@{user.username}</span>
      </div>
      <Nav
        layoutConfig={{
          home: false,
          explore: false,
        }}
      />
    </>
  )
}

// get user ssr
export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context)
    const user = await admin.auth().verifyIdToken(cookies.token, true)

    return {
      props: { user: mapUserFromFirebaseToken(user) },
    }
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()

    return { props: {} }
  }
}

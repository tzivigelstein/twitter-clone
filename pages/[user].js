import { Container } from 'components/Globals'
import Nav from 'components/Nav'
import ProfileHeader from 'components/ProfileHeader'
import Tweet from 'components/Tweet'
import admin from 'firebase/admin'
import { mapUserFromFirebaseToken } from 'firebase/client'
import { getTweetData } from 'helpers'
import nookies from 'nookies'
import styles from '../styles/profile.module.css'

export default function profile({ user, tweets }) {
  return (
    <div style={{ height: '100%' }}>
      <ProfileHeader user={user} />
      <div style={{ overflowY: 'auto', height: '100%' }}>
        <div className={styles.cover}></div>
        <img className={styles.userPicture} src={user.photoURL} alt={`${user.displayName}'s profile picture`} />
        <div>
          <div className={styles.container} style={{ display: 'grid' }}>
            <span className={styles.userDisplayName}>{user.displayName}</span>
            <span className={styles.userUsername}>@{user.username}</span>
          </div>
          <Container>
            {tweets && tweets.map(tweet => <Tweet key={tweet.id} tweet={getTweetData(tweet, user)} />)}
          </Container>
        </div>
      </div>
      <Nav
        layoutConfig={{
          home: false,
          explore: false,
        }}
      />
    </div>
  )
}

// get user ssr
export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context)
    const user = await admin.auth().verifyIdToken(cookies.token, true)

    // get all tweets from the user
    const tweets = await admin
      .firestore()
      .collection('tweets')
      .where('userId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          const data = doc.data()
          const id = doc.id
          return {
            ...data,
            id,
            createdAt: { seconds: data.createdAt.seconds, nanoseconds: data.createdAt.nanoseconds },
          }
        })
      )

    return {
      props: { user: mapUserFromFirebaseToken(user), tweets: JSON.parse(JSON.stringify(tweets)) },
    }
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()

    return { props: {} }
  }
}

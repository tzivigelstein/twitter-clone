import { Container } from 'components/Globals'
import Nav from 'components/Nav'
import ProfileHeader from 'components/ProfileHeader'
import Tweet from 'components/Tweet'
import admin from 'firebase/admin'
import { mapUserFromFirebaseAuth } from 'firebase/client'
import { getTweetData } from 'helpers'
import styles from '../styles/profile.module.css'

export default function Profile({ user, tweets }) {
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
            {tweets ? (
              tweets.map(tweet => <Tweet key={tweet.id} tweet={getTweetData(tweet, user)} />)
            ) : (
              <p>Could not load tweets</p>
            )}
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

export async function getServerSideProps(context) {
  const mapTweetsToObject = async doc => {
    const data = doc.data()
    const id = doc.id
    const userId = data.userId

    const userDoc = await admin.firestore().collection('users').doc(userId).get()
    const userData = userDoc.data()
    const username = userData.username

    return {
      ...data,
      id,
      username,
      createdAt: { seconds: data.createdAt.seconds, nanoseconds: data.createdAt.nanoseconds },
    }
  }

  try {
    const username = context.query.user
    const user = (await admin.firestore().collection('users').where('username', '==', username).get()).docs[0].data()

    const tweets = await admin
      .firestore()
      .collection('tweets')
      .where('userId', '==', user.uid)
      .get()
      .then(async snapshot => {
        const promises = snapshot.docs.map(mapTweetsToObject)
        return await Promise.all(promises)
      })
      .catch(console.log)

    return {
      props: {
        user: user && mapUserFromFirebaseAuth(user),
        tweets: tweets
          ? JSON.parse(JSON.stringify(tweets.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)))
          : null,
      },
    }
  } catch (err) {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()

    return { props: {} }
  }
}

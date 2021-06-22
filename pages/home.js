import { useContext, useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Tweet from 'components/Tweet'
import { Container } from 'components/Globals'
import { NewIcon } from 'components/Icons'
import ConnectionLost from 'components/ConnectionLost'
import appContext from 'context/app/appContext'
import Spinner from 'components/Spinner/Spinner'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
import Head from 'next/head'

const Index = () => {
  const { loading, listenLatestTweets } = useContext(appContext)

  const router = useRouter()

  const user = useUser()

  const [tweets, setTweets] = useState(null)

  useEffect(() => {
    user === null && router.replace('/login')
  }, [user])

  useEffect(() => {
    let unsubscribe

    if (user) {
      unsubscribe = listenLatestTweets(setTweets)
    }

    return () => unsubscribe && unsubscribe()
  }, [user])

  const layoutConfig = {
    title: 'Home',
    home: true,
    explore: false,
    notifications: false,
    directs: false,
  }

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <Layout layoutConfig={layoutConfig}>
        {user ? (
          <>
            {tweets ? (
              <Container>
                {tweets.map(tweet => (
                  <Tweet
                    liked={tweet.likes.includes(user.uid)}
                    key={tweet.id}
                    id={tweet.id}
                    displayName={tweet.displayName}
                    image={tweet.image ? tweet.image : ''}
                    username={tweet.username}
                    picture={tweet.avatar}
                    content={tweet.content}
                    comments={tweet.comments}
                    likes={tweet.likes}
                    retweets={tweet.retweets}
                    date={tweet.createdAt.seconds * 1000}
                  />
                ))}
              </Container>
            ) : (
              <>
                {loading ? (
                  <Container>
                    <div
                      style={{
                        marginTop: '50%',
                      }}
                    >
                      <Spinner width="2rem" />
                    </div>
                  </Container>
                ) : (
                  <Container>
                    <ConnectionLost />
                  </Container>
                )}
              </>
            )}
            <NewIcon />
          </>
        ) : null}
      </Layout>
    </>
  )
}

export default Index

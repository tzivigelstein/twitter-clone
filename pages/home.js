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

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <Layout>
        {user ? (
          <>
            {tweets ? (
              <Container>
                {tweets.map(tweet => (
                  <Tweet
                    key={tweet.id}
                    id={tweet.id}
                    user={tweet.displayName}
                    image={tweet.image ? tweet.image : ''}
                    // username={tweet.username}
                    picture={tweet.avatar}
                    content={tweet.content}
                    comments={tweet.comments.length}
                    likes={tweet.likes.length}
                    retweets={tweet.retweets.length}
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

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
import { getTweetData } from 'helpers'

export default function Home() {
  const { loading, error, listenLatestTweets } = useContext(appContext)

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
                  <Tweet key={tweet.id} tweet={getTweetData(tweet, user)} />
                ))}
              </Container>
            ) : (
              <>
                {loading ||
                  (!error && (
                    <Container>
                      <div
                        style={{
                          marginTop: '50%',
                        }}
                      >
                        <Spinner width="2rem" />
                      </div>
                    </Container>
                  ))}
                {error && (
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

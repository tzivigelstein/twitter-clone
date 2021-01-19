import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import Tweet from '../components/Tweet'
import { Container } from '../components/Globals'
import { NewIcon } from '../components/Icons'
import ConnectionLost from '../components/ConnectionLost'
import appContext from '../context/app/appContext'
import Spinner from '../components/Spinner/Spinner'
import { onAuthStateChanged } from '../firebase/client'
import authContext from '../context/auth/authContext'

const Index = () => {
  const { tweets, getTweets, loading } = useContext(appContext)
  const { user, setUser } = useContext(authContext)

  useEffect(() => {
    onAuthStateChanged(user => setUser(user))
    getTweets()
  }, [])
  return (
    <>
      {user ? (
        <Layout>
          <div>
            <Container>
              {tweets ? (
                <>
                  {tweets.map(tweet => (
                    <Tweet
                      key={tweet.id}
                      user={tweet.user}
                      username={tweet.username}
                      picture={tweet.picture}
                      content={tweet.content}
                      comments={tweet.comments}
                      likes={tweet.likes}
                      retweets={tweet.retweets}
                      date={tweet.date}
                    />
                  ))}
                </>
              ) : (
                <>
                  {loading ? (
                    <Container>
                      <Spinner />
                    </Container>
                  ) : (
                    <Container>
                      <ConnectionLost />
                    </Container>
                  )}
                </>
              )}
            </Container>
          </div>
          <NewIcon />
        </Layout>
      ) : null}
    </>
  )
}

export default Index
